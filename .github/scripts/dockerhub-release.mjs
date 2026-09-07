import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync, readFileSync } from 'node:fs';

const stateFile = '.github/dockerhub-published.json';

function plan(release, sha, image, previous, force = false) {
  assert(!release.draft && !release.prerelease, 'Only stable published releases are supported');
  assert(/^[A-Za-z0-9_][A-Za-z0-9_.-]{0,127}$/.test(release.tag_name)
    && release.tag_name !== 'latest', 'Release tag must be a valid versioned Docker tag');
  assert(/^[a-f0-9]{40}$/.test(sha), 'Invalid release commit SHA');
  assert(/^[a-z0-9]+(?:[._-][a-z0-9]+)*\/[a-z0-9]+(?:[._-][a-z0-9]+)*$/.test(image),
    'Set DOCKERHUB_USERNAME or DOCKERHUB_IMAGE (namespace/repository)');
  const current = { tag: release.tag_name, sha, image };
  return { ...current, changed: force || Object.keys(current).some(key => current[key] !== previous[key]) };
}

if (process.argv.includes('--test')) {
  const release = { tag_name: '0.4.6', draft: false, prerelease: false };
  const sha = 'a'.repeat(40);
  const previous = plan(release, sha, 'example/synch', {});
  assert.equal(previous.changed, true);
  assert.equal(plan(release, sha, 'example/synch', previous).changed, false);
  assert.equal(plan({ ...release, tag_name: '0.4.7' }, sha, 'example/synch', previous).changed, true);
  assert.equal(plan(release, 'b'.repeat(40), 'example/synch', previous).changed, true);
  assert.equal(plan(release, sha, 'other/synch', previous).changed, true);
  assert.equal(plan(release, sha, 'example/synch', previous, true).changed, true);
  for (const tag_name of ['bad\ntag', '../main', 'latest', 'v'.repeat(129)]) {
    assert.throws(() => plan({ ...release, tag_name }, sha, 'example/synch', {}));
  }
  assert.throws(() => plan({ ...release, prerelease: true }, sha, 'example/synch', {}));
  assert.throws(() => plan({ ...release, draft: true }, sha, 'example/synch', {}));
  assert.throws(() => plan(release, 'main', 'example/synch', {}));
  assert.throws(() => plan(release, sha, 'Example/synch\ninjected=true', {}));
  console.log('Release detection checks passed');
} else {
  const api = endpoint => JSON.parse(execFileSync('gh', ['api', endpoint], { encoding: 'utf8' }));
  const release = api('repos/hjinco/synch/releases/latest');
  const { sha } = api(`repos/hjinco/synch/commits/${encodeURIComponent(release.tag_name)}`);
  const publish = process.env.PUBLISH !== 'false';
  const image = process.env.DOCKERHUB_IMAGE || (process.env.DOCKERHUB_USERNAME
    ? `${process.env.DOCKERHUB_USERNAME}/synch` : (publish ? '' : 'local/synch'));
  const previous = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : {};
  const result = plan(release, sha, image, previous, process.env.FORCE === 'true' || !publish);
  appendFileSync(process.env.GITHUB_OUTPUT,
    Object.entries({ ...result, publish }).map(([key, value]) => `${key}=${value}\n`).join(''));
  console.log(JSON.stringify(result));
}
