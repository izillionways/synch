---
title: "Remotely Save für Obsidian: Einrichtung, Vor- und Nachteile und Alternativen"
description: "Remotely Save mit Dropbox einrichten: Anleitung mit Screenshots für Anmeldung, Verschlüsselung und ein zweites Gerät. Dazu Lösungen für fehlende Notizen und ein Vergleich der kostenlosen und PRO-Funktionen."
pubDate: 2026-05-11
updatedDate: 2026-10-03
---

**Mit Remotely Save synchronisierst du deinen Obsidian-Vault über einen Cloudspeicher deiner Wahl.** Du installierst das Plugin auf jedem Gerät und verbindest es mit demselben Speicherkonto und demselben entfernten Vault. Bevor du auf einem anderen Gerät weiterschreibst, synchronisierst du nacheinander beide Geräte.

Diese Anleitung führt dich durch eine neue Einrichtung mit Dropbox. Anschließend verbindest du dein zweites Gerät und prüfst, ob Änderungen in beide Richtungen ankommen. Falls du Remotely Save schon eingerichtet hast, findest du weiter unten eine Tabelle zur Fehlersuche.

Remotely Save ist ein Community-Plugin und gehört nicht zum offiziellen Dienst Obsidian Sync. Um Speicherplatz, Zugriffsrechte und Wiederherstellung kümmerst du dich selbst.

## Welche Speicheranbieter lassen sich kostenlos nutzen?

Einige Anbindungen sind kostenlos, andere gehören zu den kostenpflichtigen PRO-Funktionen. Die Kosten des Speicheranbieters kommen gegebenenfalls hinzu: Eine kostenlose Anbindung bedeutet nicht automatisch kostenlosen Speicher oder kostenlose API-Aufrufe.

| Speicheranbieter | Plugin-Funktion | Darauf solltest du achten |
| --- | --- | --- |
| Dropbox | Kostenlos | Freier Speicher und das Konto, das du auf allen Geräten verwendest |
| S3-kompatibler Speicher | Kostenlos | Bucket, Endpunkt, Zugangsschlüssel sowie Speicher- und API-Kosten |
| WebDAV | Kostenlos | Serveradresse, Anmeldung und Kompatibilität |
| Persönliches OneDrive, App Folder | Kostenlos | Nutzt den App-Ordner statt beliebiger vorhandener Ordner |
| Persönliches OneDrive, Full | PRO | Für den Zugriff außerhalb des App-Ordners |
| Google Drive | PRO | Die entsprechende Funktion muss aktiviert und autorisiert sein |
| Box, pCloud, Yandex Disk, Koofr, Azure Blob | PRO | Verfügbarkeit der Anbindung und Grenzen des Speicheranbieters |

Prüfe vor der Einrichtung die [Liste unterstützter Dienste](https://github.com/remotely-save/remotely-save/blob/master/docs/services_connectable_or_not.md). Weitere Möglichkeiten findest du im [Vergleich kostenloser Sync-Lösungen für Obsidian](/de/blog/free-obsidian-sync/).

## Remotely Save mit Dropbox einrichten

Die folgenden Schritte gelten für eine **neue Synchronisierung**. Hast du denselben Vault bereits auf zwei Geräten unabhängig bearbeitet, sichere zuerst beide Fassungen. Lass nicht den ersten Sync darüber entscheiden, welche Inhalte erhalten bleiben.

### 1. Vault sichern und eine Testnotiz anlegen

Beginne auf dem Gerät mit dem vollständigen Vault. Kopiere ihn an einen Ort außerhalb des zu synchronisierenden Ordners und prüfe, ob sich die Sicherung öffnen lässt.

Verwende für den aktiven Vault nur eine Sync-Lösung. Lege ihn also nicht zusätzlich in einen Ordner, den die Dropbox-Desktop-App synchronisiert. Remotely Save stellt selbst die Verbindung zu Dropbox her.

Für den ersten Versuch eignet sich ein kleiner Test-Vault, etwa `Notes-Sync-Test`. Verwende einen Namen, der in deinem Dropbox-Konto noch keinem anderen entfernten Vault zugeordnet ist. Lege darin eine Notiz „Sync-Test“ an und schreibe einen Satz hinein, den du später auf dem Handy wiedererkennst.

### 2. Plugin installieren und aktivieren

Öffne in Obsidian die **Einstellungen → Community-Plugins**. Erlaube bei Bedarf die Nutzung von Community-Plugins und suche in der Plugin-Liste nach **Remotely Save**. Installiere und aktiviere es. Öffne zunächst die Plugin-Einstellungen, bevor du einen Sync startest.

Die folgenden Screenshots zeigen eine ältere Obsidian-Version. Beschriftungen und Anordnung können in deiner Version anders aussehen.

### 3. Dropbox autorisieren

Wähle in den Remotely-Save-Einstellungen unter **Choose service** den Eintrag **Dropbox** und klicke auf **Auth**. Öffne den angezeigten Link im Browser. Kontrolliere, ob du im gewünschten Dropbox-Konto angemeldet bist, und erlaube die Verbindung. Lass den Browser anschließend zu Obsidian zurückkehren und prüfe dort den Verbindungsstatus.

![Remotely-Save-Einstellungen mit ausgewähltem Dropbox-Dienst und markierter Auth-Schaltfläche](./dropbox-choose-service.webp)

*Wähle Dropbox und klicke anschließend auf Auth.*

Laut Dokumentation liegen die Dateien in Dropbox unter `/Apps/remotely-save`. In der Standardkonfiguration bestimmt der Vault-Name das Ziel. Verwende deshalb auf den anderen Geräten denselben Namen. Einzelheiten zum Zugriff stehen in den [Hinweisen zur Dropbox-Anbindung](https://github.com/remotely-save/remotely-save#dropbox).

![Erfolgreiche Dropbox-Verbindung mit Verbindungsstatus und Revoke-Auth-Schaltfläche](./dropbox-connected.webp)

*In dieser Oberfläche wird aus Auth nach der Anmeldung Revoke Auth. Das Konto ist verbunden; starte nun einen Sync, um deine Notizen zu übertragen.*

### 4. Verschlüsselung vor dem ersten Upload einstellen

Wenn du Ende-zu-Ende-Verschlüsselung nutzen möchtest, richte sie ein, bevor du den Vault hochlädst. Speichere das Passwort in einem Passwortmanager und notiere das gewählte Verschlüsselungsformat. Auf allen Geräten müssen Format und Passwort übereinstimmen.

Das Projekt beschreibt die Formate [Rclone Crypt und OpenSSL](https://github.com/remotely-save/remotely-save/blob/master/docs/encryption/README.md). Die Verschlüsselung ist optional und wird durch die Verbindung mit dem Speicherkonto nicht automatisch aktiviert. Bei Dropbox bleibt außerdem der Vault-Name sichtbar.

Ändere bei einem bereits verwendeten entfernten Vault nicht versuchsweise Passwort oder Format, um einen Fehler zu beheben. Sichere eine lesbare lokale Kopie und prüfe vor einer Umstellung die Verschlüsselungsdokumentation.

### 5. Den ersten Sync manuell starten

Klicke in Obsidian auf das Sync-Symbol von Remotely Save in der Seitenleiste oder führe den Sync-Befehl über die Befehlspalette aus. Lass Obsidian geöffnet, bis der Vorgang abgeschlossen ist. Behebe gemeldete Fehler, bevor du das zweite Gerät hinzufügst.

![Markiertes Sync-Symbol von Remotely Save und Fortschrittsmeldungen in Obsidian](./dropbox-run-sync.webp)

*Klicke auf das markierte Sync-Symbol und warte auf den Abschluss, bevor du zum nächsten Gerät wechselst.*

Lass die automatische Synchronisierung während des Tests ausgeschaltet. So kannst du jeden Durchlauf einzeln überprüfen. Kontrolliere auch Größenlimits und ausgeschlossene Pfade: Ein abgeschlossener Sync bedeutet nicht, dass ausgeschlossene Anhänge übertragen wurden.

### 6. Das zweite Gerät verbinden

Auf dem Handy oder dem zweiten Computer:

1. Erstelle einen leeren lokalen Vault mit **demselben Namen**. Auf iPhone oder iPad bleibt die Option **Store in iCloud** für diesen Vault ausgeschaltet.
2. Installiere und aktiviere darin Remotely Save.
3. Wähle Dropbox und autorisiere dasselbe Konto.
4. Übernimm gegebenenfalls Verschlüsselungsformat und Passwort vom ersten Gerät. Hast du einen eigenen entfernten Speicherort festgelegt, muss auch dieser übereinstimmen.
5. Starte einen manuellen Sync und lass die App bis zum Abschluss geöffnet.
6. Öffne „Sync-Test“ und prüfe, ob der Satz vom ersten Gerät angekommen ist.

Der leere Vault verhindert, dass du gleich zu Beginn zwei unabhängig bearbeitete Fassungen zusammenführst. Die Sicherung vom ersten Gerät solltest du trotzdem behalten.

### 7. Auch die Gegenrichtung testen

Ergänze auf dem zweiten Gerät einen Satz in „Sync-Test“ und synchronisiere. Starte danach den Sync auf dem ersten Gerät und prüfe, ob die Ergänzung erscheint. Wenn du häufig Anhänge verwendest, teste zusätzlich eine kleine Datei.

Erst wenn das funktioniert, solltest du die automatische Synchronisierung einschalten und den Vault im Alltag auf beiden Geräten verwenden. Beim Wechsel gilt: zuerst das bisherige Gerät synchronisieren, dann das nächste, anschließend weiterschreiben.

## Was du auf iPhone und Android beachten solltest

Remotely Save unterstützt Obsidian auf Mobilgeräten. Plane trotzdem damit, **bei geöffneter App zu synchronisieren**. Ein eingestelltes Zeitintervall garantiert nicht, dass das Plugin weiterläuft, nachdem das Betriebssystem die App angehalten hat.

Lass beim ersten Download auch für Anhänge genügend Zeit. Wird der Vorgang unterbrochen, öffne Obsidian erneut, prüfe die Fehlermeldung und kontrolliere die Dateien, bevor du sie bearbeitest.

Die [dokumentierten Einschränkungen](https://github.com/remotely-save/remotely-save#limitations) nennen Leistungsprobleme auf Mobilgeräten bei großen Dateien, darunter Dateien ab 50 MB. Kommen Notizen an, aber PDFs oder Aufnahmen fehlen, prüfe die Einstellung zum Überspringen großer Dateien. Andere Wege beschreibt unser [Leitfaden zur Synchronisierung zwischen iPhone und Android](/de/blog/obsidian-iphone-android-sync/).

## Remotely Save synchronisiert nicht: Wo anfangen?

Nimm eine kleine Testnotiz und starte auf jedem Gerät nacheinander einen manuellen Sync. Notiere das betroffene Gerät und die genaue Fehlermeldung. So lässt sich eingrenzen, ob der Upload, der Download oder die Auswahl der Dateien das Problem ist.

| Problem | Prüfen | Nächster Schritt |
| --- | --- | --- |
| Autorisierung wird nicht abgeschlossen | Browserkonto und Rückkehr zu Obsidian | Anmeldung erneut durchführen und verbundenen Status kontrollieren |
| Sync endet, aber das andere Gerät bleibt leer | Konto, Vault-Name, eigener Zielpfad | Einstellungen vergleichen und erfolgreichen Upload auf Gerät 1 prüfen |
| Verschlüsselte Dateien lassen sich nicht lesen | Passwort und Format | Lesbare Kopie sichern, dann ursprüngliche Einstellungen abgleichen |
| Notizen kommen an, Anhänge fehlen | Größenlimits und ausgeschlossene Pfade | Betroffene Dateien mit den Regeln und Fehlermeldungen abgleichen |
| Handy aktualisiert erst beim Öffnen der App | Unterbrechung der App und Sync-Zeitpunkt | Vor und nach dem Bearbeiten bei geöffneter App manuell synchronisieren |
| WebDAV- oder S3-Verbindung schlägt fehl | Adresse, Zugangsdaten, Rechte und Fehlermeldung | Anleitung für den konkreten Anbieter durchgehen |
| Doppelte Notizen oder fehlende Änderungen | Gleichzeitige Bearbeitung und andere Sync-Tools | Bearbeitung auf anderen Geräten stoppen und alle Fassungen sichern |

Lösche nicht auf Verdacht den entfernten Vault oder die einzige vollständige lokale Kopie. Auch eine Neuinstallation des Plugins ist kein sinnvoller erster Versuch. Fehlen Dateien, sichere zuerst die noch vorhandenen Kopien und prüfe Backups sowie verfügbare Versionsstände. Unser [Artikel zu Sync-Konflikten und verschwundenen Notizen](/de/blog/obsidian-sync-conflicts/) erläutert häufige Ursachen und Hinweise zur Wiederherstellung.

### Manuell hochgeladene Google-Drive-Dateien fehlen

Die Google-Drive-Anbindung ist eine **PRO-Funktion**. Aktiviere sie und führe anschließend die Autorisierung im Plugin durch.

Laut [Google-Drive-Anleitung](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/googledrive/README.md) kann das Plugin auf Dateien und Ordner zugreifen, die es selbst erstellt hat. Einen Vault über die Drive-Webseite hochzuladen macht ihn deshalb nicht für das Plugin sichtbar. Sichere den lokalen Vault und lass ihn über das Plugin in Obsidian hochladen. Den Unterschied zum Sync-Ordner der Desktop-App erklärt unser [Google-Drive-Leitfaden](/de/blog/obsidian-google-drive-sync/).

### Fehler mit OneDrive-Konten oder leeren Dateien

Die kostenlose Anbindung ist für **persönliches OneDrive mit App Folder** dokumentiert. Ein Geschäfts- oder Schulkonto lässt sich damit nicht gleichsetzen. Der vollständige Zugriff auf persönliches OneDrive ist eine separate PRO-Funktion.

Die [OneDrive-Dokumentation](https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/onedrive/README.md) weist außerdem darauf hin, dass die API keine leeren Dateien hochladen lässt. Scheitert der Sync an einer leeren Markdown-Notiz, prüfe die Einstellung für leere Dateien oder trage den vorgesehenen Inhalt ein und versuche es erneut.

## Zugangsdaten, Konflikte und Backups

Die Datei `data.json` von Remotely Save kann sensible Einstellungen enthalten. Sie gehört nicht in ein öffentliches Git-Repository, einen Support-Screenshot oder den Anhang eines Fehlerberichts. Entferne auch aus Fehlermeldungen Tokens, Zugangsdaten und private Notizinhalte, bevor du sie teilst.

Die kostenlose Version bietet eine grundlegende Konfliktbehandlung; die erweiterte intelligente Konfliktbehandlung gehört zu PRO. Prüfe trotzdem beide Fassungen, wenn dieselbe Notiz auf zwei Geräten bearbeitet wurde. Sichere sie vor dem Zusammenführen und kontrolliere das Ergebnis auf dem anderen Gerät, bevor du weiterschreibst.

Bewahre Backups außerhalb des Sync-Ziels auf. Auch Löschungen und unerwünschte Änderungen können übertragen werden. Was sich wiederherstellen lässt, hängt von den tatsächlich vorhandenen Sicherungen und Versionsständen ab.

## Wann passt eine andere Lösung besser?

Remotely Save passt gut, wenn du einen bestimmten Speicheranbieter nutzen und dessen Einstellungen selbst verwalten möchtest. Funktioniert dein Test auf beiden Geräten, gibt es keinen Grund, allein wegen einer anderen verfügbaren Lösung umzuziehen.

Möchtest du dich weniger um die Speicheranbindung kümmern, kannst du einen gehosteten Dienst wählen:

| Lösung | Passend, wenn du … | Was zu berücksichtigen ist |
| --- | --- | --- |
| Remotely Save | Dropbox, WebDAV, S3 oder einen anderen Speicher selbst wählen möchtest | Einrichtung, Zugangsdaten, Ausschlüsse und Wiederherstellung |
| Obsidian Sync | den offiziellen integrierten Dienst bevorzugst | Kostenpflichtiges Abo und Auswahl der zu synchronisierenden Inhalte |
| Synch | einen gehosteten Open-Source-Dienst mit Ende-zu-Ende-Verschlüsselung suchst | Passender Tarif für Vault-Größe und Anhänge |

[Synch](/de/) stellt den Sync-Dienst bereit, sodass du kein zusätzliches Speicherkonto verbinden musst. Direkten Geräteabgleich, Self-Hosting und Git behandelt unser [Vergleich der Obsidian-Sync-Alternativen](/de/blog/obsidian-sync-alternatives/).

Bildquelle: [Dropbox-Anleitung von Remotely Save, Schritte 10, 12 und 13](https://github.com/remotely-save/remotely-save/blob/master/docs/dropbox_review_material/README.md#steps).
