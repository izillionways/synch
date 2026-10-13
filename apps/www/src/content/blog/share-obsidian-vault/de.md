---
title: "Obsidian-Vault teilen: 4 Wege zur Zusammenarbeit"
description: "Teile einen Obsidian-Vault mit Obsidian Sync, Synch, Git oder einem Cloud-Ordner. Vergleiche die Abo-Modelle und folge den Schritt-für-Schritt-Anleitungen."
pubDate: 2026-09-28
draft: false
---

Um **einen Obsidian-Vault mit anderen zu teilen**, kannst du Obsidian Sync, Synch, ein privates Git-Repository oder einen freigegebenen Cloud-Ordner nutzen. Jede Person öffnet eine lokale Kopie in Obsidian. Die gewählte Methode überträgt Änderungen zwischen diesen Kopien. Wenn du jemandem den Vault-Ordner schickst, erhält die Person nur eine einmalige Kopie; spätere Änderungen werden dadurch nicht synchronisiert.

Für eine Lerngruppe, eine gemeinsame Sammlung von Forschungsmaterial oder eine Wissensdatenbank im Team solltest du zuerst klären, wie Mitglieder beitreten und welche Geräte sie verwenden. Dieser Leitfaden stellt vier Möglichkeiten zur Zusammenarbeit vor, mit Einrichtungsschritten für Obsidian Sync und Synch sowie einem Vergleich von Speicherplatz, verschlüsseltem Zugriff und Versionsverlauf.

![Drei Laptops sind mit einer gemeinsamen Sammlung verlinkter Notizen verbunden und stehen für lokale Kopien eines Obsidian-Vaults.](./shared-vault-collaboration.webp)

## Welche Methode zum Teilen eines Obsidian-Vaults passt zu dir?

| Methode | Geeignet, wenn … | Wichtigste Voraussetzung oder Einschränkung |
|---|---|---|
| **Obsidian Sync** | du die offizielle Integration möchtest oder alle bereits ein Abo haben | Jede beteiligte Person braucht ein Sync-Abo |
| **Synch Plus** | zwei oder drei Personen ein gemeinsames Abo nutzen möchten | Mitglieder treten einer Organisation bei und benötigen eine Freigabe für den verschlüsselten Zugriff |
| **Privates Git-Repository** | alle mit Versionskontrolle vertraut sind | Beteiligte verwalten Commits, Pulls, Pushes und Merge-Konflikte selbst |
| **Freigegebener Cloud-Ordner** | der Speicheranbieter gemeinsame lokale Ordner auf allen Geräten unterstützt | Mobiler Zugriff und Konfliktbehandlung hängen vom Anbieter ab |

Wenn du **Obsidian-Notizen nur zum Lesen teilen** möchtest, verschicke eine Markdown-Datei oder exportiere ein PDF.

**Einen Vault zu teilen ist etwas anderes als gemeinsames Bearbeiten in Echtzeit.** Die Synchronisierung überträgt gespeicherte Änderungen zwischen lokalen Kopien. Sie zeigt nicht unbedingt den Cursor oder jeden Tastenanschlag der anderen Person an. Sprecht euch ab, wenn ihr dieselbe Notiz bearbeitet.

## So teilst du einen Obsidian-Vault mit anderen

Erstelle zuerst ein Backup des Vaults und wähle dann eine der folgenden Methoden. Bei einer neuen Gruppe hilft ein eigener Vault dabei, persönliche Notizen von den für alle zugänglichen Materialien zu trennen.

### 1. Einen Vault mit Obsidian Sync teilen

Ausgangspunkt ist ein lokaler Vault, der mit einem Remote-Vault in Obsidian Sync verbunden ist. Jede beteiligte Person braucht ein aktives Sync-Abo.

So lädst du jemanden ein. Die Menünamen beziehen sich auf die englische Oberfläche:

1. Öffne **Settings → Sync**.
2. Wähle neben **Remote vault** die Option **Manage**.
3. Suche den gewünschten Vault und wähle **Manage sharing**.
4. Gib unter **Invite user** die E-Mail-Adresse der Person ein.
5. Wähle **Add**.

Die eingeladene Person verbindet anschließend einen lokalen Vault mit dem gemeinsamen Remote-Vault. Bei Ende-zu-Ende-verschlüsselten Vaults übermittelst du ihr das Verschlüsselungspasswort über einen vertrauenswürdigen Kanal. Weitere Informationen findest du in der [offiziellen Anleitung zu gemeinsamen Vaults](https://obsidian.md/help/sync/collaborate).

Alle Beteiligten können die Inhalte bearbeiten; weitere Personen einladen kann nur der Eigentümer. Obsidian Sync bietet weder fein abgestufte Berechtigungen noch gemeinsames Bearbeiten in Echtzeit.

### 2. Einen Vault mit Synch teilen

Der Vault muss mit Synch verbunden sein und die Organisation den Plus-Tarif nutzen:

1. **Lade die andere Person ein.** Öffne **Vault-Freigabe → Organisationen verwalten** und sende eine Einladung per E-Mail.
2. **Die Person fordert Zugriff an.** Nach dem Annehmen der Einladung öffnet sie einen leeren Obsidian-Vault, meldet sich bei Synch an und wählt deinen Vault unter **Vault verbinden → Mit dir geteilt**.
3. **Gib den Zugriff frei und stelle die Verbindung her.** Prüfe den vollständigen Zugangscode über einen separaten, vertrauenswürdigen Kanal und bestätige ihn in **Vault-Freigabe**. Die eingeladene Person legt auf dem Gerät, von dem die Anfrage stammt, ihr eigenes Vault-Passwort fest und schließt die Verbindung ab.

Die Freigabe umfasst auch den Zugriff auf den gespeicherten Verlauf. Eingeladene Mitglieder brauchen ein Synch-Konto, aber keinen eigenen kostenpflichtigen Tarif.

### 3. Einen Obsidian-Vault mit Git teilen

Ein privates Git-Repository eignet sich für Gruppen, die bereits Versionskontrolle nutzen. Ein typischer Ablauf sieht so aus:

1. Erstelle ein privates Repository und füge nur die Vault-Inhalte hinzu, die du teilen möchtest. Prüfe vor dem Hochladen Anhänge, Konfigurationsdateien und einen eventuell vorhandenen Git-Verlauf.
2. Lade die anderen Personen zum Repository ein.
3. Jede Person klont das Repository und öffnet den lokalen Ordner als Vault in Obsidian.
4. Holt vor dem Bearbeiten die neuesten Änderungen mit einem Pull und übertragt eure Arbeit anschließend mit Commit und Push. Löst Konflikte, bevor ihr weiterarbeitet.

Mit dem [Obsidian-Git-Plugin](https://github.com/Vinzent03/obsidian-git/blob/master/docs/Start%20here.md) lassen sich Git-Funktionen direkt in Obsidian nutzen. Ein privates Repository beschränkt den Zugriff, bietet aber von sich aus keine Ende-zu-Ende-Verschlüsselung. Unser [Leitfaden zur Obsidian-Synchronisierung mit Git](/de/blog/obsidian-git-sync/) erklärt den Ablauf und seine Vor- und Nachteile für Einsteiger.

### 4. Einen Vault über einen Cloud-Ordner teilen

Ein freigegebener Cloud-Ordner kann funktionieren, wenn der Anbieter allen Beteiligten dieselben Dateien lokal bereitstellt:

1. Erstelle einen eigenen Vault-Ordner im Cloud-Speicher und gib den anderen Personen Bearbeitungsrechte.
2. Alle synchronisieren den Ordner auf ihr Gerät und halten die Dateien lokal heruntergeladen.
3. Öffnet den lokalen Ordner als Vault in Obsidian.
4. Testet Änderungen an einer Notiz und einem Anhang in beide Richtungen, bevor ihr weitere Materialien hinzufügt.

Prüfe zuerst die Unterstützung für Mobilgeräte. Ein gemeinsamer Ordner, der auf zwei Laptops funktioniert, ist für Obsidian auf einem Smartphone möglicherweise nicht zugänglich. [Obsidians Leitfaden zu Synchronisierungsmethoden](https://obsidian.md/help/sync-notes) erläutert die Einschränkungen der Plattformen. Verwende für diesen Vault nur einen Synchronisierungsdienst, damit sich Aktualisierungen nicht gegenseitig in die Quere kommen.

![Cloud-Speicher, Git-Versionsverlauf und ein gemeinsamer Ordner als Möglichkeiten, Obsidian-Notizen zu teilen.](./vault-sharing-methods.webp)

## Obsidian Sync Plus und Synch Plus für gemeinsame Vaults im Vergleich

Obsidian Sync ist der offizielle, in Obsidian integrierte Dienst. Synch verbindet sich über ein Community-Plugin und bietet im Plus-Tarif die gemeinsame Nutzung innerhalb einer Organisation. Beide unterstützen die Ende-zu-Ende-Verschlüsselung der Vault-Inhalte. Für einen Funktionsvergleich mit Synch Plus eignet sich Obsidian Sync Plus besser: Beide enthalten ein Jahr Versionsverlauf und unterstützen größere Anhänge als Obsidian Standard. Ihre Speichergrenzen und Abo-Modelle unterscheiden sich jedoch.

| Merkmal | Obsidian Sync Plus | Synch Plus |
|---|---|---|
| **Abo-Modell** | Jede beteiligte Person braucht ein aktives Sync-Abo | **Ein Abo umfasst bis zu 3 Mitglieder einschließlich des Eigentümers** |
| **Ende-zu-Ende-Verschlüsselung** | Für verschlüsselte Vaults verfügbar | Für Vault-Inhalte enthalten |
| **Vault-Passwort einrichten** | Beteiligte geben das Verschlüsselungspasswort des Vaults ein | **Jedes Mitglied legt nach der Freigabe ein eigenes Vault-Passwort fest** |
| **Beitritt** | Einladung durch den Eigentümer über die Sync-Einstellungen | Einladung zur Organisation, anschließend Freigabe des verschlüsselten Zugriffs |
| **Versionsverlauf** | 12 Monate | 1 Jahr |
| **Enthaltener Speicherplatz** | Insgesamt 10 GB für alle Vaults eines Kontos | **5 GB pro Vault; insgesamt 15 GB für 3 Vaults** |
| **Maximale Dateigröße** | 200 MB | 100 MB |
| **Synchronisierte Vaults** | 10 pro Konto | 3 pro Organisation |

Voraussetzungen und aktuelle Grenzen findest du im [Obsidian-Leitfaden zu gemeinsamen Vaults](https://obsidian.md/help/sync/collaborate), bei den [Obsidian-Sync-Tarifen](https://obsidian.md/sync) und auf der [Synch-Preisseite](https://synch.run/de/pricing).

### Verschlüsselter Zugriff: gemeinsames oder individuelles Passwort

Mit Synch **kannst du jemanden einladen, ohne dein Vault-Passwort weiterzugeben**. Ein Administrator genehmigt den Zugriff anhand des Bestätigungscodes der anderen Person. Die Gruppe muss daher kein gemeinsames Passwort verteilen.

![Drei individuelle Zugangsdaten sind mit einem abgeschlossenen gemeinsamen Ordner verbunden und veranschaulichen verschlüsselten Zugriff mit persönlichen Passwörtern.](./individual-vault-passwords.webp)

## Den gemeinsamen Vault für den Alltag einrichten

Ein paar Absprachen helfen unabhängig von der gewählten Methode.

**Trenne persönliche Notizen von gemeinsamen Materialien.** Ein eigener Vault für die Zusammenarbeit macht deutlich, was der Gruppe gehört. Nimm nur Inhalte auf, auf die andere zugreifen dürfen, und überlege, ob der gespeicherte Verlauf private Informationen enthält.

**Halte die Struktur einfach.** Eine Startnotiz, ein Projektordner, Besprechungsnotizen und Referenzmaterial reichen oft aus. Erkläre, wohin neue Notizen gehören, damit alle mitarbeiten können, ohne den gesamten Vault umzuorganisieren.

**Stimmt euch bei häufig bearbeiteten Notizen ab.** Bestimmt bei Besprechungen eine Person für das Protokoll oder verteilt Abschnitte eines längeren Dokuments. Wartet auf den Abschluss der Synchronisierung, bevor ihr die Arbeit weitergebt. Praktische Bearbeitungsroutinen findest du in unserem [Leitfaden zum Vermeiden von Obsidian-Synchronisierungskonflikten](/de/blog/obsidian-sync-conflicts/).

**Betrachte Einstellungen getrennt von Inhalten.** Themes, Tastenkürzel und Arbeitsbereichseinstellungen können persönlich sein, auch wenn ihr Notizen teilt. Prüfe, wie eure Methode mit dem Konfigurationsordner `.obsidian` umgeht.

**Verwende nur eine Synchronisierungsmethode für den Vault und erstelle separate Backups.** Obsidian rät davon ab, mehrere Synchronisierungsdienste für denselben Vault zu kombinieren, da dies Konflikte verursachen kann. Der [Synchronisierungsleitfaden](https://obsidian.md/help/sync-notes) erläutert die entsprechenden Vorsichtsmaßnahmen.

## Häufige Fragen zum Teilen von Obsidian-Vaults

### Kann ich einen Obsidian-Vault kostenlos teilen?

Mit Git oder einem bereits vorhandenen Tarif für gemeinsamen Speicher könnt ihr möglicherweise ohne eigenes Sync-Abo zusammenarbeiten. Prüfe die Hosting-Grenzen, die Gerätekompatibilität und den Einrichtungsaufwand für jede Person. Auch kostenlose Software kann laufende Pflege erfordern.

### Kann ich jemandem einfach meinen Vault-Ordner schicken?

Ja, wenn die Person eine Kopie zu einem bestimmten Zeitpunkt braucht. Füge die Anhänge hinzu, auf die deine Notizen verweisen, und entferne vorher private Inhalte. Spätere Änderungen werden nicht zwischen den Kopien übertragen, solange ihr keine Synchronisierung oder einen anderen Ablauf für die Zusammenarbeit einrichtet.

### Kann ich einen Vault ohne Obsidian Sync teilen?

Ja. Du kannst Synch, Git oder einen geeigneten gemeinsamen Cloud-Ordner verwenden, ohne für Obsidian Sync zu bezahlen. Beim offiziellen Dienst für gemeinsame Vaults brauchen alle Beteiligten ein aktives Obsidian-Sync-Abo.

### Kann ich nur einen Ordner aus meinem Vault teilen?

Erstelle für gemeinsames Bearbeiten einen separaten Vault mit den Notizen und Anhängen, die die Gruppe braucht. Prüfe nach dem Kopieren die Links: Ein Link zu einer Notiz, die in deinem persönlichen Vault bleibt, gibt anderen keinen Zugriff auf diese Notiz.

### Muss ich mein Verschlüsselungspasswort teilen?

Das hängt vom Dienst ab. Bei Obsidian Sync verwenden Beteiligte das Verschlüsselungspasswort des Vaults, wenn sie sich mit einem verschlüsselten Vault verbinden. Bei Synch legt jede Person nach der Freigabe des verschlüsselten Zugriffs ihr eigenes Vault-Passwort fest.

### Können zwei Personen dieselbe Notiz gleichzeitig bearbeiten?

Beide können ihre lokalen Kopien bearbeiten, aber überlappende Änderungen können Konflikte verursachen. Gehe bei den hier beschriebenen Methoden nicht davon aus, dass sie gemeinsames Bearbeiten in Echtzeit bieten. Wenn gleichzeitiges Schreiben für euren Ablauf zentral ist, prüft Werkzeuge, die dies ausdrücklich unterstützen.

### Was passiert, wenn jemand die Gruppe verlässt?

Entferne den Zugriff über den verwendeten Dienst. Ein Entzug der Berechtigung löscht keine bereits heruntergeladenen Dateien. Teile daher nur Materialien, von denen die Person eine Kopie behalten darf.

## Welcher Dienst passt zu eurer Gruppe?

Obsidian Sync liegt nahe, wenn alle bereits ein Abo haben oder ihr die offizielle Integration bevorzugt.

Für zwei oder drei Personen, die gemeinsame Notizen einrichten und die Verwaltung des Tarifs sowie Einladungen einer Person überlassen möchten, bietet sich [Synch Plus](/de/pricing/) an.

Probiert die gewählte Methode zuerst mit einigen verlinkten Notizen und einem Anhang aus. Alle sollten sich verbinden, Änderungen vornehmen und die Ergebnisse auf ihren tatsächlichen Geräten prüfen, bevor ihr euer gemeinsames Projekt übertragt.
