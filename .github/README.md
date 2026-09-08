# Synch Docker images / Synch Docker 镜像

**Language / 语言:** [English](#english) | [简体中文](#中文)

[Upstream / 上游](https://github.com/hjinco/synch) · [Docker Hub](https://hub.docker.com/r/zillionways/synch) · [Builds / 构建记录](https://github.com/izillionways/synch/actions/workflows/dockerhub.yml)

## English

### About this fork

This repository is a fork of **[hjinco/synch](https://github.com/hjinco/synch)**, maintained to build the Synch server as Docker images and publish them to **[zillionways/synch on Docker Hub](https://hub.docker.com/r/zillionways/synch)**.

**The upstream application code is unchanged.** This fork adds release monitoring, upstream synchronization, Docker build/publish workflows, publication records, and deployment documentation. Each image is built from the exact upstream stable Release commit using the upstream `apps/api/Dockerfile`.

Synch and Synchrun are developed by **hjinco and the upstream contributors**. This repository maintains the image packaging and publishing automation. For application features, plugin releases, and functionality issues, see the [upstream project](https://github.com/hjinco/synch). These are community-built images and are not published by Obsidian.

### What are Synch and Synchrun?

**Synch** is an open-source, end-to-end encrypted synchronization project for Obsidian. **Synchrun** is the name of its Obsidian community plugin. Together they synchronize notes and attachments across devices, with encrypted version history and conflict handling.

This image contains the **self-hosted Synch server**. Install Synchrun separately in Obsidian and connect it to your server. The default server setup stores its databases and encrypted attachments on local disk, so it can run on a NAS, home server, or VPS without a separate database service.

### Available images

| Item | Value |
| --- | --- |
| Image | `zillionways/synch` |
| Latest successfully built stable release | `zillionways/synch:latest` |
| Pinned release | `zillionways/synch:<version>`, for example `zillionways/synch:0.4.7` |
| Platforms | `linux/amd64`, `linux/arm64` |
| Container port | `8787/tcp` |
| Persistent data | `/data` |

GitHub Actions checks for new upstream stable releases every hour, syncs the fork and release tag, and builds and publishes the image. A startup check runs before publication. Scheduled runs may be delayed. Publishing an image does not update containers already running on your server.

### Run the image

Generate **two independent secrets** by running this command twice:

```bash
openssl rand -hex 32
```

Create `compose.yaml`. Replace the URL, email, and both secret placeholders before starting:

```yaml
version: "3.8"

services:
  synch-api:
    image: zillionways/synch:latest
    container_name: synch-api
    restart: unless-stopped
    ports:
      - "8787:8787"
    environment:
      TZ: Asia/Shanghai
      HOST: "0.0.0.0"
      PORT: "8787"
      DATA_DIR: /data
      PUBLIC_URL: "http://192.168.1.50:8787"
      AUTH_ALLOWED_EMAILS: "you@example.com"
      BETTER_AUTH_SECRET: "REPLACE_WITH_FIRST_RANDOM_SECRET"
      SYNC_TOKEN_SECRET: "REPLACE_WITH_SECOND_RANDOM_SECRET"
    volumes:
      - synch-data:/data

volumes:
  synch-data:
```

- **`PUBLIC_URL`** is the full address clients actually use. For direct LAN access, use your server's IP and port. If `https://sync.example.com` proxies to `http://192.168.1.50:8787`, set `PUBLIC_URL` to **`https://sync.example.com`**. Include any non-default external port and omit the trailing `/`. The container still listens on `8787`. For internet access, use HTTPS and a reverse proxy that forwards WebSocket connections.
- **`AUTH_ALLOWED_EMAILS`** is the comma-separated list of email addresses allowed to register. You still need to create an account after deployment.
- **`BETTER_AUTH_SECRET`** protects authentication data; **`SYNC_TOKEN_SECRET`** signs and verifies sync access tokens. Keep both secrets across restarts, upgrades, and migrations. They are separate from your login and vault encryption passwords.
- **`/data`** must use persistent storage. The example uses the `synch-data` Docker volume.

Start the server, replacing the example IP in the health check:

```bash
docker compose pull
docker compose up -d
curl http://192.168.1.50:8787/health
```

### Connect Obsidian and update

1. Install and enable **Synchrun** from Obsidian's community plugins.
2. In Synchrun settings, set **Self-hosted server** to the same `PUBLIC_URL` and save.
3. Register with an allowed email address, sign in, and create or connect a remote vault. Use the same server and account on your other devices.

To update a deployment using `latest`, run `docker compose pull` and `docker compose up -d` again. For a pinned deployment, change the image tag first. Before upgrading, stop the service and back up its complete data volume and deployment configuration. Retain the data mount and both secrets; `docker compose down -v` deletes the data volume.

For **QNAP Container Station**, reverse proxy examples, and full parameter descriptions, see the [English and Chinese deployment guide](https://github.com/izillionways/synch/blob/main/docs/dockerhub-overview.md).

### Documentation and credits

- [Original project and contributors](https://github.com/hjinco/synch)
- [Upstream plugin releases](https://github.com/hjinco/synch/releases)
- [Upstream self-hosting documentation](https://synch.run/self-hosting-docker)
- [Docker Hub image and usage guide](https://hub.docker.com/r/zillionways/synch)
- [Build and publishing automation documentation (Chinese)](https://github.com/izillionways/synch/blob/main/docs/dockerhub-automation.zh-CN.md)
- [MIT License](https://github.com/izillionways/synch/blob/main/LICENSE) — the upstream license and copyright notices are retained.

---

## 中文

### 这个 fork 做了什么

本仓库 fork 自 **[hjinco/synch](https://github.com/hjinco/synch)**，用于将 Synch 服务端构建成 Docker 镜像，并发布到 **[Docker Hub：zillionways/synch](https://hub.docker.com/r/zillionways/synch)**。

**未修改上游应用代码。** 本仓库新增的内容是版本监测、上游同步、Docker 镜像构建与发布工作流、发布记录和部署文档。镜像使用上游的 `apps/api/Dockerfile`，从上游正式 Release 对应的准确提交构建。

Synch 和 Synchrun 的功能由 **hjinco 及上游贡献者**开发，本仓库负责镜像打包和发布自动化。功能介绍、插件版本及使用中的功能问题，请参阅[上游项目](https://github.com/hjinco/synch)。这里提供的是社区构建镜像，并非 Obsidian 官方发布的镜像。

### Synch 和 Synchrun 是什么

**Synch** 是面向 Obsidian 的开源端到端加密同步项目，**Synchrun** 是它在 Obsidian 社区插件中的名称。两者配合可在多台设备间同步笔记和附件，并提供加密版本历史与冲突处理。

本镜像包含 **Synch 自托管服务端**。你需要在 Obsidian 中单独安装 Synchrun，再连接到自己的服务器。默认配置将数据库和加密附件保存在本地磁盘，可部署在 NAS、家庭服务器或 VPS 上，无须另外部署数据库服务。

### 镜像信息

| 项目 | 内容 |
| --- | --- |
| 镜像名称 | `zillionways/synch` |
| 最近成功构建的正式版本 | `zillionways/synch:latest` |
| 固定版本 | `zillionways/synch:<版本号>`，例如 `zillionways/synch:0.4.7` |
| 支持架构 | `linux/amd64`、`linux/arm64` |
| 容器端口 | `8787/tcp` |
| 持久化数据目录 | `/data` |

GitHub Actions 每小时检查上游的新正式版本，同步 fork 和版本标签，并自动构建、发布镜像。发布前执行启动检查，定时调度可能延迟。镜像发布后，已经运行的容器仍需自行更新。

### 使用镜像

分别执行下面的命令两次，生成 **两个独立随机密钥**：

```bash
openssl rand -hex 32
```

创建 `compose.yaml`，启动前替换访问地址、邮箱和两个密钥占位符：

```yaml
version: "3.8"

services:
  synch-api:
    image: zillionways/synch:latest
    container_name: synch-api
    restart: unless-stopped
    ports:
      - "8787:8787"
    environment:
      TZ: Asia/Shanghai
      HOST: "0.0.0.0"
      PORT: "8787"
      DATA_DIR: /data
      PUBLIC_URL: "http://192.168.1.50:8787"
      AUTH_ALLOWED_EMAILS: "you@example.com"
      BETTER_AUTH_SECRET: "REPLACE_WITH_FIRST_RANDOM_SECRET"
      SYNC_TOKEN_SECRET: "REPLACE_WITH_SECOND_RANDOM_SECRET"
    volumes:
      - synch-data:/data

volumes:
  synch-data:
```

- **`PUBLIC_URL`** 是客户端实际访问的完整地址。局域网直连时填写服务器 IP 和端口；如果 `https://sync.example.com` 反代到 `http://192.168.1.50:8787`，这里应填 **`https://sync.example.com`**。使用非默认外部端口时需包含端口，末尾不加 `/`。容器仍监听 `8787`；公网访问应使用 HTTPS，并让反向代理转发 WebSocket 连接。
- **`AUTH_ALLOWED_EMAILS`** 是允许注册的邮箱白名单，多个邮箱用英文逗号分隔；部署后仍需自行注册账户。
- **`BETTER_AUTH_SECRET`** 用于保护登录认证数据，**`SYNC_TOKEN_SECRET`** 用于签发和校验同步访问令牌。重启、升级和迁移时保留原值；它们与登录密码、vault 加密密码分别独立。
- **`/data`** 必须持久化，示例使用 `synch-data` Docker 数据卷。

启动并检查服务，健康检查中的 IP 请替换成实际服务器地址：

```bash
docker compose pull
docker compose up -d
curl http://192.168.1.50:8787/health
```

### 连接 Obsidian 与更新

1. 在 Obsidian 社区插件中安装并启用 **Synchrun**。
2. 打开 Synchrun 设置，将 **Self-hosted server** 设为与服务端一致的 `PUBLIC_URL`，保存。
3. 使用白名单中的邮箱注册并登录，创建或连接远程 vault；其他设备使用相同的服务器地址与账户。

使用 `latest` 时，再次执行 `docker compose pull` 和 `docker compose up -d` 即可更新；固定版本时先修改镜像标签。升级前先停止服务并备份完整数据卷和部署配置。保留原有数据挂载和两个密钥；`docker compose down -v` 会删除数据卷。

**QNAP Container Station** 部署、反向代理示例及完整参数说明，见[中英文部署指南](https://github.com/izillionways/synch/blob/main/docs/dockerhub-overview.md)。

### 文档与致谢

- [原始项目与贡献者](https://github.com/hjinco/synch)
- [上游插件版本发布](https://github.com/hjinco/synch/releases)
- [上游自托管文档](https://synch.run/zh-cn/self-hosting-docker/)
- [Docker Hub 镜像与使用说明](https://hub.docker.com/r/zillionways/synch)
- [镜像自动构建与发布说明](https://github.com/izillionways/synch/blob/main/docs/dockerhub-automation.zh-CN.md)
- [MIT License](https://github.com/izillionways/synch/blob/main/LICENSE) — 保留上游许可证和版权声明。
