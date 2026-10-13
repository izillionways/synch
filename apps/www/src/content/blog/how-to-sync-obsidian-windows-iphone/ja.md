---
title: "WindowsとiPhoneでObsidianを同期するには？安全な設定手順"
description: "Windows PCとiPhoneでObsidianを同期する方法を解説。iCloudから移る前のバックアップ、接続手順、初回同期の確認まで。"
pubDate: 2026-09-30
draft: false
---

Windows PCのObsidianノートをiPhoneでも使いたいなら、**両方のObsidianで動く同期方法**を選ぶ必要があります。公式の方法ならObsidian Syncが手軽です。エンドツーエンド暗号化に対応したSynchも、コミュニティプラグインから利用できます。ほかのプラグインやGitを使う方法もありますが、設定には少し手間がかかります。

WindowsのiCloud Driveにvaultを入れれば、そのままiPhoneでも使えそうです。ただしObsidianは、[公式の同期ガイド](https://obsidian.md/help/sync-notes)でWindows版iCloud Driveによるファイルの重複や破損に注意を促しています。iCloudが向いているのは、MacとiPhoneなどApple製品だけを使う場合です。

ここでは方法ごとの違いから、既存のvaultの移し方、最初の同期を確かめるところまで順に説明します。

![暗号化された同期接続を通じて同じノートを表示するWindowsノートPCとiPhone](./windows-iphone-sync.webp)

## WindowsとiPhoneにはどの方法が合う？

| 方法 | 向いている場合 | 知っておくこと |
| --- | --- | --- |
| **Obsidian Sync** | 公式機能で簡単に始めたい | 有料契約が必要です。remote vaultの作成時にエンドツーエンド暗号化を選べます |
| **Synch** | 小さなvaultなら無料で使える暗号化サービスを探している | 両方のObsidianにSynchrunコミュニティプラグインを入れます |
| **Remotely Save** | 対応ストレージをすでに使っていて、自分で設定したい | 設定と動作はストレージ事業者やプラグインの設定によって変わります |
| **iOS向けGitアプリとGit** | Gitに慣れていて、手動でバージョンを管理したい | pull、commit、push、競合の解決を自分で行います |

Windows PCとiPhoneを行き来するなら、まずObsidian SyncかSynchを検討してみてください。どちらも端末ごとのローカルvaultをremote vaultでつなぎます。iPhone側でWindowsのクラウドフォルダを無理にvaultとして開く必要はありません。

Google DriveとOneDriveはWindowsでのファイル管理には便利ですが、iOS上のObsidian vaultフォルダとして簡単に使える公式対応はありません。SyncthingもiOSでは追加のツールが必要です。こうした方法で構成する前に、[Obsidianの端末別ガイド](https://obsidian.md/help/sync-notes)を確認してください。

## 端末をつなぐ前にvaultを保護する

**まず、どちらの端末に最新のノートがあるか確認しましょう。** 両方で編集しているなら、新しいremote vaultにつなぐ前に最近のノートと添付ファイルを見比べます。Windows側のフォルダが見やすくても、すべての変更がそこにあるとは限りません。

最新のコピーが分かったら、次の順に進めます。

1. 現在の同期サービスで保留中のダウンロードが終わるまで待ちます。
2. 添付ファイルと`.obsidian`フォルダを含む完全なvaultを別の場所にコピーします。バックアップはiCloud、OneDrive、新しい同期サービスの管理フォルダの外に置きます。
3. バックアップを開き、最近のノートと添付ファイルがいくつか入っていることを確かめます。
4. 新しい方法を設定している間、バックアップは変更しません。

同期だけではバックアップになりません。ある端末でノートを誤って消すと、その削除もほかの端末に反映されることがあります。Obsidianも[別の場所へのバックアップを勧めています](https://obsidian.md/help/backup)。

![使用中のvaultと、外付けドライブのそばに分けて保管したバックアップ](./vault-backup.webp)

### 現在WindowsでiCloudを使っている場合

バックアップを取ったら、Windowsで**iCloud Driveの外にvaultの新しいローカルコピー**を作り、Obsidianで開きます。新しい同期サービスにはこのコピーを接続してください。iPhoneでも、今使っているiCloudのvaultに別の同期サービスを重ねず、新しいローカルvaultを作ります。

新しい構成を確認するまで古いiCloudコピーは参照用に残しましょう。ただし、両方のコピーを編集し続けるとノートが別々の版に分かれます。Obsidianは[1つのvaultで複数の同期サービスを併用しない](https://obsidian.md/help/sync-notes)よう案内しています。

iPhoneにだけ残っている変更は、最初のアップロード**前に**新しい作業用コピーへ取り込みます。同じノートが端末ごとに違う場合は、中身を見比べて残す内容を決めてください。

## 方法1：Obsidian Syncを設定する

[Obsidian Sync](https://obsidian.md/sync)はObsidianに組み込まれており、WindowsとiOSに対応しています。ObsidianアカウントとSyncの契約が必要です。

Windowsでの手順：

1. 完全なローカルの作業用vaultを開きます。まだiCloud Drive内にある場合は、先に上記の別のローカルコピーへ移ります。
2. **Settings → General → Account**でサインインし、**Sync**コアプラグインを有効にします。
3. **Settings → Sync**でremote vaultを作ります。エンドツーエンド暗号化を使う場合は暗号化パスワードを設定してください。アカウントのパスワードとは別なので、安全な場所に保管します。
4. 選択的同期とvaultの設定同期を確認してから同期を開始します。**Fully Synced**と表示されるまで待ちます。

iPhoneでの手順：

1. Obsidianのvault切り替え画面で**Setup Obsidian Sync**を選び、アップロードしたremote vaultから新しいローカルvaultを作ります。
2. サインインしてremote vaultを選び、求められたら暗号化パスワードを入力します。
3. iPhoneの同期設定を確認し、最初のダウンロードが終わってから編集を始めます。

Obsidianの[設定ガイド](https://obsidian.md/help/sync/setup)には、現在の画面に沿った操作、状態表示、設定を同期する選択肢が載っています。iPhoneで新しいローカルvaultを使えば、アップロードしたデータと古いiCloudコピーが混ざるのを避けられます。

## 方法2：Synchを設定する

Synchはデスクトップ版とモバイル版Obsidianで**Synchrun**コミュニティプラグインを使います。vaultのデータはアップロード前に端末上で暗号化されます。小さなvault向けの無料プランを含むホスト型プランがあります。大きな添付ファイルがある場合は[現在のプラン](https://synch.run/ja/pricing)の制限を確認してください。

Windowsでの手順：

1. ほかの同期サービスの管理フォルダの外にある、完全なローカルの作業用vaultを開きます。
2. **Settings → Community plugins**で**Synchrun**を探し、インストールして有効にします。
3. プラグインの設定を開いてサインインし、**Create vault**を選びます。
4. vaultのパスワードを設定して安全に保管します。Obsidianを開いたまま、最初のアップロードが終わるまで待ちます。

iPhoneでの手順：

1. Obsidianで新しい空のローカルvaultを作ります。既存のiCloud管理コピーをこの接続に再利用しないでください。
2. コミュニティプラグインから**Synchrun**をインストールして有効にし、同じアカウントでサインインします。
3. **Connect vault**を選び、remote vaultとvaultのパスワードを入力します。
4. 最初のダウンロードが終わるまでObsidianを開いておきます。編集する前に最近のノートと添付ファイルを確認します。

[Synchプロジェクトの案内](https://github.com/hjinco/synch#get-started)に現在のプラグイン導入手順があります。vaultのパスワードは別の端末で暗号化されたデータを開くために必要です。安全に保管してください。仕組みは[Synchによるvaultの暗号化と復号の説明](/ja/blog/encryption-and-decryption/)で詳しく解説しています。

## 最初の同期は両方向で試す

サインインできても、ファイルが全部届いたとは限りません。ノートを両方向に送って確かめましょう。

1. iPhoneで、Windowsにあった最近のノートを2件と添付ファイルを1件開きます。
2. Windowsで短いテストノートを作ります。同期が終わってからiPhoneに表示されるか確認します。
3. iPhoneで別のテストノートを作ります。同期が終わるまでObsidianを開き、Windowsに表示されるか確認します。
4. ファイル名だけでなく、両方のテストノートの内容も比較します。
5. 重複ファイルや競合ファイルがないか探し、あれば削除する前に確認します。

`.obsidian`も同期するなら、必要なプラグインや設定がiPhoneで動くか確かめましょう。デスクトップとモバイルでは、レイアウトやプラグインの動作を変えたほうがよい場合があります。ノートと添付ファイルの同期が安定してから、どの設定を共有するか決めても構いません。

![最初の同期後にノートと画像の添付ファイルが一致しているノートPCとスマートフォン](./first-sync-check.webp)

## ほかに検討できる方法

**Remotely Save**では、両方の端末のObsidianを選んだストレージ事業者につなげられます。保存先を自由に選べる一方、互換性、暗号化設定、競合の処理は自分で確認する必要があります。詳しくは[Remotely Saveのガイド](/ja/blog/obsidian-remotely-save/)をご覧ください。

**Git**は変更をpull・pushする操作に慣れていれば使えます。iPhoneではWorking CopyなどのGitアプリと手作業が増えます。明示的なバージョン管理には便利ですが、スマートフォンで素早くメモする用途には手間がかかります。[ObsidianとGitのガイド](/ja/blog/obsidian-git-sync/)も参考にしてください。

**1つのvaultを複数の同期サービスで同時に管理しないでください。** 別の場所にバックアップを置くのは問題ありませんが、2つのサービスが同じ作業フォルダを扱うと変更がぶつかることがあります。ノートが重複したり消えたように見えたりしたら、まず編集を止めて両端末のファイルとバックアップを確認しましょう。[同期競合のガイド](/ja/blog/obsidian-sync-conflicts/)も参考になります。

## WindowsとiPhoneの同期に関するFAQ

### WindowsとiPhoneでObsidianを無料で同期できますか？

vaultの大きさと許容できる設定の手間によっては可能です。Synchには小さなvault向けの無料プランがあります。コミュニティプラグインやGitは既存のサービスを利用できますが、保存容量やアプリ機能に別の制限がある場合があります。Obsidian Syncは有料です。大きなvaultを移す前に、現在のプラン制限を確認してください。

### WindowsとiPhoneでObsidianにiCloudを使えますか？

WindowsでiCloud Driveフォルダを開ける場合はあります。しかし、Obsidianは[Windows版iCloud Driveでファイルが重複または破損する可能性を警告](https://obsidian.md/help/sync-notes)しています。両方の端末で編集するvaultにはWindowsとiOSをつなげる方法を使い、別のバックアップも保管しましょう。

### iPhoneのノートがWindowsに表示されないのはなぜですか？

まず両方の端末が**同じremote vault**につながり、最初の同期が終わっているか確認してください。iPhoneでは変更のアップロードが終わるまでObsidianを開いておきます。探しているノートが古いiCloud vaultにしかないなら、新しいvaultへは自動で移りません。古いコピーを片付ける前に、そのノートを確認して移してください。

### `.obsidian`フォルダも同期すべきですか？

ここにはプラグイン、テーマ、ワークスペースなどの設定が入っています。一部を同期すると端末間の環境が近づきますが、デスクトップ用の設定がモバイルに合うとは限りません。まずノートと添付ファイルが正しく同期されることを確かめ、その後で両方に必要な設定ファイルを選びましょう。

## 安全に始めるために

これから設定するなら、公式機能を使いたい人には**Obsidian Sync**、暗号化に対応したコミュニティプラグインを使いたい人には**Synch**が候補になります。まずファイルのそろったvaultと別の場所に置くバックアップを用意しましょう。iPhoneには新しいローカルvaultを接続し、テストノートが両方向に届くことを確かめてから使い始めてください。
