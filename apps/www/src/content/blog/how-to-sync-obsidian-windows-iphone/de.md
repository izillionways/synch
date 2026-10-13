---
title: "Obsidian auf Windows-PC und iPhone synchronisieren: So geht's"
description: "Obsidian-Notizen auf Windows-PC und iPhone nutzen: passende Sync-Methode wählen, das Vault sichern und die erste Synchronisierung prüfen."
pubDate: 2026-09-30
draft: false
---

Sie schreiben Ihre Obsidian-Notizen am Windows-PC und möchten auf dem iPhone weitermachen? Dafür brauchen Sie eine **Sync-Methode, die in Obsidian auf beiden Geräten funktioniert**. Mit Obsidian Sync geht das über die offizielle Funktion. Synch bietet eine Ende-zu-Ende-verschlüsselte Alternative als Community-Plugin. Auch andere Plugins oder Git kommen infrage, brauchen aber mehr Handarbeit.

Das Vault unter Windows einfach in iCloud Drive legen und auf dem iPhone öffnen? Das klingt bequem. Obsidian warnt in seinem [Sync-Leitfaden](https://obsidian.md/help/sync-notes) allerdings davor, dass iCloud Drive unter Windows Dateien duplizieren oder beschädigen kann. iCloud eignet sich eher für eine Kombination aus Mac und iPhone.

Hier erfahren Sie, welche Wege sich anbieten, wie Sie ein vorhandenes Vault sicher umziehen und woran Sie erkennen, dass der erste Sync geklappt hat.

![Windows-Laptop und iPhone mit denselben Notizen über eine verschlüsselte Sync-Verbindung](./windows-iphone-sync.webp)

## Welche Sync-Methode passt zu Ihnen?

| Methode | Geeignet, wenn … | Wichtig zu wissen |
| --- | --- | --- |
| **Obsidian Sync** | Sie die offizielle Funktion möglichst einfach einrichten möchten | Erfordert ein kostenpflichtiges Abo; beim Erstellen des Remote-Vaults können Sie Ende-zu-Ende-Verschlüsselung wählen |
| **Synch** | Sie einen verschlüsselten Dienst mit Gratisplan für kleine Vaults suchen | Installieren Sie das Community-Plugin Synchrun in Obsidian auf beiden Geräten |
| **Remotely Save** | Sie bereits einen unterstützten Speicheranbieter nutzen und selbst konfigurieren möchten | Einrichtung und Verhalten hängen vom Anbieter und den Plugin-Einstellungen ab |
| **Git mit einer iOS-Git-App** | Sie Git schon nutzen und Versionen manuell verwalten möchten | Pulls, Commits, Pushes und Konfliktlösung liegen bei Ihnen |

Wenn Sie regelmäßig zwischen PC und iPhone wechseln, schauen Sie sich zuerst Obsidian Sync und Synch an. Beide verbinden die lokalen Vaults über ein Remote-Vault. Sie müssen also keinen Cloud-Ordner aus Windows auf dem iPhone irgendwie als Obsidian-Vault öffnen.

Google Drive und OneDrive sind unter Windows praktisch, bieten auf iOS aber keinen einfachen, offiziell unterstützten Obsidian-Vault-Ordner. Auch Syncthing benötigt auf iOS zusätzliche Werkzeuge. Prüfen Sie die [Plattformhinweise von Obsidian](https://obsidian.md/help/sync-notes), bevor Sie Ihren Ablauf auf einem dieser Dienste aufbauen.

## Schützen Sie Ihr Vault, bevor Sie die Geräte verbinden

**Prüfen Sie zuerst, auf welchem Gerät die neuesten Notizen liegen.** Haben Sie das Vault schon auf beiden Geräten bearbeitet, vergleichen Sie aktuelle Notizen und Anhänge, bevor Sie den neuen Sync einrichten. Der Ordner auf dem PC lässt sich leichter durchsehen – die letzte Änderung kann trotzdem auf dem iPhone liegen.

Wenn klar ist, welche Kopie aktuell ist, gehen Sie so vor:

1. Lassen Sie den bisherigen Sync-Dienst alle ausstehenden Downloads abschließen.
2. Erstellen Sie eine separate Kopie des vollständigen Vaults, einschließlich Anhängen und `.obsidian`-Ordner. Bewahren Sie das Backup außerhalb der von iCloud, OneDrive oder dem neuen Sync-Dienst verwalteten Ordner auf.
3. Öffnen Sie das Backup und prüfen Sie einige aktuelle Notizen und Anhänge.
4. Lassen Sie das Backup während der Einrichtung unverändert.

Sync ersetzt kein Backup. Löschen Sie auf einem Gerät versehentlich eine Notiz, kann auch die Löschung auf dem anderen Gerät landen. Deshalb [empfiehlt Obsidian eine gesonderte Sicherung](https://obsidian.md/help/backup).

![Aktives Vault und eine getrennte Sicherungskopie neben einer externen Festplatte](./vault-backup.webp)

### Wenn Ihr Vault unter Windows derzeit iCloud nutzt

Kopieren Sie das Vault nach dem Backup unter Windows **in einen lokalen Ordner außerhalb von iCloud Drive** und öffnen Sie diese neue Kopie in Obsidian. Mit ihr richten Sie den neuen Sync ein. Legen Sie auch auf dem iPhone ein neues lokales Vault an, statt das bisherige iCloud-Vault zusätzlich mit einem zweiten Dienst zu verbinden.

Bewahren Sie die alte iCloud-Kopie als Referenz auf, bis Sie die neue Einrichtung geprüft haben. Bearbeiten Sie aber nicht beide Kopien weiter: Dadurch entstehen voneinander unabhängige Versionen Ihrer Notizen. Obsidian warnt ausdrücklich davor, [mehrere Sync-Dienste für dasselbe Vault zu verwenden](https://obsidian.md/help/sync-notes).

Liegen auf dem iPhone Änderungen, die auf dem PC fehlen, übernehmen Sie sie **vor** dem ersten Upload in die neue Kopie. Gibt es zwei Fassungen derselben Notiz, vergleichen Sie deren Inhalt und entscheiden Sie selbst, welche Änderungen bleiben sollen.

## Option 1: Obsidian Sync einrichten

[Obsidian Sync](https://obsidian.md/sync) ist in Obsidian integriert und unterstützt Windows und iOS. Sie benötigen ein Obsidian-Konto und ein Sync-Abo.

Unter Windows:

1. Öffnen Sie das vollständige lokale Arbeits-Vault. Liegt es noch in iCloud Drive, wechseln Sie zuerst zur oben beschriebenen separaten lokalen Kopie.
2. Melden Sie sich unter **Settings → General → Account** an und aktivieren Sie das Core-Plugin **Sync**.
3. Öffnen Sie **Settings → Sync** und erstellen Sie ein Remote-Vault. Wenn Sie Ende-zu-Ende-Verschlüsselung möchten, legen Sie ein Verschlüsselungspasswort fest. Bewahren Sie es sicher auf; es ist nicht Ihr Kontopasswort.
4. Prüfen Sie den selektiven Sync und die Synchronisierung der Vault-Konfiguration. Starten Sie dann den Sync und warten Sie auf **Fully Synced**.

Auf dem iPhone:

1. Öffnen Sie die Vault-Auswahl in Obsidian und wählen Sie **Setup Obsidian Sync**. Erstellen Sie aus dem gerade hochgeladenen Remote-Vault ein neues lokales Vault.
2. Melden Sie sich an, wählen Sie das Remote-Vault und geben Sie bei Bedarf dessen Verschlüsselungspasswort ein.
3. Prüfen Sie die Sync-Einstellungen auf dem iPhone und warten Sie mit dem Bearbeiten, bis der erste Download abgeschlossen ist.

Die [Einrichtungsanleitung von Obsidian](https://obsidian.md/help/sync/setup) zeigt die aktuellen Schritte, Statusanzeigen und Optionen für den Sync von Einstellungen. Ein frisches lokales Vault auf dem iPhone verhindert, dass sich der neue Upload mit einer älteren iCloud-Kopie vermischt.

## Option 2: Synch einrichten

Synch verwendet das Community-Plugin **Synchrun** in Obsidian auf Desktop und Mobilgeräten. Die Vault-Daten werden vor dem Upload auf Ihrem Gerät verschlüsselt. Es gibt gehostete Tarife, darunter einen Gratisplan für kleine Vaults. Falls Ihr Vault große Anhänge enthält, prüfen Sie die [aktuellen Tarife](https://synch.run/de/pricing).

Unter Windows:

1. Öffnen Sie das vollständige lokale Arbeits-Vault außerhalb aller anderen aktiven Sync-Ordner.
2. Suchen Sie unter **Settings → Community plugins** nach **Synchrun**. Installieren und aktivieren Sie es.
3. Öffnen Sie die Plugin-Einstellungen, melden Sie sich an und wählen Sie **Create vault**.
4. Legen Sie das Vault-Passwort fest und bewahren Sie es sicher auf. Lassen Sie Obsidian geöffnet, bis der erste Upload abgeschlossen ist.

Auf dem iPhone:

1. Erstellen Sie in Obsidian ein neues, leeres lokales Vault. Verwenden Sie für diese Verbindung nicht die bisherige iCloud-Kopie.
2. Installieren und aktivieren Sie **Synchrun** über die Community-Plugins und melden Sie sich mit demselben Konto an.
3. Wählen Sie **Connect vault**, dann das Remote-Vault, und geben Sie das Vault-Passwort ein.
4. Lassen Sie Obsidian geöffnet, bis der erste Download abgeschlossen ist. Prüfen Sie eine aktuelle Notiz und einen Anhang, bevor Sie neue Änderungen vornehmen.

Die [Projektanleitung von Synch](https://github.com/hjinco/synch#get-started) beschreibt die aktuellen Schritte zur Plugin-Installation. Ihr Vault-Passwort entsperrt verschlüsselte Daten auf einem weiteren Gerät. Bewahren Sie es sicher auf. Mehr dazu erfahren Sie in unserem Artikel über die [Verschlüsselung und Entschlüsselung eines Vaults mit Synch](/de/blog/encryption-and-decryption/).

## Der erste Test: Funktioniert der Sync in beide Richtungen?

Die Anmeldung hat geklappt? Das sagt noch nichts darüber aus, ob alle Dateien angekommen sind. Testen Sie es mit echten Notizen:

1. Öffnen Sie auf dem iPhone zwei aktuelle Notizen und einen Anhang, die zuvor unter Windows vorhanden waren.
2. Erstellen Sie unter Windows eine kurze Testnotiz. Warten Sie auf den Sync und prüfen Sie, ob sie auf dem iPhone erscheint.
3. Erstellen Sie auf dem iPhone eine andere Testnotiz. Lassen Sie Obsidian bis zum abgeschlossenen Sync geöffnet und prüfen Sie, ob sie unter Windows erscheint.
4. Vergleichen Sie den Inhalt beider Testnotizen, nicht nur ihre Dateinamen.
5. Suchen Sie nach doppelten Dateien oder Konfliktkopien. Prüfen Sie gefundene Dateien, bevor Sie etwas löschen.

Wenn Sie `.obsidian` mitsynchronisieren, prüfen Sie, ob die benötigten Plugins und Einstellungen auf dem iPhone funktionieren. Desktop und Mobilgerät können unterschiedliche Layouts oder Plugin-Einstellungen benötigen. Sie können erst Notizen und Anhänge stabil synchronisieren und danach entscheiden, welche Konfigurationsdateien Sie teilen möchten.

![Übereinstimmende Notizen und ein Bildanhang auf Laptop und Smartphone nach dem ersten Sync](./first-sync-check.webp)

## Weitere Methoden

**Remotely Save** kann Obsidian auf beiden Geräten mit einem Speicheranbieter verbinden. Sie bestimmen den Speicherort selbst, müssen aber Kompatibilität, Verschlüsselungseinstellungen und Konfliktverhalten des Anbieters prüfen. Unser [Remotely-Save-Leitfaden](/de/blog/obsidian-remotely-save/) erklärt die Vor- und Nachteile.

**Git** funktioniert, wenn Sie Änderungen bereits routiniert pullen und pushen. Auf dem iPhone kommt eine Git-App wie Working Copy mit manuellen Schritten hinzu. Für bewusste Versionsverwaltung ist das nützlich, für schnelle Notizen unterwegs weniger bequem. Lesen Sie dazu unseren [Obsidian-Git-Leitfaden](/de/blog/obsidian-git-sync/).

**Verbinden Sie ein aktives Vault nicht gleichzeitig mit zwei Sync-Diensten.** Ein getrenntes Backup ist sinnvoll. Wenn aber zwei Dienste denselben Arbeitsordner verwalten, können Änderungen miteinander kollidieren. Tauchen Notizen doppelt auf oder scheinen zu fehlen, bearbeiten Sie zunächst nichts weiter. Prüfen Sie die Dateien auf beiden Geräten und das Backup; unser [Leitfaden zu Sync-Konflikten](/de/blog/obsidian-sync-conflicts/) hilft bei der Einordnung.

## Häufige Fragen zum Sync zwischen Windows und iPhone

### Kann ich Obsidian zwischen Windows und iPhone kostenlos synchronisieren?

Ja, je nach Größe des Vaults und dem Aufwand, den Sie für die Einrichtung akzeptieren. Synch bietet einen Gratisplan für kleine Vaults. Ein Community-Plugin oder Git kann Dienste nutzen, die Sie bereits haben; deren Speicherplatz oder App-Funktionen können jedoch ebenfalls begrenzt sein. Obsidian Sync ist kostenpflichtig. Prüfen Sie aktuelle Tarifgrenzen, bevor Sie ein großes Vault umziehen.

### Kann ich Obsidian mit iCloud zwischen Windows und iPhone synchronisieren?

Möglicherweise können Sie unter Windows einen iCloud-Drive-Ordner öffnen. Obsidian [warnt jedoch vor doppelten oder beschädigten Dateien durch iCloud Drive unter Windows](https://obsidian.md/help/sync-notes). Wenn Sie das Vault auf beiden Geräten bearbeiten, nutzen Sie eine Lösung für Windows und iOS und behalten Sie ein separates Backup.

### Warum erscheinen meine iPhone-Notizen nicht unter Windows?

Prüfen Sie zuerst, ob beide Geräte mit **demselben Remote-Vault** verbunden sind und der erste Sync durchgelaufen ist. Lassen Sie Obsidian auf dem iPhone geöffnet, bis die Änderung hochgeladen wurde. Liegt die Notiz nur noch im alten iCloud-Vault, wandert sie nicht automatisch in das neue Vault. Übernehmen Sie sie, bevor Sie die alte Kopie stilllegen.

### Sollte ich den Ordner `.obsidian` mitsynchronisieren?

Er enthält Konfigurationen wie Plugins, Themes und Workspace-Einstellungen. Ein Teil davon kann Ihre Umgebung auf beiden Geräten angleichen, aber Desktop-Einstellungen passen nicht immer zum Smartphone. Prüfen Sie zuerst den Sync von Notizen und Anhängen und wählen Sie dann die Konfigurationsdateien aus, die Sie auf beiden Geräten brauchen.

## So starten Sie

Wenn Sie neu anfangen, nehmen Sie **Obsidian Sync** für die offizielle Integration oder **Synch** für eine Ende-zu-Ende-verschlüsselte Lösung per Community-Plugin. Wichtig ist bei beiden: Prüfen Sie, ob im Vault alle Dateien vorhanden sind, und legen Sie ein getrenntes Backup an. Verbinden Sie das iPhone mit einem neuen lokalen Vault. Erst wenn Testnotizen in beide Richtungen angekommen sind, sollten Sie damit im Alltag weiterarbeiten.
