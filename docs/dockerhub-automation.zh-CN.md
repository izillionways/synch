# 自动同步上游并发布 Docker Hub 镜像

Fork：<https://github.com/izillionways/synch>。镜像：`zillionways/synch`。构建文件：`.github/workflows/dockerhub.yml`。

- 每小时第 23 分钟（UTC）查询 `hjinco/synch` 的最新正式版 Release，跳过草稿和预发布版。
- 检测到新版本后，使用 GitHub 官方同步接口合并上游 `main` 到 fork，保留 fork 的自动化文件；冲突会使任务失败，不会强制覆盖。
- 每次检查都会同步最新正式版的 Git Tag，并核对它与镜像使用的源码提交一致。标签冲突时停止，不强制覆盖；GitHub Release 页面及其插件附件不会复制到 fork。
- 镜像始终从该 Release 标签对应的准确提交构建。即使 `main` 有尚未发布的提交，也不会混入版本镜像。
- 复用上游 `apps/api/Dockerfile`，构建 `linux/amd64` 和 `linux/arm64`，发布 `版本号` 和 `latest` 标签。
- 发布前启动 amd64 容器并检查 `/health`；发布后查询镜像清单，成功后才记录版本。失败时下次检查会重试。
- 没有新版本时不重复构建。每 30 天无提交时添加一次空提交，避免 GitHub 的 60 天无活动停用定时任务限制。

## 一次性设置

在 fork 的 **Settings → Secrets and variables → Actions** 中配置：

| 类型 | 名称 | 值 |
| --- | --- | --- |
| Variable | `DOCKERHUB_USERNAME` | `zillionways`（已配置） |
| Secret | `DOCKERHUB_TOKEN` | Docker Hub Personal Access Token，具备目标仓库的读写权限 |
| Variable（可选） | `DOCKERHUB_IMAGE` | 完整镜像名，例如 `组织名/synch`；默认 `DOCKERHUB_USERNAME/synch` |

在 Docker Hub 中准备对应的镜像仓库。Token 只放在 GitHub Secret 中。

在 **Actions → Sync upstream and publish Docker Hub** 中启用工作流，再点击 **Run workflow**：

- `publish = true`：构建并发布（默认）。
- `publish = false`：无 Docker Hub 凭据时验证构建和启动；会同步 fork，但不推送镜像、不记录已发布版本。
- `force = true`：强制重新构建当前最新正式版。

之后由 GitHub Actions 定时运行，不依赖本机或 Codex 保持开启。GitHub 调度可能延迟，不保证整点准时。可在 Actions 页面查看失败记录。

同步和记录版本使用工作流自带的 `GITHUB_TOKEN`（`contents: write`），无须额外的 GitHub 个人 Token。上游同步与构建在同一次工作流中完成，不依赖机器人提交触发另一条工作流。

## 使用发布的镜像

在服务器上准备 `.env`（参照上游 `apps/api/.env.example`），填写 `PUBLIC_URL`、两个独立随机生成的 `BETTER_AUTH_SECRET` / `SYNC_TOKEN_SECRET`，以及 `AUTH_ALLOWED_EMAILS`。

创建 `compose.yml`：

```yaml
services:
  synch-api:
    image: zillionways/synch:latest
    restart: unless-stopped
    ports:
      - "8787:8787"
    env_file: .env
    volumes:
      - synch-data:/data

volumes:
  synch-data:
```

启动或更新：

```bash
docker compose pull
docker compose up -d
```

数据保存在 `synch-data` 卷中。互联网访问请配置 HTTPS 反向代理。随后在 Obsidian 的 Synchrun 插件中选择 **Self-hosted server**，填入服务器的 `PUBLIC_URL`。

这里的自动化负责发布镜像；服务器更新使用上面的命令执行。上游完整部署说明：<https://synch.run/zh-cn/self-hosting-docker/>。

## Docker Hub Overview

公开仓库说明保存在 [`dockerhub-overview.md`](dockerhub-overview.md)。修改该文件并推送到 `main` 后，`Update Docker Hub overview` 工作流会自动更新 Docker Hub 的简短介绍和 Overview，并核对公开内容与文档一致；也可以在 Actions 中手动运行。

此工作流复用 `DOCKERHUB_USERNAME` 和 `DOCKERHUB_TOKEN`。Overview 更新使用 Docker Hub 的仓库管理接口，Token 需要支持修改仓库信息；若镜像推送成功但说明更新出现 `403`，请检查 Token 权限。说明更新独立运行，无须重新构建镜像。

## 本地验证检测逻辑

```bash
node .github/scripts/dockerhub-release.mjs --test
```

覆盖首次发布、同版本跳过、新版本、标签指向变化、镜像仓库变更、强制重建和非法输入。
