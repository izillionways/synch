---
title: "Windows와 Android에서 Obsidian 동기화하는 방법"
description: "Windows와 Android 사이에서 Obsidian을 동기화하는 방법을 Obsidian Sync, Syncthing, 클라우드 드라이브, Git, Synch 중심으로 비교합니다."
pubDate: 2026-05-09
---

**Windows와 Android에서 Obsidian을 동기화하는 방법**을 찾고 있다면 결론은 비교적 단순합니다. 가장 쉬운 공식 방법을 원하면 Obsidian Sync를 쓰고, 무료 기술 설정을 감당할 수 있다면 Syncthing을 쓰고, 프라이버시 중심의 종단 간 암호화 동기화 대안을 원하면 Synch를 고려하면 됩니다.

Windows와 Android 조합은 Obsidian을 쓰기에 꽤 좋습니다. 두 플랫폼 모두 iOS보다 로컬 폴더 접근이 자유로워서 선택할 수 있는 동기화 방법이 많습니다.

하지만 모든 방법이 vault에 똑같이 안전한 것은 아닙니다.

Obsidian은 노트를 로컬 Markdown 파일로 저장합니다. vault에는 첨부 파일, 플러그인 설정, 테마, snippets, `.obsidian` 설정 폴더도 들어갈 수 있습니다. 동기화 도구는 이런 파일을 중복, 충돌, 깨진 설정 없이 옮길 수 있어야 합니다.

이 글은 Windows PC와 Android 휴대폰 사이에서 Obsidian을 동기화하는 방법에만 집중합니다.

![Windows 노트북과 Android 휴대폰 사이의 암호화된 Obsidian 동기화](./windows-android-encrypted-sync.webp)

## Windows와 Android에 맞는 선택지

| 방법 | 적합한 사용자 | 비용 | 프라이버시 | 난이도 |
| --- | --- | --- | --- | --- |
| Obsidian Sync | 공식 설정을 원하는 사용자 | 유료 | 종단 간 암호화 | 쉬움 |
| Synch | 무료 또는 저렴한 프라이빗 호스팅 동기화를 원하는 사용자 | 무료 및 유료 플랜 | 종단 간 암호화 | 쉬움 |
| Syncthing | 무료 기기 간 동기화를 원하는 기술 사용자 | 무료 | 프라이빗 P2P 동기화 | 보통 |
| Google Drive, Dropbox, OneDrive | 데스크톱 중심 워크플로 | 저장 용량 내에서 대체로 무료 | 제공자에 따라 다름 | 보통 |
| Git | 개발자와 기술 문서 작성자 | 호스팅에 따라 대체로 무료 | 원격 저장소에 따라 다름 | 어려움 |

대부분의 Windows와 Android 사용자는 실제로 세 가지 중 하나를 고르게 됩니다.

- 공식 서비스를 원하면 **Obsidian Sync**
- 무료 P2P 동기화와 설정 관리를 감당할 수 있으면 **Syncthing**
- 직접 동기화 시스템을 관리하지 않고 프라이빗 암호화 동기화를 원하면 **Synch**

![Windows와 Android 기기 사이의 세 가지 동기화 경로](./sync-methods-comparison.webp)

## 동기화 전: vault 백업하기

어떤 방법을 쓰든 먼저 Windows에서 Obsidian vault를 복사해 두세요.

vault는 폴더입니다. 동기화 폴더 밖의 별도 백업 폴더나 외장 드라이브에 복사하면 됩니다.

가장 위험한 순간은 첫 동기화입니다. 도구가 잘못된 폴더를 가리키거나, 한 기기를 비어 있는 기준으로 처리하거나, 충돌 파일을 만들 수 있습니다. 백업이 있으면 빠르게 복구할 수 있습니다.

`.obsidian` 설정 폴더를 동기화할지도 정해야 합니다. 동기화하면 플러그인, 테마, 단축키, 앱 설정이 기기 간 더 비슷하게 유지됩니다. 다만 데스크톱과 모바일에서 같은 설정이 항상 편한 것은 아닙니다.

![동기화를 설정하기 전에 Obsidian vault를 백업하는 모습](./vault-backup-before-sync.webp)

## 선택지 1: Obsidian Sync로 동기화하기

[Obsidian Sync](https://obsidian.md/sync)는 Obsidian을 여러 기기에서 동기화하는 공식 방법입니다.

Windows와 Android에서는 설정이 가장 단순합니다.

1. Windows에 Obsidian을 설치합니다.
2. 기존 vault를 열거나 새 vault를 만듭니다.
3. Obsidian Sync를 구독합니다.
4. remote vault를 만들거나 연결합니다.
5. Windows vault 업로드가 끝날 때까지 기다립니다.
6. Android에 Obsidian을 설치합니다.
7. 로그인한 뒤 같은 remote vault에 연결합니다.
8. Android에서 본격적으로 편집하기 전에 vault 다운로드가 끝날 때까지 기다립니다.

장점은 Obsidian Sync가 앱 안에 통합되어 있다는 점입니다. 종단 간 암호화, 버전 기록, 선택적 동기화를 지원하고, 범용 파일 동기화 도구보다 Obsidian을 더 잘 이해합니다.

단점은 비용입니다. 공식 서비스 비용을 받아들일 수 있다면 가장 쉬운 추천입니다.

## 선택지 2: Synch로 동기화하기

Synch는 Obsidian 사용자를 위한 오픈소스 종단 간 암호화 동기화 서비스입니다.

Google Drive, Dropbox, OneDrive 같은 범용 클라우드에 의존하지 않고, 직접 P2P 동기화 시스템을 관리하지 않아도 되는 프라이빗 호스팅 동기화를 목표로 합니다.

일반적인 흐름은 다음과 같습니다.

1. Windows에서 Synch Obsidian 플러그인을 설치합니다.
2. vault를 Synch에 연결합니다.
3. 첫 업로드가 끝날 때까지 기다립니다.
4. Android에 Obsidian을 설치합니다.
5. Android에서 Synch 플러그인을 설치하고 활성화합니다.
6. 같은 Synch vault에 연결합니다.
7. 두 기기에서 편집하기 전에 첫 다운로드가 끝날 때까지 기다립니다.

Synch는 Windows와 Android 환경에서 중요한 세 가지에 집중합니다.

- **종단 간 암호화**: vault 데이터는 업로드 전에 로컬에서 암호화됩니다.
- **Obsidian 호환성**: 일반 폴더가 아니라 Obsidian vault를 기준으로 동기화합니다.
- **접근 가능한 가격**: 작은 vault를 위한 무료 플랜과 더 큰 개인 사용을 위한 저렴한 Starter 플랜이 있습니다.

현재 Synch 무료 플랜은 동기화 vault 1개, 저장 용량 30 MB, 최대 파일 크기 3 MB, 버전 기록 1일을 제공합니다. Starter 플랜은 vault 1개, 저장 용량 1 GB, 최대 파일 크기 5 MB, 버전 기록 1개월을 제공합니다.

Synch는 Syncthing보다 단순하고, 범용 클라우드 드라이브보다 프라이버시에 집중한 선택지를 원하는 사용자에게 잘 맞습니다.

## 선택지 3: Syncthing으로 동기화하기

[Syncthing](https://syncthing.net/)은 Windows와 Android에서 많이 쓰이는 무료 선택지입니다.

Syncthing은 기기 사이에서 폴더를 직접 동기화합니다. 노트를 중앙 클라우드 드라이브에 둘 필요가 없기 때문에 프라이빗 P2P 설정을 원하는 사용자에게 매력적입니다.

일반적인 설정 흐름은 다음과 같습니다.

1. Windows에 Syncthing을 설치합니다.
2. Android에 Syncthing 호환 앱을 설치합니다.
3. Windows의 Syncthing에 Android 기기를 추가합니다.
4. Android의 Syncthing에 Windows 기기를 추가합니다.
5. Windows에서 Obsidian vault 폴더를 공유합니다.
6. Android에서 공유 폴더를 수락합니다.
7. Android Obsidian에서 동기화된 폴더를 vault로 엽니다.
8. 두 기기에서 노트를 편집하기 전에 동기화가 끝날 때까지 기다립니다.

Syncthing은 잘 설정하면 매우 좋지만 트레이드오프를 이해해야 합니다.

변경 사항을 주고받으려면 두 기기가 충분히 온라인 상태여야 합니다. Android 배터리 최적화 설정도 동기화 타이밍에 영향을 줄 수 있습니다. 두 기기가 아직 동기화되지 않았는데 같은 노트를 편집하면 충돌이 생길 수 있습니다.

무료 동기화를 원하고 직접 기기 설정을 관리할 수 있다면 Syncthing이 잘 맞습니다.

## 선택지 4: Google Drive, Dropbox, OneDrive 사용하기

클라우드 드라이브는 Windows에서 Obsidian을 동기화하기 쉽지만 Android에서 설정이 덜 깔끔해집니다.

Windows에서는 vault를 동기화 폴더 안에 넣으면 됩니다. 하지만 Android에서는 Obsidian이 안정적으로 접근할 수 있는 로컬 폴더가 필요합니다. 많은 클라우드 드라이브 앱은 항상 사용 가능한 일반 로컬 폴더처럼 동작하지 않기 때문에 추가 도구나 수동 다운로드 흐름이 필요할 수 있습니다.

주로 Windows에서 편집하고 Android에서는 가끔 읽기만 한다면 괜찮을 수 있습니다. 양방향 편집을 매끄럽게 하려는 경우에는 덜 적합합니다.

프라이버시도 고려해야 합니다. 별도 암호화 계층을 추가하지 않는다면 노트는 Obsidian 전용 종단 간 암호화 모델이 아니라 클라우드 제공자의 저장소 모델에 따라 보호됩니다.

vault가 단순하고 Android 파일 접근 제한을 이해하고 있을 때만 클라우드 드라이브를 선택하세요.

## 선택지 5: Git 사용하기

Markdown 파일은 버전 관리와 잘 맞기 때문에 Git으로 Obsidian 노트를 동기화할 수 있습니다.

Windows에서는 개발 도구를 이미 쓰고 있다면 Git 설정이 어렵지 않습니다. Android에서는 Git을 지원하는 앱이나 더 수동적인 워크플로가 필요합니다. 강력하지만 매일 쓰는 노트 동기화에는 불편할 수 있습니다.

Git이 좋은 경우는 다음과 같습니다.

- 명시적인 버전 기록
- 변경 사항 검토
- 이전 노트 버전 복구
- 개발자 워크플로

Git이 덜 맞는 경우는 다음과 같습니다.

- 자동 백그라운드 동기화
- 빠른 모바일 캡처
- 비기술 사용자
- merge conflict 피하기

이미 Git을 알고 있고 매끄러운 동기화보다 버전 관리를 더 원한다면 Git을 선택하세요.

## 대부분의 Windows와 Android 사용자에게 추천하는 설정

가장 적은 마찰과 공식 지원을 원한다면 Obsidian Sync를 선택하세요.

무료 설정을 원하고 기기 페어링, 폴더 공유, Android 배터리 설정을 관리할 수 있다면 Syncthing을 선택하세요.

Syncthing보다 단순한 흐름과 종단 간 암호화가 있는 프라이빗 호스팅 동기화를 원한다면 Synch를 선택하세요.

같은 vault에 여러 동기화 도구를 동시에 쓰지 마세요. 예를 들어 같은 vault를 OneDrive 안에 넣으면서 Syncthing이나 다른 Obsidian 동기화 서비스로도 동기화하면 충돌이 생기기 쉽습니다.

## 자주 생기는 Windows와 Android 동기화 문제

가장 흔한 문제는 첫 동기화가 끝나기 전에 편집하는 것입니다. 새 Android 기기를 연결했다면 전체 vault가 다운로드될 때까지 기다린 뒤 변경하세요.

Android 배터리 최적화도 자주 문제를 만듭니다. 동기화 도구가 백그라운드에서 실행될 수 없으면 예상한 시점에 업로드나 다운로드가 되지 않을 수 있습니다.

큰 첨부 파일도 동기화를 느리게 만들 수 있습니다. vault에 PDF, 이미지, 오디오, 비디오가 많다면 파일 크기 제한과 선택적 동기화 동작을 먼저 확인하세요.

플러그인 설정도 조심해야 합니다. 데스크톱 플러그인 설정이 Android에서 완벽하게 맞지 않을 수 있습니다. 모바일 Obsidian이 이상하게 동작한다면 `.obsidian`의 어떤 부분을 동기화하고 있는지 확인하세요.

## FAQ

### Windows와 Android 사이에서 Obsidian을 동기화하는 가장 좋은 방법은 무엇인가요?

가장 쉬운 공식 방법은 Obsidian Sync입니다. 무료 기술 설정으로는 Syncthing이 강력합니다. 프라이빗 호스팅 동기화와 종단 간 암호화를 원한다면 Synch가 그 용도에 맞게 만들어졌습니다.

### Windows와 Android에서 Obsidian을 무료로 동기화할 수 있나요?

가능합니다. Syncthing은 Windows와 Android에서 강력한 무료 선택지입니다. Synch도 작은 vault를 위한 무료 플랜이 있습니다. 클라우드 드라이브도 저장 용량 안에서는 무료일 수 있지만 Android 폴더 접근 때문에 덜 편리할 수 있습니다.

### Android에서 Google Drive로 Obsidian을 동기화할 수 있나요?

일부 워크플로에서는 가능합니다. 하지만 가장 깔끔한 선택은 아닙니다. Google Drive는 Android에서 Obsidian용 로컬 vault 폴더처럼 쓰기보다 데스크톱 동기화에 더 잘 맞습니다.

### Syncthing은 Obsidian에 안전한가요?

신중하게 설정하고, 다른 기기에서 편집하기 전에 동기화 완료를 기다리며, 백업을 유지한다면 안전하게 쓸 수 있습니다. 다만 Syncthing은 파일 동기화 도구이므로 충돌 처리와 기기 가용성은 사용자가 관리해야 합니다.

### `.obsidian` 폴더도 동기화해야 하나요?

Windows와 Android에서 플러그인, 테마, 단축키, 설정을 비슷하게 유지하고 싶다면 동기화하세요. 데스크톱과 모바일 설정을 다르게 쓰고 싶다면 무조건 전부 동기화하지 않는 편이 좋습니다.

### Synch는 Windows와 Android용 Obsidian Sync 대안인가요?

네. Synch는 프라이빗 종단 간 암호화 Obsidian Sync 대안으로 만들어졌습니다. 범용 클라우드 드라이브를 쓰거나 Syncthing을 직접 관리하지 않고 호스팅 동기화를 원할 때 특히 적합합니다.

## 결론

Windows와 Android 조합은 iPhone 사용자보다 선택할 수 있는 좋은 동기화 방법이 더 많습니다.

공식 통합 서비스를 원하면 Obsidian Sync를 쓰세요. 무료 P2P 동기화와 설정 관리를 감당할 수 있다면 Syncthing을 쓰세요. 개발자이고 명시적인 버전 관리를 원한다면 Git도 가능합니다.

노트 워크플로를 인프라 관리로 만들지 않으면서 Windows와 Android에서 동작하는 프라이빗 종단 간 암호화 Obsidian Sync 대안을 원한다면 Synch를 선택하세요.
