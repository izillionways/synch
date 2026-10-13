---
title: "Obsidian Remotely Save：設定、優缺點與替代方案"
description: "跟著實際設定畫面，用 Remotely Save 和 Dropbox 同步 Obsidian。從帳號授權、加密到手機連線，也整理了免費與 PRO 的差別，以及筆記、附件無法同步的排查方式。"
pubDate: 2026-05-11
updatedDate: 2026-10-03
---

**Remotely Save 能透過你選擇的雲端儲存服務，同步 Obsidian 儲存庫。** 在電腦和手機各自裝好外掛，連上相同帳號與遠端儲存庫，就能接續使用筆記。換裝置編輯前，記得先讓兩邊完成同步。

這篇以 Dropbox 為例，帶你從第一次連線做到第二台裝置下載筆記，最後再確認修改能傳回原本的電腦。如果已經設定過，只是筆記一直沒出現，可以往下看「同步不順時，先檢查哪裡？」。

Remotely Save 是社群外掛，與官方 Obsidian Sync 是不同的服務。儲存空間、存取權限和資料復原方式，都需要自己安排。

## 哪些雲端服務可以免費連接？

外掛提供免費的連接功能，也有付費的 PRO 功能。這裡的「免費」指的是外掛功能；雲端服務仍可能收取容量、傳輸或 API 使用費。

| 雲端服務 | 外掛功能 | 選擇前先確認 |
| --- | --- | --- |
| Dropbox | 免費 | 剩餘空間，以及各裝置要用的帳號 |
| S3 相容儲存服務 | 免費 | 儲存桶、端點、金鑰、儲存與 API 費用 |
| WebDAV | 免費 | 伺服器網址、驗證方式、相容性 |
| 個人版 OneDrive，App Folder | 免費 | 使用應用程式專用資料夾，不是任意既有資料夾 |
| 個人版 OneDrive，Full | PRO | 存取應用程式資料夾以外的位置時需要 |
| Google Drive | PRO | 須啟用對應功能並完成授權 |
| Box、pCloud、Yandex Disk、Koofr、Azure Blob | PRO | 連接功能與服務本身的使用限制 |

決定之前，先核對專案的[支援服務清單](https://github.com/remotely-save/remotely-save/blob/master/docs/services_connectable_or_not.md)。如果還沒選定做法，也可以參考[免費同步 Obsidian 的方案比較](/zh-tw/blog/free-obsidian-sync/)。

## 用 Dropbox 開始同步

以下步驟適用於**第一次建立同步設定**。若兩台裝置已經各自修改過同一份儲存庫，請先把兩邊都備份下來，不要交給第一次同步決定留下哪一份。

### 1. 先留備份，再做小規模測試

從筆記最完整的那台裝置開始。把整個儲存庫複製到同步範圍以外的位置，確認備份可以正常開啟。

同一個使用中的儲存庫，交給一套同步工具即可。Remotely Save 會自行連接 Dropbox，因此不要同時將儲存庫放進 Dropbox 桌面版的同步資料夾，讓兩套工具一起處理它。

第一次可以先建立一個小型測試儲存庫，例如 `Notes-Sync-Test`。名稱要與同一 Dropbox 帳號裡既有的遠端儲存庫區分開來。新增一篇「同步測試」筆記，寫一句等一下能在手機上認出的文字。

### 2. 安裝並啟用外掛

開啟 Obsidian 的**設定 → 社群外掛**，依提示允許使用社群外掛，再從外掛清單搜尋 **Remotely Save**，安裝並啟用。先進入 Remotely Save 設定，再執行同步。

下方截圖是舊版 Obsidian 的畫面，選項名稱和位置可能與目前版本不同。

### 3. 連接 Dropbox 帳號

在 Remotely Save 的 **Choose service** 選擇 **Dropbox**，按下 **Auth**。用瀏覽器開啟外掛提供的連結，確認登入的是你要使用的 Dropbox 帳號，再允許連接。回到 Obsidian 後，確認外掛已顯示連線成功。

![Remotely Save 設定中的 Dropbox 選單與 Auth 授權按鈕](./dropbox-choose-service.webp)

*選好 Dropbox，再按 Auth。*

文件說明，檔案會放在 Dropbox 的 `/Apps/remotely-save` 底下。預設是用儲存庫名稱區分同步位置，因此其他裝置也要取相同名稱。存取範圍可參考 [Dropbox 連接說明](https://github.com/remotely-save/remotely-save#dropbox)。

![Dropbox 授權完成後，畫面顯示連線狀態和 Revoke Auth 按鈕](./dropbox-connected.webp)

*這個介面在連接後會將 Auth 改成 Revoke Auth。帳號連好後，還要執行同步，筆記才會開始傳送。*

### 4. 第一次上傳前，決定是否加密

若要使用端對端加密，請在第一次上傳前設定好。把密碼存進密碼管理工具，也記下選用的加密格式。每台裝置都必須使用相同格式與密碼。

專案文件介紹了 [Rclone Crypt 與 OpenSSL 格式](https://github.com/remotely-save/remotely-save/blob/master/docs/encryption/README.md)。加密需要另外設定，不會因為連上雲端帳號就自動啟用。Dropbox 的說明也指出，儲存庫名稱本身不會加密。

已經在用的遠端儲存庫，不要為了測試問題而隨意更改加密密碼或格式。先保留可讀取的本機副本，再依加密文件處理既有設定。

### 5. 手動跑完第一次同步

點選 Obsidian 側邊工具列上的 Remotely Save 同步圖示，或從命令面板執行同步指令。完成前讓 Obsidian 保持開啟；若出現錯誤，先排除，再加入第二台裝置。

![Obsidian 畫面中標出的同步圖示，以及右側的同步進度通知](./dropbox-run-sync.webp)

*按下標示的同步按鈕，確認完成後再換裝置。*

測試期間先關閉定時同步，手動執行比較容易看出每一步的結果。也請檢查檔案大小限制和路徑排除規則：顯示同步完成，不代表被排除的附件也有傳過去。

### 6. 加入手機或另一台電腦

1. 建立一個**同名**的空白本機儲存庫。iPhone 或 iPad 上，請關閉這個儲存庫的 **Store in iCloud** 選項。
2. 在新儲存庫安裝並啟用 Remotely Save。
3. 選擇 Dropbox，授權相同帳號。
4. 若有加密，填入與第一台裝置一致的格式和密碼；若自行指定遠端位置，也要一致。
5. 手動同步，完成前保持 App 開啟。
6. 打開「同步測試」，確認第一台裝置寫的那句話已經出現。

用空白儲存庫開始，是為了避免一開始就混進兩份各自修改過的內容。第一台裝置的備份仍要保留。

### 7. 確認修改也能傳回去

在第二台裝置的「同步測試」多寫一句話，完成同步。接著回到第一台裝置執行同步，看看新文字有沒有出現。如果經常使用附件，也用一個小檔案試試看。

確認雙向傳輸都正常，再開啟定時同步，開始日常使用。之後換裝置時，先同步剛用完的那台，再同步接下來要用的那台，最後才開始編輯。

## 手機上使用，要留時間讓同步完成

Remotely Save 支援行動版 Obsidian，但建議以**開著 App 完成同步**為使用習慣。即使設了定時同步，作業系統暫停 App 之後，外掛也不一定能繼續執行。

第一次下載時，請把附件需要的時間也算進去。如果中途被打斷，重新開啟 Obsidian，檢查錯誤訊息並確認檔案到齊，再繼續編輯。

專案的[限制說明](https://github.com/remotely-save/remotely-save#limitations)提到，行動裝置處理大型檔案可能遇到效能問題，包括 50 MB 以上的檔案。筆記正常但 PDF、錄音沒出現時，可以先看大型檔案的排除設定。其他選擇可參考 [iPhone 與 Android 之間的 Obsidian 同步方式](/zh-tw/blog/obsidian-iphone-android-sync/)。

## 同步不順時，先檢查哪裡？

用一篇小型測試筆記，在兩台裝置上依序手動同步。記下是哪台失敗、顯示什麼錯誤，才能分辨問題出在上傳、下載，還是只有特定檔案被排除。

| 遇到的狀況 | 先確認 | 接下來怎麼處理 |
| --- | --- | --- |
| 授權一直無法完成 | 瀏覽器帳號、是否回到 Obsidian | 重跑授權流程，確認連線狀態 |
| 顯示完成，另一台卻還是空的 | 帳號、儲存庫名稱、自訂遠端位置 | 比較兩邊設定，確認第一台已上傳 |
| 加密檔案讀不出來 | 密碼、加密格式 | 留下可讀取的副本，再核對原設定 |
| 筆記有到，附件沒到 | 大小限制、排除路徑 | 比對缺少檔案的條件與錯誤訊息 |
| 手機要打開 App 才更新 | App 是否被暫停、同步時機 | 編輯前後開啟 App 並手動同步 |
| WebDAV 或 S3 連不上 | 網址、金鑰、權限、錯誤內容 | 按照該服務的設定文件逐項確認 |
| 筆記重複或修改內容不見 | 同時編輯、其他同步工具 | 暫停其他裝置的編輯，保留各版本後再合併 |

不要抱著試試看的心態刪除遠端儲存庫、重裝外掛，或刪掉唯一完整的本機副本。檔案不見時，先保住還在的內容，再查備份與可用的版本紀錄。[同步衝突與筆記遺失指南](/zh-tw/blog/obsidian-sync-conflicts/)也整理了常見原因和復原時的注意事項。

### Google Drive 手動上傳的檔案看不到

Google Drive 連接是 **PRO 功能**，要先啟用對應功能，再從外掛進行授權。

[Google Drive 文件](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md)也說明，外掛能存取的是自己建立的檔案與資料夾。直接從 Drive 網站上傳儲存庫，並不會讓外掛看見那些檔案。請先備份本機儲存庫，再透過 Obsidian 裡的外掛上傳。[Google Drive 同步指南](/zh-tw/blog/obsidian-google-drive-sync/)另有說明外掛與桌面同步資料夾的差別。

### OneDrive 帳號或空白檔案出錯

免費連接適用於**個人版 OneDrive 的 App Folder**，公司或學校帳號不能直接視為相同設定。個人版 OneDrive 的完整存取是另一項 PRO 功能。

[OneDrive 文件](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/onedrive/README.md)還提到，API 不允許上傳空白檔案。若空白 Markdown 筆記造成錯誤，可以查看外掛的空白檔案處理設定，或寫入實際內容再試一次。

## 別忘了保護設定檔與保留備份

Remotely Save 的 `data.json` 可能包含敏感設定。不要放進公開 Git 儲存庫、求助截圖或問題回報的附件。分享錯誤資訊時，也要移除權杖、登入憑證及私人筆記內容。

免費版有基本衝突處理，進階智慧衝突處理則是 PRO 功能。無論用哪一種，兩台裝置都改過同一篇筆記時，仍應檢查雙方內容。先留副本再合併，確認結果已正確同步到另一台，才繼續編輯。

備份請放在同步範圍之外。刪除或誤改也可能跟著同步；能復原多少，取決於實際留下來的備份和版本紀錄。

## 什麼情況適合改用其他方案？

如果已經有偏好的雲端服務，也願意自己管理設定，Remotely Save 就很適合。雙向測試正常後，不需要只是因為有其他工具就換掉它。

若想省下維護儲存連線的工作，可以考慮代管服務：

| 方案 | 適合的需求 | 要考慮的事 |
| --- | --- | --- |
| Remotely Save | 自選 Dropbox、WebDAV、S3 等儲存服務 | 連線、憑證、排除規則與復原管理 |
| Obsidian Sync | 使用官方整合服務 | 付費訂閱與同步項目設定 |
| Synch | 使用開源、端對端加密的代管服務 | 方案容量和單檔限制是否符合需求 |

[Synch](/zh-tw/)提供同步服務，不用另外連接雲端儲存帳號。如果也在考慮裝置間直接同步、自架服務或 Git，可以看看 [Obsidian Sync 替代方案比較](/zh-tw/blog/obsidian-sync-alternatives/)。

圖片來源：[Remotely Save 官方 Dropbox 文件，步驟 10、12、13](https://github.com/remotely-save/remotely-save/blob/master/docs/dropbox_review_material/README.md#steps)。
