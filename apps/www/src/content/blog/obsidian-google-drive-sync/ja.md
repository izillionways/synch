---
title: "ObsidianをGoogle Driveで同期するには？PC・Android・iPhone別に解説"
description: "ObsidianのvaultをGoogle Driveで同期する方法を、PCのフォルダ同期とモバイル向けプラグインに分けて解説。移行前のバックアップや競合対策も紹介します。"
pubDate: 2026-10-01
draft: false
---

**ObsidianのノートをGoogle Driveで同期したい。** PCだけなら、Google Drive for desktopのフォルダにvaultを置く方法があります。ただしAndroidやiPhoneまで同じように使えるわけではありません。スマートフォンでは、Obsidianが開けるローカルのvaultへファイルを届ける仕組みが別に必要です。

もう一つの方法は、ObsidianのコミュニティプラグインからGoogle Driveに接続することです。PCのDriveフォルダを同期する方法とは仕組みが異なります。**一つの作業用vaultを二つの方法で同時に同期しない**ことを前提に、端末に合う構成を選びましょう。

## Google Driveだけで同期できる？

Obsidianのvaultは端末上のファイルをまとめたフォルダです。Google Driveはそのファイルを運べますが、Obsidian専用の同期機能にはなりません。[Obsidian公式ガイド](https://obsidian.md/help/sync-notes)ではGoogle DriveをWindows・macOS・Android向けの外部手段として挙げる一方、iOSでのvault同期は公式にはサポートしていないと説明しています。

| 方法 | 主に使う端末 | 必要なもの |
| --- | --- | --- |
| Google Drive for desktopのフォルダ | Windows、Mac | vaultを各PCでオフライン利用できる設定 |
| DriveとAndroidのフォルダ同期アプリ | PC、Android | Android側のローカルvaultを更新するアプリ |
| Obsidian用Google Driveプラグイン | PC、Android、iPhone | プラグインの導入とGoogleアカウントの認証 |

スマートフォンのGoogle Driveアプリでノートが見えることと、Obsidianからそのノートを編集・同期できることは別です。

## 既存のvaultは先に退避する

いま使っている同期サービスの処理が終わるまで待ち、添付ファイルと`.obsidian`フォルダを含むvault全体を、同期対象ではない場所へコピーしてください。コピーから最近のノートと画像を開き、必要なデータがそろっているか確認します。

複数の端末ですでに別々の変更を加えている場合、どちらかを無条件に正本と決めないでください。内容を見比べてから新しい同期を始めましょう。最初の双方向テストが済むまではバックアップを残します。[Obsidianのバックアップガイド](https://obsidian.md/help/backup)も、同期はバックアップの代わりにならないと説明しています。

現在のvaultをiCloudやOneDrive、Obsidian Syncなどで同期しているなら、同じ作業フォルダにGoogle Driveを追加しないでください。[複数の同期サービスを一つのvaultで併用しない](https://obsidian.md/help/sync-notes)ことが大切です。

![クラウド同期とは別に保管したObsidianのvaultのバックアップ](./vault-backup-before-drive-sync.webp)

## PC同士ならDriveのフォルダを使う

WindowsとMacの間だけで使うなら、まず次の手順を試せます。

1. それぞれのPCにGoogle Drive for desktopを入れ、同じアカウントでログインします。
2. Drive内にvault用フォルダを作るか、バックアップ済みのvaultを移します。
3. vaultのファイルを**オフラインでも利用可能**にします。
4. 1台目のObsidianでそのフォルダをvaultとして開きます。
5. Driveの同期が完了してから、2台目でも同じフォルダを開きます。
6. テスト用のノートを作り、ファイル名だけでなく本文も届くか確認します。

これは[ObsidianのGoogle Drive設定案内](https://obsidian.md/help/sync-notes)に沿った方法です。別のPCで編集を始める前に、前のPCのアップロードと次のPCのダウンロードが終わったか確認してください。同じノートを同時に編集すると競合する可能性があります。

### Androidを加える場合

Android版Obsidianが開くのは端末内のローカルvaultです。Google Driveアプリへのログインだけでは、そのフォルダが自動で双方向同期されません。別のフォルダ同期アプリを使い、Drive上のvaultとAndroidのローカルフォルダを結びます。

まず小さなテスト用vaultで、PCからの変更がAndroidへ届くことと、Androidの変更がPCへ戻ることを確認しましょう。削除や同時編集をアプリがどう扱うかも調べてください。ほかの選択肢は[WindowsとAndroidの同期ガイド](/ja/blog/how-to-sync-obsidian-windows-android/)で比較しています。

### iPhone・iPadを加える場合

iPhoneのGoogle Driveアプリにvaultが表示されても、それをObsidianで公式にサポートされた同期vaultとして使えるわけではありません。[Obsidianの案内](https://obsidian.md/help/sync-notes)では、iOS上のGoogle Driveによるvault同期は公式サポート外です。iOS対応を明記したプラグインか、端末をまたいで使える別の同期方法を選んでください。[WindowsとiPhoneのガイド](/ja/blog/how-to-sync-obsidian-windows-iphone/)も参考になります。

## ObsidianプラグインからDriveに接続する

コミュニティの[Google Drive Syncプラグイン](https://community.obsidian.md/plugins/google-drive-sync)は、ObsidianからGoogle Driveへ接続します。説明にはデスクトップとモバイル、iOS版Obsidianへの対応が記載されています。Drive for desktopで同じフォルダを管理する方法とは分けて考えてください。

![ノートPCとスマートフォンのObsidian vaultをプラグイン経由でクラウドフォルダと同期する様子](./obsidian-google-drive-plugin-sync.webp)

このプラグインではGoogleアカウントを認証し、取得したリフレッシュトークンを設定に入力します。ドキュメントによると、vaultを開いた後の取得は自動ですが、端末側の変更を送るにはpush操作をするか、自動pushを有効にする必要があります。端末を切り替える前に同期を終え、同じノートを複数端末で同時に編集しないよう勧めています。

**プラグインとDrive for desktopを同じvaultに併用しないでください。** プラグインが把握できない方法でファイルを追加すると、動作が崩れたりデータを失ったりするおそれがあると[開発者が注意を促しています](https://community.obsidian.md/plugins/google-drive-sync)。既存のvaultを移すなら、プラグインの移行方法と新しい端末の追加手順を先に読んでください。中身のある二つのvaultが自動で安全に統合されるとは限りません。

新しく始める場合も、バックアップを作ってから最初の端末で認証とアップロードを完了します。2台目はプラグインの案内に従って接続し、最初のダウンロードが終わるまで編集を控えましょう。最後に両方の端末からテストノートを作り、添付ファイルも確認します。認証トークンや中継サービスの扱いが気になる場合は、導入前に[プラグインの説明](https://community.obsidian.md/plugins/google-drive-sync)を確認してください。

**Remotely Save**もGoogle Driveに対応していますが、[Google Drive接続は有料のPRO機能](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md)です。すでに利用しているなら、[Remotely Saveの詳しい解説](/ja/blog/obsidian-remotely-save/)と合わせて検討できます。

## うまく同期できないときは

**PCのノートがスマートフォンにない場合**、まずスマートフォンのObsidianがどのローカルvaultを開いているか確認します。Driveアプリにファイルがあるだけでは十分ではありません。フォルダ同期アプリの対象フォルダ、またはプラグインの初回ダウンロードと送信状況を見てください。

**ノートが重複した場合**は両端末で編集を止め、各ローカルファイルとバックアップを比較しましょう。同期が終わる前に端末を切り替えた、あるいは二つの同期ツールを重ねた可能性があります。[同期競合のガイド](/ja/blog/obsidian-sync-conflicts/)でも確認方法を紹介しています。

**Driveに置けばエンドツーエンド暗号化される？** vaultのフォルダをDriveへ入れるだけでは、vault単位のエンドツーエンド暗号化は加わりません。暗号化が必要なら、選ぶプラグインやサービスがどの段階でファイルを暗号化するか確認してください。

## 設定の手間も含めて選ぶ

PC中心でGoogle Driveをすでに使っているなら、Driveのフォルダ同期は検討しやすい方法です。スマートフォンも加えるなら、アプリやプラグインの設定と競合時の扱いまで理解しておく必要があります。どの方法でも独立したバックアップと双方向のテストは欠かせません。

Driveの保存先を管理することより、**PCとスマートフォンで同じ非公開のvaultを使うこと**が目的なら、[Synch](https://synch.run/ja/)という選択肢もあります。SynchrunコミュニティプラグインがObsidian内で同期し、vaultのデータを端末上で暗号化してからアップロードします。小さなvaultなら、現在の制限を確認したうえで[無料プラン](https://synch.run/ja/pricing)から試せます。
