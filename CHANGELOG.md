---
title: Changelog - Was sich geändert hat
type: note
last_updated: 2026-05-07
tags: ["personal"]
---

# Changelog - Was sich geändert hat

> Alle Updates auf einen Blick

---

## 2026-05 (Aktuell)

### v3.9 — Apple-Notes-Verwertung + 4-Panel-Review + Pinecone-Resync (2026-05-06 bis 2026-05-07)

- **Added:** 8 neue CONTENT-Files aus 75 Apple-Notes-Konter-Drafts: `02-themen/oppositions-trick.md`, `02-themen/paedophilie-whataboutism.md`, `02-themen/bot-netzwerke-afd.md`, `02-themen/nahost-linke-iran-flaggen.md`, `02-themen/afd-waehler-eigene-interessen.md`, `02-themen/grundgesetz-verteidigung.md`, `02-themen/familienpolitik-ehegattensplitting.md`, `04-rhetorik-und-strategie/mitleser-zusammenfassung.md`
- **Added:** 4 neue Tactics in `META/techniques.md`: Sticky-Lie-Pinning (Mod-Stickied-Falsehoods), Tautologischer Selbstschaden-Beweis (Verbot-als-Beweis-Zirkelschluss), Maßstabswechsel (Kategorienfehler ohne Whataboutism), Erdogan-Fanfiction (hypothetische-Schuld-ohne-Kausalkette)
- **Added:** 5 neue Quellen-Defenses in `META/quellen-verteidigung.md`: Abgeordnetenwatch.de, Hans-Böckler-Stiftung, BVerfG/BVerwG, BfV/Verfassungsschutz, Rosalux/Verdi (mit Primary-Source-First-Pattern für AfD-affines Publikum)
- **Added:** 12 Reddit-Zinger in `QUICK/one-liners.md` mit BC-Quellen-Verweis (BC25, 14, 1933, 9, 31, 42, 44, 40, 35, 43, Pädophilie-Nachschlag)
- **Added:** 2 Fact-Check-Templates in `QUICK/fact-check-templates.md`: Definitions-Shift-Tracker (Kommentar-Sequenz dokumentieren), Quellen-Asymmetrie-Pattern
- **Added:** Neuer Ordner `06-reddit-thread-cases/` mit `README.md` + `2026-rechte-gewalt-paranoidray.md` als erster Case-Study
- **Fixed:** 5 Brittle-Facts in existierenden Files: `migration-fakten.md` ("5 Mio fehlende Arbeitskräfte" → IAB-Szenario-Differenz mit Migrationshintergrund-Definitions-Trick-Block), `frauenquote-gleichstellung.md` (AfD 11,8% explizit als Wahlperiode 20 vor BTW 2025 markiert), `milei-marktradikalitaet.md` (UCA-Originalquelle statt clickpetroleoegas-Aggregator + INDEC-Methodenwechsel-Block), `rente-sozialstaat.md` (0,4% Totalverweigerung vs 3% Sanktionsfälle als verschiedene Definitionen), `afd-stammtisch-arsenal.md` (9,4%-Verurteiltenquote-Stretch entfernt, Correctiv-Liste als saubere Alternative)
- **Changed:** `META/atlas-network-reference.md` → `CONTENT/03-usa-und-tech-oligarchie/atlas-network.md` (Sach-Referenz, nicht Meta-Strategie); `META/werte-union-reference.md` → `CONTENT/01-parteien/werte-union.md`. Refs in CHANGELOG + techniques.md aktualisiert.
- **Removed:** 77 Apple-Notes via osascript gelöscht (alle BC-prefixed + Bold-Claim-Threads + konter-prefixed + afd-wählen-Notes — nach Verwertung in CONTENT-Files redundant)
- **Pinecone:** Index resynced, 313 neue Records upserted via REST-API Batch-Pipeline. 795 → 1108 vectors. Search verified mit 0.89 score auf paedophilie-whataboutism. Hinweis: Vorgänger-Indexer nutzte andere Slug-Konvention, Records sind additiv. Nuclear-Reset bei Worker-Reaktivierung empfohlen.
- **v2-Chat-Site:** Multiple Iterationen deployed auf https://boldclaim.github.io/chat/. Light-Mode-Default + Dark-Toggle, Voice-Sample-Upload (Settings → Allgemein), Section-Popup-statt-Sidebar (paragraph-click → annotation-card), Anti-KI-Stilregeln im System-Prompt (kein Em-Dash, keine Mic-Drops, keine Filler), Section-Headers Reddit-natürlich (kein "False framing"-Akademismus), DE/EN Site-Wide-Toggle im Header, Opus 4.7 + claude-opus-4-latest-Aliase, inline Model-Switcher im Composer-Footer, Streaming-Bug fixed (Alpine-Proxy-Reference), Reddit/Plain-Copy-Buttons.
- **4-Panel-Review-Pattern etabliert:** Counter-Speech-Tactician + Information-Architect + Source-Quality-Auditor + Voice-Consistency-Reviewer als parallele Sub-Agents auf Knowledge-Imports angewendet. Konsolidierte Synthese → 4 Umsetzungs-Sub-Agents in zweiter Welle.
- **Lessons:**
  - 4-Panel-Review skaliert für große Knowledge-Imports (~4h Real-Time von Notes-Dump bis fertige CONTENT-Files).
  - Source-Audit-Panel deckt Self-Inconsistency auf (BC23 nutzt Quote-Mining vor dem es warnt).
  - Voice-Sample = personal, gehört nicht in public Repo. Repo trägt Beispiel-Templates, individueller Schreibstil bleibt im `_internal/`.
  - osascript-Note-Deletion erfordert Two-Phase: Phase 1 collect names, Phase 2 lookup-by-name + delete. Direct iterate-and-delete bricht mit -1728-Error.
  - Pinecone Sync-Strategie: REST-API + Python-Batch-Pipeline (30 Records, 0.4s Throttle) ist token-effizienter als MCP-Tool-Calls bei Large-Scale-Upserts.
  - META vs CONTENT Trennung: Meta-Strategie + Tactics + Source-Defenses bleiben in META; konkrete Sach-Referenzen (einzelne Org/Partei/Person/Mythos) gehören in CONTENT.

### v3.8 — r/armes_deutschland Reddit-Session: Afghanistan/Ortskräfte + Corona-Schwurbler-Playbook (2026-05-05)

- **NEU:** `META/afghanistan-ortskraefte-verfahren.md` — vollständige Spuren-Trennung Afghanistan-Aufnahme: drei Listen (Ortskräfte/Menschenrechtsliste/NGO-Sammelpostfach), BMI-Prüfprozess, Schwerin-Fall-Zuordnung (OK-Programm-Familienzusammenführung, NICHT NGO-Liste), Sicherheitslücken-Realität (Spiegel "erheblicher Anteil" ohne Zahl), CDU-Stop-Kontext. Plus Nordkurier-Verstärkungs-Pattern (Headline-Inflation, AfD-lastige Quellenauswahl 4/4 Hauptzitate). Primärquelle: Bundestag-UA 48. Sitzung 2023. Counter-Templates sachlich + gungho enthalten.

- **NEU:** `META/corona-schwurbler-playbook.md` — komplettes Playbook mit (1) sieben häufigsten Tricks (Quote-Mining, Disziplin-Wash, Drei-Ebenen-Verklebung, "Bullshit"-Stempel, Selbstwiderspruch, Peer-Review-Trumpf, Goalpost-Verschiebung), (2) Standard-Behauptungen + Faktenlage (RKI-Files, Übersterblichkeit, PEI-Kausalität, Maßnahmen-Frame, Untersuchungsausschüsse, Lauterbach-Tweet, Schwurbler-Lager-selektives-Gedächtnis), (3) verlässliche Counter-Quellen (Watson Lancet 2022, RKI-Modellierung, PEI-Dossier, BVerfG 1 BvR 781/21, Tagesschau, Correctiv, Destatis), (4) Counter-Templates (Frame-Kollaps, Gungho-7-Punkte, Selektives-Gedächtnis-Zinger), (5) Eskalations-Flow für Pfizer-Files / "Mainstream"-Diss / Schäm-dich-Eskalation.

- **Updated:** `META/techniques.md` — fünf neue Patterns angehängt: **Tactic-Naming-Opener** ("Vier 'Bullshit'-Stempel und drei Halbsätze"), **Drei-Ebenen-Trick** für Sterbe-Daten-Diskussionen, **Peer-Review-Trumpf-Entkräftung** (Surgisphere/PLOS-ONE-Beispiele), **Selbstwiderspruch im selben Post** (Concession-als-Schutzschild-Pattern), **Quote-Mining-Default** (immer Originalwortlaut prüfen).

- **Reddit-Session r/armes_deutschland Thread "Rechtsextreme Gewalt: Polizei meldet höchsten Stand"** (2026-05-05): Vier Konter geliefert.
  - Annihilator761 (Antisemitismus-"Hauptakteure"-Frame): zerlegt mit BKA-2024-Zahlen 3.016 PMK-rechts vs 1.940 PMK-ausländisch + EMRK Art. 3 Refoulement-Verbot
  - Akp5617 ("Graue Wölfe grüßen"): hämisch-knapp, Tabellenüberschrift-Verwechslung benannt
  - JumpPackPenguin (Einwanderungsland-melting-pot Sachfrage): sachlich, PMK-rechts-Stoßrichtung gegen Migranten/Linke/Politiker
  - Opening-Pen-5154 (Rockenfeller PLOS ONE Cherry + Verheimlichungs-Frame): Gungho-7-Punkte-Counter mit Tactic-Naming, Drei-Ebenen-Differenzierung, Peer-Review-Entkräftung, UA-Liste, Schäm-dich-Stufe
  - mchl189 (Ortskräfte-NGO-Verklebung mit Welt/T-Online/Nordkurier): Bulletproof-Counter mit Listen-Trennung + Nordkurier-Fact-Check + Schwerin-Falsche-Schublade

- **NEU `_internal/feedback_gungho_mode.md` (Memory)** — Trigger-Phrasen ("gungho", "vernichtend", "zerstöre", "stress test", "kein mit Verlaub", "blamiere ihn") aktivieren Reddit-Counter ohne Konzessionen, nur Aktenlage gegen Lüge, schwache Punkte weglassen statt einbauen.

- **Quellen-Verifizierung neu in dieser Session:**
  - BVerfG 1 BvR 781/21 (Bundesnotbremse-Schulschließungen) ✓
  - PEI Coronavirus-Dossier ✓
  - Tagesschau RKI-Protokolle ✓
  - Destatis Sterbefallzahlen ✓
  - Watson Lancet 2022 via PubMed 35753318 ✓
  - Bundestag-UA 48. Sitzung Drucksache 967592 ✓

- **Lessons:**
  - **Tactic-Naming schlägt inhaltliches Nachsetzen** wenn Gegner mit "Bullshit"-Stempeln antwortet. Mitleser sehen sofort: er argumentiert nicht, er performt Empörung.
  - **Drei-Ebenen-Differenzierung** bei Sterbe-Daten ist universell anwendbar (Roh-Zählung vs Aggregat-Modell vs Kausal-Attribution).
  - **Peer-Review-Trumpf** wird mit Surgisphere-Lancet-Retraction 2020 sauber entkräftet.
  - **Schäm-dich-Stufe** funktioniert für Reddit, ist nicht slur, wird selten gemoddet.
  - **Schwerin-Vermischung** (OK-Programm vs NGO-Programm) ist der Standard-Falsche-Schublade-Move bei Afghanistan-Diskussionen.
  - **Nordkurier seit Madsack-Übernahme 2021** zeigt Headline-Inflation bei Migrations-Themen, AfD-lastige Quellenauswahl. Wer Nordkurier verlinkt: Original-Spiegel/Welt-Quelle prüfen.

### v3.7 — Recherche-Inbox-Integration: Wirtschafts- und Konservativ-Themen (2026-05-05)
- **Updated:** `CONTENT/02-themen/heizungsgesetz-betrug.md` — neue Sektion "Fernwärme als Pocketbook-Falle — der München-Datenpunkt". SWM Fernwärmepreis +226% in zwei Jahren (2022→2024), 250.000 betroffene Haushalte, Sozialtarif-Forderung der Linken vs. SPD/Grüne-Mehrheit im SWM-Aufsichtsrat. Zwei neue Konter (Fernwärme-Falle, Anschlusszwang-Argument).
- **Updated:** `CONTENT/02-themen/wirtschaft-housing.md` — drei neue Sektionen:
  - **Bürokratie-Realität in Großstädten:** 85% der Bauanträge in München überschreiten 3-Monats-Frist, tatsächliche Bearbeitungszeit 8-18 Monate. Zwei Konter gegen "Bürokratieabbau löst Wohnungskrise"-Slogan.
  - **Stimmungsbild Bayern 2026 (BayernTrend):** Wohnen 57% unzufrieden, Migration 37% — empirischer Konter zur "ihr redet am Volk vorbei"-Erzählung.
  - **"Einheimische zuerst" — warum es rechtlich nicht geht:** EU-Freizügigkeit + Art. 3 GG + faktischer Test. Adressiert Bayernpartei/AfD-Slogan.
- **Added:** `_inbox/2026-05-05-recherche-integration-report.md` (NEU) — Gap-Report über die Integration (welche Chunks dupliziert/erweitert/neu/übersprungen, mit Verweisen).
- **Quellen-Status:** Linke München Stadtrat (226% Fernwärme), FT Immobilien (Baugenehmigungen), BayernTrend Februar 2026 — alle ✅ verifiziert.
- **Lessons:**
  - Recherche aus dem Mucwahl-Quiz-Kontext liefert verwertbare Bold-Claim-Munition für Pocketbook-Themen (Fernwärme-Monopol, Bauamts-Personal, EU-Freizügigkeit). Quiz-Mechanik (Thesen-Empfehlungen, Themenbalance, Spaltungs-Tabellen) ist out-of-scope.
  - Fernwärme-Preise als Bold-Claim-Hebel: kommunale Monopolisten greifen die "Markt regelt"-Logik der gleichen Parteien, die ihre Aufsichtsräte besetzen.
  - "Einheimischen-Vorrang" ist als Konter-Argument bisher nur kurz in `wirtschaft-housing#AfD Wohnungspolitik` angerissen — die EU-Freizügigkeit hat eine eigene saubere Sektion bekommen.

### v3.6 — Werte Union Reference + Mitläufer-Pattern + BYOK-Strategie (2026-05-03)
- **Added:** `CONTENT/01-parteien/werte-union.md` (NEU) — Counter-Reference für WU-Sympathie-Posts. Faktenlage 2025 (BTW 0,3%, kein Mandat in keinem Parlament), Maaßen-Karriere-Bogen (BfV-Chef → Chemnitz-Leugnung → Tichy/NIUS → BfV-Beobachtung), Counter-Pattern, kopierbare Standard-Antwort, Closer-Kontrast Merkel/Schäuble/vdL.
- **Updated:** `META/techniques.md` — 2 neue Sektionen:
  - **Mitläufer-Zweifel-Säen:** Pattern für gut-gemeinte Differenzierer. Anerkennung zuerst, konkrete Bilder statt Abstraktion, sein eigenes Wort gegen ihn ("Lümmel"), verfassungsrechtliche Anker (BVerfG, EMRK), empirische Folgen (Ungarn-Orbán-Daten), DIW-Bürgerversicherung als konstruktive Brücke.
  - **Atlas-Network-Aufklärung als Mitleser-First-Move:** Pattern für Counter-Speech bei vollständigen Atlas-Programm-Listen. Mitleser-First-Opener, Punkt-für-Quelle-Zuordnung, Atlas erst nach den Konkretionen erklären, "Verstärker"-Frame, Closer als Mitleser-Aufruf.
- **Added:** `_internal/byok-strategy.md` (NEU) — vollständige BYOK-Strategie für Live-Site-Skalierung auf 50k User. Endpoint-Split, 5-Provider-Adapter (Anthropic, OpenAI, Moonshot, OpenRouter, Ollama), Settings-Modal-Mockup, Onboarding-Flow, Pricing-Tier-Reload, Implementierungs-Plan (~20h für Phase 1), Privacy-Garantien, Edge Cases. Marketing-Tagline "Bring your own AI. Wir sehen deine Counter nie."
- **Lessons (Counter-Anwendung):**
  - Mitläufer ≠ Brigader. Wer differenzieren kann, braucht differenzierten Konter, sonst ist er für Brigader-Lager verloren.
  - Werte-Union-Sympathie + Heritage-Wiki + Ganser-Verlinkung = konsistente Übertragungskette, kein zufälliger Mix. Benennen.
  - "Verstärker" trifft härter als "Marionette" — analytisch statt billig.
  - Maaßen-vom-BfV-beobachtet ist ein faktischer Mic-Drop, der ohne Performativität auskommt.
- **Apple Notes erstellt:**
  - "Atlas-Network-Aufklärung — paranoidray Wiki" (Top-Level-Reply)
  - "Werte-Union-Auslachen — paranoidray Sympathie" (Hämisch-Reply)
  - "Mitläufer-Zweifel-Säen — Punktesystem & Sozialleistungen" (Differenziert-Reply)
  - Alle drei mit aktiven HTML-Hyperlinks, ohne sichtbare Reddit-Markdown-Klammern.

### v3.5 — Atlas Network Reference + paranoidray-Wiki-Konter (2026-05-03)
- **Added:** `CONTENT/03-usa-und-tech-oligarchie/atlas-network.md` (NEU) — vollständige Dachorganisation-Mapping für libertär-marktradikale Talking-Points. ~500 Mitglieds-Think-Tanks weltweit, Sitz Arlington/Virginia. Tabellen für US-, UK- und DE-Filialen. Geldspuren (Koch-Stiftungen, ExxonMobil, Sarah Scaife Foundation, DonorsTrust). Mapping einzelner Reddit-Talking-Points zu konkreten Quellen.
- **Counter-Pattern:** Drei-Schritt-Aufbau (Konkrete Zuordnung → Mitleser-Aufklärung → Closer als Beobachtung). Drei Standard-Templates dokumentiert (Vollständig / Single-Punkt / Mitleser-Edukation).
- **Anwendungsfall:** paranoidray (r/armes_deutschland Mod) hat im Wiki "Utiliberalismus"-Programm mit Flat Tax 25% + 2-Jahre-Bürgergeld-Cap + Grenzen zu + Rente mit 70 + EU-Austritt + Atomkraft-Restauration. Zuordnung 1:1 zu Friedman 1962, Charles Murray AEI 1984, Heritage seit 1981, Cato (Koch 1977), IEA UK Brexit. Konter dokumentiert.
- **Lehre:** "Atlas Network" als Dachname erst nach konkreter Zuordnung der Punkte einsetzen (sonst Verschwörungs-Geruch). Geldspur (Koch, ExxonMobil, DonorsTrust) konkreter als das Atlas-Etikett. Mitleser-Aufklärung in eigenem Absatz, nicht in Konter-Body.
- **Quellen:** DeSmog Disinfo Database, SourceWatch, Lobbycontrol, Greenpeace Koch-Reports, Mayer "Dark Money" 2016, MacLean "Democracy in Chains" 2017, Oreskes "Merchants of Doubt" 2010.

### v3.4 — Strukturelle Lehren aus r/armes_deutschland Thread-Analyse (2026-05-03)
- **Updated:** `.claude/Skills/boldclaim-reddit/SKILL.md` — 5 neue Sektionen in "Lessons Learned":
  - Live-Source-Fetch vor jedem statistischen Konter (MANDATORY)
  - Tone-Imperfektion ab Post 1 (Anti-ChatGPT-Diss)
  - Bauchgefühl-Counter parallel zu Statistik-Counter
  - Stickied-Mods früh exposen (Phase 3 erweitert)
  - Verbündete-Mobilisierungs-Cue im Top-Level
  - Frame-Kollaps schlägt Punkt-für-Punkt
- **Updated:** `.claude/Skills/boldclaim-reddit/SKILL.md` Phase 4 — Drei MANDATORY pre-steps eingebaut: Live-Source-Fetch, Bauchgefühl-Anker, Tone-Imperfektion. Frame-Kollaps-Pattern als bevorzugte Struktur bei konsistenten Erklärungsmodellen.
- **Updated:** `.claude/Skills/boldclaim-reddit/SKILL.md` Phase 3 (Identify Targets) — neue Zeile "Mod-Stickied" als Critical-Priority-Faktor.
- **Updated:** `META/techniques.md` — 5 neue Strukturelle Sektionen (Frame-Kollaps, Bauchgefühl-Anker, Tone-Imperfektion, Verbündete-Mobilisierung, Stickied-Mod-Detection). Total jetzt 13+ Taktik-Sektionen.
- **Updated:** `META/quellen-verteidigung.md` — neue Sektion "Offene Quellen-Lücken": Polen/Dänemark restriktive Migration vs. rechte Gewalt als zu-verifizieren-Item, mit konter-festem Wortlaut bei Verifikation und Fallback-Formulierung bis dahin (zurückhaltender als bisher).
- **Lessons learned (Meta-Ebene):**
  - Statistik-Sieger ≠ Score-Sieger. Impossible-Rocks Bauchgefühl-Vergleich landete bei 5↑, mein sachlich überlegener Konter bei 0↑. Bauchgefühl-Anker sind nicht optional.
  - KI-Cleanness ist Diskredit-Munition. Tone-Imperfektion ab Post 1 ist Schutzschicht, kein Stilmittel.
  - Mod-Stickied-Power-Moves sind eigene taktische Kategorie. Nicht nur Inhalt kontern, auch den Frame-Setting-Vorteil benennen.
  - Polen/Dänemark-Argument ohne direkte Quelle bleibt fragil. Bei nächster Gelegenheit verifizieren oder zurückhaltender formulieren.

### v3.3 — r/armes_deutschland Rechte-Gewalt-Thread + PMK 2024 Verifikation (2026-05-02 bis 2026-05-03)
- **Posted:** Konter im r/armes_deutschland Thread "Rechtsextreme Gewalt: Polizei meldet höchsten Stand" (OP 486↑, 56 Kommentare, 1.1k Ansichten). Account: u/Necessary-Low-5226.
- **Geschrieben:** 10 Konter total — 4 paranoidray + Brigader (Stickied Mod), 1 CrokoStream (sarkastisch), 1 Mock-Spelling-Shutdown, 1 Verbündeten-Stützung, 1 Multi-Layer-Reply gegen paranoidray V2 (Beschneidung/Polen-Dänemark), 1 DiX-Nbw Frame-Kollaps (6 Bewegungen)
- **Verified:** BKA PMK 2024 (Veröffentlichung 2025-05-20) live gefetcht und Wortlaut sowie Zahlen verifiziert: 84.172 PMK gesamt (+40,2%), 4.107 Gewalttaten (Höchststand seit 2016), 1.488 PMK-rechts-Gewalt (+17,2%, fallzahlenstärkster Phänomenbereich), 21.773 Hasskriminalität (+28%), >2/3 Hasskriminalität in PMK-rechts, 6.236 antisemitisch (+20,8%), 3.016 PMK-rechts antisemitisch (-0,6% — wichtigster Anti-Default-Datenpunkt), 1.940 ausländische Ideologie (+63,6%), 7.777 sonstige Zuordnung Wahlkontext vs 1.566 PMK-rechts
- **Added:** `META/pmk-default-mythos.md` (NEU) — eigene Topos-Refutation für "BKA zählt alles automatisch rechts"-Standard-Mythos. 3 empirische Refutations-Punkte (sonstige Zuordnung existiert + wird genutzt, PMK-rechts antisemitisch GESUNKEN, RIAS unabhängiger Cross-Check).
- **Added:** `META/techniques.md` — 6 neue Sektionen: Frame-Kollaps statt Punkt-für-Punkt, ChatGPT-Diss als Argumentationsvermeidung, Bringschulden-Umkehr, Codewort-Erkennung (Freibad/Weihnachtsmarkt 2017/verbale Gewalt/Fachkräfte), Selbst gestrickte Definition als Konter-Form, Concession-Trick (Strohmann-Re-Entry).
- **Updated:** `CONTENT/02-themen/antisemitismus.md` — verifizierte 2024 Zahlen, Anti-Default-Argument prominenter, Verweis auf `META/pmk-default-mythos.md`.
- **Added:** `_internal/reddit-antworten-armes-deutschland-rechte-gewalt.md` (NEU) — Thread-Analyse mit allen 10 Kontern, BKA-Zahlen-Tabelle, identifizierten Bewegungen, Lessons learned.
- **Lessons learned:**
  - Quelle vor Zitat fetchen, nie aus Memory schätzen — gerade bei statistik-affinen Gegnern
  - Frame-Kollaps schlägt Punkt-für-Punkt (zwei Säulen je ein Datenpunkt)
  - "Aus deiner eigenen Quelle"-Framing vermeiden, macht angreifbar
  - PMK-rechts antisemitisch -0,6% ist beweiskräftiger als der absolute Anstieg ausländische Ideologie
  - No-foreigners-look-bad-Constraint streng durchhalten: kein Migranten-Ranking, keine Migrant-Crime-Aufrufe, Polen/Dänemark-Argument empirisch (kein Rückgang rechter Gewalt) statt charakterisierend
- **Pinecone:** Resync ausstehend (782 Vektoren, letzter Sync 2026-04-12, jetzt mehrere Content-Updates seit dem)

### v3.1 — r/armes_deutschland Arbeitsvermittler-Thread Integration (2026-04-27 bis 2026-04-30)
- **Posted:** 11 Konter im r/armes_deutschland Thread "Ich bin Arbeitsvermittler im Jobcenter" (OP 253↑, 137 Kommentare). Account: u/Necessary-Low-5226.
- **Pipeline:** boldclaim-reddit Skill mit 3-Panel-Stress-Test (Right-libertarian / Centrist / Left-purist) + /myvoice
- **Updated:** `CONTENT/02-themen/rente-sozialstaat.md` — neue Sektion "Bürgergeld-Daten v2" mit präzisen BA/IAB/BMAS-Zahlen 2024 (369k Leistungsminderungen, 23,4k Arbeitsablehnungen, 826k Aufstocker, Bundeshaushalt-Verteilung, Schonvermögen-Karenzzeit korrekt, Sozialbudget-Vergleich + Ehegattensplitting, Kinder-Existenzminimum)
- **Updated:** `CONTENT/02-themen/sinti-roma-antiziganismus.md` — neue Sektion "Antiziganismus mit Dienstmarke / kulturalistische Verwaltungs-Diskriminierung" mit ADS-Studie als Quelle
- **Updated:** `META/techniques.md` — 4 neue Taktiken dokumentiert: Authority-Weaponization durch Beamten-Status, Plausibilitäts-Heuristik, Source-Boomerang (mit IAB-Teilzeit-Beispiel), Stereotyp-codierter Whataboutism. Plus Pre-Read-Library oft falsch zitierter Quellen.
- **Lessons learned (kritisch für boldclaim-reddit Skill):**
  - Schonvermögens-Zahlen NIE pauschal aus dem Gedächtnis zitieren (eine v1-Counter-Antwort hatte erfundene 30k-Kfz-Pauschale; korrekt: angemessenes Fahrzeug nach Marktwert per Rechtsprechung)
  - Verwaltungskosten Bundeshaushalt Einzelplan 11, nicht aus dem Gefühl runden (v1 hatte 6,5 Mrd, korrekt: ~5 Mrd Bundesmittel)
  - BVerfG-Urteile präzise zitieren: nicht "über X verfassungswidrig" pauschal, sondern konkrete Stufen mit Voraussetzungen
  - BA-Statistik unterscheidet Pflichtverletzungen / Leistungsminderungen / Sanktionsgründe — die größere Zahl ist oft die für unsere Argumentation richtige
- **Files:** `_internal/reddit-antworten-armes-deutschland-arbeitsvermittler.md` (Konter v2), `_internal/reddit-antworten-armes-deutschland-arbeitsvermittler-dashboard.html` (interaktives Dashboard mit 11 Konter-Cards, Reply-Buttons, Stress-Test-Befunden)
- **Pinecone:** Resync nach Content-Updates erforderlich (aktuell 782 Vektoren)


### v3.0 — Conversation Guide + Pinecone Resync + Git Push (2026-04-10 bis 2026-04-12)
- **Added:** Conversation Guide (`docs/guide/`): interactive website with 8 pro-AfD statements → evidence cascade (272 + 222 lines)
- **Added:** 8 topics: Migration, Eliten, Energie, Korruption, Sicherheit, Patriotismus, EU, Gender
- **Added:** Topic pills navigation, OG meta tags, mobile-responsive footer
- **Fixed:** Pinecone resynced (782 vectors in single `default` namespace, empty namespace deleted)
- **Fixed:** German typographic quotes breaking JS parse (23 instances)
- **Fixed:** Git repo fully committed and pushed (was 6+ weeks behind, now 15 commits)
- **Deployed:** VPS at `89.147.109.248:8650/guide/` + GitHub Pages

### v2.1 — Sexualdelikte-CONTENT + Reddit Counter-Speech (2026-04-09/10)
- **Added:** `sexualdelikte-taetergeschlecht.md` (108 Zeilen, 5 Konterwinkel, BKA PKS 2023, Inversionsaudits)
- **Added:** 8 Apple Notes mit Reddit-Kontern (AfD-Wahl, Energiewende, Bot-Netzwerke, Flat Tax, Arbeitslose, 66%-Strohmann)
- **Research:** Bot-Netzwerke (Reset Tech: 1.200 TikTok-Accounts, 57% Nigeria), AfD-Abstimmungsverhalten, Arbeitslose BTW 2025 (AfD 34%), Kontaktparadoxon

### v2.0 — Pen-Test + Härtung + Neue Themen (2026-04-07 bis 2026-04-09)
- **Added:** `frauenquote-gleichstellung.md` (306 Zeilen, 10 Reddit-Taktiken, 6 Debatten, 12 Gotchas)
- **Added:** `rente-sozialstaat.md` (248 Zeilen, Rente + Bürgergeld konsolidiert, Gotchas)
- **Added:** `antisemitismus.md` (179 Zeilen, PMK 2024, RIAS, rechts vs. islamistisch, IHRA 3D-Test)
- **Added:** `verkehr-mobilitaet.md` (594 Zeilen, Merge aus verkehr-umwelt + verkehr-tempo30)
- **Added:** `META/quellen-verteidigung.md` (9 Quellen: Correctiv, Mediendienst, AAS, ifo, IAB, KFN, DIW, IRENA, PKS)
- **Added:** Gotcha-Register in migration-fakten, klima, afd-und-rechts (24 Einträge gesamt)
- **Added:** Vetternwirtschaft-Sektion in afd-und-rechts (40+ Funktionäre, StA Hannover, Söder "Clan-Strukturen")
- **Added:** Silvester Köln, Ostdeutschland-Perspektive, Abschiebungsquoten, Verwertungslogik-Korrektur in migration-fakten
- **Added:** CO2-Preis-Debatte + Sprit-Staat-Counter in klima
- **Added:** Waffenstillstand-Eventualzweig + NATO-Quellen verstärkt in russland-ukraine
- **Added:** 11 Inline-Zeitstempel bei zeitgebundenen Claims
- **Added:** Apple Notes BC44-BC50
- **Fixed:** 13 Faktenfehler Schweregrad 3-4 (Tötungsrate, TVBZ-Quelle, offene Stellen, SV-Beiträge, Sellner-Zitat, CO2 DE>CN, Grid Strategies, Asylbewerberleistung, historischer CO2, Windkraft-Einbruch, etc.)
- **Fixed:** Parteiverbotsverfahren "läuft beim BVerfG" → läuft nicht, müsste neu beantragt werden
- **Fixed:** 10 TVBZ-Tabellen mit Inline-Caveats gegen Screenshot-Missbrauch geschützt
- **Fixed:** 5 Amplification-gefährdete Formulierungen umgeschrieben
- **Changed:** 3 moralisierende Closer entfernt (gender, verkehr-umwelt, linke)
- **Changed:** "Klimaschutz ist Physik" → "Physik ist nicht links. Welche Maßnahmen folgen, ist Debatte."
- **Removed:** `frauenquote.md` (ersetzt durch frauenquote-gleichstellung)
- **Removed:** `verkehr-umwelt.md` + `verkehr-tempo30.md` (in verkehr-mobilitaet gemerged)
- **Synced:** Pinecone 614 → 723 Vektoren (123 Records, 11 Dateien)

### v1.8 — Dashboards + Sinti/Roma + Strategie + r/dezwo RIP (2026-04-06/07)
- **Added:** `sinti-roma-antiziganismus.md` (Konter-Arsenal, Ursachenkette, Parteien-Vergleich Kinderporno)
- **Added:** `tuerkische-diaspora-wahlverhalten.md` (SPD+AKP Paradox, Kurdish Split, DITIB)
- **Added:** `META/reddit-strategie.md` (DE+EN Subs, Account-Strategie, Taktik)
- **Added:** `META/reddit-account-namen.md` (27 Namen, 3 Panels, 2 Runden, ZitierDochMal Gewinner)
- **Added:** `_internal/knowledge-base-viz.html` (3 Tabs: Overview, Growth, Methodik-Timeline)
- **Added:** `_internal/dezwo-counter-dashboard.html` (6 aktuelle Opportunities, copy-paste, stress-tests)
- **Fixed:** AfD-Verbotsverfahren: "läuft beim BVerfG" → Antrag durch Neuwahlen erledigt, kein Verfahren anhängig
- **Fixed:** KI-Floskeln in dezwo-Dashboard eliminiert ("Wer X verkauft", "Das ist kein X das ist Y")
- **Changed:** r/dezwo gebannt. Strategie-Update nötig (Migration zu r/de, r/armes_deutschland, r/FragReddit)
- **Synced:** 7 Pinecone Records (sinti-roma), gesamt ~590
- **Deployed:** VPS 89.147.109.248:8650 (knowledge-base-viz + dezwo-counter-dashboard)

### v1.7 — Massive Content Expansion + Reddit Arsenal (2026-04-02 bis 2026-04-06)
- **Added:** `afd-rechtsextremismus-referenz.md` (302 Zeilen, 8 Kategorien: Höcke BGH-bestätigt, Correctiv 28 Verurteilte, Korruption, VS-Klassifikationen, Potsdamer Treffen, Sylt, Kalbitz/Gedeon)
- **Added:** `milei-marktradikalitaet.md` (INDEC Methodentrick, Inflationstrick, Obdachlose +57%)
- **Added:** `wehrpflicht-verteidigung.md` (Eskalationsgeschichte 2008-2025, Skandinavien-Modelle, Zingers)
- **Added:** `republikaner-partner.md` (Trump-Wähler Werte-Argument)
- **Added:** `META/reddit-account-namen.md` (27 Namen, 3 Panels, 2 Runden)
- **Changed:** `afd-und-rechts.md` (AfD hält ihr Wort, Verfassungsbruch, BVerfG, Kinderporno-Fälle, VS-Status korrigiert, 9 Debattenmuster)
- **Changed:** `migration-fakten.md` (Steuerrechnung 12k, Totalverweigerer 0.4%, 50 Mrd brutto/netto, Bürgergeld 48%)
- **Changed:** `one-liners.md` (6 AfD-Kriminalität-Zingers)
- **Fixed:** VS-Status: "gesichert rechtsextrem" → "rechtskräftig Verdachtsfall" (VG Köln blockiert Hochstufung)
- **Fixed:** Jens Maier Kinderporno-Claim entfernt (nicht belegt)
- **Synced:** 81 Pinecone Records (8 Dateien)

### Reddit Counter-Speech + AfD-Arsenal (2026-04-02/03)
- 📝 r/Marcant ogremania: Torpfosten-Verschiebung exponiert (Kultur→Abschiebung→EU→Linke schuld), 1 Konter gepostet (t1_odwfnzn)
- 📝 r/armes_deutschland "Syrische Tatverdächtige": 3 Konter-Entwürfe (Pro-Kopf, Strohmann, NULL-Forderung)
- 📝 AfD "hält ihr Wort" Konter-Arsenal: COVID-Flip (afd.de Eigenquelle), Dexit, Mindestlohn, Korruption, Verfassungsbruch (6 Quellen)
- 📝 "Kein Geld mehr / Dänemark" Konter: BVerfG Existenzminimum, Geduldete-Dilemma, Fachkräftemangel, Chancen-Aufenthaltsrecht (5 Quellen)
- 📊 `CONTENT/01-parteien/afd-und-rechts.md` erweitert: Neue Sektion "AfD hält ihr Wort?" mit allen Quellen
- 📊 `CONTENT/04-rhetorik-und-strategie/false-equivalence.md`: IAB-Daten aktualisiert (68%/76%/287k)
- 🔑 Key: IAB 76% syrische Männer (über DE-Durchschnitt), BVerfG 1 BvL 10/10 (Ewigkeitsklausel), Chancen-Aufenthaltsrecht 66 AfD-Gegenstimmen

### v1.6 — Full Rename + Blog Content Library + Strategy Research (2026-04-02)
- **Renamed:** All "counter-speech" references → "Bold Claim" across project files, _internal docs, memory, skills
- **Renamed:** 3 skill directories (`boldclaim-reddit`, `boldclaim-pinecone`, `boldclaim-wiki-updater`)
- **Renamed:** `counter-speech-dashboard.html` → `boldclaim-dashboard.html`
- **Added:** `blog/` subfolder with 23 English blog posts (26k words):
  - 10 topic debunks (01-10): consent reform trick, 200 vs 5, Putin/NATO, school Islamisation, safety stats, solar costs, gas spiral, playbook, firehose, bot detection
  - 5 methodology posts (11-15): escalation ladder, source boomerang, 10 moves, psychology, exit strategies
  - 5 combat tactics (16-20): Mitleser principle, Stammtisch survival, prebunking, burnout, three sentences
  - 3 reference pieces: pattern library, suppression-frame explainer, public mirror field guide
- **Researched:** Design thinking workshops (5 analyst agents, 2 rounds) → stat card template as build-first artifact
- **Researched:** Reddit bot architecture → Phase 1 monitoring tripwire recommended (PRAW + Telegram)

---

## 2026-03

### v1.4 — Pinecone Resync + Counter Drafts + Skill Upgrade (2026-03-29)
- 🔧 Pinecone full resync: 960 → 508 Vektoren (clean, deterministic IDs, PKS 2024 verifiziert)
- ✨ `_internal/reddit-drafts-dashboard.html` — 12 Counter-Entwürfe für 16 unbeantwortete Replies (6 Threads, 4 Subs), Taktik-Badges, Comment-Permalinks, Copy-Paste mit Quellen-URLs
- 🔫 Alle 12 Counter mit Taktik-Openers umgeschrieben (Eigenverantwortungsrhetorik, Sippenhaft-Logik, Topic-Hopping, Falsche Dichotomie, Institutionendelegitimierung, Selektives Zitieren)
- 🔫 K4 Ortskräfte-Argument komplett zerlegt (6 rhetorische Schichten, Bundestag-Quellen)
- 🔫 K6 Beknotze-Hammer: "Du hörst bei S.51 auf. Die Studie geht weiter." + Policy-Implikation
- 📝 Bold Claim Skill: Phase 10 (mandatory Dashboard), Phase 11 (mandatory Umlaut-Validierung mit `\S`-Regex), Exposure-Opener-Regel
- 📊 Mode-Restructure-Analyse: 5-Modus-Vorschlag (reply, factcheck, Entlarvung, deescalation, prep), Entlarvung-Systemprompt entworfen (nicht implementiert)
- 📝 Bold Claim Format als Feedback-Memory gespeichert (Taktik-Opener → Fakten → bare URLs)

### Frontend UX Upgrade (2026-03-27)
- ✨ Inline citations: numbered superscripts in LLM responses, keyword-overlap matching to RAG sources, collapsible source panel with coloured relevance bars
- ✨ Suggested follow-up pills: 3 contextual capsule buttons after each response for guided exploration
- ✨ Bridging labels: [BRÜCKE]/[BESTÄTIGUNG] tags parsed from LLM output, rendered as green/grey pills
- ✨ Confidence scoring: computed from RAG source count + relevance, coloured pill (high/medium/low)
- All changes in `docs/index.html`, bilingual DE/EN, no new dependencies

### r/Marcant Bold Claim Campaign + PKS 2024 Daten (2026-03-27/28)
- 🔫 14 Konter geschrieben, stress-getestet, gepostet in 2 r/Marcant-Threads ("Männer sind das Problem" + "Zahlen zu Verurteilte")
- ✨ `_internal/boldclaim-dashboard.html` — Neuer Tab "r/Marcant Männer (14)", 2 Thread-Summaries, NEU-Markierungen für offene Replies (1152→1732 Zeilen)
- ✨ `_internal/reddit-antworten-marcant-maenner-problem.md` — Thread-Analyse, Assertion Audit, 10 Konter-Entwürfe
- 📊 PKS 2024 BKA-Tabellen T40/T50 ausgewertet: TVBZ nach Delikt (Mord 3,9x, Raub 5,6x, KV 3,4x), Pro-Kopf-Zeitreihe 2014-2024
- 📝 `CONTENT/02-themen/migration-fakten.md` — Neue Sektion "PKS 2024: Pro-Kopf-Raten nach Delikt" (4 Datentabellen)
- 📝 `META/techniques.md` — 8 neue Taktiken (Torpfosten-Verschiebung, Strohmann→Sarkasmus, Kultur-Eskalationsstufen, Modellminoritäten, Pro-Kopf-Trick, Bureau of Justice US-Import, Anekdoten-Widerlegung, Abschiebungs-Pragmatismus)
- 📝 `QUICK/one-liners.md` — 6 neue One-Liner (Bold Claim Taktiken)
- 🔑 Key Finding: Pro-Kopf-Rate (ohne ausl. Verstöße) sinkt seit 2014 (-21%), ABER nach Delikt gemischt: Mord -13%, Vergewaltigung +18%, Raub +20%


### r/armes_deutschland Bold Claim + Thread-Viz (2026-03-20)
- ✨ `_internal/reddit-antworten-armes-deutschland-wirtschaft.html` — Interaktive Thread-Visualisierung: Dark/Light Mode, Fraktions-Filter, Gegner-Profile, Konter-Labels, "Duelle"-Modus (3 Iterationen, Expert-Panel-Review)
- 🔫 13 Konter gepostet (alle rechten Kommentare mit falsifizierbaren Claims gekontert)
- 🔫 8 Gegner-Profile erstellt (Scheindebattierer, Ideologe, Fossil-Apologet, etc.)
- 🔫 Devil's Advocate Stress-Test: 10 Konter geprüft, COP-Effizienz-Fehler gefunden ("dreimal effizienter" → "fast doppelt so effizient")
- 🔧 Pinecone Resync: 454 → 960 Vektoren (506 Records, 43 Dateien, 0 Fehler)

### Thread-Learnings: Ölpreise 180$ (2026-03-20)
- ✨ `CONTENT/02-themen/klima.md` — 2 neue Sektionen: Dunkelflaute/Spanien-Blackout + Merit-Order mit Konter-Arsenal
- 📝 `CONTENT/02-themen/heizungsgesetz-betrug.md` — RWTH Aachen WP-Kosten-Studie, COP-Effizienz-Caveat
- ✨ `META/techniques.md` — 2 neue Taktiken: Topic-Hopping/Whack-a-Mole + Sealioning mit eigener Erfahrung
- ✨ `QUICK/one-liners.md` — 8 neue One-Liner (Energiepolitik/Wärmewende)
- 📝 `INDEX.md` — 9 neue Schnellsuche-Einträge (Energiepolitik)
- Quelle: r/armes_deutschland Thread "Ölpreise 180$" (51 Kommentare, 13 eigene Konter)

### r/Freiheitsfront Bold Claim (2026-03-14)
- ✨ `_internal/reddit-antworten-freiheitsfront-afd-kinderschutz.md` — 3 Konter (Strafverschärfung vs Prävention, Verharmlosungsmuster, Grüne-Whataboutism), stress-getestet, quellenbelegt, gepostet
- 🔧 Reddit JSON-API als Scraping-Fallback (Virtual Scrolling umgangen)
- 🔧 Reddit `/api/comment` Posting via Playwright als REST-Proxy (Shadow DOM umgangen)

### Bold Claim Pipeline Sessions (2026-03-13/14)
- ✨ `_internal/reddit-antworten-marcant-ip.md` — 3 Konter (Human Shields, Flugblätter/Genozid, 75%-Umfrage), nur Brigader
- ✨ `_internal/reddit-antworten-tja-motra.md` — 4 Konter (MOTRA-Methodenkritik, Relativierung, 45% HEFTIG, Weltbild-Meta)
- 🔧 Palästina-Item-Fehler korrigiert (existiert nicht in MOTRA-Skala)
- 📝 `CONTENT/02-themen/islam-integration-religionsfreiheit.md` — Standardreferenzen, MOTRA Arsenal, VS-Zahl korrigiert
- 📝 `.claude/skills/boldclaim-reddit/SKILL.md` — Brigader-Check, Studien-Debunking, Output-Template

### KI-Gefahren Content (2026-03-10)
- ✨ `CONTENT/02-themen/ki-gefahren.md` - Warum KI gefährlich ist ohne "böse" zu sein: Instrumentelle Konvergenz, Intent Gap, Alignment-Versagen, Deepfakes, autonome Waffen, Job-Displacement, Sicherheitswettlauf
- 📝 `INDEX.md` - 8 neue Schnellsuche-Einträge (KI-Gefahren), Ordner-Übersicht aktualisiert
- 📝 `QUICK/one-liners.md` - 6 neue One-Liner (KI-Werkzeug, Sicherheitsteam, Experten, Deepfakes, Gleichgültigkeit, Scheming)
- 📝 `AUTOMATION/triggers.yaml` - 20 neue KI-Trigger-Keywords (deepfake, alignment, scheming, agi, etc.)

### Quellen-Verifizierung (2026-03-10)
- ✅ `ki-gefahren.md` - Apollo Research, Anthropic/arxiv, CNN, NBC News, Surfshark, CNBC, Future of Life, CBS News, Science, UNRIC, EIN Presswire

### Anonymisierung & Org-Migration (2026-03-02)
- 🔒 GitHub Org `boldclaim` erstellt (Free Plan, private Mitgliedschaft)
- 🔒 Repo transferiert: `frederikmetz42/boldclaim` → `boldclaim/boldclaim`
- 🔒 Git-History komplett umgeschrieben: alle 7 Commits auf `boldclaim <boldclaim@proton.me>`
- 🔒 Proton Mail Account `boldclaim@proton.me` für anonyme Kontakt-Email
- 🔒 Keine Custom Domain (vermeidet Impressumspflicht TMG §5 / MStV §18)
- 📄 `_internal/handoff.md` erstellt (vollständige Projektdokumentation)
- 🌐 Neue GitHub Pages URL: `boldclaim.github.io/boldclaim`

---

## 2026-02

### Rebranding "Bold Claim" + UI-Redesign (2026-02-27)
- 📂 Neuer Name: "Bold Claim" (vorher "Bullshit-Bingo")
- 🎨 Web-UI: Plattform/Ton/Ziel-Selektoren von Pill-Rows zu kompakten Dropdown-Selektoren (eine Zeile statt drei)
- 🎨 Neue Fonts: Archivo Black (Brand), Sora (Display), DM Sans (Body) statt Newsreader + Inter
- 🎨 Strafferes Layout, navy-farbener Submit-Button, reduzierte Abstände

### Repo-Umbau (2026-02-26)
- 📂 Umgezogen: `90-personal/bullshit-bingo` → `01-projects/boldclaim`
- 📂 Neuer Name: "Bold Claim" statt "Bullshit-Bingo"

### Web-Stack (2026-02-26)
- ✨ `web/index.html` - Öffentliches Frontend: 7 Modi (Reply, Thread, Prep, Drill, Red Team, De-eskalation, Faktencheck), Plattform/Ziel/Ton-Auswahl, Demo-Modus
- ✨ `web/worker.js` - Cloudflare Worker API: Pinecone-Suche + Gemini Flash Antwortgenerierung
- ✨ `web/setup.md` - Deployment-Anleitung (Pinecone + Gemini + Cloudflare, alles $0/Monat)

### Interne Tools (2026-02-26)
- ✨ `_internal/cockpit.html` - Projekt-Dashboard: Architecture-Graph, Changelog, Discovery, Roadmap (8 Features), War Room
- ✨ `_internal/topic-map.html` - Visuelle Themen-Übersicht: 10 Cluster mit Emoji-Mapping, Querverbindungen

### Content-Integration (2026-02-26)
- 📝 `russland-ukraine.md` - 8 neue Sektionen (strategischer Verlust, NATO-Eigentor, Verluste 1.2M, Energiemarkt 40%→12%, Brain-Drain, Kriegswirtschaft, China-Juniorpartner, Ukraine-Stärkung)
- 📝 `false-equivalence.md` - NRW Lagebilder 2025/2026, PMK 5-Kategorien erweitert, Antisemitismus-Reform 2024, neue Sektion "Über 12 Jahre Gewalttaten"
- 📝 `techniques.md` - Eskalations-Kette Stufe 6, Eskalations-Erkennung
- 📝 `exits.md` - 3 neue Exit-Strategien (Statistik-Delegitimierung, Terrorverherrlichung, Thanks ChatGPT)
- 📝 `one-liners.md` - 14 neue One-Liner (5 Russland-Ukraine 2026, 9 Linksextremismus-Whataboutism)
- 📝 `zinger-arsenal.md` - 4 neue Zingers (Statistik-Delegitimierung)
- 📝 `INDEX.md` - 12+ neue Schnellsuche-Einträge (Russland + False Equivalence)
- 📝 `triggers.yaml` - 6 neue Russland-Trigger

### Quellen-Verifizierung (2026-02-26)
- ✅ `russland-ukraine.md` - CSIS, Mediazona, PIIE, Bank of Finland, Moscow Times, EU Council
- ✅ `false-equivalence.md` - NRW LKA 2025, Statista, Mediendienst, Opferberatungsstellen

### Neu hinzugefügt (2026-02-25)
- ✨ `CONTENT/02-themen/verkehr-umwelt.md` - Verkehr & Umwelt: NIMBY-Deflection, Gesundheit, München-Case, Reiter-Posse
- ✨ `CONTENT/02-themen/heizungsgesetz-betrug.md` - CDU-Heizungskampagne: Gaskosten-Falle, Mieter-Betrug, Wärmepumpen-Mythen
- ✨ `CONTENT/02-themen/verfassungsschutz-verteidigung.md` - VS-Verteidigung: Maaßen, NSU, NPD, Kramer, Antifa-Tweet, Bevölkerungsaustausch
- ✨ `META/architecture.md` - Pipeline-Dokumentation: Kommentar → Antwort
- 📝 `QUICK/one-liners.md` - 18 neue One-Liner (Verkehr, Heizung, VS, PMK, False Equivalence)
- 📝 `AUTOMATION/triggers.yaml` - 25+ neue Trigger-Keywords

### Verbessert (2026-02-25)
- 📝 `CONTENT/04-rhetorik-und-strategie/false-equivalence.md` - PMK 2024 BKA-Daten, VS Personenpotenzial, NRW Lagebilder, neue Sektionen (PMK-Kategorien, Ausländer-Statistik)
- 📝 `CONTENT/02-themen/migration-fakten.md` - IAB August 2025 Integrationsdaten, "Wir schaffen das" Bilanz
- 📝 `CONTENT/01-parteien/afd-und-rechts.md` - 7-Punkte VS-Vergleich rechts/links, 3 neue Konter
- 📝 `META/techniques.md` - Eskalations-Kette Statistik-Delegitimierung, "Du relativierst"-Deflection, Offener Nazi im Thread
- 📝 `INDEX.md` - Komplette Ordner-Übersicht aktualisiert (5 Unterordner, alle Dateien), 20+ neue Schnellsuche-Einträge, Kommunalwahl München 2026, Meta-Guides erweitert, Quellen-Shortcuts ergänzt

### Cross-Referenzen hinzugefügt
- 🔗 merz-und-cdu → heizungsgesetz-betrug (Heizungsgesetz deep-dive)
- 🔗 afd-und-rechts → verfassungsschutz-verteidigung (historische VS-Verteidigung)
- 🔗 heizungsgesetz-betrug → klima (CO2-Bepreisung)
- 🔗 heizungsgesetz-betrug → merz-und-cdu (CDU-Versprechen)
- 🔗 verfassungsschutz-verteidigung → afd-und-rechts (Remigration/Potsdam)
- 🔗 verfassungsschutz-verteidigung → russland-ukraine (Kreml-Propaganda)
- 🔗 techniques → verfassungsschutz-verteidigung (Offener Nazi Taktik)

### Strukturelle Verbesserungen (2026-02-25)
- 📂 INDEX.md Ordner-Übersicht zeigt jetzt echte Subfolder-Struktur (01-05)
- 📂 Peter Thiel Dateien (3) in INDEX indiziert unter Trump & USA
- 📂 cdu-argumente-konter.md in INDEX indiziert unter Merz & CDU
- 📂 Kommunalwahl München 2026 (15 Dateien) komplett in INDEX indiziert
- 📂 Strategie-Dateien (Mason, Tactical Protocols) in Meta-Guides verlinkt

### Aufgeräumt
- 🗑️ `input/` - 7 integrierte Quelldateien gelöscht, Ordner entfernt
- 🗑️ `repo-updates.md` → `archive/` verschoben
- 🗑️ `[NEU]`-Tags aus INDEX entfernt

### Quellen-Verifizierung (2026-02-25)
- ✅ `heizungsgesetz-betrug.md` - FAZ, Tagesspiegel, ADAC, DIW, Fraunhofer ISE, Verbraucherzentrale, BVerfG
- ✅ `verfassungsschutz-verteidigung.md` - taz, ZDF, Correctiv, bpb, Wikipedia, Bundestag
- ✅ `false-equivalence.md` - BKA PMK 2024, VS-Bericht 2024, NRW LKA Lagebilder

### Früher in 2026-02
- ✨ `CONTENT/02-themen/verkehr-tempo30.md` - Tempo 30 Mittlerer Ring: Luft, Lärm, Sicherheit, Verkehrsfluss
- 📝 `INDEX.md` - Neue Sektion "Verkehr & Tempo 30" mit 5 Schnellsuche-Einträgen
- 📝 `QUICK/one-liners.md` - 4 neue One-Liner (Grenzwert, Stau, Lärm, Kind-auf-Straße)
- 📝 `AUTOMATION/triggers.yaml` - Neue Trigger-Kategorie "verkehr"
- ✅ `verkehr-tempo30.md` - Abendzeitung, VCD, DUH, ScienceDirect Zürich, ETSC, MDPI Metastudie
- 🗑️ `CONTENT/New input on tempo 30.md` → Integriert in `verkehr-tempo30.md`

---

## 2025-01

### Neu hinzugefügt
- ✨ `klima.md` - Klimaleugner-Konter
- ✨ `gender.md` - Trans/Gender-Debatte Fakten
- ✨ `exits.md` - Dedizierte Exit-Strategien
- ✨ `self-care.md` - Burnout-Prävention
- ✨ `psychologie.md` - Warum Menschen Disinfo glauben
- ✨ `CHANGELOG.md` - Diese Datei
- ✨ `triggers.yaml` - Keyword-Mapping für Automatisierung
- ✨ `one-liners.md` - Alle Konter unter 30 Wörtern

### Verbessert
- 📝 `INDEX.md` - Schwierigkeits-Tags (🟢🟡🔴), Quick-Kill Links
- 📝 `false-equivalence.md` - Far-Right Terror Listen (USA + DE)
- 📝 Alle Dateien: Kürzere Zinger, konsistente Struktur

### Entfernt / Verschoben
- 🗑️ `reddit-kommentare.md` → `archive/` (256KB Ballast)
- 🗑️ Copy-Paste Blöcke aus INDEX (nur noch Links)

### Fixes
- 🔧 Duplikate entfernt (Kriminalstatistik nur noch in migration-fakten.md)
- 🔧 Obsidian-Links korrigiert

### Quellen-Verifizierung (2025-01-25)
- ✅ `klima.md` - NASA, IPCC AR6, Klimafakten.de Links verifiziert
- ✅ `gender.md` - WHO ICD-11, APA 2024 Policy Links verifiziert
- ✅ `false-equivalence.md` - Amadeu Antonio (221 Opfer), NSU, Hanau, Buffalo verifiziert
- 📎 Alle Quellen mit `[LAST_CHECKED: 2025-01]` Tags versehen

### Neu hinzugefügt (2025-01-25)
- ✨ `techniques.md` - Bot-Erkennung, SIFT-Methode, Street Epistemology, Deep Canvassing, Prebunking
- 📎 Quellen: Nature 2025 Bot-Studie, Harvard Prebunking Meta-Analysis, Carnegie Counter-Disinfo Guide

### Neu hinzugefügt (2025-01-25 - Abend)
- ✨ `CONTENT/linke.md` - Konter gegen Linke-Hetze, SED-Mythos, BSW-Abgrenzung, Gewaltstatistiken
- ✨ `CONTENT/trump-usa.md` - Trump-Faschismus Analyse, Hitler-Zitate, Insider-Quotes, Republikanische Propaganda
- ✨ `CONTENT/project-2025.md` - Komplettes Heritage Foundation Playbook (alle 30 Kapitel)
- ✨ `CONTENT/afd-wahlprogramm-2025.md` - AfD Bundestagswahlprogramm 2025 Analyse
- 📝 `INDEX.md` - Neue Dateien in Navigation, erweiterte Quellen-Shortcuts

### Quellen-Verifizierung (2025-01-25 - Abend)
- ✅ `project-2025.md` - Heritage Foundation, NPR, Time, ACLU, Democracy Forward
- ✅ `afd-wahlprogramm-2025.md` - AfD PDF, DGB Synopse, Correctiv Potsdam
- ✅ `trump-usa.md` - Atlantic (Kelly/Milley Quotes), PolitiFact, NPR

---

## Geplant

### Q2 2025
- [x] ~~Quellen-Review (tote Links, veraltete Zahlen)~~ → ✅ Erledigt 2025-01-25
- [ ] JSON-Export für Bot-Integration
- [ ] Medien/Lügenpresse Sektion

### Später
- [ ] Mobile-optimierte Version
- [ ] Telegram-Bot Integration
- [ ] Automatische Quellen-Validierung

---

## Wie updaten

### Wenn du neuen Content findest:

1. Richtige Datei identifizieren (oder neue anlegen)
2. Struktur beibehalten: Behauptung → Fakten → Quelle → Konter
3. One-Liner in `one-liners.md` hinzufügen
4. `triggers.yaml` updaten wenn neue Keywords
5. Hier im Changelog dokumentieren

### Wenn Quellen veralten:

1. Neue Quelle finden
2. `[LAST_CHECKED: YYYY-MM]` Tag aktualisieren
3. Hier dokumentieren

---

## Quellen-Check Status

| Datei | Letzter Check | Status | Verifizierte Quellen |
|-------|---------------|--------|---------------------|
| afd-und-rechts.md | 2025-06 | ✅ Aktuell | VS-Bericht 2024, BKA PMK 2024, BfV |
| afd-wahlprogramm-2025.md | 2025-01-25 | ✅ Verifiziert | AfD PDF, DGB Synopse, Correctiv |
| cdu-argumente-konter.md | 2026-02 | ✅ Aktuell | - |
| merz-und-cdu.md | 2026-02 | ✅ Aktuell | - |
| linke.md | 2025-01-25 | ✅ Verifiziert | bpb, OLG Köln, Amadeu Antonio |
| trump-usa.md | 2025-01-25 | ✅ Verifiziert | Atlantic, NPR, PolitiFact |
| project-2025.md | 2025-01-25 | ✅ Verifiziert | Heritage Foundation, ACLU, Time |
| russland-ukraine.md | 2026-02 | ✅ Aktuell | CSIS, Mediazona, PIIE, Bank of Finland, Moscow Times |
| migration-fakten.md | 2025-08 | ✅ Aktuell | IAB Aug 2025, ifo 2025 |
| wirtschaft-housing.md | 2025-02 | ⚠️ Review nötig (13 Monate alt) | - |
| false-equivalence.md | 2026-02 | ✅ Aktuell | BKA PMK 2024, NRW LKA 2025, VS-Bericht 2024, Statista, Mediendienst |
| klima.md | 2025-01-25 | ✅ Verifiziert | NASA, IPCC AR6, Klimafakten.de, Skeptical Science |
| gender.md | 2025-01-25 | ✅ Verifiziert | WHO ICD-11, APA 2024, UN News, PubMed |
| verkehr-tempo30.md | 2026-02-16 | ✅ Verifiziert | Abendzeitung, VCD, DUH, ScienceDirect, ETSC, MDPI |
| verkehr-umwelt.md | 2026-02-25 | ✅ Verifiziert | WHO, UBA, ADAC, BayVGH |
| heizungsgesetz-betrug.md | 2026-02-25 | ✅ Verifiziert | FAZ, DIW, Fraunhofer ISE, BVerfG |
| verfassungsschutz-verteidigung.md | 2026-02-25 | ✅ Verifiziert | taz, ZDF, Correctiv, bpb, Bundestag |
| kontokuendigungen-sanktionen.md | 2026-02 | ✅ Aktuell | - |

---

## Backup-Policy

Vor größeren Änderungen:
```bash
cp -r bullshit-bingo bullshit-bingo-backup-$(date +%Y%m%d)
```

Aktuelles Backup: `bullshit-bingo-backup-20260124-233530`
