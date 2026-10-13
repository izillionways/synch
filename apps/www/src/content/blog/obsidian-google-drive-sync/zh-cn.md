---
title: "Obsidian 怎么用 Google Drive 同步？电脑、安卓与 iPhone 实用指南"
description: "了解 Obsidian 使用 Google Drive 同步的几种方式：电脑文件夹、安卓同步应用和 iPhone 插件，以及备份与避免冲突的方法。"
pubDate: 2026-10-01
draft: false
---

想用 **Google Drive 同步 Obsidian 笔记**，先别急着把 vault 拖进云盘。电脑和手机访问文件的方式不同：Windows、Mac 可以打开由 Google Drive 桌面版管理的本地文件夹；安卓还需要工具把文件同步到手机上的本地文件夹；iPhone 则不能只靠 Google Drive 应用把云端文件夹变成 Obsidian vault。

另一条路是在 Obsidian 内安装连接 Google Drive 的社区插件。它和桌面版 Drive 同步文件夹是**两套不同的方案**，不要让它们同时管理同一个正在使用的 vault。下面按设备说明该怎么选。

## Google Drive 能直接同步 Obsidian 吗？

Obsidian 的 vault 本质上是设备上的文件夹。Google Drive 可以在设备之间传输这些文件，但不是 Obsidian 自带的同步功能。[Obsidian 官方指南](https://obsidian.md/help/sync-notes)把它列为 Windows、Mac、安卓可考虑的第三方方式，并提醒 iOS 上的 Google Drive vault 同步不受官方支持。

| 做法 | 适合的设备 | 还需要什么 |
| --- | --- | --- |
| Google Drive 桌面版文件夹 | Windows、Mac | 让 vault 文件始终可离线使用 |
| Drive 加安卓文件夹同步应用 | 电脑、安卓 | 将 Drive 文件复制到安卓本地 vault 的应用 |
| Obsidian 的 Google Drive 插件 | 电脑、安卓、iPhone | 安装插件、授权账号，并按插件流程完成首次同步 |

在手机的 Google Drive 应用里**看得到文件**，不等于手机上的 Obsidian **能打开并双向更新同一套笔记**。选方案时要把整个传输路径想清楚。

## 动手前，先留一份独立备份

如果已有 vault，先等当前同步服务完成上传和下载，再把整个 vault 复制到同步文件夹之外。别漏掉附件和 `.obsidian` 设置文件夹。打开备份，抽查最近写的笔记和图片是否齐全。

如果两台设备此前各自改过内容，先比较差异，不要因为电脑上的文件更容易找到就默认它是最新版本。确认最完整的工作副本后，再用新方法连接其他设备。首次双向测试完成前保留备份。[Obsidian 的备份说明](https://obsidian.md/help/backup)明确指出，同步会传播误删，因此不能代替备份。

目前正用 iCloud、OneDrive、Obsidian Sync 或其他插件同步这个 vault？请先准备独立的工作副本，不要直接再套上一层 Google Drive。[Obsidian 也提醒不要让多个同步服务同时管理同一 vault](https://obsidian.md/help/sync-notes)。

![与云端同步分开保存的 Obsidian vault 备份副本](./vault-backup-before-drive-sync.webp)

## 方法一：电脑上使用 Google Drive 文件夹

如果只在 Windows 和 Mac 之间切换，桌面文件夹方案最容易理解：

1. 在两台电脑安装 Google Drive 桌面版，并登录账号。
2. 在 Drive 中建立 vault 文件夹，或把已备份的 vault 移进去。
3. 将 vault 文件设为**可离线使用**，确保 Obsidian 读取的是设备上实际存在的文件。
4. 在第一台电脑的 Obsidian 中打开该文件夹。
5. 等 Drive 完成同步后，再在第二台电脑打开它。
6. 新建一篇测试笔记，检查另一台电脑收到的是否包含完整正文。

这是[Obsidian 官方 Google Drive 指南](https://obsidian.md/help/sync-notes)介绍的基本思路。换设备写笔记前，先确认前一台已上传、新设备也已下载。两端同时编辑同一篇笔记，可能产生冲突。

### 安卓手机怎么办？

安卓 Obsidian 需要的是**手机上的本地 vault 文件夹**。仅安装 Google Drive 应用并登录，不会自动让这个文件夹与 Drive 双向同步。可以使用第三方文件夹同步应用，把 Drive 上的 vault 和安卓本地文件夹连接起来。

建议先用小型测试 vault 验证两个方向：电脑的修改能否到安卓，安卓的修改能否回到电脑。还要看看应用怎样处理删除和同时编辑。想比较其他途径，可以阅读[Windows 与安卓同步指南](/zh-cn/blog/how-to-sync-obsidian-windows-android/)。

### iPhone、iPad 呢？

Google Drive 应用里能浏览 vault 文件，不代表 iOS Obsidian 可以把它当作受官方支持的同步 vault。[Obsidian 官方说明](https://obsidian.md/help/sync-notes)指出，Google Drive 在 iOS 上同步 Obsidian vault 并不受官方支持。若要加入 iPhone，请选择明确支持 iOS 的 Obsidian 插件，或换一种跨设备同步方案。电脑与 iPhone 的搭配也可参考[这篇指南](/zh-cn/blog/how-to-sync-obsidian-windows-iphone/)。

## 方法二：通过 Obsidian 插件连接 Google Drive

社区的 [Google Drive Sync 插件](https://community.obsidian.md/plugins/google-drive-sync)直接从 Obsidian 连接 Google Drive。插件页面列出了桌面、移动端及 iOS 支持。它并不依赖 Google Drive 桌面版来管理同一个 vault 文件夹。

![电脑和手机上的 Obsidian vault 通过插件与云端文件夹同步](./obsidian-google-drive-plugin-sync.webp)

这套方案需要授权 Google 账号，并在插件设置中填入刷新令牌。按插件文档，打开 vault 后会拉取 Drive 的变化；本地修改需要手动推送，或者启用自动推送。切换设备前应确认同步完成，尽量避免在两端同时改同一篇笔记。

**不要在同一个 vault 上叠加该插件、Google Drive 桌面版或其他 Drive 同步工具。** [插件作者提醒](https://community.obsidian.md/plugins/google-drive-sync)，用其他方式加入的文件可能无法被正确跟踪，甚至有丢失数据的风险。迁移已有 vault 时，先阅读插件的新设备和迁移说明；不要假设两个已有内容的 vault 会自动安全合并。

实际设置时，先做好备份，再在第一台设备安装插件、完成授权和首次上传。第二台设备按照插件说明连接，等首次下载结束再编辑。最后分别在两台设备创建测试笔记，并确认附件也能传过去。授权令牌及插件使用的中间服务如何运作，也应在授权前阅读[插件说明](https://community.obsidian.md/plugins/google-drive-sync)。

如果已经在用 **Remotely Save**，它也能连接 Google Drive，不过[这一连接属于付费 PRO 功能](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md)。具体取舍可看我们的 [Remotely Save 指南](/zh-cn/blog/obsidian-remotely-save/)。

## 常见问题

**电脑有笔记，手机没有。** 先看手机 Obsidian 打开的究竟是哪个本地 vault。Drive 应用显示了文件，并不能证明 Obsidian 已经同步。使用安卓文件夹同步应用时检查目标文件夹；使用插件时检查首次下载和上传状态。

**出现重复或冲突文件。** 暂停在两端继续编辑，比较各设备的本地文件与独立备份。可能是上传未完成就换设备，也可能是两个同步工具同时处理一个 vault。可以按[同步冲突排查指南](/zh-cn/blog/obsidian-sync-conflicts/)逐项检查。

**放进 Google Drive 就有端到端加密吗？** 单纯把 vault 文件夹放进 Drive，并不会为 vault 增加端到端加密。如果这是你的要求，要单独核实所用插件或服务是在什么位置、以什么方式加密文件。

## 选一个适合日常使用的方案

主要在电脑上写笔记、已经熟悉 Google Drive 的话，桌面文件夹方案可以满足需求。加入手机后，额外应用或插件的设置、首次同步和冲突处理就成了日常维护的一部分。无论选哪种方式，都要保留独立备份，并做一次双向测试。

如果你的目标只是**在电脑和手机上使用同一个私密 vault**，不想维护 Drive 文件夹或手机文件夹同步应用，也可以看看 [Synch](https://synch.run/zh-cn/)。它通过 Obsidian 的 Synchrun 社区插件同步，vault 数据在设备上加密后才上传。小型 vault 可以先对照当前限制，试用[免费方案](https://synch.run/zh-cn/pricing)。
