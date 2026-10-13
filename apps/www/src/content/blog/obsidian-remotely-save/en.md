---
title: "Remotely Save for Obsidian: Setup Guide and Troubleshooting"
description: "Set up Remotely Save with Dropbox, connect a second device, enable encryption, and fix missing notes. Compare free storage connectors with PRO features."
pubDate: 2026-05-11
updatedDate: 2026-10-03
---

**Remotely Save syncs an Obsidian vault through cloud storage you choose.** Install the plugin on each device, connect both to the same storage account and remote vault, then sync before switching devices. It works inside Obsidian on desktop and mobile.

This guide walks through a new Dropbox setup, including a second device and a two-way sync check. If you already use another provider, start with the [storage comparison](#which-storage-providers-are-free). If notes are missing, go to [troubleshooting](#remotely-save-not-syncing-check-these-first).

Remotely Save is a community plugin, separate from the official Obsidian Sync service. You supply the storage and manage its access, capacity, and recovery options.

## Which Storage Providers Are Free?

The plugin has free connectors and paid PRO features. A free connector does not make the underlying storage free: check your provider's capacity and usage charges separately.

| Storage provider | Plugin tier | What to check before choosing |
| --- | --- | --- |
| Dropbox | Free connector | Available storage and the account you will use on every device |
| S3-compatible storage | Free connector | Bucket, endpoint, credentials, and storage or API charges |
| WebDAV | Free connector | Your server's URL, authentication, and compatibility |
| OneDrive personal, App Folder | Free connector | Uses the app's folder rather than arbitrary existing folders |
| OneDrive personal, Full | PRO | Needed for access beyond the App Folder |
| Google Drive | PRO | Requires the Google Drive feature and its authorization flow |
| Box, pCloud, Yandex Disk, Koofr, Azure Blob | PRO connectors | Confirm the connector and your provider's own limits |

Check the project's [supported services list](https://github.com/remotely-save/remotely-save/blob/master/docs/services_connectable_or_not.md) before committing to a backend. For other approaches, see our [free Obsidian sync comparison](/blog/free-obsidian-sync/).

## How to Set Up Remotely Save With Dropbox

Use this walkthrough for a **new sync setup**. If two devices already contain different versions of an important vault, preserve both copies before connecting them. Do not use the initial sync to decide which copy to keep.

### 1. Prepare a Local Vault and Backup

Start on the device with the complete vault. Copy the vault to a backup location outside the folder you will sync, and check that the copy opens correctly.

Use one sync method for the working vault. In particular, do not place it inside a Dropbox desktop sync folder while also syncing it with Remotely Save. The plugin connects to Dropbox itself.

For a first trial, create a small vault with a distinctive name such as `Notes-Sync-Test`. Add a note called `Sync check` containing a sentence you will recognize on your phone. Use a name that does not already identify another remote vault in that Dropbox account.

### 2. Install and Enable the Plugin

In Obsidian, open **Settings → Community plugins**, enable community plugins if prompted, and choose **Browse**. Search for **Remotely Save**, install it, and enable it. Open its settings before starting a sync.

The screenshots below show an older Obsidian interface. Labels and layout may differ in your installed version.

### 3. Authorize Dropbox

In Remotely Save settings, select **Dropbox** as the service and start **Auth**. Follow the authorization link in your browser, check that you are signed into the intended Dropbox account, and approve the connection. Allow the browser to return to Obsidian, then confirm that the plugin shows the authorized state.

![Remotely Save settings with Dropbox selected and the Auth button highlighted](./dropbox-choose-service.webp)

*Choose Dropbox, then click Auth.*

The documented Dropbox integration stores files under `/Apps/remotely-save`. With default settings, the vault name identifies the remote vault, so use the same vault name on your other devices. See the project's [Dropbox notes](https://github.com/remotely-save/remotely-save#dropbox) for access details.

![Remotely Save showing a connected Dropbox account and the Revoke Auth button](./dropbox-connected.webp)

*In this interface, Auth changes to Revoke Auth after connecting. Your account is connected; run a sync next to transfer your notes.*

### 4. Set Encryption Before the First Upload

If you want end-to-end encryption, configure it before uploading the vault. Save the password in a password manager and record the encryption format you selected. Every device must use matching encryption settings.

The project documents [Rclone Crypt and OpenSSL encryption formats](https://github.com/remotely-save/remotely-save/blob/master/docs/encryption/README.md). Encryption is optional; connecting a storage account alone does not enable it. The Dropbox documentation also notes that the vault name remains visible.

Do not change the password or format on an established remote vault as a troubleshooting experiment. Preserve a readable local copy and consult the encryption documentation before changing an existing setup.

### 5. Run the First Sync Manually

Use Remotely Save's sync icon in the ribbon or its command in Obsidian's command palette. Keep Obsidian open until the operation finishes, and resolve any reported error before adding another device.

![The Remotely Save ribbon icon highlighted beside sync progress notifications in Obsidian](./dropbox-run-sync.webp)

*Click the highlighted sync button and wait for completion before switching devices.*

For this trial, leave scheduled sync off so you control when changes move. Review file-size exclusions and path exclusions, too: a successful run does not prove that every attachment was included.

### 6. Connect a Second Device

On your phone or second computer:

1. Create a new, empty local vault with the same name as the first vault. On iPhone or iPad, leave **Store in iCloud** off for this setup.
2. Install and enable Remotely Save in that vault.
3. Select Dropbox and authorize the same Dropbox account.
4. Match the first device's encryption format and password, if enabled. If you customized the remote location, match that as well.
5. Run a manual sync and keep Obsidian open until it finishes.
6. Open `Sync check` and confirm that the sentence from the first device is present.

An empty local vault is useful here because it avoids starting with two independently edited copies. It does not replace the backup you made on the first device.

### 7. Verify Changes in Both Directions

Add a second sentence to `Sync check` on the second device and sync it. Then sync the first device and confirm the sentence arrives. Repeat with a small attachment if you use attachments regularly.

Only after this check should you enable scheduled sync or start using the vault across devices. Before editing on another device, sync the device you are leaving, then sync the device you are opening.

## Remotely Save on iPhone and Android

The plugin supports Obsidian mobile, but plan to sync while **Obsidian is open**. A scheduled sync setting is not a guarantee that work continues after the operating system suspends the app.

For the initial download, keep the app in the foreground and allow time for attachments. If a run is interrupted, reopen Obsidian, read any error, and confirm the files have arrived before editing.

The project's [limitations](https://github.com/remotely-save/remotely-save#limitations) call out mobile performance issues with large files, including files of 50 MB or more. Check the large-file exclusion setting if text notes sync but PDFs or recordings do not.

For a comparison of other ways to connect these devices, see [syncing Obsidian between iPhone and Android](/blog/obsidian-iphone-android-sync/).

## Remotely Save Not Syncing? Check These First

Start with one small test note and run sync manually on each device, in sequence. Note which device fails and the exact error. This helps distinguish an upload problem from a download or file-selection problem.

| Symptom | What to check | Next action |
| --- | --- | --- |
| Authorization does not complete | Browser account and return to Obsidian | Retry the provider's authorization flow and confirm the connected state before syncing |
| Sync completes, but the other device is empty | Account, vault name, and any custom remote location | Compare settings on both devices; check that the first device uploaded successfully |
| Encrypted files cannot be read | Password and encryption format | Match the original settings; preserve your readable local copy before making changes |
| Notes arrive, but attachments do not | File-size limits and excluded paths | Compare one missing file with the exclusion settings and any reported error |
| Phone only catches up when Obsidian opens | App suspension and sync timing | Keep Obsidian open for a manual sync before and after editing |
| A WebDAV or S3 connection fails | Endpoint, credentials, permissions, and error message | Follow the provider-specific guide rather than reusing another provider's URL or settings |
| Duplicate notes or missing edits appear | Concurrent edits and other sync tools | Stop editing on other devices and preserve all versions before merging |

Do not delete the remote vault, reinstall the plugin, or remove a device's only complete copy just to see whether the problem goes away. If files have disappeared, preserve the remaining local copies first, then check backups and available recovery history. Our [sync conflict and missing-note guide](/blog/obsidian-sync-conflicts/) explains the common causes and recovery considerations.

### Google Drive Files Are Not Appearing

Google Drive is a **PRO connector**. After enabling the feature, follow its authorization flow inside Remotely Save.

There is also an important access restriction: the plugin's [Google Drive guide](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md) says it can access files and folders it creates. Manually uploading a vault through the Google Drive website does not make those files available to the plugin. Start with the backed-up local vault in Obsidian and let the plugin perform the upload.

See our [Google Drive sync guide](/blog/obsidian-google-drive-sync/) if you are choosing between plugin-based sync and a desktop Drive folder.

### OneDrive Account or Empty-File Errors

The documented free connector targets **OneDrive personal, App Folder**. A work or school account is not interchangeable with that setup. Full personal OneDrive access is a separate PRO feature.

The [OneDrive guide](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/onedrive/README.md) also notes that its API does not allow uploading empty files. If an empty Markdown note triggers an error, review the plugin's empty-file handling option or add the intended note content before retrying.

## Encryption, Conflicts, and Backups

Keep Remotely Save's `data.json` private: it can contain sensitive settings. Do not include it in a public Git repository, support screenshot, or issue attachment. When reporting an error, remove tokens, credentials, and private note content.

The free version includes basic conflict handling, while advanced smart conflict handling is a PRO feature. Neither removes the need to check both versions when two devices have edited the same note. Save copies of both before resolving a conflict, and verify the merged result on the other device before resuming work.

Keep a backup outside the sync target. Sync can propagate deletions and unwanted edits; recovery depends on the backups and history actually available in your setup.

## When to Choose an Alternative

Remotely Save is a good fit if you want to keep using a particular storage provider and are comfortable managing its settings. Once your two-device test works, there is no need to switch just because another service exists.

If maintaining the storage connection is the part you want to avoid, consider a hosted service:

| Option | Best fit | Responsibility to consider |
| --- | --- | --- |
| Remotely Save | You want your own Dropbox, WebDAV, S3, or other supported storage | Provider setup, credentials, exclusions, and recovery |
| Obsidian Sync | You want the official integrated service | A paid subscription and selecting the settings you want synced |
| Synch | You want a hosted, open-source, end-to-end encrypted alternative | Choosing a plan that fits your vault and attachment sizes |

[Synch](/) supplies the hosted sync layer, so you do not need to connect a separate storage account. For device-to-device sync, self-hosting, and Git workflows, see the broader [Obsidian Sync alternatives comparison](/blog/obsidian-sync-alternatives/).

Screenshots: [Remotely Save’s Dropbox guide, steps 10, 12, and 13](https://github.com/remotely-save/remotely-save/blob/master/docs/dropbox_review_material/README.md#steps).
