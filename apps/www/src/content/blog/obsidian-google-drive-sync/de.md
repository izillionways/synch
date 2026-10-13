---
title: "Obsidian mit Google Drive synchronisieren: So klappt es auf PC und Smartphone"
description: "Obsidian-Vault mit Google Drive synchronisieren: Welche Wege auf Windows, Mac, Android und iPhone funktionieren und wie Sie Datenverlust vermeiden."
pubDate: 2026-10-01
draft: false
---

Sie möchten **Obsidian mit Google Drive synchronisieren**? Auf Windows und Mac können Sie ein Vault in einem Ordner von Google Drive for desktop ablegen. Auf dem Smartphone ist es komplizierter: Android braucht eine zusätzliche Lösung für einen lokalen Ordner, und die Google-Drive-App allein macht aus einem Cloud-Ordner noch kein nutzbares Obsidian-Vault auf dem iPhone.

Daneben gibt es Community-Plugins, die Google Drive direkt aus Obsidian ansprechen. Das ist ein anderer Weg als die Synchronisierung eines Drive-Ordners auf dem Computer. Entscheiden Sie sich für **eine Methode pro aktivem Vault**, damit nicht zwei Programme dieselben Dateien unabhängig voneinander verändern.

## Was Google Drive bei Obsidian übernimmt

Obsidian speichert Notizen als Dateien in einem lokalen Ordner, dem Vault. Google Drive kann diese Dateien zwischen Geräten übertragen. Es ist aber kein in Obsidian integrierter Sync-Dienst. Der [offizielle Obsidian-Leitfaden](https://obsidian.md/help/sync-notes) nennt Google Drive als Drittanbieteroption für Windows, macOS und Android, weist aber auf die eingeschränkte Unterstützung unter iOS hin.

| Weg | Sinnvoll für | Zusätzlich nötig |
| --- | --- | --- |
| Ordner von Google Drive for desktop | Windows, Mac | Vault-Dateien auf jedem Rechner offline verfügbar halten |
| Drive plus Ordner-Sync-App | PC und Android | App, die das Vault in einen lokalen Android-Ordner kopiert |
| Obsidian-Plugin für Google Drive | PC, Android, iPhone | Plugin einrichten, Google-Konto autorisieren, ersten Sync prüfen |

Dass Sie eine Notiz in der Google-Drive-App sehen, heißt noch nicht, dass Obsidian auf dem Telefon diese Notiz als Teil eines lokalen Vaults öffnen und in beide Richtungen synchronisieren kann.

## Erst sichern, dann umstellen

Warten Sie bei einem vorhandenen Vault, bis der bisherige Sync alle Änderungen hoch- und heruntergeladen hat. Kopieren Sie danach den gesamten Vault einschließlich Anhängen und `.obsidian`-Ordner an einen Ort **außerhalb** des synchronisierten Ordners. Öffnen Sie einige neue Notizen und Bilder aus dieser Kopie, um sie zu prüfen.

Wenn Sie auf mehreren Geräten bereits unterschiedliche Änderungen gemacht haben, vergleichen Sie die Dateien, bevor Sie einen Stand als Ausgangspunkt nehmen. Bewahren Sie die Sicherung auf, bis der neue Sync in beide Richtungen getestet ist. Laut [Obsidian ist Synchronisierung kein Backup](https://obsidian.md/help/backup): Auch versehentliche Löschungen können auf andere Geräte gelangen.

Läuft derselbe Vault bisher über iCloud, OneDrive, Obsidian Sync oder ein anderes Plugin, legen Sie für den Wechsel eine getrennte Arbeitskopie an. [Obsidian warnt davor, mehrere Sync-Dienste auf dasselbe Vault anzusetzen](https://obsidian.md/help/sync-notes).

![Eine getrennte Sicherungskopie eines Obsidian-Vaults außerhalb der Cloud-Synchronisierung](./vault-backup-before-drive-sync.webp)

## Möglichkeit 1: Den Drive-Ordner auf Windows oder Mac nutzen

Für zwei Computer ist der Ordner von Google Drive for desktop der naheliegende Einstieg:

1. Installieren Sie Google Drive for desktop auf beiden Rechnern und melden Sie sich an.
2. Erstellen Sie in Drive einen Ordner für das Vault oder verschieben Sie Ihre gesicherte Kopie dorthin.
3. Stellen Sie sicher, dass die Vault-Dateien **offline verfügbar** bleiben. Obsidian muss auf lokale Dateien zugreifen können.
4. Öffnen Sie den Ordner auf dem ersten Rechner als Vault in Obsidian.
5. Lassen Sie Drive fertig synchronisieren, bevor Sie das Vault auf dem zweiten Rechner öffnen.
6. Erstellen Sie eine Testnotiz und kontrollieren Sie auf dem anderen Rechner auch ihren Inhalt.

Diese Vorgehensweise folgt den [Google-Drive-Hinweisen von Obsidian](https://obsidian.md/help/sync-notes). Bevor Sie an einem anderen Computer weiterschreiben, sollten Upload und Download vollständig abgeschlossen sein. Gleichzeitige Änderungen an derselben Notiz können Konflikte auslösen.

### Android ergänzen

Obsidian auf Android benötigt einen **lokalen Vault-Ordner**. Die Anmeldung in der Google-Drive-App synchronisiert diesen Ordner nicht automatisch in beide Richtungen. Eine zusätzliche Ordner-Sync-App kann den Drive-Ordner mit einem lokalen Ordner auf dem Smartphone verbinden.

Probieren Sie das zunächst mit einem kleinen Test-Vault aus. Prüfen Sie sowohl den Weg vom PC zu Android als auch zurück. Informieren Sie sich außerdem, wie die App Löschungen und gleichzeitige Bearbeitungen behandelt. Weitere Möglichkeiten finden Sie in unserem [Leitfaden für Windows und Android](/de/blog/how-to-sync-obsidian-windows-android/).

### Und iPhone oder iPad?

Dateien in der Google-Drive- oder Dateien-App zu sehen, reicht nicht für ein offiziell unterstütztes, automatisch synchronisiertes Obsidian-Vault. Laut [Obsidian-Leitfaden](https://obsidian.md/help/sync-notes) wird Google Drive für Vault-Sync unter iOS nicht offiziell unterstützt. Wenn ein iPhone dazugehört, wählen Sie ein Plugin mit ausdrücklicher iOS-Unterstützung oder eine andere geräteübergreifende Sync-Methode. Für Windows und iPhone gibt es auch einen [eigenen Vergleich](/de/blog/how-to-sync-obsidian-windows-iphone/).

## Möglichkeit 2: Google Drive über ein Obsidian-Plugin anbinden

Das Community-Plugin [Google Drive Sync](https://community.obsidian.md/plugins/google-drive-sync) verbindet sich aus Obsidian heraus mit Google Drive. Laut Plugin-Seite unterstützt es Desktop und Mobilgeräte, einschließlich der Obsidian-App für iOS. Es verwendet nicht denselben Ablauf wie ein Ordner in Google Drive for desktop.

![Obsidian-Vaults auf Laptop und Smartphone werden über ein Plugin und einen Cloud-Ordner synchronisiert](./obsidian-google-drive-plugin-sync.webp)

Bei der Einrichtung autorisieren Sie Ihr Google-Konto und tragen ein Refresh-Token in den Plugin-Einstellungen ein. Die Dokumentation beschreibt einen Abruf von Änderungen beim Öffnen des Vaults. Lokale Änderungen werden dagegen erst nach einem Push hochgeladen, sofern Sie nicht den automatischen Push aktivieren. Wechseln Sie erst zum anderen Gerät, wenn die Übertragung fertig ist, und bearbeiten Sie dieselbe Notiz möglichst nicht gleichzeitig.

**Verwenden Sie das Plugin nicht zusammen mit Google Drive for desktop oder einem anderen Drive-Sync-Tool für dasselbe Vault.** Der [Plugin-Autor weist darauf hin](https://community.obsidian.md/plugins/google-drive-sync), dass Dateien aus anderen Sync-Verfahren womöglich nicht korrekt erfasst werden und Datenverlust möglich ist. Lesen Sie vor dem Umzug eines vorhandenen Vaults die Hinweise zur Migration und zu neuen Geräten. Zwei bereits gefüllte Vaults sollten Sie nicht ohne Prüfung zusammenführen lassen.

Sichern Sie für die Ersteinrichtung zuerst Ihre Dateien. Richten Sie dann das Plugin auf dem ersten Gerät ein und schließen Sie den ersten Upload ab. Verbinden Sie das zweite Gerät nach den Anweisungen des Plugins und warten Sie den ersten Download ab, bevor Sie Notizen ändern. Legen Sie auf beiden Geräten je eine Testnotiz an und prüfen Sie auch einen Anhang. Die [Plugin-Seite](https://community.obsidian.md/plugins/google-drive-sync) erläutert außerdem den Umgang mit Autorisierungstokens und einem zwischengeschalteten Dienst; lesen Sie das vor der Freigabe Ihres Kontos.

Auch **Remotely Save** kann Google Drive anbinden. Die [Google-Drive-Anbindung ist dort allerdings eine kostenpflichtige PRO-Funktion](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md). Wenn Sie das Plugin bereits nutzen, hilft unser [Remotely-Save-Leitfaden](/de/blog/obsidian-remotely-save/) beim Vergleich.

## Wenn der Sync nicht wie erwartet läuft

**Auf dem PC ist die Notiz da, auf dem Smartphone nicht.** Prüfen Sie zuerst, welches lokale Vault Obsidian auf dem Telefon geöffnet hat. Eine Datei in der Drive-App beweist noch keinen erfolgreichen Obsidian-Sync. Bei Android kontrollieren Sie den Zielordner der Ordner-Sync-App, beim Plugin den Status des ersten Downloads und der Uploads.

**Notizen sind doppelt vorhanden oder widersprechen sich.** Pausieren Sie die Bearbeitung auf beiden Geräten. Vergleichen Sie die lokalen Dateien mit Ihrer getrennten Sicherung. Häufige Auslöser sind ein noch laufender Upload oder zwei Sync-Programme für denselben Vault. Unser [Leitfaden zu Sync-Konflikten](/de/blog/obsidian-sync-conflicts/) hilft bei der Suche.

**Sind Dateien in Google Drive automatisch Ende-zu-Ende-verschlüsselt?** Das Ablegen eines Vault-Ordners in Drive fügt keine Ende-zu-Ende-Verschlüsselung auf Vault-Ebene hinzu. Wenn Ihnen das wichtig ist, prüfen Sie die Verschlüsselung des konkreten Plugins oder Dienstes und wo sie stattfindet.

## Welche Lösung passt im Alltag?

Wer überwiegend am Computer arbeitet und Google Drive ohnehin nutzt, kommt mit dem Desktop-Ordner womöglich gut zurecht. Für Mobilgeräte müssen Sie zusätzlich eine App oder ein Plugin einrichten und verstehen, wie es mit Konflikten umgeht. Eine unabhängige Sicherung und ein Test in beide Richtungen bleiben in jedem Fall sinnvoll.

Geht es Ihnen vor allem darum, **denselben privaten Obsidian-Vault auf PC und Smartphone zu nutzen**, ohne Drive-Ordner und mobile Ordner-Sync-Apps zu verwalten? Dann ist [Synch](https://synch.run/de/) eine weitere Möglichkeit. Das Community-Plugin Synchrun synchronisiert direkt in Obsidian und verschlüsselt Vault-Daten auf Ihrem Gerät vor dem Upload. Für kleine Vaults können Sie nach einem Blick auf die aktuellen Grenzen mit dem [Gratisplan](https://synch.run/de/pricing) beginnen.
