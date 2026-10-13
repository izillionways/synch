---
title: "Windows 电脑和 iPhone 怎么同步 Obsidian？"
description: "在 Windows 电脑和 iPhone 上同步 Obsidian 笔记：先备份，再选择同步方式，最后检查两端的文件是否一致。"
pubDate: 2026-09-30
draft: false
---

想在 Windows 电脑上写 Obsidian 笔记，出门后接着用 iPhone 查看或修改？关键是选一种**两台设备上的 Obsidian 都能使用的同步方式**。想省心，可以用官方的 Obsidian Sync；想用端到端加密的社区插件，可以考虑 Synch。其他插件和 Git 也能做到，只是需要自己多花些时间设置。

你可能会想到把 vault 放进 Windows 上的 iCloud Drive，然后直接在 iPhone 打开。但 Obsidian 在[官方同步指南](https://obsidian.md/help/sync-notes)中提醒：Windows 版 iCloud Drive 可能让文件重复或损坏。如果只在 Mac、iPhone 等 Apple 设备之间同步，iCloud 更合适。

下面先比较可用的方法，再一步步处理已有 vault，最后确认首次同步有没有真正完成。

![通过加密同步连接显示相同笔记的 Windows 笔记本和 iPhone](./windows-iphone-sync.webp)

## 应该选择哪种方法？

| 方法 | 适合的情况 | 需要了解 |
| --- | --- | --- |
| **Obsidian Sync** | 想用官方功能，尽快连上两台设备 | 需要付费订阅；创建远程 vault 时可选择端到端加密 |
| **Synch** | 想找有小型 vault 免费方案的加密同步服务 | 两台设备的 Obsidian 都要安装 Synchrun 社区插件 |
| **Remotely Save** | 已在使用受支持的存储服务，并愿意自行配置 | 设置和运行情况取决于存储服务及插件配置 |
| **Git 与 iOS Git 应用** | 熟悉 Git，想手动管理版本 | 需要自行拉取、提交、推送和解决冲突 |

如果你经常在 Windows 电脑和 iPhone 之间切换，建议先看 Obsidian Sync 和 Synch。它们都通过远程 vault 连接两端的本地 vault，不用想办法在 iPhone 上把 Windows 的云盘文件夹硬当作 Obsidian vault 来打开。

Google Drive 和 OneDrive 在 Windows 上管理文件很方便，但都没有在 iOS 上提供简单、受官方支持的 Obsidian vault 文件夹访问方式。Syncthing 在 iOS 上也需要额外工具。决定采用这些方案前，请查看 [Obsidian 的平台说明](https://obsidian.md/help/sync-notes)。

## 连接设备前，先保护 vault

**先找出最新的笔记在哪台设备上。** 如果两边都编辑过，在连接新的远程 vault 之前，要对照最近的笔记和附件。Windows 上查看文件更方便，但最新内容不一定都在那里。

确认好最新内容后，按这个顺序操作：

1. 等待原有同步服务完成尚未结束的下载。
2. 另外复制一份完整的 vault，包括附件和 `.obsidian` 文件夹。把备份放在 iCloud、OneDrive 和新同步服务管理的文件夹之外。
3. 打开备份，检查几篇近期笔记和附件是否存在。
4. 设置新方法期间不要修改备份。

同步不能代替备份。一台设备误删了笔记，删除操作也可能同步到另一台。即使你已经使用同步服务，Obsidian 仍[建议单独备份](https://obsidian.md/help/backup)。

![使用中的 vault 与外置硬盘旁单独保存的备份副本](./vault-backup.webp)

### 如果目前在 Windows 上通过 iCloud 同步 vault

备份好之后，在 Windows 上**把 vault 复制到 iCloud Drive 以外的本地文件夹**，再用 Obsidian 打开这份新副本。用它来开始新的同步。iPhone 这边也新建一个本地 vault，不要直接给原来走 iCloud 的 vault 再接上一套同步服务。

在确认新方案可用前，可以保留旧 iCloud 副本供查阅。但不要继续编辑两份副本，否则笔记会形成互不相同的版本。Obsidian 明确提醒用户[不要在同一个 vault 上混用同步服务](https://obsidian.md/help/sync-notes)。

如果 iPhone 上有 Windows 中没有的新内容，请在**首次上传前**把它们补进新副本。同一篇笔记在两台设备上内容不同时，先对照内容，再决定保留哪些修改。

## 方法一：设置 Obsidian Sync

[Obsidian Sync](https://obsidian.md/sync) 内置于 Obsidian，支持 Windows 和 iOS。你需要 Obsidian 账户和 Sync 订阅。

在 Windows 上：

1. 打开完整的本地工作 vault。如果它仍在 iCloud Drive 中，先切换到上文提到的独立本地副本。
2. 在 **Settings → General → Account** 中登录，并启用 **Sync** 核心插件。
3. 打开 **Settings → Sync**，创建远程 vault。如果需要端到端加密，请设置加密密码。它不同于账户密码，应妥善保存。
4. 检查选择性同步和 vault 配置同步设置，然后开始同步。等待 Obsidian 显示 **Fully Synced**。

在 iPhone 上：

1. 打开 Obsidian 的 vault 切换界面，选择 **Setup Obsidian Sync**。从刚上传的远程 vault 创建新的本地 vault。
2. 登录并选择远程 vault；如有提示，输入加密密码。
3. 检查 iPhone 上的同步设置，等待首次下载结束后再开始编辑。

Obsidian 的[设置指南](https://obsidian.md/help/sync/setup)提供当前界面的操作步骤、状态标识和设置同步选项。在 iPhone 上使用新的本地 vault，可以避免将新上传的数据与旧 iCloud 副本合并。

## 方法二：设置 Synch

Synch 通过桌面版和移动版 Obsidian 上的 **Synchrun** 社区插件运行。vault 数据会在设备上加密后再上传。它提供托管方案，其中包括适合小型 vault 的免费方案。如果 vault 包含大附件，请查看[当前套餐](https://synch.run/zh-cn/pricing)的限制。

在 Windows 上：

1. 打开位于其他同步服务管理文件夹之外、内容完整的本地工作 vault。
2. 在 **Settings → Community plugins** 中搜索 **Synchrun**，安装并启用。
3. 打开插件设置，登录后选择 **Create vault**。
4. 设置并妥善保存 vault 密码。保持 Obsidian 打开，等待首次上传完成。

在 iPhone 上：

1. 在 Obsidian 中新建一个空的本地 vault。不要用原来受 iCloud 管理的副本进行这次连接。
2. 从社区插件中安装并启用 **Synchrun**，使用同一个账户登录。
3. 选择 **Connect vault**，选中远程 vault，并输入 vault 密码。
4. 保持 Obsidian 打开，直到首次下载完成。开始新编辑前，检查近期笔记和附件。

[Synch 项目说明](https://github.com/hjinco/synch#get-started)列出了当前的插件安装步骤。vault 密码用于在其他设备上解锁加密数据，请妥善保存。更多信息可阅读 [Synch 如何加密和解锁 vault](/zh-cn/blog/encryption-and-decryption/)。

## 第一次同步，两个方向都要试

登录成功不等于文件都已同步好。用几篇笔记实际试一下：

1. 在 iPhone 上打开两篇原本位于 Windows 的近期笔记和一个附件。
2. 在 Windows 上新建一篇简短测试笔记。等待同步结束，确认它出现在 iPhone 上。
3. 在 iPhone 上新建另一篇测试笔记。保持 Obsidian 打开直到同步完成，确认它出现在 Windows 上。
4. 比较两篇测试笔记的内容，而不只是文件名。
5. 查找重复文件或冲突文件；如果发现，先检查内容再删除。

如果同步 `.obsidian` 文件夹，请检查所需插件和设置能否在 iPhone 上正常使用。桌面端与移动端可能需要不同布局或插件行为。等笔记和附件稳定同步后，再决定共享哪些设置也不迟。

![首次同步后在笔记本电脑和手机上保持一致的笔记及图片附件](./first-sync-check.webp)

## 还可以考虑哪些方法？

**Remotely Save** 可以把两台设备上的 Obsidian 连接到选定的存储服务。它让你更自由地选择存储位置，但需要自行检查存储服务的兼容性、加密设置和冲突处理方式。我们的 [Remotely Save 指南](/zh-cn/blog/obsidian-remotely-save/)介绍了这些取舍。

如果你已经熟悉拉取和推送更改，**Git** 也是一种选择。iPhone 上需要 Working Copy 等 Git 应用和额外的手动步骤。它适合有意识地管理版本，但不太适合随手记录手机笔记。可以参考我们的 [Obsidian Git 指南](/zh-cn/blog/obsidian-git-sync/)。

**不要让两套同步工具同时管理同一个 vault。** 单独放一份备份没有问题，但两个服务同时改动工作文件夹，很容易产生冲突。如果笔记重复或看起来不见了，先别继续编辑。检查两台设备上的文件和备份，再参考我们的[同步冲突指南](/zh-cn/blog/obsidian-sync-conflicts/)。

## Windows 与 iPhone 同步常见问题

### 可以免费在 Windows 和 iPhone 之间同步 Obsidian 吗？

可以，取决于 vault 大小以及你愿意承担多少设置工作。Synch 为小型 vault 提供免费方案。社区插件或 Git 也可能使用你已有的服务，但存储空间或应用功能可能另有限制。Obsidian Sync 是付费服务。迁移大型 vault 前请确认当前方案的限制。

### 可以用 iCloud 在 Windows 和 iPhone 之间同步 Obsidian 吗？

你或许可以在 Windows 上打开 iCloud Drive 文件夹，但 Obsidian [警告 Windows 版 iCloud Drive 可能造成文件重复或损坏](https://obsidian.md/help/sync-notes)。对于需要在两台设备上编辑的 vault，请采用能够连接 Windows 与 iOS 的方法，并保留独立备份。

### 为什么 iPhone 上的笔记没有出现在 Windows 上？

先确认两台设备连接的是**同一个远程 vault**，而且首次同步已经结束。在 iPhone 上，Obsidian 要保持打开，直到更改上传完成。如果那篇笔记只在旧 iCloud vault 里，新建的 vault 不会自动把它带过来。处理旧副本前，先找到并复制这篇笔记。

### 应该同步 `.obsidian` 文件夹吗？

其中保存插件、主题和工作区等配置。同步部分设置能让两台设备的环境更一致，但桌面设置不一定适合手机。先确认笔记和附件正确同步，再选择两台设备都需要的配置文件。

## 从哪里开始比较好？

如果现在才开始设置，想用官方功能可以选 **Obsidian Sync**；想通过社区插件使用端到端加密服务，可以考虑 **Synch**。先确认 vault 里的文件齐全，另外留一份备份。让 iPhone 连接新的本地 vault，亲自试过双向同步后，再把它作为日常使用的 vault。
