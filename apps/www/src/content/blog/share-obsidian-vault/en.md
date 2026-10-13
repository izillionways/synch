---
title: "How to Share an Obsidian Vault: 4 Ways to Collaborate"
description: "Share an Obsidian vault with others using Obsidian Sync, Synch, Git, or a cloud folder. Compare subscription models and follow step-by-step setup instructions."
pubDate: 2026-09-28
draft: false
---

To **share an Obsidian vault with others**, use Obsidian Sync, Synch, a private Git repository, or a shared cloud folder. Each person opens a local copy in Obsidian, and your chosen method transfers changes between those copies. Sending someone the vault folder gives them a one-time copy; it does not keep your notes synchronized.

For a study group, shared research library, or team knowledge base, start by choosing how members will join and which devices they use. This guide covers four ways to collaborate, with setup steps for Obsidian Sync and Synch and a comparison of storage, encrypted access, and version history.

![Three laptops connected to a shared collection of linked notes, representing local copies of an Obsidian vault.](./shared-vault-collaboration.webp)

## Which Obsidian sharing method should you use?

| Method | A good fit when… | Main requirement or limitation |
|---|---|---|
| **Obsidian Sync** | You want the official integration or everyone already subscribes | Each collaborator needs a Sync subscription |
| **Synch Plus** | Two or three people want one group subscription | Members join an organization and complete encrypted access approval |
| **Private Git repository** | Everyone is comfortable with version control | Collaborators manage commits, pulls, pushes, and merge conflicts |
| **Shared cloud folder** | Your storage provider supports shared local folders on everyone's devices | Mobile access and conflict handling vary by provider |

If you only need to **share Obsidian notes for reading**, send a Markdown file or export a PDF.

**Sharing a vault is different from live collaborative editing.** Sync transfers saved changes between local copies; it does not necessarily show another person's cursor or each keystroke. Coordinate edits when working on the same note.

## How to share an Obsidian vault with others

Back up the vault first, then choose one method below. For a new group, a dedicated vault keeps personal notes separate from the material everyone can access.

### 1. Share a vault with Obsidian Sync

Start with a local vault connected to an Obsidian Sync remote vault. Each collaborator needs an active Sync subscription.

To invite someone:

1. Open **Settings → Sync**.
2. Select **Manage** beside **Remote vault**.
3. Find the vault and select **Manage sharing**.
4. Enter their email address under **Invite user**.
5. Select **Add**.

The recipient then connects a local vault to the shared remote vault. For end-to-end encrypted vaults, give them the encryption password through a trusted channel. See the [official shared vault instructions](https://obsidian.md/help/sync/collaborate).

Collaborators can edit vault contents; only the owner can invite more people. Obsidian Sync does not offer granular permissions or live co-editing.

### 2. Share a vault with Synch

With your vault connected to Synch and the organization on Plus:

1. **Invite your collaborator.** Open **Vault sharing → Manage organizations** and send an email invitation.
2. **Have them request access.** After accepting, they open an empty Obsidian vault, sign in to Synch, and select your vault under **Connect vault → Shared with you**.
3. **Approve and connect.** Verify their full access code through a separate trusted channel and approve it in **Vault sharing**. They finish on the requesting device by setting their own vault password and connecting.

Approval includes access to retained history. Invited members need Synch accounts, but no separate paid plan.

### 3. Share an Obsidian vault with Git

A private Git repository suits groups that already use version control. A typical workflow is:

1. Create a private repository and add only the vault content you want to share. Review attachments, configuration files, and any existing Git history before uploading.
2. Invite collaborators to the repository.
3. Have each person clone it and open the local folder as a vault in Obsidian.
4. Pull the latest changes before editing, then commit and push your work. Resolve conflicts before continuing.

The [Obsidian Git plugin](https://github.com/Vinzent03/obsidian-git/blob/master/docs/Start%20here.md) brings Git operations into Obsidian. A private repository restricts access, but does not itself provide end-to-end encryption. Our [Obsidian Git sync guide](/blog/obsidian-git-sync/) explains the workflow and its tradeoffs for people new to Git.

### 4. Share a vault through a cloud folder

A shared cloud folder can work when the provider makes the same files available locally to every collaborator:

1. Create a dedicated vault folder in your cloud storage and give collaborators editing access.
2. Have everyone sync the folder to their device and keep its files downloaded.
3. Open the local folder as a vault in Obsidian.
4. Test changes to a note and an attachment in both directions before adding more material.

Check mobile support first. A shared folder that works on two laptops may not be accessible to Obsidian on a phone. [Obsidian's sync methods guide](https://obsidian.md/help/sync-notes) explains platform limitations. Use one sync service for this vault to avoid competing updates.

![Cloud storage, Git version history, and a shared folder as ways to share Obsidian notes.](./vault-sharing-methods.webp)

## Obsidian Sync Plus vs. Synch Plus for shared vaults

Obsidian Sync is the official service built into Obsidian. Synch connects through a community plugin and offers organization-based sharing on its Plus plan. Both support end-to-end encrypted vault content. Obsidian Sync Plus is the closer feature comparison for Synch Plus: both include a year of version history and support larger attachments than Obsidian Standard. Their storage allowances and subscription models still differ.

| Feature | Obsidian Sync Plus | Synch Plus |
|---|---|---|
| **Subscription model** | Each collaborator needs an active Sync subscription | **One subscription includes up to 3 members, including the owner** |
| **End-to-end encryption** | Available for encrypted vaults | Included for vault content |
| **Vault password setup** | Collaborators enter the vault's encryption password | **Each member sets their own vault password after approval** |
| **How people join** | Owner invites them through Sync settings | Organization invitation followed by encrypted access approval |
| **Version history** | 12 months | 1 year |
| **Included storage** | 10 GB total across all vaults in one account | **5 GB per vault; 15 GB total across 3 vaults** |
| **Maximum file size** | 200 MB | 100 MB |
| **Synced vaults** | 10 per account | 3 per organization |

See the [Obsidian shared vault guide](https://obsidian.md/help/sync/collaborate), [Obsidian Sync plans](https://obsidian.md/sync), and [Synch pricing](https://synch.run/pricing) for requirements and current limits.

### Encrypted access: a shared password or individual passwords

With Synch, **you can invite someone without sending them your vault password**. The administrator approves access using the collaborator's verification code, so the group does not need to distribute a shared password.

![Three individual member credentials connected to a locked shared folder, illustrating encrypted access with personal passwords.](./individual-vault-passwords.webp)

## Set up your shared vault for everyday use

A few agreements help whichever method you choose.

**Separate personal notes from shared material.** A dedicated collaboration vault makes it clear what belongs to the group. Include only material you intend others to access, and consider whether retained history contains anything private.

**Keep the structure simple.** A starting note, a project folder, meeting notes, and reference material are often enough. Explain where new notes belong so people can contribute without reorganizing the whole vault.

**Coordinate busy notes.** Choose one note-taker during meetings or assign sections of a longer document. Let sync finish before handing work to someone else. See our guide to [preventing Obsidian sync conflicts](/blog/obsidian-sync-conflicts/) for a practical editing routine.

**Review settings separately from content.** Themes, shortcuts, and workspace preferences may be personal even when notes are shared. Check how your method handles the `.obsidian` configuration folder.

**Use one sync method for the vault and keep separate backups.** Obsidian advises against mixing sync services on the same vault because they can cause conflicts. Its [sync guide](https://obsidian.md/help/sync-notes) explains the relevant precautions.

## Obsidian vault sharing FAQ

### Can I share an Obsidian vault for free?

Git or an existing shared storage plan may let you collaborate without a dedicated sync subscription. Check hosting limits, device compatibility, and the setup each person will need. Free software can still require ongoing maintenance.

### Can I just send someone my vault folder?

Yes, if they need a copy at a particular moment. Include the attachments your notes depend on and remove private material first. Later edits will not move between the two copies unless you set up synchronization or another collaboration workflow.

### Can I share an Obsidian vault without Obsidian Sync?

Yes. You can use Synch, Git, or a compatible shared cloud folder without paying for Obsidian Sync. If you choose the official shared vault service, every collaborator needs an active Obsidian Sync subscription.

### Can I share only one folder from my Obsidian vault?

For shared editing, create a separate vault containing the notes and attachments the group needs. Check links after copying them: a link to a note left in your personal vault will not give collaborators access to that note.

### Do I have to share my encryption password?

It depends on the service. Official Obsidian Sync uses the vault encryption password when collaborators connect to an encrypted vault. With Synch, each collaborator sets their own vault password after encrypted access is approved.

### Can two people edit the same note at once?

They can edit their local copies, but overlapping changes may create conflicts. The sharing methods covered here should not be assumed to provide live co-editing. If simultaneous writing is central to your workflow, evaluate tools that explicitly support it.

### What happens when someone leaves?

Remove their access through the service you use. Revoking access does not erase files they have already downloaded, so share only material you are comfortable giving them a copy of.

## Which service fits your group?

Obsidian Sync is a natural choice if everyone already subscribes or you prefer the official integration.

For two or three people setting up shared notes together, choose [Synch Plus](/pricing/) when you want one person to manage the plan and invite the others.

Try your chosen method with a few linked notes and an attachment first. Have everyone connect, make changes, and check the results on the devices they actually use before moving your shared project into it.
