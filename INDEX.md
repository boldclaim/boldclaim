---
title: Bold Claim — Schnellnavigation
type: note
last_updated: 2026-04-16
tags: ["personal"]
---

# Bold Claim — Schnellnavigation

> Finde das richtige Argument in 10 Sekunden

---

## Ordner-Übersicht

```
boldclaim/
├── INDEX.md                         ← Du bist hier
├── CHANGELOG.md                     ← Was sich geändert hat
│
├── docs/                            ← GitHub Pages (öffentlich)
│   ├── index.html                   ← RAG Frontend SPA (886 Zeilen)
│   ├── worker.js                    ← Cloudflare Worker API (181 Zeilen)
│   ├── wrangler.toml                ← Worker-Config
│   └── guide/                       ← Conversation Guide (ausgelagert nach afd-check.de)
│       ├── index.html               ← SPA: Landing + Cascade (833 Zeilen)
│       └── guide-data.js            ← 8 Themen-Datenobjekte (130 Zeilen)
│
├── CONTENT/
│   ├── 01-parteien/
│   │   ├── afd-und-rechts.md        ← AfD, Höcke, Remigration, VS, Vetternwirtschaft, Brain Drain Ost
│   │   ├── afd-wahlprogramm-2025.md ← Komplettes Wahlprogramm analysiert
│   │   ├── afd-drei-saetze.md       ← 3-Satz-Killer für Stammtisch (auswendig lernen)
│   │   ├── afd-stammtisch-arsenal.md ← 10+ Konter-Blöcke für häufige Stammtisch-Claims
│   │   ├── afd-komplett-zerlegt.md  ← Alle AfD-Argumente systematisch zerlegt
│   │   ├── afd-rechtsextremismus-referenz.md ← 8 Kategorien dokumentierter Fälle
│   │   ├── cdu-argumente-konter.md  ← CDU-Policy-Faktencheck (Wirtschaft, Soziales, Klima)
│   │   ├── merz-und-cdu.md         ← Merz, CDU-Heuchelei, EVP-Brandmauer
│   │   └── linke.md                ← Konter gegen Linke-Hetze, BSW-Abgrenzung
│   │
│   ├── 02-themen/
│   │   ├── migration-fakten.md      ← Statistiken, PKS, TVBZ, Wirtschaft, Integration (1018 Zeilen)
│   │   ├── russland-ukraine.md      ← NATO-Mythen, Kriegsverbrechen, Kreml-Taktik (948 Zeilen)
│   │   ├── klima.md                 ← Klimaleugner-Konter, Dunkelflaute, Merit-Order
│   │   ├── wirtschaft-housing.md    ← AfD/FDP-Wohnungspolitik, Markt-Mythen
│   │   ├── heizungsgesetz-betrug.md ← CDU-Heizungskampagne, Gaskosten-Falle, WP-Mythen
│   │   ├── gender.md                ← Trans/Gender-Debatte
│   │   ├── rente-sozialstaat.md     ← Rente + Bürgergeld konsolidiert, Gotchas
│   │   ├── antisemitismus.md        ← PMK 2024, RIAS, rechts vs. islamistisch, IHRA 3D
│   │   ├── frauenquote-gleichstellung.md ← 10 Reddit-Taktiken, 6 Debatten, 12 Gotchas
│   │   ├── verkehr-mobilitaet.md    ← Tempo 30, Umwelt, Sprit (Merge aus 2 Dateien)
│   │   ├── islam-integration-religionsfreiheit.md ← MOTRA, Brennpunktschulen, Standardreferenzen
│   │   ├── sexualdelikte-taetergeschlecht.md ← BKA PKS 2023, Geschlecht > Herkunft
│   │   ├── verfassungsschutz-verteidigung.md ← VS-Verteidigung, Maaßen, NSU
│   │   ├── kontokuendigungen-sanktionen.md ← OFAC, Bankkonten, US-Sanktionen
│   │   ├── bge-grundeinkommen.md   ← BGE als Systemerhaltung, Kaufkraft-Argument
│   │   ├── ki-gefahren.md          ← KI: Optimierung, Scheming, Deepfakes
│   │   ├── milei-marktradikalitaet.md ← Methodentrick, Inflationstrick
│   │   ├── wehrpflicht-verteidigung.md ← Eskalationsgeschichte, Skandinavien
│   │   ├── tuerkische-diaspora-wahlverhalten.md ← SPD+AKP, Subgruppen, Generationstrend
│   │   └── sinti-roma-antiziganismus.md ← PKS-Sonderbehandlung, institutioneller Rassismus
│   │
│   ├── 03-usa-und-tech-oligarchie/
│   │   ├── trump-usa.md             ← Trump-Faschismus, 6. Januar, DOGE
│   │   ├── project-2025.md          ← Heritage Foundation, 53% implementiert
│   │   ├── peter-thiel-explainer.md ← Thiel-Netzwerk, Palantir, Vance, Musk
│   │   ├── peter-thiel-accelerationist-worldview.md ← Philosophie & Ideologie
│   │   ├── peter-thiel-online-debate-playbook.md ← Schwachstellen & Konter
│   │   ├── tactics-against-accelerationist-arguments.md ← Praxis-Playbook
│   │   └── republikaner-partner.md  ← Trump-Wähler Werte-Argument
│   │
│   ├── 04-rhetorik-und-strategie/
│   │   ├── false-equivalence.md     ← "Beide Seiten", PMK-Zahlen, Terror-Listen
│   │   ├── privilegien-umkehr.md    ← NEU: Wenn Rechte "Privilege" klauen, Kontaktparadoxon
│   │   ├── anti-afd-ueberzeugungsstrategie.md ← Scoring-Matrix, Zielgruppen
│   │   ├── countering-right-wing-populism-mason.md ← Strategischer Rahmen
│   │   └── tactical-protocols-disinformation-&-troll-counter-measures.md ← Detection Logic
│   │
│   └── 05-kommunalwahl-muenchen-2026/
│       ├── 00-uebersicht-stimmzettel.md ← Übersicht alle Listen
│       └── 01-14-*.md               ← Wahlprogramm-Analysen (15 Parteien/Listen)
│
├── blog/                            ← 23 englische Blog-Posts (unveröffentlicht)
│   ├── 01-20-*.md                   ← Topic Debunks + Methodology + Tactics
│   ├── pattern-library.md           ← 10 benannte rhetorische Muster
│   ├── suppression-frame-explainer.md
│   └── mirror-field-guide-public.md
│
├── META/
│   ├── architecture.md              ← Pipeline: Kommentar → Antwort
│   ├── techniques.md                ← Bot-Erkennung, Taktiken (Topic-Hopping, Sealioning etc.)
│   ├── quellen-verteidigung.md      ← 9 Quellen verteidigen (Correctiv, IAB, KFN, ifo etc.)
│   ├── reddit-strategie.md          ← Subs, Accounts, Taktik
│   ├── reddit-account-namen.md      ← Panel-getestete Account-Namen
│   ├── psychologie.md               ← Warum Menschen Disinfo glauben
│   ├── self-care.md                 ← Burnout vermeiden
│   ├── exits.md                     ← Exit-Strategien
│   └── cdu-faktencheck-setup.md     ← Claude-Project-Setup für CDU-Checks
│
├── QUICK/
│   ├── zinger-arsenal.md            ← Schnelle Konter nach Situation
│   ├── one-liners.md                ← Alle Konter unter 30 Wörtern
│   └── fact-check-templates.md      ← Live-Debunking-Vorlagen
│
├── AUTOMATION/
│   ├── triggers.yaml                ← Keyword-Mapping
│   └── cdu-faktencheck-system-prompt.md
│
└── _internal/                       ← Gitignored, Projekt-Docs
    ├── handoff.md                   ← Übergabe-Dokument
    ├── cockpit.html                 ← Projekt-Dashboard
    ├── backlog.md                   ← Feature-Backlog
    ├── boldclaim-dashboard.html     ← Reddit-Kampagnen-Tracker (6 Tabs)
    ├── reddit-drafts-dashboard.html ← Konter-Entwürfe (7 Tabs)
    ├── reddit-entlarvung-dashboard.html ← Entlarvungs-Konter
    ├── dezwo-counter-dashboard.html ← dezwo-Konter (6 Tabs)
    ├── topic-map.html               ← Themen-Übersicht
    ├── knowledge-base-viz.html      ← Wissenslandschaft
    └── reddit-antworten-*.md        ← Thread-Analysen (8 Dateien)
```

---

## Schnellsuche: Was sagt dein Gegenüber?

### AfD & Rechtsextremismus

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "AfD ist keine Nazi-Partei" | [[CONTENT/01-parteien/afd-und-rechts#Höcke ist Faschist - Gerichtsurteil]] | 🟢 EASY |
| "AfD ist für den kleinen Mann!" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr#AfD als Reichenpartei]] | 🟢 EASY |
| "Remigration ist nicht ethnisch" | [[CONTENT/01-parteien/afd-und-rechts#Potsdam-Treffen Remigration]] | 🟡 MEDIUM |
| "Verfassungsschutz ist politisch" | [[CONTENT/01-parteien/afd-und-rechts#Verfassungsschutz-Einstufung Timeline]] | 🟡 MEDIUM |
| "AfD hat keine Russland-Connections" | [[CONTENT/01-parteien/afd-und-rechts#AfD-Russland Connections]] | 🔴 HARD |
| "AfD hält ihr Wort" | [[CONTENT/01-parteien/afd-und-rechts#AfD hält ihr Wort?]] | 🟢 EASY |
| "28 Verurteilte ist normal" | [[CONTENT/01-parteien/afd-und-rechts#AfD-Abgeordnete Verurteilte Straftäter]] | 🟢 EASY |
| "Vetternwirtschaft gibts überall" | [[CONTENT/01-parteien/afd-und-rechts#Konter Ist das nicht bei allen Parteien so]] | 🟢 EASY |
| "Alle Politiker lügen eh" | [[CONTENT/02-themen/russland-ukraine#Kreml-Propaganda verstehen]] | 🟡 MEDIUM |
| "Demos bringen nichts" | [[CONTENT/01-parteien/afd-und-rechts#Demos wirken - Historische Beweise]] | 🟢 EASY |
| "AfD in drei Sätzen?" | [[CONTENT/01-parteien/afd-drei-saetze]] | 🟢 EASY |

### Privilegien-Umkehr & Klassenpolitik (NEU)

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Es ist leicht, links zu sein wenn man privilegiert ist" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr]] | 🟡 MEDIUM |
| "Linke haben 0 Berührungspunkte" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr#Kontaktparadoxon]] | 🟡 MEDIUM |
| "Lifestyle-Linke" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr#Was daran stimmt]] | 🟡 MEDIUM |
| "Grüne sind die Reichsten" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr#Wer ist wirklich privilegiert]] | 🟢 EASY |
| "Die haben andere Sorgen" | [[CONTENT/04-rhetorik-und-strategie/privilegien-umkehr#AfD als Reichenpartei]] | 🟢 EASY |

### Migration

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Deutschland wird unsicherer!" | [[CONTENT/02-themen/migration-fakten#Deutschland wird unsicherer]] | 🟢 EASY |
| "60% der Gewalttaten von Migranten" | [[CONTENT/02-themen/migration-fakten#EU-Faktencheck]] | 🟢 EASY |
| "Sexualdelikte explodieren" | [[CONTENT/02-themen/migration-fakten#Kriminalstatistik richtig lesen]] | 🟡 MEDIUM |
| "Ausländer sind krimineller" | [[CONTENT/02-themen/migration-fakten#Überrepräsentation verstehen]] | 🔴 HARD |
| "Die liegen uns auf der Tasche" | [[CONTENT/02-themen/migration-fakten#Wirtschaftlicher Beitrag]] | 🟢 EASY |
| "Männer als Vergleich" | [[CONTENT/02-themen/sexualdelikte-taetergeschlecht]] | 🟡 MEDIUM |
| "Gruppenvergewaltigung" | [[CONTENT/02-themen/migration-fakten#PKS 2024 Pro-Kopf-Raten]] | 🔴 HARD |
| "Sinti und Roma kriminell" | [[CONTENT/02-themen/sinti-roma-antiziganismus]] | 🟡 MEDIUM |
| "Türken wählen Erdogan" | [[CONTENT/02-themen/tuerkische-diaspora-wahlverhalten]] | 🟡 MEDIUM |
| "Islam passt nicht zu uns" | [[CONTENT/02-themen/islam-integration-religionsfreiheit]] | 🟡 MEDIUM |
| "Der Osten wählt AfD wegen Migration" | [[CONTENT/01-parteien/afd-und-rechts#Warum wählt der Osten AfD]] | 🟡 MEDIUM |

### Merz & CDU/CSU

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Merz macht gute Politik" | [[CONTENT/01-parteien/merz-und-cdu#Merz gefährdet]] | 🟡 MEDIUM |
| "Der Heiz-Hammer ist weg!" | [[CONTENT/02-themen/heizungsgesetz-betrug#Die große Lüge]] | 🟢 EASY |
| "Wärmepumpe unbezahlbar!" | [[CONTENT/02-themen/heizungsgesetz-betrug#Wärmepumpen-Mythen]] | 🟢 EASY |
| "Brandmauer zur AfD steht" | [[CONTENT/01-parteien/merz-und-cdu#EVP Brandmauer gefallen]] | 🟢 EASY |
| "CDU hat gute Wirtschaftspolitik" | [[CONTENT/01-parteien/cdu-argumente-konter]] | 🟡 MEDIUM |

### Russland & Ukraine

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "NATO hat versprochen..." | [[CONTENT/02-themen/russland-ukraine#NATO-Osterweiterung Mythos]] | 🟢 EASY |
| "Die Ukraine hat provoziert" | [[CONTENT/02-themen/russland-ukraine#Budapest Memorandum]] | 🟡 MEDIUM |
| "Butscha war inszeniert" | [[CONTENT/02-themen/russland-ukraine#Butscha und Kriegsverbrechen]] | 🟢 EASY |
| "Was ist mit dem Irak?" | [[CONTENT/02-themen/russland-ukraine#Whataboutism-Killer]] | 🟢 EASY |
| "Russland gewinnt den Krieg!" | [[CONTENT/02-themen/russland-ukraine#Russland hat strategisch VERLOREN]] | 🟢 EASY |
| "Europa friert ohne Gas!" | [[CONTENT/02-themen/russland-ukraine#Energiemarkt Dauerhaft verloren]] | 🟢 EASY |

### Wirtschaft & Soziales

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "AfD hat gute Wohnungspolitik" | [[CONTENT/02-themen/wirtschaft-housing#AfD Wohnungspolitik]] | 🟡 MEDIUM |
| "Der Markt regelt Wohnen" | [[CONTENT/02-themen/wirtschaft-housing#FDP Marktglaube]] | 🟡 MEDIUM |
| "Rente ist sicher" | [[CONTENT/02-themen/rente-sozialstaat]] | 🟡 MEDIUM |
| "Bürgergeld macht faul" | [[CONTENT/02-themen/rente-sozialstaat#Bürgergeld]] | 🟢 EASY |
| "Milei macht alles richtig" | [[CONTENT/02-themen/milei-marktradikalitaet]] | 🟡 MEDIUM |
| "BGE macht faul" | [[CONTENT/02-themen/bge-grundeinkommen#Das macht faul]] | 🟡 MEDIUM |

### Klima & Energie

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Klimawandel ist umstritten" | [[CONTENT/02-themen/klima#Klimawandel ist real]] | 🟢 EASY |
| "Deutschland allein ändert nichts" | [[CONTENT/02-themen/klima#Deutschland allein]] | 🟡 MEDIUM |
| "Erneuerbare sind zu teuer" | [[CONTENT/02-themen/klima#Erneuerbare sind zu teuer]] | 🟢 EASY |
| "Dunkelflaute!" | [[CONTENT/02-themen/klima#Dunkelflaute Spanien Blackout]] | 🟡 MEDIUM |
| "Merit-Order-Effekt" | [[CONTENT/02-themen/klima#Merit-Order]] | 🟡 MEDIUM |

### Gender & Gleichstellung

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Es gibt nur zwei Geschlechter" | [[CONTENT/02-themen/gender#Sex vs Gender]] | 🟡 MEDIUM |
| "Trans ist Mode" | [[CONTENT/02-themen/gender#Trans-Identität ist real]] | 🟡 MEDIUM |
| "Quote ist Diskriminierung" | [[CONTENT/02-themen/frauenquote-gleichstellung]] | 🟡 MEDIUM |
| "Pay Gap ist Mythos" | [[CONTENT/02-themen/frauenquote-gleichstellung#Gender Pay Gap]] | 🔴 HARD |

### Verkehr

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Tempo 30 bringt nichts" | [[CONTENT/02-themen/verkehr-mobilitaet]] | 🟢 EASY |
| "Grüne schikanieren Autofahrer" | [[CONTENT/02-themen/verkehr-mobilitaet#Politischer Opportunismus]] | 🟡 MEDIUM |

### Antisemitismus

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Antisemitismus kommt nur von Muslimen" | [[CONTENT/02-themen/antisemitismus]] | 🟡 MEDIUM |
| "Israelkritik ist kein Antisemitismus" | [[CONTENT/02-themen/antisemitismus#IHRA 3D-Test]] | 🟡 MEDIUM |

### Verfassungsschutz

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "VS ist links unterwandert!" | [[CONTENT/02-themen/verfassungsschutz-verteidigung#VS historisch RECHTS-blind]] | 🟢 EASY |
| "Maaßen war der Letzte mit Verstand!" | [[CONTENT/02-themen/verfassungsschutz-verteidigung#Maaßen]] | 🟢 EASY |
| "Bevölkerungsaustausch ist real!" | [[CONTENT/02-themen/verfassungsschutz-verteidigung#Bevölkerungsaustausch]] | 🟡 MEDIUM |

### False Equivalence

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Beide Seiten sind gleich schlimm" | [[CONTENT/04-rhetorik-und-strategie/false-equivalence#Gewaltstatistiken]] | 🟢 EASY |
| "Hufeisen-Theorie!" | [[CONTENT/04-rhetorik-und-strategie/false-equivalence#Hufeisen widerlegt]] | 🟡 MEDIUM |
| "PMK-Einteilung Schwachsinn" | [[CONTENT/04-rhetorik-und-strategie/false-equivalence#Links Rechts-Einteilung]] | 🟡 MEDIUM |

### Trump & USA

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "Trump ist kein Faschist!" | [[CONTENT/03-usa-und-tech-oligarchie/trump-usa#Was seine eigenen Leute sagen]] | 🟢 EASY |
| "Project 2025 hat nichts mit Trump zu tun!" | [[CONTENT/03-usa-und-tech-oligarchie/project-2025#Trumps Verbindung]] | 🟢 EASY |
| "Peter Thiel ist nur ein Unternehmer" | [[CONTENT/03-usa-und-tech-oligarchie/peter-thiel-explainer]] | 🟡 MEDIUM |
| "Republikaner sind unsere Partner" | [[CONTENT/03-usa-und-tech-oligarchie/republikaner-partner]] | 🟡 MEDIUM |

### KI-Gefahren

| Behauptung | Antwort | Schwierigkeit |
|------------|---------|---------------|
| "KI ist nur ein Werkzeug" | [[CONTENT/02-themen/ki-gefahren#Optimierung ohne Verständnis]] | 🟢 EASY |
| "Das ist Science-Fiction" | [[CONTENT/02-themen/ki-gefahren#Science-Fiction Panikmache]] | 🟢 EASY |

### Bot-Taktiken erkennen

| Taktik | Erklärung | Quick-Kill |
|--------|-----------|------------|
| "Define Nazi!" | [[QUICK/zinger-arsenal#Bot-Taktik-Killer]] | [[QUICK/one-liners#Define Nazi]] |
| "Beide Seiten!" | [[CONTENT/04-rhetorik-und-strategie/false-equivalence]] | [[QUICK/one-liners#Both Sides]] |
| "Thanks ChatGPT" | [[META/exits#Exit Thanks ChatGPT]] | 🟢 EASY |
| "Du relativierst nur!" | [[META/techniques#Deflection]] | 🟢 EASY |
| 🤖 Ist das ein Bot? | [[META/techniques#Bot-Erkennung]] | - |
| 🧠 Wie mit Verblendeten reden? | [[META/techniques#Street Epistemology]] | - |

---

## Kommunalwahl München 2026

Alle Wahlprogramm-Analysen: [[CONTENT/05-kommunalwahl-muenchen-2026/00-uebersicht-stimmzettel]]

| Partei/Liste | Analyse |
|-------------|---------|
| CSU | [[CONTENT/05-kommunalwahl-muenchen-2026/01-csu-wahlprogramm]] |
| Freie Wähler | [[CONTENT/05-kommunalwahl-muenchen-2026/02-freie-waehler-wahlprogramm]] |
| AfD | [[CONTENT/05-kommunalwahl-muenchen-2026/03-afd-wahlprogramm]] |
| Grüne | [[CONTENT/05-kommunalwahl-muenchen-2026/04-gruene-wahlprogramm]] |
| SPD | [[CONTENT/05-kommunalwahl-muenchen-2026/05-spd-wahlprogramm]] |
| ÖDP | [[CONTENT/05-kommunalwahl-muenchen-2026/06-oedp-wahlprogramm]] |
| FDP | [[CONTENT/05-kommunalwahl-muenchen-2026/07-fdp-wahlprogramm]] |
| Die Linke | [[CONTENT/05-kommunalwahl-muenchen-2026/08-linke-wahlprogramm]] |
| Volt | [[CONTENT/05-kommunalwahl-muenchen-2026/09-volt-wahlprogramm]] |
| Die PARTEI | [[CONTENT/05-kommunalwahl-muenchen-2026/10-partei-wahlprogramm]] |
| Rosa Liste | [[CONTENT/05-kommunalwahl-muenchen-2026/11-rosa-liste-wahlprogramm]] |
| München-Liste | [[CONTENT/05-kommunalwahl-muenchen-2026/12-muenchen-liste-wahlprogramm]] |
| Bayernpartei | [[CONTENT/05-kommunalwahl-muenchen-2026/13-bayernpartei-wahlprogramm]] |
| Bündnis Kultur | [[CONTENT/05-kommunalwahl-muenchen-2026/14-buendnis-kultur-wahlprogramm]] |

---

## Meta-Guides

| Thema | Datei | Wann nutzen |
|-------|-------|-------------|
| Bot-Erkennung & Taktiken | [[META/techniques]] | **Zuerst lesen!** |
| Quellen verteidigen | [[META/quellen-verteidigung]] | Wenn jemand Correctiv/IAB/ifo angreift |
| Reddit-Strategie | [[META/reddit-strategie]] | Vor Reddit-Einsätzen |
| Warum glauben Menschen Bullshit? | [[META/psychologie]] | Vor Diskussionen |
| Wie steige ich aus? | [[META/exits]] | Wenn Loop erkannt |
| Burnout vermeiden | [[META/self-care]] | Wenn müde/wütend |
| AfD-Überzeugungsstrategie | [[CONTENT/04-rhetorik-und-strategie/anti-afd-ueberzeugungsstrategie]] | Zielgruppen-Matrix |

**Blog (unveröffentlicht):** 23 englische Posts in `blog/` (26k Wörter). Topics, Methodology, Tactics, Pattern Library.

---

## Quellen-Shortcuts

**Gerichte & Behörden:**
- [Verfassungsschutzberichte](https://www.verfassungsschutz.de/SharedDocs/publikationen/DE/verfassungsschutzberichte/)
- [BKA Kriminalstatistik](https://www.bka.de)
- [Bundestag Abstimmungen](https://www.bundestag.de/parlament/plenum/abstimmung/liste)
- [Abgeordnetenwatch](https://www.abgeordnetenwatch.de/)

**Investigativ:**
- [Correctiv](https://correctiv.org/)
- [Tagesschau Faktenfinder](https://www.tagesschau.de/faktenfinder)

**Migration/Wirtschaft:**
- [IAB (Arbeitsmarkt)](https://iab.de/)
- [ifo Institut](https://www.ifo.de/)
- [DIW Berlin](https://www.diw.de/)
- [Destatis](https://www.destatis.de)
- [Mediendienst Integration](https://mediendienst-integration.de/)

**Klima/Energie:**
- [Fraunhofer ISE](https://www.ise.fraunhofer.de)
- [IRENA](https://www.irena.org/)
- [Klimafakten.de](https://www.klimafakten.de/)

**Russland/Ukraine:**
- [EU vs Disinfo](https://euvsdisinfo.eu/)
- [Mediazona/BBC Verlustzählung](https://en.zona.media/article/2026/02/13/casualties_eng-trl)

**USA:**
- [ACLU: Project 2025](https://www.aclu.org/project-2025-explained)

**AfD:**
- [AfD Wahlprogramm 2025 PDF](https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf)
- [DGB Synopse zur AfD](https://www.verdi.de/++file++67ab63018ab0ba3890d49cba/download/DGB%20Synopse%20BTW%202025%20zur%20AfD.pdf)
- [DIW Aktuell Nr. 106: AfD-Steuerlücke](https://www.diw.de/)

---

## Eskalations-Leiter

| Level | Situation | Response |
|-------|-----------|----------|
| 1 | Echte Frage | Fakten + Quelle |
| 2 | Wiederholung | "Schon beantwortet. Neues Argument?" |
| 3 | Deflection | "Willst du diskutieren oder propagieren?" |
| 4 | Loop | "Das ist ein Script, keine Diskussion" |
| 5 | Exit | "Mitleser haben die Quellen. Fertig." |

---

## Reminder

```
Du überzeugst nicht den Bot.
Du überzeugst die Mitleser.

Ein guter Exit mit Zusammenfassung > 20 Runden im Kreis.

Wenn du müde/wütend wirst → META/self-care
```
