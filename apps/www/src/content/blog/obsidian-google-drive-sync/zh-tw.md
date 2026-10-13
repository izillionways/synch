---
title: "Obsidian 如何用 Google Drive 同步？電腦、Android 與 iPhone 設定指南"
description: "比較 Obsidian 使用 Google Drive 同步的方法：電腦資料夾、Android 同步應用程式及 iPhone 外掛，並了解備份與避免衝突的做法。"
pubDate: 2026-10-01
draft: false
---

想用 **Google Drive 同步 Obsidian 筆記**，先確認你要在哪些裝置上使用。Windows 和 Mac 可以開啟 Google Drive 電腦版管理的本機 vault 資料夾；Android 還需要工具把檔案同步到手機的本機資料夾；iPhone 則無法只靠 Google Drive 應用程式，把雲端資料夾直接當成 Obsidian vault。

你也可以從 Obsidian 社群外掛連接 Google Drive。這和同步電腦上的 Drive 資料夾是**不同做法**。選定其中一種來管理使用中的 vault，別讓兩套工具同時修改同一批檔案。

## Google Drive 能直接同步 Obsidian 嗎？

Obsidian 的 vault 是裝置上的檔案資料夾。Google Drive 能把檔案送到其他裝置，但不等於 Obsidian 內建的同步服務。[Obsidian 官方指南](https://obsidian.md/help/sync-notes)將 Google Drive 列為 Windows、Mac 和 Android 可考慮的第三方方式，同時說明 iOS 的 Google Drive vault 同步不在官方支援範圍內。

| 方式 | 適用裝置 | 額外需要 |
| --- | --- | --- |
| Google Drive 電腦版資料夾 | Windows、Mac | 將 vault 檔案設為離線可用 |
| Drive 加 Android 資料夾同步 App | 電腦、Android | 把 Drive 檔案同步到 Android 本機 vault 的 App |
| Obsidian 的 Google Drive 外掛 | 電腦、Android、iPhone | 安裝外掛、授權帳號並完成首次同步 |

在手機的 Google Drive App 裡**看得到檔案**，和 Obsidian **能開啟並雙向更新筆記**是兩回事。設定前要確認檔案最後如何進入手機上的本機 vault。

## 變更同步方式前先備份

若已有 vault，先等現有同步服務完成上傳與下載，再把整個 vault 複製到同步資料夾以外的位置。附件和 `.obsidian` 設定資料夾也要一起複製。打開備份，抽查最近的筆記與圖片是否齊全。

如果兩台裝置先前各自修改過筆記，請先比較內容，不要直接認定其中一份一定是最新版。選出最完整的工作副本，再開始新的同步；首次雙向測試完成前，保留原本的備份。[Obsidian 的備份說明](https://obsidian.md/help/backup)也提醒，誤刪會跟著同步，因此同步不能取代備份。

正在用 iCloud、OneDrive、Obsidian Sync 或其他外掛同步同一個 vault？先準備獨立的工作副本，不要直接疊加 Google Drive。[Obsidian 不建議同時用多個服務同步一個 vault](https://obsidian.md/help/sync-notes)。

![與雲端同步分開保存的 Obsidian vault 備份副本](./vault-backup-before-drive-sync.webp)

## 方法一：在 Windows 或 Mac 使用 Drive 資料夾

如果只需要在電腦之間切換，可以從 Google Drive 電腦版開始：

1. 在兩台電腦安裝 Google Drive 電腦版並登入。
2. 在 Drive 中建立 vault 資料夾，或移入已備份的 vault。
3. 將 vault 檔案設為**離線可用**，讓 Obsidian 讀取裝置上實際存在的檔案。
4. 在第一台電腦的 Obsidian 開啟該資料夾。
5. 等 Drive 完成同步，再到第二台電腦開啟 vault。
6. 建立測試筆記，確認另一台電腦收到的不只有檔名，還有完整內容。

這是根據 [Obsidian 的 Google Drive 設定說明](https://obsidian.md/help/sync-notes)整理的流程。換電腦編輯前，先確認前一台已上傳、下一台已下載。若同時修改同一篇筆記，可能產生衝突。

### Android 怎麼辦？

Android 版 Obsidian 需要**手機上的本機 vault 資料夾**。登入 Google Drive App 不會自動讓該資料夾雙向同步。你可以使用第三方資料夾同步 App，將 Drive 上的 vault 與 Android 的本機資料夾連接起來。

先用小型測試 vault 確認兩個方向：電腦修改能否到 Android，Android 修改能否回到電腦。也要先弄清楚 App 如何處理刪除和同時編輯。其他選擇可參考[Windows 與 Android 同步指南](/zh-tw/blog/how-to-sync-obsidian-windows-android/)。

### iPhone 或 iPad 呢？

就算在 Google Drive 或「檔案」App 中看得到 vault，iOS 版 Obsidian 也不能因此把它當成受官方支援的同步 vault。[Obsidian 官方說明](https://obsidian.md/help/sync-notes)指出，Google Drive 在 iOS 上同步 Obsidian vault 並不受官方支援。如果要加入 iPhone，請選擇明確支援 iOS 的 Obsidian 外掛，或改用能跨裝置運作的同步方法。[Windows 與 iPhone 指南](/zh-tw/blog/how-to-sync-obsidian-windows-iphone/)也有更具體的比較。

## 方法二：從 Obsidian 外掛連接 Google Drive

社群的 [Google Drive Sync 外掛](https://community.obsidian.md/plugins/google-drive-sync)從 Obsidian 內連接 Google Drive。外掛頁面列出桌面與行動版支援，也包含 iOS 版 Obsidian。這套流程不依賴 Google Drive 電腦版來管理同一個 vault。

![電腦和手機上的 Obsidian vault 透過外掛與雲端資料夾同步](./obsidian-google-drive-plugin-sync.webp)

設定時需要授權 Google 帳號，並將取得的重新整理權杖填入外掛設定。依照外掛文件，開啟 vault 後會從 Drive 取得變更；本機修改則需要手動推送，或開啟自動推送。切換裝置前應等同步結束，避免在兩端同時修改同一篇筆記。

**不要讓這個外掛與 Google Drive 電腦版或其他 Drive 同步工具共同管理同一個 vault。** [外掛作者提醒](https://community.obsidian.md/plugins/google-drive-sync)，透過其他方式加入的檔案可能無法正確追蹤，甚至造成資料遺失。移轉既有 vault 前，先閱讀外掛的新裝置與移轉說明；兩份都有內容的 vault 不一定能安全自動合併。

實際操作時，先備份，再於第一台裝置安裝外掛、完成授權和首次上傳。第二台裝置依照外掛說明連接，等首次下載結束後再編輯。最後分別從兩台裝置建立測試筆記，並確認附件也有到齊。授權權杖及外掛使用的中介服務如何運作，可先看[外掛說明](https://community.obsidian.md/plugins/google-drive-sync)。

**Remotely Save** 也能連接 Google Drive，但[這項功能屬於付費 PRO 功能](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md)。若你已在使用該外掛，可以再看我們的 [Remotely Save 指南](/zh-tw/blog/obsidian-remotely-save/)比較設定與取捨。

## 常見問題

**電腦有筆記，手機卻沒有。** 先確認手機上的 Obsidian 開啟哪一個本機 vault。Drive App 顯示檔案，不代表 Obsidian 已完成同步。使用 Android 資料夾同步 App 時，檢查目標資料夾；使用外掛時，檢查首次下載和上傳狀態。

**出現重複或衝突檔案。** 暫停在兩端編輯，對照各裝置的本機檔案與獨立備份。可能是上傳未完成就切換裝置，也可能是兩套工具同時處理一個 vault。可依照[同步衝突指南](/zh-tw/blog/obsidian-sync-conflicts/)逐步檢查。

**放進 Google Drive 就有端對端加密嗎？** 單純把 vault 資料夾放進 Drive，不會替 vault 增加端對端加密。若這是必要條件，請確認所用外掛或服務在哪個階段、以什麼方式加密檔案。

## 選擇日常能安心使用的方式

主要在電腦上寫筆記、原本就使用 Google Drive 的話，桌面資料夾方式可能已足夠。加入手機後，額外 App 或外掛的設定、首次同步和衝突處理也要一併考量。任何方式都應保留獨立備份，並完成雙向測試。

如果你只想**在電腦與手機使用同一個私密 vault**，不想管理 Drive 資料夾或手機資料夾同步 App，也可以看看 [Synch](https://synch.run/zh-tw/)。它透過 Obsidian 的 Synchrun 社群外掛同步，vault 資料會先在裝置上加密，再上傳。小型 vault 可以先確認目前限制，再從[免費方案](https://synch.run/zh-tw/pricing)開始。
