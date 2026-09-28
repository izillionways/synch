---
title: "用 Syncthing 同步 Obsidian：適合作為 Obsidian Sync 替代方案嗎？"
description: "從實際使用角度看 Syncthing 同步 Obsidian vault 的優點、風險，以及什麼時候 Synch 這類加密方案會更省心。"
pubDate: 2026-05-11
---

想免費、私密地同步 Obsidian 時，Syncthing 經常會被提到。

這很容易理解。[Syncthing](https://syncthing.net/) 是開源的，採用點對點同步模式，設計目標就是在裝置之間同步檔案。你不需要把筆記放進 Dropbox、Google Drive、iCloud 或 OneDrive，也不需要一個保存 vault 副本的中央儲存伺服器。

對技術使用者來說，這正是它吸引人的地方。

但同步檔案，和安全地同步一個 Obsidian vault，並不是同一件事。

Obsidian 是 local-first 應用，但 vault 不只是一個 Markdown 檔案夾。它可能包含附件、外掛資料庫、主題、snippets、canvas 檔案、workspace 狀態，以及 `.obsidian` 設定資料夾。這些檔案可能頻繁變化，也可能從多台裝置同時變化。

所以真正的問題不是：

> Syncthing 能同步 Obsidian 嗎？

而是：

> Syncthing 的同步模型適合你的 Obsidian 使用方式嗎？

![介紹私密持續檔案同步的 Syncthing 首頁](./syncthing-homepage.webp)

## Syncthing 擅長什麼

Syncthing 是一個持續檔案同步工具。它透過檔案系統監視和定期掃描偵測檔案變化，然後在兩台或更多電腦之間同步這些變化。

它的優勢很明確：

- 開源。
- 不把你的資料存到中央 Syncthing 伺服器。
- 不依賴託管雲端儲存空間來保存檔案。
- 即使需要中繼協助連線，裝置間通訊也會使用 TLS 加密。
- 只有明確允許的裝置才能連接。
- 可以同步許多不同類型的資料夾，不限於 Obsidian vault。

如果你想在桌面電腦和另一台常在線裝置之間搭一個免費的 P2P 同步環境，Syncthing 可以是很強的選擇。

尤其是當你已經理解檔案同步、裝置配對、資料夾共享和衝突復原時，它會更適合你。

## 為什麼 Obsidian vault 需要更小心

Obsidian vault 看起來很簡單，因為筆記都是普通檔案。這也是 Obsidian 最好的設計之一。

問題是，vault 裡的活動並不總是簡單。

一個普通 vault 可能包含：

- Markdown 筆記
- 圖片、PDF、音訊等附件
- Canvas 檔案
- 外掛設定
- 主題和 snippet 檔案
- Workspace 狀態
- 行動端專用設定
- `.obsidian` 裡的隱藏檔案

有些檔案由你編輯，有些由 Obsidian 編輯，有些由外掛編輯。有些檔案甚至會在你沒意識到自己改了什麼時被重新寫入。

這很重要，因為通用檔案同步工具並不理解 Obsidian 的意圖。它看到的是檔案變化。它不知道這是外掛設定變化，也不知道行動端工作區是否不該覆蓋桌面版版面，更不知道筆記衝突應該以怎樣的人類可讀方式復原。

## 更適合 Syncthing 的 Obsidian 配置

使用方式越有紀律，Syncthing 越適合 Obsidian。

比較理想的配置通常是這樣：

1. 有一個主要編輯用的桌面 vault。
2. 其他裝置更多用於閱讀或輕量記錄。
3. 第一次同步前先做獨立備份。
4. 先決定是否同步 `.obsidian`。
5. 在另一台裝置編輯前，留足時間讓同步完成。
6. 有檢查和處理衝突檔案的習慣。

如果你大多只在一台機器上編輯，另一台裝置主要用來閱讀或快速記錄，Syncthing 可以很可靠。

如果你經常在多台裝置上編輯同一批筆記，而且其中一些裝置會離線，風險就會升高。

## Syncthing 搭配 Obsidian 的難點

Syncthing 很強，但責任在使用者這邊。

第一個難點是裝置可用性。P2P 同步需要裝置在線足夠久，才能交換變化；這個連線可以是直接連線，也可以透過中繼。如果你的筆電正在睡眠，而手機上編輯了一篇筆記，那麼在帶有相關變化的裝置重新能夠通訊之前，同步不會發生。

第二個難點是行動端行為。Android 的背景限制、電池最佳化和應用選擇都會影響變化同步的速度。[官方 Syncthing Android 應用已在 2024 年 12 月 Syncthing 版本之後退休](https://forum.syncthing.net/t/discontinuing-syncthing-android/23002)，所以 Android 使用者現在需要理解目前可用的路徑，例如 Syncthing-Fork 或其他方案。

第三個難點是衝突處理。如果兩台裝置在同步完成前編輯了同一個檔案，檔案同步工具必須以某種方式保留兩個版本。這比靜默遺失資料好，但清理工作仍然留給你。

第四個難點是 vault 設定。同步 `.obsidian` 可以讓外掛和設定保持一致，但也可能把桌面版假設複製到行動端。不同步 `.obsidian` 可以避免這一點，但裝置之間的 Obsidian 行為可能會不一致。

這些問題並不說明 Syncthing 不好。它們說明 Syncthing 是檔案同步工具，而 Obsidian vault 有應用層面的特殊行為。

![普通檔案同步路徑和加密的 Obsidian-aware 同步路徑](./obsidian-sync-paths.webp)

## Syncthing vs Synch

Synch 採用的是另一種思路。

Syncthing 是通用的點對點檔案同步工具。Synch 是專門為 Obsidian 建構的開源端對端加密同步服務。

這個差異會改變取捨。

| 問題 | Syncthing | Synch |
| --- | --- | --- |
| 同步什麼？ | 資料夾和檔案 | Obsidian vault 資料 |
| 是否開源？ | 是 | 是 |
| 是否端對端加密？ | 裝置通訊會加密，進階設定中可使用 untrusted-device 加密 | vault 資料在上傳前本地加密 |
| 是否需要中央儲存？ | 不需要 | hosted service 或 self-hosted Synch server |
| 是否理解 Obsidian？ | 否 | 是 |
| 是否需要裝置配對和資料夾設定？ | 需要 | 不需要 P2P 裝置配對 |
| 更適合誰？ | 想要裝置間檔案同步的技術使用者 | 想要私密 Obsidian 同步、但不想管理檔案同步基礎設施的使用者 |

如果你完全不想要託管儲存空間，Syncthing 很有吸引力。

如果你想保留端對端加密和開源程式碼，同時取得更順暢的 Obsidian 同步工作流，Synch 會更合適。

## 什麼時候 Syncthing 是好選擇

如果你想要 P2P 檔案同步，並且願意自己負責設定和維護，可以使用 Syncthing。

它適合這些情況：

- 你理解 Syncthing 如何在裝置之間共享資料夾。
- 你願意在編輯前檢查同步狀態。
- 你保留獨立備份。
- 出現衝突檔案時，你能自己處理。
- 你的裝置會在可預期的時間上線。
- 你希望盡量避免託管儲存空間。

對有桌面電腦、筆電、家用伺服器或 NAS 的技術使用者來說，Syncthing 可以是乾淨、私密的配置。

## 什麼時候 Synch 更合適

如果你不想把同步變成裝置管理專案，Synch 會更適合。

Synch 面向重視隱私、但仍想要託管同步流程的使用者。vault 資料會在上傳前本地加密，所以伺服器保存的是加密資料，而不是可讀筆記。

Synch 更適合這些情況：

- 你想要圍繞 Obsidian 設計的同步行為。
- 你不想管理 P2P 連線。
- 你想要帶端對端加密的託管選項。
- 你想讓行動端設定更簡單。
- 你想在方案限制內使用版本歷史和已刪除檔案復原。
- 你想要免費或低成本的 Obsidian Sync 替代。

目前 Synch Free 方案包含 1 個同步 vault、30 MB 儲存空間、3 MB 最大檔案大小和 1 天版本歷史。Starter 方案包含 1 個同步 vault、1 GB 儲存空間、5 MB 最大檔案大小和 1 個月版本歷史。

這讓 Synch 成為小型個人 vault、學生筆記、興趣筆記，以及不想再增加高價訂閱但仍想要私密加密同步的使用者的實際選擇。

## 如果你還是想用 Syncthing

選擇 Syncthing 時，請謹慎設定。

第一次同步前，先完整備份 vault。不要把同步當成備份。同步工具也會非常高效地複製錯誤。

在另一台裝置打開 vault 前，等待首次同步完成。許多本可避免的問題都發生在這一步。

先決定如何處理 `.obsidian`。如果你想讓所有裝置使用相同外掛和設定，就有意識地同步它。如果你希望桌面版和行動端版面分開，可以考慮排除部分設定。

不要在同一個 vault 上疊加兩個同步系統。不要把同一個 Obsidian 資料夾放在 iCloud 或 Dropbox 裡，同時又用 Syncthing 或其他同步服務。疊加同步工具很容易造成重複檔案和難以理解的衝突。

不要立刻刪除衝突檔案。它可能包含另一台裝置離線時寫下的唯一副本。

## FAQ

### Syncthing 能同步 Obsidian 嗎？

可以。Obsidian vault 是本地資料夾，所以 Syncthing 能同步它。真正的問題是，你是否願意自己管理檔案同步、衝突、裝置可用性和行動端行為。

### Syncthing 是端對端加密嗎？

Syncthing 使用 TLS 保護已授權裝置之間的通訊，並且不會把檔案存到中央 Syncthing 伺服器。它也提供可選的 untrusted-device mode，用於在不完全信任的裝置上保存加密資料。但這和託管 Obsidian 同步服務預設在上傳前本地加密 vault 資料、再以加密形式存到遠端伺服器的模型不同。

### Syncthing 比 Obsidian Sync 更好嗎？

取決於你看重什麼。Syncthing 免費、開源、P2P。Obsidian Sync 是官方方案，整合在 Obsidian 中，並圍繞 Obsidian 建構。Syncthing 給你更多控制權，但 Obsidian Sync 通常需要更少維運精力。

### Synch 是 Obsidian 的 Syncthing 替代方案嗎？

如果你的目標是私密 Obsidian 同步，而不是通用資料夾同步，可以這麼說。Syncthing 更寬泛，是 P2P 檔案同步工具。Synch 更聚焦 Obsidian，提供端對端加密託管同步和自行託管路徑。

### 我應該用 Syncthing 還是 Synch？

如果你想要 P2P 檔案同步，並且願意管理細節，選擇 Syncthing。如果你想要更容易設定、圍繞 vault 行為設計的私密端對端加密 Obsidian Sync 替代，選擇 Synch。

## 總結

Syncthing 是很強的檔案同步工具。對合適的使用者來說，它可以很好地同步 Obsidian vault。

但它仍然是檔案同步。它不知道 Obsidian vault 意味著什麼，不知道哪些檔案是外掛狀態，不知道哪些衝突重要，也不知道筆記使用者期待怎樣的復原流程。

如果你想要最大的 P2P 控制權，Syncthing 值得考慮。

如果你想要帶端對端加密、設定負擔更低的私密 Obsidian 同步，Synch 就是為這個場景建構的。
