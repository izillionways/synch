# Synch — Self-hosted Obsidian sync / Obsidian 自托管同步服务

**Language / 语言:** [English](#english) | [简体中文](#中文)

## English

`zillionways/synch` is a community build of the [hjinco/synch](https://github.com/hjinco/synch) server. Use it with the **Synchrun** Obsidian plugin to sync notes and attachments with end-to-end encryption. It runs on a NAS, home server, or VPS and is not an official Obsidian service.

- **Platforms:** `linux/amd64`, `linux/arm64`.
- **Port:** `8787/tcp`; health endpoint: `GET /health`.
- **Data directory:** `/data`, containing account databases, vault databases, and encrypted attachments. Mount persistent storage here.
- **Storage:** local disk by default; no separate database server or Cloudflare services required.
- **Source and builds:** [izillionways/synch](https://github.com/izillionways/synch) · [GitHub Actions](https://github.com/izillionways/synch/actions/workflows/dockerhub.yml).

### Image tags and releases

| Tag | Meaning |
| --- | --- |
| `latest` | The most recent upstream stable release successfully built by this repository |
| A version, such as `0.4.7` | Built from the matching upstream Release; use this to pin a version |

GitHub Actions checks for upstream stable releases every hour. When a new release appears, it syncs the source and Git tag, builds from that release's exact commit, and publishes the version tag and `latest` for both architectures after the startup check passes. Unchanged releases are not rebuilt. Scheduled runs may be delayed.

Running containers need to pull the new image and be recreated after publication; see "Updates and backups" below.

### Quick start

Create `compose.yaml` and replace the **client-facing URL, email address, and both secrets** before starting. This example uses direct LAN access. If you use a reverse proxy, set `PUBLIC_URL` to the address clients use to reach that proxy:

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

Run this command twice to generate two independent secrets, then copy each result into its corresponding setting:

```bash
openssl rand -hex 32
```

Start the service and check its status:

```bash
docker compose up -d
docker compose logs --tail=100 synch-api
curl http://192.168.1.50:8787/health
```

Replace the example LAN address `192.168.1.50` with your server's actual IP address.

### Required settings

| Setting | Purpose and value |
| --- | --- |
| `PUBLIC_URL` | The full URL clients actually use, either a direct LAN address or an HTTPS domain served by a reverse proxy. Include the scheme and any non-default external port, with no trailing `/`. A mismatch can cause login to fail Origin validation. |
| `AUTH_ALLOWED_EMAILS` | Comma-separated email addresses allowed to register. You still need to register an account; removing an address does not disable an existing account. |
| `BETTER_AUTH_SECRET` | The server secret used to sign and encrypt authentication data. |
| `SYNC_TOKEN_SECRET` | The server secret used to sign and verify short-lived tokens that authorize client sync access. |

For example, if `https://sync.example.com` proxies to `http://192.168.1.50:8787`, set `PUBLIC_URL: "https://sync.example.com"` and use `https://sync.example.com` in Obsidian too. The container still listens on `8787`. Do not append `:8787` to a domain using the default HTTPS port; include the external port if your proxy uses a custom port such as `8443`.

Generate the two server secrets independently and keep them unchanged across restarts, upgrades, and migrations. They are separate from your login password and vault encryption password. Replacing them can invalidate existing sessions or sync tokens. Keep your deployment configuration and vault encryption password safe, and never commit real secrets to a public repository.

### Deploy on QNAP Container Station

For Docker-capable **x86-64 or ARM64** QNAP devices:

1. Open **Container Station → Applications → Create**, paste the complete Compose example above, and fill in your URL, email, and secrets.
2. For direct LAN access, use `http://NAS-IP:8787` as `PUBLIC_URL`. For reverse proxy access, use its full external URL, such as `https://sync.example.com`. Make sure port `8787` is available on the NAS for the port mapping.
3. To store data in a specific shared folder, create the directory first, replace the service's volume mount with the example below, and remove the now-unused top-level `volumes` block:

   ```yaml
   volumes:
     - /share/Container/synch/data:/data
   ```

   Use your NAS's actual shared-folder path and ensure the container can write to it.

4. Validate the YAML, create the application, and check `/health` to confirm the service is available.

If you use QNAP `qnet` to assign the container its own LAN IP, configure the network using your NAS's interface, subnet, and gateway, and remove `ports`. For direct access, use `http://CONTAINER-IP:8787` as `PUBLIC_URL`. With a reverse proxy, keep its external URL as `PUBLIC_URL` and point the proxy to the container's IP on port `8787`. Synch does not require privileged mode, Transmission's `PUID` or `PGID` variables, or a Transmission Web UI mount.

### Connect Obsidian

1. Install and enable **Synchrun** in Obsidian's community plugins.
2. Open the plugin settings, enter your deployment's `PUBLIC_URL` under **Self-hosted server**, and save.
3. Register and sign in with an allowed email address, then follow the plugin's instructions to create or connect a remote vault.
4. On other devices, use the same server URL and account, connect the corresponding vault, and enter its encryption password when required.

HTTP can be used on a local network. For internet access, configure an HTTPS reverse proxy that also forwards WebSocket connections, and set `PUBLIC_URL` to the actual HTTPS URL.

### Updates and backups

When using `latest`, run these commands in the directory containing your Compose file:

```bash
docker compose pull
docker compose up -d
```

If you pin a version, first change the `image` tag to the desired version. On QNAP, pull the new image and recreate the application in Container Station, retaining the existing data mount, environment variables, and network settings.

Before upgrading, stop the service, back up the entire `/data` directory and deployment configuration, then start the service again. Database migrations run at startup. When moving to another NAS, restore the data directory and both original secrets together. Do not run `docker compose down -v`, which deletes the data volume.

### Documentation and license

- [Upstream project and releases](https://github.com/hjinco/synch/releases)
- [Upstream self-hosting guide](https://synch.run/self-hosting-docker)
- [Image publishing workflow guide (Chinese)](https://github.com/izillionways/synch/blob/main/docs/dockerhub-automation.zh-CN.md)
- [MIT License](https://github.com/hjinco/synch/blob/main/LICENSE)

---

## 中文

`zillionways/synch` 是 [hjinco/synch](https://github.com/hjinco/synch) 服务端的社区构建镜像，配合 Obsidian 的 **Synchrun** 插件，实现笔记与附件的端到端加密同步。可部署在 NAS、家庭服务器或 VPS 上；不属于 Obsidian 官方服务。

- **平台**：`linux/amd64`、`linux/arm64`。
- **端口**：`8787/tcp`；健康检查：`GET /health`。
- **数据目录**：`/data`，存放账户数据库、vault 数据库与加密附件，必须持久化。
- **存储**：默认使用本地磁盘，无须额外部署数据库或 Cloudflare 服务。
- **源码与构建记录**：[izillionways/synch](https://github.com/izillionways/synch) · [GitHub Actions](https://github.com/izillionways/synch/actions/workflows/dockerhub.yml)。

### 镜像标签与版本更新

| 标签 | 含义 |
| --- | --- |
| `latest` | 本仓库最近成功构建的上游正式版本 |
| 版本号，例如 `0.4.7` | 对应上游同名 Release 的源码，可用于固定版本 |

GitHub Actions 每小时检查一次上游正式 Release，发现新版本后同步源码与 Git Tag，并从该版本的准确提交构建镜像。通过启动检查后发布两个架构的版本标签和 `latest`；没有新版本时不重复构建。调度可能延迟。

镜像发布后，已运行的容器需要自行拉取新镜像并重建，见下方“更新与备份”。

### 快速部署

创建 `compose.yaml`，将 **客户端访问地址、邮箱和两个密钥** 替换为自己的配置后启动。下面以局域网直连为例；使用反向代理时，`PUBLIC_URL` 填反向代理对外提供的访问地址：

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

分别执行下面的命令两次，得到两个独立密钥，填入上面的配置：

```bash
openssl rand -hex 32
```

启动并检查服务：

```bash
docker compose up -d
docker compose logs --tail=100 synch-api
curl http://192.168.1.50:8787/health
```

示例中的 `192.168.1.50` 代表服务器的局域网 IP，请替换成实际地址。

### 必填参数

| 参数 | 作用与填写方式 |
| --- | --- |
| `PUBLIC_URL` | 客户端实际访问的完整地址，可以是局域网直连地址，也可以是反向代理后的 HTTPS 域名。包括协议及实际访问端口，末尾不加 `/`。必须与访问地址一致，否则登录可能因 Origin 校验失败。 |
| `AUTH_ALLOWED_EMAILS` | 允许注册的邮箱白名单；多个邮箱用英文逗号分隔。填写后仍需自行注册账户；从白名单移除邮箱不会禁用已存在的账户。 |
| `BETTER_AUTH_SECRET` | 登录认证所用的服务端密钥，用于认证数据的签名与加密。 |
| `SYNC_TOKEN_SECRET` | 签发、校验短期同步访问令牌的服务端密钥，用于验证客户端的同步权限。 |

例如，将 `https://sync.example.com` 反向代理到 `http://192.168.1.50:8787` 时，应填写 `PUBLIC_URL: "https://sync.example.com"`，Obsidian 的服务器地址也填 `https://sync.example.com`。容器内部仍监听 `8787`，使用 HTTPS 默认端口时访问域名无须加上 `:8787`；如果反向代理对外使用 `8443` 等自定义端口，则地址中应包含该端口。

两个服务端密钥应独立随机生成，并在重启、升级和迁移时保留。它们与登录密码、vault 的端到端加密密码分别独立；更换服务端密钥会影响已有登录状态或同步令牌的验证。请妥善保存部署配置和 vault 加密密码，不要把真实密钥提交到公开仓库。

### 在 QNAP Container Station 部署

适用于支持 Docker 的 **x86-64 或 ARM64** QNAP：

1. 在 **Container Station → 应用程序 → 创建** 中粘贴上面的完整 Compose，并填写实际地址、邮箱与密钥。
2. 局域网直连时，`PUBLIC_URL` 填 `http://NAS局域网IP:8787`；通过反向代理访问时，填写代理对外提供的完整地址，例如 `https://sync.example.com`。确认映射到 NAS 的 `8787` 端口未被占用。
3. 如需把数据放在指定共享目录，先创建目录，将服务中的挂载改为下面的示例，并删除末尾不再使用的顶层 `volumes` 块：

   ```yaml
   volumes:
     - /share/Container/synch/data:/data
   ```

   共享目录路径以自己的 NAS 为准，容器必须有写入权限。

4. 校验 YAML 后创建应用，访问 `/health` 确认服务可用。

如使用 QNAP `qnet` 为容器分配独立局域网 IP，需要按 NAS 实际网卡、子网和网关配置网络，并移除 `ports`。直连时 `PUBLIC_URL` 填 `http://容器IP:8787`；通过反向代理访问时，仍填写代理对外提供的地址，并将代理目标指向该容器 IP 的 `8787` 端口。Synch 本身无须开启特权模式，也不需要 Transmission 的 `PUID`、`PGID` 或 Web UI 挂载。

### 连接 Obsidian

1. 在 Obsidian 社区插件中安装并启用 **Synchrun**。
2. 打开插件设置，在 **Self-hosted server** 中填写与部署配置一致的 `PUBLIC_URL`，保存。
3. 使用白名单中的邮箱注册并登录，按插件提示创建或连接远程 vault。
4. 在其他设备使用同一服务器地址和账户，连接对应 vault，并输入所需的加密密码。

局域网可使用 HTTP。公网访问应配置 HTTPS 反向代理，同时转发 WebSocket 连接，并将 `PUBLIC_URL` 改为实际的 HTTPS 地址。

### 更新与备份

使用 `latest` 时，在 Compose 所在目录运行：

```bash
docker compose pull
docker compose up -d
```

固定版本时，先将 `image` 的标签改为所需版本。QNAP 用户可在 Container Station 中拉取新镜像并重新创建应用，保留原有数据挂载、环境变量和网络配置。

升级前先停止服务并备份完整 `/data` 数据目录及部署配置，再启动服务。数据库迁移会在启动时执行。迁移到新 NAS 时，一并恢复数据目录与原有两个密钥；不要执行会删除数据卷的 `docker compose down -v`。

### 文档与许可

- [上游项目与版本发布](https://github.com/hjinco/synch/releases)
- [上游自托管部署文档](https://synch.run/zh-cn/self-hosting-docker/)
- [本镜像的自动发布说明](https://github.com/izillionways/synch/blob/main/docs/dockerhub-automation.zh-CN.md)
- [MIT License](https://github.com/hjinco/synch/blob/main/LICENSE)
