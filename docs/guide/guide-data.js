const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    intro: "Migration ist ein berechtigtes Thema. Schauen wir uns an, was die AfD konkret tut — und was nicht.",
    layers: {
      promise: {
        text: "Massenabschiebungen, Grenzschließungen, Austritt aus EU-Asylabkommen. Die AfD positioniert sich als einzige Partei, die „durchgreift“."
      },
      quotes: [
        {
          text: "Wir fordern eine wohltemperierte Grausamkeit bei der Durchführung eines großangelegten Remigrationsprojekts.",
          person: "Björn Höcke",
          source: "\"Nie zweimal in denselben Fluss\", 2018",
          url: "https://www.riffreporter.de/de/gesellschaft/remigration-afd-plane-das-schrieb-bjoern-hoecke-schon-vor-jahren"
        },
        {
          text: "Burkas, Kopftuchmädchen, alimentierte Messermänner und sonstige Taugenichtse werden unseren Wohlstand nicht sichern.",
          person: "Alice Weidel",
          source: "Bundestagsrede, 16. Mai 2018",
          url: "https://www.bundestag.de/blueprint/servlet/content/553614/asAppNewsarticleXml"
        }
      ],
      votes: [
        {
          bill: "Chancen-Aufenthaltsrecht",
          description: "Hätte Abschiebung von Straftätern beschleunigt und integrierte Flüchtlinge in Arbeit gebracht.",
          year: 2022,
          total_for: 371,
          total_against: 152,
          afd_for: 0,
          afd_against: 66,
          url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
        }
      ],
      data: [
        {
          value: "0",
          label: "Abschiebungs-Gesetzentwürfe der AfD im Bundestag. Jemals.",
          source: "Bundestag Dokumentation"
        },
        {
          value: "179.000",
          label: "Geduldete Ende 2024 — niedrigster Stand seit 2016",
          source: "Mediendienst Integration",
          url: "https://mediendienst-integration.de"
        },
        {
          value: "68%",
          label: "Erwerbstätigenquote der 2015er-Geflüchteten. Männer: 76% — über dem deutschen Schnitt (72%).",
          source: "IAB, 10 Jahre Fluchtmigration, 2024",
          url: "https://www.iab.de"
        }
      ],
      pattern: {
        text: "Die AfD blockiert Lösungen, die sie selbst fordert. Das ist kein Widerspruch — es ist die Strategie. Wenn das „Migrationsproblem“ gelöst wäre, fiele ihr wichtigstes Thema weg. Sie brauchen das Problem mehr als die Lösung.",
        question: "Wenn die AfD Migration wirklich lösen will — warum stimmen sie gegen jedes Gesetz, das Abschiebungen beschleunigt?"
      }
    }
  },
  {
    id: "establishment",
    statement: "Die stehen für den kleinen Mann und gegen die Eliten",
    shortLabel: "Eliten",
    icon: "💶",
    intro: "Der Wunsch nach einer Partei, die sich für normale Leute einsetzt, ist verständlich. Schauen wir, wofür die AfD tatsächlich stimmt.",
    layers: {
      promise: { text: "Die AfD inszeniert sich als Anti-Establishment-Partei. Gegen „die da oben“, für „das Volk“. Aber ihre Abstimmungen und ihr Führungspersonal erzählen eine andere Geschichte." },
      quotes: [
        { text: "Wir lehnen die Wiedereinführung der Vermögensteuer und die Verschärfung der Erbschaftsteuer ab.", person: "AfD Grundsatzprogramm", source: "Kapitel 10, Steuern und Finanzen", url: "https://www.afd.de/grundsatzprogramm/" },
        { text: "Sozialstaatliche Absicherung soll zu allererst den eigenen Staatsangehörigen zugutekommen.", person: "AfD Grundsatzprogramm", source: "Kapitel 11, Sozialpolitik", url: "https://www.afd.de/grundsatzprogramm/" }
      ],
      votes: [
        { bill: "Mindestlohnerhöhung auf 12 Euro", description: "Anhebung des Mindestlohns von 9,82€ auf 12€ — betrifft vor allem Geringverdiener.", year: 2022, total_for: 399, total_against: 201, afd_for: 0, afd_against: 75, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/mindestlohn-auf-12-euro" },
        { bill: "Bürgergeld-Einführung", description: "Ablösung von Hartz IV mit höheren Regelsätzen und weniger Sanktionen.", year: 2022, total_for: 385, total_against: 232, afd_for: 0, afd_against: 76, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/buergergeld" }
      ],
      data: [
        { value: "Nein", label: "Vermögensteuer: Die AfD lehnt sie ab. Betroffen wären nur Vermögen über ~2 Mio. Euro. Die Partei schützt die Reichsten, nicht den kleinen Mann.", source: "AfD Grundsatzprogramm, Kap. 10" },
        { value: "Nein", label: "Erbschaftsteuer-Reform: Die AfD will sie abschaffen. 2022 wurden 100+ Mrd. Euro steuerfrei vererbt. Davon profitiert nicht der Handwerker, sondern das Top-1%.", source: "Bundesfinanzministerium / DIW Wochenbericht" },
        { value: "396.000€", label: "Strafzahlung Alice Weidels wegen illegaler Schweizer Parteispenden.", source: "Bundestagsverwaltung, 2021", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_90849792/afd-spendenaffaere-alice-weidel-muss-fast-400-000-euro-zahlen.html" }
      ],
      pattern: { text: "Die AfD will keine Vermögensteuer, keine Erbschaftsteuer-Reform und stimmte gegen Mindestlohnerhöhung. Ihre Steuerpolitik schützt Millionenvermögen und Großerben. Gleichzeitig kassiert ihre Führung illegale Auslandsspenden. Die Verpackung sagt: für den kleinen Mann. Der Inhalt ist eine Partei, die wirtschaftspolitisch die Interessen der Reichsten vertritt.", question: "Wenn die AfD für den kleinen Mann ist — warum will sie keine Vermögensteuer für Millionäre, sondern schafft lieber die Erbschaftsteuer ab?" }
    }
  },
  {
    id: "energy",
    statement: "Die Energiepolitik der anderen Parteien ist gescheitert",
    shortLabel: "Energie",
    icon: "⚡",
    intro: "Energiepreise und Versorgungssicherheit sind echte Sorgen. Schauen wir, was die AfD dazu vorschlägt — und was das kosten würde.",
    layers: {
      promise: { text: "Zurück zu Kohle und Kernkraft, Ausstieg aus dem Pariser Klimaabkommen, Abschaffung des EEG. Die AfD verkauft fossile Energie als günstige Alternative." },
      quotes: [
        { text: "CO₂ ist kein Schadstoff, sondern ein unverzichtbarer Bestandteil allen Lebens.", person: "AfD Grundsatzprogramm", source: "Kapitel 12: Energiepolitik", url: "https://www.afd.de/grundsatzprogramm/" },
        { text: "Wir fordern, das Pariser Klimaschutzabkommen zu kündigen.", person: "AfD Wahlprogramm 2021", source: "Programm zur Bundestagswahl 2021", url: "https://www.afd.de/wahlprogramm-2021/" }
      ],
      votes: [
        { bill: "Erneuerbare-Energien-Gesetz (EEG) Novelle", description: "Ausbau von Wind- und Solarenergie als „überragendes öffentliches Interesse“.", year: 2022, total_for: 378, total_against: 198, afd_for: 0, afd_against: 72, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/eeg-novelle-2023" }
      ],
      data: [
        { value: "4,7 ct/kWh", label: "Gestehungskosten Solar (2024). Kohle: 11-15 ct/kWh. Wind onshore: 4-8 ct/kWh.", source: "Fraunhofer ISE, Stromgestehungskosten 2024", url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html" },
        { value: "59%", label: "Anteil erneuerbarer Energien am Bruttostromverbrauch 2024 — Rekord.", source: "Umweltbundesamt, 2024", url: "https://www.umweltbundesamt.de/daten/energie/erneuerbare-energien" },
        { value: "0", label: "Eigene Energiegesetzentwürfe der AfD im Bundestag. Keine Alternative zur Alternative.", source: "Bundestag Dokumentation" }
      ],
      pattern: { text: "Solar ist heute billiger als Kohle — das ist keine Ideologie, das ist Physik und Markt. Die AfD will Deutschland an die teuerste Energieform binden und vom Pariser Abkommen isolieren. Ihr einziger „Plan“ ist: zurück zu dem, was schon teurer ist. Kein eigener Gesetzentwurf, keine Alternative.", question: "Wenn Solar halb so viel kostet wie Kohle — warum will die AfD Deutschland an die teurere Energie binden?" }
    }
  },
  {
    id: "corruption",
    statement: "Die anderen Parteien sind alle gleich korrupt",
    shortLabel: "Korruption",
    icon: "🏛️",
    intro: "Das Misstrauen gegenüber etablierten Parteien ist nachvollziehbar. Aber ist die AfD wirklich sauberer? Ein Blick auf die Akten.",
    layers: {
      promise: { text: "Die AfD verspricht „Null Toleranz bei Korruption“ und inszeniert sich als Aufräumer-Partei gegen ein korruptes System." },
      quotes: [
        { text: "In einer Mail von 2013 bezeichnete Weidel die Regierung als „Schweine“ und „Marionetten“ und schrieb von „Bürgerkriegen durch Überfremdung“.", person: "Alice Weidel", source: "Private E-Mail, 2013 (Echtheit bestätigt durch Empfänger)", url: "https://correctiv.org/faktencheck/artikel-faktencheck/2017/09/11/alice-weidel-und-ihre-rassistische-mail/" }
      ],
      votes: [
        { bill: "Lobbyregister-Verschärfung", description: "Verpflichtende Offenlegung von Lobbyisten-Kontakten für Abgeordnete.", year: 2021, total_for: 373, total_against: 225, afd_for: 0, afd_against: 68, url: "https://www.abgeordnetenwatch.de/bundestag/19/abstimmungen/lobbyregister" }
      ],
      data: [
        { value: "396.000€", label: "Strafe für illegale Spenden an Alice Weidel aus der Schweiz", source: "Bundestagsverwaltung", url: "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_90849792/afd-spendenaffaere-alice-weidel-muss-fast-400-000-euro-zahlen.html" },
        { value: "Ermittlungen", label: "Petr Bystron: Ermittlungen wegen Bestechlichkeit und Geldwäsche (Voice of Europe, russisches Geld)", source: "Abgeordnetenwatch / Generalstaatsanwaltschaft München", url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron" },
        { value: "4 Jahre 9 Monate", label: "Urteil gegen Jian G. (Krah-Mitarbeiter): China-Spionage im EU-Parlament", source: "ZDF heute", url: "https://www.zdfheute.de/politik/ausland/maximilian-krah-spionage-china-jian-guo-100.html" }
      ],
      pattern: { text: "Die AfD ist nicht weniger korrupt — sie wird nur seltener geprüft, weil sie nie regiert hat. Illegale Auslandsspenden, russische Zahlungen, China-Spionage direkt im EU-Büro. Und als der Bundestag mehr Transparenz wollte (Lobbyregister), hat die AfD dagegen gestimmt.", question: "Wenn die AfD gegen Korruption ist — warum stimmt sie gegen das Lobbyregister und kassiert gleichzeitig illegale Auslandsspenden?" }
    }
  },
  {
    id: "security",
    statement: "Wir brauchen mehr Sicherheit und härtere Strafen",
    shortLabel: "Sicherheit",
    icon: "🛡️",
    intro: "Sicherheit ist ein Grundbedürfnis. Aber löst die AfD-Politik tatsächlich Sicherheitsprobleme — oder verschärft sie sie?",
    layers: {
      promise: { text: "Mehr Polizei, härtere Strafen, konsequente Abschiebung krimineller Ausländer. Die AfD positioniert sich als Partei der inneren Sicherheit." },
      quotes: [
        { text: "Deutschland wird unsicherer. Die offenen Grenzen haben eine Welle der Kriminalität ausgelöst.", person: "AfD Fraktion", source: "Regelmäßige Pressemitteilungen, 2023-2025", url: "https://www.afdbundestag.de/themen/innere-sicherheit/" }
      ],
      votes: [
        { bill: "Stärkung der Bundespolizei", description: "Mehr Befugnisse und Personal für Grenzkontrollen und Schleuserkriminalität.", year: 2023, total_for: 396, total_against: 184, afd_for: 0, afd_against: 71, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen" }
      ],
      data: [
        { value: "-21%", label: "Rückgang der Tatverdächtigenbelastungszahl bei Nichtdeutschen 2014-2024 (von ~6.260 auf ~4.960 pro 100.000)", source: "BKA PKS 2024, eigene Berechnung", url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/pks_node.html" },
        { value: "5,2 Mio.", label: "Straftaten 2024. 2016: 6,4 Mio. Deutschland ist sicherer als vor 8 Jahren.", source: "BKA PKS 2024" },
        { value: "~5,5x", label: "Überrepräsentation bei Gruppenvergewaltigung. Real, muss anerkannt werden. Aber: Aufenthaltsstatus, Alter und Geschlecht erklären den Großteil — nicht „Herkunft“.", source: "KFN Forschungsbericht 161 (Glaubitz/Bliesener), SVR-Expertise 2024", url: "https://kfn.de/publikationen/kfn-forschungsberichte/" }
      ],
      pattern: { text: "Deutschland ist objektiv sicherer als vor 10 Jahren. Die Überrepräsentation bei bestimmten Delikten ist real — aber die Kriminologie zeigt: Aufenthaltsstatus (Geduldete vs. Anerkannte), Alter und Geschlecht sind die Treiber, nicht Herkunft. Die AfD stimmt gegen Gesetze, die genau diese Differenzierung ermöglichen würden.", question: "Wenn Deutschland unsicherer wäre — warum sind die Gesamtstraftaten seit 2016 um fast 20% gesunken?" }
    }
  },
  {
    id: "patriotism",
    statement: "Man wird ja als Patriot sofort in die rechte Ecke gestellt",
    shortLabel: "Patriotismus",
    icon: "🇩🇪",
    intro: "Stolz auf sein Land zu sein ist völlig in Ordnung. Die Frage ist: Was meint die AfD mit „Patriotismus“ — und wo zieht sie die Grenze?",
    layers: {
      promise: { text: "Die AfD sagt: Wir sind die einzigen echten Patrioten. Alle anderen schämen sich für Deutschland. Wer das kritisiert, unterdrückt normale Vaterlandsliebe." },
      quotes: [
        { text: "Wir brauchen nichts anderes als eine erinnerungspolitische Wende um 180 Grad.", person: "Björn Höcke", source: "Rede vor der Dresdner Frauenkirche, 17. Januar 2017", url: "https://www.mdr.de/nachrichten/politik/inland/hoecke-rede-im-wortlaut-100.html" },
        { text: "Hitler und die Nazis sind nur ein Vogelschiss in über tausend Jahren erfolgreicher deutscher Geschichte.", person: "Alexander Gauland", source: "Rede in Seebach, 2. Juni 2018", url: "https://www.tagesspiegel.de/politik/alexander-gauland-und-der-vogelschiss-3958210.html" },
        { text: "Alles für unsere Heimat, alles für Sachsen-Anhalt, alles für Deutschland!", person: "Björn Höcke", source: "2021 Merseburg, 2023 Gera. BGH bestätigt: SA-Parole. Rechtskräftig verurteilt.", url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html" }
      ],
      votes: [
        { bill: "Demokratiefördergesetz", description: "Dauerhafte Förderung von Initiativen gegen Extremismus und für demokratische Bildung.", year: 2023, total_for: 382, total_against: 209, afd_for: 0, afd_against: 73, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen" }
      ],
      data: [
        { value: "2x rechtskräftig", label: "Björn Höcke für Verwendung der SA-Parole „Alles für Deutschland“ verurteilt. BGH bestätigt August 2025.", source: "BGH Pressemitteilung 2025", url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html" },
        { value: "Gesichert rechtsextrem", label: "Thüringer AfD (Höcke), Sachsen-Anhalt, Sachsen — alle vom Verfassungsschutz als gesichert rechtsextrem eingestuft.", source: "Bundesamt für Verfassungsschutz, 2024" },
        { value: "Verdachtsfall", label: "Die Gesamtpartei AfD ist vom Verfassungsschutz als rechtsextremistischer Verdachtsfall eingestuft.", source: "OVG Münster, Mai 2024", url: "https://www.ovg.nrw.de/behoerde/presse/pressemitteilungen/19_240513/index.php" }
      ],
      pattern: { text: "Patriotismus und Rechtsextremismus sind nicht dasselbe. Aber die AfD-Führung benutzt „Patriotismus“ als Schutzschild für Positionen, die Gerichte als rechtsextrem einstufen. Wer die SA-Parole ruft, Holocaust-Gedenken „Denkmal der Schande“ nennt und Nazi-Zeit als „Vogelschiss“ verharmlost, betreibt keinen Patriotismus — sondern Geschichtsrevisionismus.", question: "Kann eine Partei patriotisch sein, deren Spitzenpolitiker für Nazi-Parolen verurteilt werden und den Holocaust relativieren?" }
    }
  },
  {
    id: "eu",
    statement: "Die EU bestimmt zu viel über Deutschland",
    shortLabel: "EU",
    icon: "🌍",
    intro: "EU-Bürokratie nervt viele Leute. Aber was wäre die Alternative — und was hat die AfD im EU-Parlament eigentlich getan?",
    layers: {
      promise: { text: "Die AfD will „Dexit“ (EU-Austritt oder radikale Rückführung von Kompetenzen), Abschaffung des Euro, Wiederherstellung „nationaler Souveränität“." },
      quotes: [
        { text: "Wir halten einen Austritt Deutschlands aus der Europäischen Union für notwendig.", person: "AfD Wahlprogramm 2017", source: "Programm zur Bundestagswahl 2017", url: "https://www.afd.de/wahlprogramm-2017/" }
      ],
      votes: [
        { bill: "EU-Wiederaufbaufonds (NextGenerationEU)", description: "750 Mrd. Euro Konjunkturpaket nach COVID, davon profitiert auch deutsche Exportwirtschaft.", year: 2021, total_for: 389, total_against: 210, afd_for: 0, afd_against: 67, url: "https://www.abgeordnetenwatch.de/bundestag/19/abstimmungen" }
      ],
      data: [
        { value: "1,4 Bio. €", label: "Deutscher Warenexport 2024. Über 60% geht in die EU. Binnenmarkt-Zugang ist existenziell.", source: "Destatis Außenhandel 2024", url: "https://www.destatis.de/DE/Themen/Wirtschaft/Aussenhandel/_inhalt.html" },
        { value: "China-Spionage", label: "Krah-Mitarbeiter Jian G. wegen Spionage für China verurteilt — direkt im AfD-Büro im EU-Parlament.", source: "ZDF heute, 2024", url: "https://www.zdfheute.de/politik/ausland/maximilian-krah-spionage-china-jian-guo-100.html" },
        { value: "Voice of Europe", label: "Bystron: Ermittlungen wegen russischem Geld über Voice of Europe. Die AfD im EU-Parlament arbeitet nachweislich mit Russland und China zusammen.", source: "Abgeordnetenwatch", url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron" }
      ],
      pattern: { text: "60% des deutschen Exports geht in die EU. Ein EU-Austritt wäre wirtschaftlicher Selbstmord — das hat der Brexit gezeigt. Aber statt im EU-Parlament für deutsche Interessen zu kämpfen, lassen sich AfD-Abgeordnete von Russland und China bezahlen. Das ist keine Souveränität — das ist Abhängigkeit von autoritären Regimen statt von demokratischen Partnern.", question: "Wenn die AfD deutsche Souveränität will — warum nehmen ihre EU-Abgeordneten Geld aus Russland und China?" }
    }
  },
  {
    id: "gender",
    statement: "Der Gender-Wahnsinn geht zu weit",
    shortLabel: "Gender",
    icon: "👨‍👩‍👧",
    intro: "Gendern nervt viele Leute — auch solche, die politisch nicht rechts stehen. Aber was genau will die AfD hier verhindern, und was steckt dahinter?",
    layers: {
      promise: { text: "Die AfD will Gendern verbieten, das Selbstbestimmungsgesetz abschaffen, und „Genderideologie“ aus Schulen entfernen. Sie verkauft sich als Verteidigerin des „gesunden Menschenverstands“." },
      quotes: [
        { text: "Gender-Mainstreaming bezeichnet die politische Geschlechtsumwandlung der Gesellschaft.", person: "AfD Grundsatzprogramm", source: "Kapitel 7: Kultur und Medien", url: "https://www.afd.de/grundsatzprogramm/" }
      ],
      votes: [
        { bill: "Selbstbestimmungsgesetz (SBGG)", description: "Vereinfachung der Änderung von Geschlechtseintrag und Vornamen beim Standesamt.", year: 2024, total_for: 374, total_against: 251, afd_for: 0, afd_against: 75, url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/selbstbestimmungsgesetz" }
      ],
      data: [
        { value: "~4.000", label: "Anträge auf Geschlechtsänderung pro Jahr in Deutschland (80 Mio. Einwohner). 0,005% der Bevölkerung.", source: "Bundesjustizamt, 2023" },
        { value: "0,6%", label: "Anteil der Bevölkerung, der sich als trans identifiziert. Die AfD macht aus einer winzigen Minderheit ein Kulturkampf-Thema.", source: "DALIA Research / Ipsos 2023" },
        { value: "WHO", label: "Die Weltgesundheitsorganisation hat Transidentität 2019 aus der Liste psychischer Störungen gestrichen (ICD-11).", source: "WHO ICD-11, 2019", url: "https://icd.who.int/en" }
      ],
      pattern: { text: "0,005% der Bevölkerung beantragt eine Geschlechtsänderung. Die AfD macht daraus ein zentrales Wahlkampfthema. Warum? Weil Kulturkämpfe von den Themen ablenken, bei denen die AfD keine Lösungen hat: Rente, Pflege, Wohnen, Löhne. „Gender“ ist das günstigste Feindbild — es kostet nichts und mobilisiert zuverlässig.", question: "Betrifft dich das Gendern persönlich stärker als Rente, Miete oder Mindestlohn? Warum macht die AfD es dann zum Hauptthema?" }
    }
  }
];
