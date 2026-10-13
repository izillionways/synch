---
title: "Obsidian을 Google Drive로 동기화하는 방법: PC와 모바일 설정"
description: "Obsidian vault를 Google Drive로 동기화할 때 PC, Android, iPhone에서 가능한 방법과 백업·충돌 예방 요령을 알아봅니다."
pubDate: 2026-10-01
draft: false
---

**Obsidian을 Google Drive로 동기화할 수 있을까요?** 가능합니다. 다만 PC에서 Google Drive 폴더를 vault로 여는 것과 휴대폰에서 같은 vault를 쓰는 것은 서로 다른 문제입니다. Windows와 Mac에서는 Google Drive 데스크톱 앱으로 비교적 쉽게 시작할 수 있지만, Android에는 로컬 폴더를 동기화할 도구가 더 필요하고 iPhone에서는 Google Drive 앱만으로 해결되지 않습니다.

먼저 어떤 기기를 연결할지 정하세요. 그런 다음 **Google Drive 폴더를 동기화할지**, 아니면 **Obsidian 플러그인에서 Google Drive에 연결할지** 한 가지 방식을 선택해야 합니다. 같은 vault에 두 방식을 겹쳐 쓰면 파일 상태가 어긋날 수 있습니다.

## 기기별로 무엇이 다른가요?

Obsidian의 노트는 기기에 있는 vault 폴더의 파일입니다. Google Drive는 그 파일을 옮길 수 있지만 Obsidian 자체의 동기화 기능이 되는 것은 아닙니다. [Obsidian 공식 안내](https://obsidian.md/help/sync-notes)는 Google Drive를 Windows·Mac·Android에서 사용할 수 있는 외부 동기화 방법으로 소개하면서, iOS에서는 공식 지원되지 않는다고 설명합니다.

| 방법 | 적합한 기기 | 준비할 것 |
| --- | --- | --- |
| Google Drive 데스크톱 폴더 | Windows, Mac | 각 PC에서 vault 파일을 오프라인으로 유지 |
| Drive와 Android 폴더 동기화 앱 | PC, Android | Android의 로컬 vault 폴더와 Drive를 연결할 별도 앱 |
| Google Drive용 Obsidian 플러그인 | PC, Android, iPhone | 플러그인 설치, Google 계정 연결, 플러그인 방식에 맞춘 초기 동기화 |

휴대폰에 Google Drive 앱을 설치했다고 해서 Obsidian이 그 안의 클라우드 폴더를 바로 vault로 열 수 있는 것은 아닙니다. 두 기기에서 파일이 **어떻게 로컬 vault까지 도착하는지** 확인해야 합니다.

## 기존 vault가 있다면 백업부터

동기화 방법을 바꾸기 전에는 기존 서비스의 업로드와 다운로드가 끝났는지 확인하세요. 그런 다음 첨부 파일과 `.obsidian` 설정 폴더를 포함한 vault 전체를 **동기화 폴더 밖에** 복사합니다. 최근 노트 몇 개와 첨부 파일을 직접 열어 백업이 완전한지도 확인하세요.

두 기기에서 이미 따로 편집했다면 어느 한쪽이 무조건 최신이라고 가정하지 마세요. 양쪽의 변경 사항을 비교하고, 가장 완전한 작업본을 정한 뒤 새 방법에 연결하는 편이 안전합니다. 새 동기화를 양방향으로 검증할 때까지 백업은 손대지 않고 보관하세요. [Obsidian도 동기화와 백업을 별개로 관리하라고 안내합니다](https://obsidian.md/help/backup). 실수로 삭제한 파일까지 다른 기기로 동기화될 수 있기 때문입니다.

현재 iCloud, OneDrive, Obsidian Sync 또는 다른 플러그인이 같은 vault를 관리한다면, 기존 작업 폴더에 Google Drive 동기화를 추가하지 마세요. [Obsidian은 하나의 vault에 동기화 서비스를 섞어 쓰지 말라고 경고합니다](https://obsidian.md/help/sync-notes).

![클라우드 동기화와 별도로 보관한 Obsidian vault 백업 사본](./vault-backup-before-drive-sync.webp)

## 방법 1: Windows나 Mac에서 Google Drive 폴더 사용

PC끼리 동기화한다면 Google Drive 데스크톱 앱을 이용하는 방법이 가장 단순합니다.

1. 두 컴퓨터에 Google Drive 데스크톱 앱을 설치하고 로그인합니다.
2. Drive 안에 새 vault 폴더를 만들거나, 백업해 둔 vault를 옮깁니다.
3. vault 폴더가 **오프라인에서도 사용 가능**하도록 설정합니다. 파일이 실제로 기기에 있어야 Obsidian이 안정적으로 읽을 수 있습니다.
4. 첫 번째 컴퓨터의 Obsidian에서 해당 폴더를 vault로 엽니다.
5. Drive 동기화가 끝난 뒤 두 번째 컴퓨터에서도 같은 폴더를 vault로 엽니다.
6. 테스트 노트를 만들고 내용까지 다른 컴퓨터에 도착하는지 확인합니다.

이 흐름은 [Obsidian의 Google Drive 설정 안내](https://obsidian.md/help/sync-notes)를 바탕으로 합니다. 기기를 바꿀 때는 Drive가 이전 기기의 변경 사항을 모두 올리고 새 기기에 내려받았는지 먼저 확인하세요. 두 컴퓨터에서 같은 노트를 동시에 편집하면 충돌이 생길 수 있습니다.

### Android에서도 쓰고 싶다면

Android의 Obsidian에는 **기기 안의 로컬 vault 폴더**가 필요합니다. Google Drive 앱에 로그인하는 것만으로 그 폴더가 양방향 동기화되지는 않습니다. 별도의 폴더 동기화 앱으로 Drive의 vault와 Android의 로컬 폴더를 연결하는 방법이 있습니다.

이 방법은 작은 테스트 vault로 먼저 확인하세요. PC에서 고친 노트가 Android에 도착하는지, Android에서 고친 노트가 Drive를 거쳐 PC에 도착하는지 모두 봐야 합니다. 삭제와 충돌을 앱이 어떻게 처리하는지도 설정 전에 확인하는 편이 좋습니다. 다른 방법까지 비교하려면 [Windows·Android 동기화 안내](/ko/blog/how-to-sync-obsidian-windows-android/)를 참고하세요.

### iPhone이나 iPad에서도 쓸 수 있나요?

Google Drive 앱에 파일이 보여도 iOS의 Obsidian이 그 폴더를 공식 지원되는 동기화 vault로 사용할 수 있는 것은 아닙니다. [Obsidian 공식 안내](https://obsidian.md/help/sync-notes)에 따르면 iOS에서 Google Drive vault 동기화는 공식 지원 대상이 아닙니다. iPhone까지 연결하려면 iOS를 지원하는 Obsidian 플러그인이나 다른 동기화 방법을 선택하세요. Windows와 iPhone을 함께 쓴다면 [별도 가이드](/ko/blog/how-to-sync-obsidian-windows-iphone/)도 도움이 됩니다.

## 방법 2: Obsidian 플러그인으로 Google Drive 연결

커뮤니티의 [Google Drive Sync 플러그인](https://community.obsidian.md/plugins/google-drive-sync)은 Obsidian 안에서 Google Drive에 연결합니다. 플러그인 설명에는 데스크톱과 모바일, iOS 지원이 명시되어 있습니다. Drive 데스크톱 폴더를 동기화하는 방식과는 별개입니다.

![노트북과 휴대폰의 Obsidian vault가 플러그인을 통해 클라우드 폴더와 동기화되는 모습](./obsidian-google-drive-plugin-sync.webp)

설정할 때 Google 계정을 승인하고 플러그인 설정에 갱신 토큰을 넣어야 합니다. 플러그인 문서에 따르면 vault를 열 때 Drive의 변경 사항을 가져오지만, 로컬 변경 사항을 올리려면 직접 push하거나 자동 push를 켜야 합니다. 처음에는 백업을 만들고, 다른 기기로 넘어가기 전에 동기화가 끝났는지 확인하세요.

**같은 vault에 이 플러그인과 Google Drive 데스크톱 동기화 앱을 함께 적용하지 마세요.** 플러그인이 추적하지 못한 파일 때문에 문제가 생길 수 있다고 [제작자도 주의를 당부합니다](https://community.obsidian.md/plugins/google-drive-sync). 기존 vault를 옮길 때는 플러그인의 새 기기 연결 및 이전 절차를 먼저 읽으세요. 이미 파일이 들어 있는 두 vault가 자동으로 안전하게 합쳐질 것이라고 가정하면 위험합니다.

새로 시작한다면 백업을 만든 뒤 첫 기기에서 플러그인을 설치하고 Google 계정을 연결하세요. 플러그인 안내에 따라 첫 업로드를 끝낸 다음, 두 번째 기기에서 초기 다운로드가 완료될 때까지 기다립니다. 마지막으로 두 기기에서 각각 테스트 노트를 만들고, 첨부 파일 하나도 확인하세요. Google 인증 토큰과 중간 서비스가 어떻게 쓰이는지는 [플러그인 설명](https://community.obsidian.md/plugins/google-drive-sync)을 읽고 결정하는 것이 좋습니다.

다른 플러그인인 **Remotely Save**도 Google Drive에 연결할 수 있지만, [Google Drive 기능은 유료 PRO 기능](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md)입니다. 이미 Remotely Save를 쓰고 있다면 [설정과 장단점](/ko/blog/obsidian-remotely-save/)을 비교해 보세요.

## 자주 겪는 문제

**PC에는 노트가 있는데 휴대폰에는 없어요.** 휴대폰 Obsidian이 실제 로컬 vault를 열고 있는지부터 확인하세요. Android 폴더 동기화 앱을 쓴다면 대상 폴더를, 플러그인을 쓴다면 초기 다운로드와 업로드 상태를 확인해야 합니다. Drive 앱에 파일이 보이는 것만으로는 충분하지 않습니다.

**노트가 중복되거나 내용이 다릅니다.** 일단 양쪽에서 편집을 멈추고 각 기기의 파일과 백업을 비교하세요. 업로드가 끝나기 전에 기기를 바꿨거나, 한 vault를 두 도구가 관리했을 수 있습니다. 자세한 확인 순서는 [동기화 충돌 안내](/ko/blog/obsidian-sync-conflicts/)를 참고하세요.

**Google Drive에 넣으면 종단 간 암호화되나요?** vault 폴더를 Drive에 넣는 것만으로 vault 수준의 종단 간 암호화가 추가되지는 않습니다. 암호화가 필요하다면 선택한 플러그인이나 서비스가 파일 내용을 어디서 암호화하는지 따로 확인하세요.

## Google Drive가 맞지 않을 때

이미 Google Drive를 쓰고 있고 주로 PC에서 Obsidian을 사용한다면 Drive 폴더 방식은 합리적일 수 있습니다. 모바일까지 연결하려면 앱이나 플러그인을 추가하고 동기화 상태를 직접 살펴야 합니다. 어떤 방식을 쓰든 별도 백업과 양방향 테스트는 필요합니다.

원하는 것이 Drive 폴더나 휴대폰의 폴더 동기화 앱을 관리하는 일보다 **여러 기기에서 같은 비공개 vault를 쓰는 일**이라면 [Synch](https://synch.run/ko/)도 살펴보세요. Synchrun 커뮤니티 플러그인이 Obsidian 안에서 동기화하고, vault 데이터는 업로드 전에 기기에서 암호화합니다. 현재 [무료 플랜](https://synch.run/ko/pricing)의 용량과 파일 크기 제한에 맞는 vault라면 비용 없이 시작할 수 있습니다.
