---
title: "Windows PC와 iPhone에서 Obsidian 노트 동기화하기"
description: "Windows PC와 iPhone에서 Obsidian 노트를 안전하게 동기화하는 방법. iCloud에서 옮기기 전 백업부터 첫 동기화 확인까지 안내합니다."
pubDate: 2026-09-30
draft: false
---

Windows PC에서 쓰던 Obsidian 노트를 iPhone에서도 보고 편집하려면, **두 기기의 Obsidian에서 모두 쓸 수 있는 동기화 방법**이 필요합니다. 공식 기능 중에서는 Obsidian Sync가 가장 간단합니다. 종단 간 암호화를 지원하는 Synch는 커뮤니티 플러그인으로 이용할 수 있습니다. 다른 플러그인이나 Git도 가능하지만 직접 설정할 부분이 많습니다.

Windows의 iCloud Drive에 vault를 넣으면 iPhone에서도 바로 열 수 있을 것 같습니다. 하지만 Obsidian은 [공식 동기화 안내](https://obsidian.md/help/sync-notes)에서 Windows용 iCloud Drive가 파일 중복이나 손상을 일으킬 수 있다고 경고합니다. iCloud는 Mac과 iPhone처럼 Apple 기기끼리 쓸 때 더 적합합니다.

아래에서 방법별 차이를 살펴보고, 기존 vault를 안전하게 옮긴 뒤 첫 동기화가 제대로 됐는지 확인해 보겠습니다.

![암호화된 동기화 연결을 통해 같은 노트를 표시하는 Windows 노트북과 iPhone](./windows-iphone-sync.webp)

## 어떤 방법을 선택해야 할까요?

| 방법 | 적합한 경우 | 알아둘 점 |
| --- | --- | --- |
| **Obsidian Sync** | 공식 기능으로 간편하게 연결하고 싶을 때 | 유료 구독이 필요합니다. 원격 vault를 만들 때 종단 간 암호화를 선택할 수 있습니다 |
| **Synch** | 작은 vault용 무료 플랜이 있는 암호화 서비스를 원할 때 | 두 기기 모두 Synchrun 커뮤니티 플러그인을 설치해야 합니다 |
| **Remotely Save** | 지원되는 저장소를 이미 쓰고 있고 직접 설정하고 싶을 때 | 설정과 작동 방식이 저장소와 플러그인 설정에 따라 달라집니다 |
| **iOS용 Git 앱과 Git** | Git에 익숙하고 수동으로 버전을 관리하고 싶을 때 | pull, commit, push, 충돌 해결을 직접 해야 합니다 |

Windows PC와 iPhone을 오가며 쓴다면 Obsidian Sync나 Synch부터 살펴보세요. 두 서비스 모두 각 기기에 있는 Obsidian vault를 원격 vault에 연결합니다. iPhone에서 Windows의 클라우드 폴더를 억지로 Obsidian vault로 열 필요가 없습니다.

Google Drive와 OneDrive는 Windows 파일 관리에는 편리하지만, iOS에서 Obsidian vault 폴더를 간단하게 공식 지원하는 방법을 제공하지는 않습니다. Syncthing도 iOS에서 추가 도구가 필요합니다. 이런 방식으로 구성하기 전에 [Obsidian의 플랫폼별 안내](https://obsidian.md/help/sync-notes)를 확인하세요.

## 기기를 연결하기 전에 vault 보호하기

**어느 기기에 최신 노트가 있는지 먼저 확인하세요.** 두 기기에서 이미 편집했다면 새 원격 vault에 연결하기 전에 최근 노트와 첨부 파일을 비교해야 합니다. Windows 폴더가 살펴보기 쉽다고 해서 최신 파일이 모두 그곳에 있는 것은 아닙니다.

어느 사본이 최신인지 확인했다면 다음 순서로 진행하세요.

1. 기존 동기화 서비스의 대기 중인 다운로드가 끝날 때까지 기다립니다.
2. 첨부 파일과 `.obsidian` 폴더를 포함해 완전한 vault를 별도로 복사합니다. 백업은 iCloud, OneDrive 또는 새 동기화 서비스가 관리하는 폴더 밖에 둡니다.
3. 백업을 열어 최근 노트와 첨부 파일 몇 개가 있는지 확인합니다.
4. 새 방법을 설정하는 동안 백업은 수정하지 않습니다.

동기화가 백업을 대신하지는 않습니다. 한 기기에서 노트를 실수로 삭제하면 그 삭제도 다른 기기에 반영될 수 있습니다. Obsidian도 [별도 백업을 권장](https://obsidian.md/help/backup)합니다.

![사용 중인 vault와 외장 드라이브 옆에 따로 보관한 백업 사본](./vault-backup.webp)

### 현재 Windows에서 iCloud로 vault를 동기화한다면

백업을 만든 뒤 Windows에서 **iCloud Drive 폴더 밖에 vault의 새 로컬 사본**을 만들고 Obsidian으로 여세요. 새 동기화 서비스에는 이 사본을 연결합니다. iPhone에서도 기존 iCloud vault에 동기화 서비스를 하나 더 붙이지 말고 새 로컬 vault를 만드세요.

새 설정을 확인할 때까지 이전 iCloud 사본을 참고용으로 보관하세요. 다만 두 사본을 계속 편집하면 노트가 서로 다른 두 버전으로 갈라집니다. Obsidian은 [한 vault에서 여러 동기화 서비스를 섞어 쓰지 말라](https://obsidian.md/help/sync-notes)고 안내합니다.

iPhone에만 남아 있는 변경 사항은 첫 업로드 **전에** 새 작업용 사본에 반영하세요. 같은 노트가 기기마다 다르다면 내용을 직접 비교해 어느 버전을 남길지 결정해야 합니다.

## 방법 1: Obsidian Sync 설정하기

[Obsidian Sync](https://obsidian.md/sync)는 Obsidian에 내장되어 있고 Windows와 iOS를 지원합니다. Obsidian 계정과 Sync 구독이 필요합니다.

Windows에서:

1. 완전한 로컬 작업 vault를 엽니다. 아직 iCloud Drive 안에 있다면 먼저 위에서 설명한 별도 로컬 사본으로 옮깁니다.
2. **Settings → General → Account**에서 로그인하고 **Sync** 코어 플러그인을 활성화합니다.
3. **Settings → Sync**에서 원격 vault를 만듭니다. 종단 간 암호화를 원한다면 암호화 비밀번호를 설정하세요. 계정 비밀번호와는 별개이므로 안전한 곳에 보관해야 합니다.
4. 선택적 동기화와 vault 설정 동기화 항목을 검토하고 동기화를 시작합니다. **Fully Synced**가 표시될 때까지 기다립니다.

iPhone에서:

1. Obsidian의 vault 선택 화면에서 **Setup Obsidian Sync**를 선택합니다. 방금 업로드한 원격 vault로 새 로컬 vault를 만듭니다.
2. 로그인하고 원격 vault를 선택한 뒤, 요청받으면 암호화 비밀번호를 입력합니다.
3. iPhone의 동기화 설정을 검토하고 첫 다운로드가 끝난 다음 편집을 시작합니다.

Obsidian의 [설정 안내](https://obsidian.md/help/sync/setup)에는 현재 화면별 절차와 상태 표시, 설정 동기화 선택지가 나와 있습니다. iPhone에서 새 로컬 vault를 사용하면 업로드한 파일과 오래된 iCloud 사본이 섞이는 일을 피할 수 있습니다.

## 방법 2: Synch 설정하기

Synch는 데스크톱과 모바일 Obsidian에서 **Synchrun** 커뮤니티 플러그인을 사용합니다. vault 데이터는 업로드 전에 기기에서 암호화됩니다. 작은 vault를 위한 무료 플랜을 포함해 호스팅 플랜을 제공합니다. 첨부 파일이 크다면 [현재 플랜](https://synch.run/pricing)의 제한을 확인하세요.

Windows에서:

1. 다른 동기화 서비스의 관리 폴더 밖에 있는 완전한 로컬 작업 vault를 엽니다.
2. **Settings → Community plugins**에서 **Synchrun**을 찾아 설치하고 활성화합니다.
3. 플러그인 설정에서 로그인한 다음 **Create vault**를 선택합니다.
4. vault 비밀번호를 설정하고 안전하게 보관합니다. Obsidian을 열어 둔 채 첫 업로드가 끝날 때까지 기다립니다.

iPhone에서:

1. Obsidian에서 새로운 빈 로컬 vault를 만듭니다. 기존 iCloud 관리 사본을 이 연결에 재사용하지 마세요.
2. 커뮤니티 플러그인에서 **Synchrun**을 설치·활성화하고 같은 계정으로 로그인합니다.
3. **Connect vault**를 선택하고 원격 vault를 고른 뒤 vault 비밀번호를 입력합니다.
4. 첫 다운로드가 끝날 때까지 Obsidian을 열어 둡니다. 새로 편집하기 전에 최근 노트와 첨부 파일을 확인하세요.

[Synch 프로젝트 안내](https://github.com/hjinco/synch#get-started)에서 현재 플러그인 설치 절차를 볼 수 있습니다. vault 비밀번호는 다른 기기에서 암호화된 데이터를 여는 데 필요하므로 안전하게 보관하세요. 자세한 방식은 [Synch의 vault 암호화와 잠금 해제 설명](/ko/blog/encryption-and-decryption/)을 참고하세요.

## 첫 동기화를 양방향으로 확인하기

로그인만 됐다고 동기화가 끝난 것은 아닙니다. 노트가 양쪽으로 오가는지 직접 확인하세요.

1. iPhone에서 Windows에 있던 최근 노트 두 개와 첨부 파일 하나를 엽니다.
2. Windows에서 짧은 테스트 노트를 만듭니다. 동기화가 끝나면 iPhone에 나타나는지 확인합니다.
3. iPhone에서 다른 테스트 노트를 만듭니다. 동기화가 끝날 때까지 Obsidian을 열어 두고 Windows에 나타나는지 확인합니다.
4. 파일 이름만 보지 말고 두 테스트 노트의 내용도 비교합니다.
5. 중복 파일이나 충돌 파일이 있는지 확인하고, 있다면 삭제하기 전에 내용을 검토합니다.

`.obsidian` 폴더도 동기화한다면 필요한 플러그인과 설정이 iPhone에서 작동하는지 확인하세요. 데스크톱과 모바일에서는 다른 화면 배치나 플러그인 동작이 필요할 수 있습니다. 노트와 첨부 파일의 동기화가 안정된 뒤 어떤 설정을 공유할지 정해도 됩니다.

![첫 동기화 후 노트와 이미지 첨부 파일이 일치하는 노트북과 휴대폰](./first-sync-check.webp)

## 고려할 만한 다른 방법

**Remotely Save**는 양쪽 기기의 Obsidian을 사용자가 고른 저장소에 연결할 수 있습니다. 저장 위치를 더 자유롭게 선택할 수 있지만, 저장소의 호환성, 암호화 설정, 충돌 처리 방식은 직접 확인해야 합니다. 자세한 내용은 [Remotely Save 안내](/ko/blog/obsidian-remotely-save/)를 보세요.

**Git**은 변경 사항을 pull하고 push하는 데 익숙하다면 사용할 수 있습니다. iPhone에서는 Working Copy 같은 Git 앱과 수동 작업이 추가됩니다. 의도적으로 버전을 관리할 때는 유용하지만, 휴대폰에서 노트를 빠르게 적을 때는 번거로울 수 있습니다. Git을 선호한다면 [Obsidian Git 안내](/ko/blog/obsidian-git-sync/)를 참고하세요.

**하나의 vault를 두 동기화 서비스에 동시에 연결하지 마세요.** 다른 위치에 백업을 두는 것은 괜찮지만, 두 서비스가 같은 작업 폴더를 관리하면 변경 사항이 충돌할 수 있습니다. 노트가 중복되거나 사라진 것처럼 보이면 일단 편집을 멈추고 두 기기의 파일과 백업을 확인하세요. 필요한 경우 [동기화 충돌 안내](/ko/blog/obsidian-sync-conflicts/)를 참고하세요.

## Windows와 iPhone 동기화 FAQ

### Windows와 iPhone에서 Obsidian을 무료로 동기화할 수 있나요?

vault 크기와 감당할 수 있는 설정 작업에 따라 가능합니다. Synch에는 작은 vault를 위한 무료 플랜이 있습니다. 커뮤니티 플러그인이나 Git은 이미 쓰는 서비스를 이용할 수도 있지만 저장 공간이나 앱 기능에 별도 제한이 있을 수 있습니다. Obsidian Sync는 유료 서비스입니다. 큰 vault를 옮기기 전에 현재 플랜 제한을 확인하세요.

### Windows와 iPhone에서 Obsidian에 iCloud를 써도 되나요?

Windows에서 iCloud Drive 폴더를 열 수는 있지만, Obsidian은 [Windows용 iCloud Drive가 파일을 중복시키거나 손상시킬 수 있다고 경고](https://obsidian.md/help/sync-notes)합니다. 두 기기에서 모두 편집하는 vault라면 Windows와 iOS를 연결하도록 설계된 방법을 사용하고 별도 백업을 보관하세요.

### iPhone 노트가 Windows에 나타나지 않는 이유는 무엇인가요?

먼저 두 기기가 **같은 원격 vault**에 연결되어 있는지, 첫 동기화가 끝났는지 확인하세요. iPhone에서는 변경 사항의 업로드가 끝날 때까지 Obsidian을 열어 두어야 합니다. 빠진 노트가 이전 iCloud vault에만 있다면 새 vault로 자동 이동하지 않습니다. 이전 사본을 정리하기 전에 해당 노트를 확인해 옮기세요.

### `.obsidian` 폴더도 동기화해야 하나요?

이 폴더에는 플러그인, 테마, 작업 공간 설정 등이 있습니다. 일부를 동기화하면 기기 간 환경이 비슷해지지만 데스크톱 설정이 모바일에 맞지 않을 수 있습니다. 먼저 노트와 첨부 파일이 제대로 동기화되는지 확인한 다음, 두 기기에서 필요한 설정 파일을 선택하세요.

## 가장 안전하게 시작하는 방법

처음 설정한다면 공식 기능을 원하는 경우 **Obsidian Sync**, 종단 간 암호화를 지원하는 커뮤니티 플러그인 방식을 원하는 경우 **Synch**가 좋습니다. 어느 방법이든 빠진 파일이 없는 vault와 별도 백업을 준비하세요. iPhone에는 새 로컬 vault를 연결하고, 양쪽에서 만든 테스트 노트가 모두 도착한 것을 확인한 뒤 사용을 시작하면 됩니다.
