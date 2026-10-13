import { defaultLocale, locales, localizedPath } from "../i18n.ts";

const canonicalHost = "synch.run";

// Legal documents are shared in English. Use the same aliases in Astro and the Worker.
export const pageRedirects: Record<string, string> = Object.fromEntries(
	locales.filter((locale) => locale !== defaultLocale).flatMap((locale) =>
		["/terms/", "/privacy/"].map((path) => [localizedPath(locale, path), path]),
	),
);

export function canonicalRedirectUrl(url: URL): URL | null {
	const nextUrl = new URL(url);
	let changed = false;

	if (nextUrl.hostname === `www.${canonicalHost}`) {
		nextUrl.hostname = canonicalHost;
		changed = true;
	}

	if (nextUrl.hostname === canonicalHost && nextUrl.protocol !== "https:") {
		nextUrl.protocol = "https:";
		changed = true;
	}

	if (shouldHaveTrailingSlash(nextUrl.pathname) && !nextUrl.pathname.endsWith("/")) {
		nextUrl.pathname = `${nextUrl.pathname}/`;
		changed = true;
	}

	const pageTarget = pageRedirects[nextUrl.pathname];
	if (pageTarget) {
		nextUrl.pathname = pageTarget;
		changed = true;
	}

	return changed ? nextUrl : null;
}

function shouldHaveTrailingSlash(pathname: string): boolean {
	// Match Astro's reserved paths, including build RPCs and image endpoints.
	if (pathname === "/" || /^\/(?:_|@|\.)/.test(pathname)) {
		return false;
	}

	const lastSegment = pathname.split("/").at(-1) ?? "";
	return !lastSegment.includes(".");
}

