const GUIDE_DATA = [
  {
    id: "migration",
    statement: "Die sind die Einzigen, die das Migrationsproblem ernst nehmen",
    shortLabel: "Migration",
    icon: "🔒",
    hook: "Du willst Politiker, die das Migrationsproblem wirklich loesen. Nicht nur darueber reden.",
    promise: "Die AfD verspricht Massenabschiebungen, geschlossene Grenzen, hartes Durchgreifen. Kein anderer traut sich das, sagen sie.",
    betrayal: "Im Bundestag hat die AfD gegen das Chancen-Aufenthaltsrecht gestimmt. Alle 66 Abgeordneten. Dieses Gesetz haette die Abschiebung von Straftaetern beschleunigt. Null eigene Abschiebungsgesetze hat die AfD jemals eingebracht. Nicht eins.",
    consequence: "Das Problem bleibt ungeloest. Genau das ist der Plan. Deine Frustration ist ihr Geschaeftsmodell.",
    source: {
      text: "Abgeordnetenwatch: Abstimmung Chancen-Aufenthaltsrecht, 2022",
      url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/chancen-aufenthaltsrecht"
    },
    pattern: "Sie blockieren Loesungen, die sie selbst fordern. Geloeste Probleme bringen keine Stimmen.",
    question: "Frag mal: Wenn die AfD Abschiebungen will, warum stimmt sie gegen jedes Gesetz, das Abschiebungen beschleunigt?"
  },
  {
    id: "establishment",
    statement: "Die stehen fuer den kleinen Mann und gegen die Eliten",
    shortLabel: "Eliten",
    icon: "💶",
    hook: "Du willst mehr Geld am Ende des Monats. Das ist kein politisches Statement, das ist Alltag.",
    promise: "Die AfD sagt: Wir kaempfen fuer die kleinen Leute. Gegen die da oben. Fuer dich.",
    betrayal: "Die AfD hat gegen die Mindestlohnerhoehung auf 12 Euro gestimmt. Alle 75 dagegen. Sie lehnt die Vermoegensteuer ab. Die trifft nur Vermoegen ueber 2 Millionen. Sie will die Erbschaftsteuer abschaffen. Davon profitiert das oberste Prozent.",
    consequence: "Ihr Steuertarif spart dir etwa 600 Euro im Jahr. Ein Spitzenverdiener spart 15.000 Euro. 25-mal mehr Ersparnis bei 5,5-mal mehr Gehalt.",
    source: {
      text: "Abgeordnetenwatch: Mindestlohn-Abstimmung 2022 + AfD Grundsatzprogramm Kapitel 10",
      url: "https://www.abgeordnetenwatch.de/bundestag/20/abstimmungen/mindestlohn-auf-12-euro"
    },
    pattern: "Die Entlastung fliesst nach oben. Immer.",
    question: "Frag mal: Wessen Steuern senkt die AfD eigentlich? Deine oder die von deinem Chef?"
  },
  {
    id: "energy",
    statement: "Die Energiepolitik der anderen Parteien ist gescheitert",
    shortLabel: "Energie",
    icon: "⚡",
    hook: "Du aergerst dich ueber hohe Strompreise. Zurecht. Das ist ein echtes Problem.",
    promise: "Die AfD sagt: Zurueck zu Kohle und Kernkraft. Dann wird Strom wieder billig.",
    betrayal: "Solar kostet heute 4,7 Cent pro Kilowattstunde. Kohle kostet 11 bis 15 Cent. Solar ist halb so teuer. Die AfD hat gegen den Ausbau erneuerbarer Energien gestimmt. Null eigene Energiegesetze eingebracht.",
    consequence: "Ihr Plan bedeutet teureren Strom, nicht billigeren. Du wuerdest mehr zahlen.",
    source: {
      text: "Fraunhofer ISE Stromgestehungskosten 2024 + Abgeordnetenwatch EEG-Novelle 2022",
      url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/studie-stromgestehungskosten-erneuerbare-energien.html"
    },
    pattern: "Sie versprechen guenstige Energie und kaempfen fuer die teurere Option.",
    question: "Frag mal: Wenn Solar halb so viel kostet wie Kohle, warum will die AfD die teurere Variante?"
  },
  {
    id: "corruption",
    statement: "Die anderen Parteien sind alle gleich korrupt",
    shortLabel: "Korruption",
    icon: "🏛️",
    hook: "Du hast die Nase voll von korrupten Politikern. Wer hat das nicht.",
    promise: "Die AfD sagt: Null Toleranz bei Korruption. Wir raeumen auf.",
    betrayal: "Alice Weidel: 396.000 Euro Strafe fuer illegale Spenden aus der Schweiz. Petr Bystron: Ermittlungen wegen russischem Geld. Maximilian Krahs Mitarbeiter: verurteilt als chinesischer Spion im EU-Parlament. Und die AfD hat gegen das Lobbyregister gestimmt.",
    consequence: "Sie bekaempfen nicht Korruption. Sie bekaempfen Transparenz.",
    source: {
      text: "Bundestagsverwaltung (Weidel) + Abgeordnetenwatch (Bystron) + ZDF heute (Krah)",
      url: "https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/geld-aus-russland-die-affaere-um-petr-bystron"
    },
    pattern: "Gegen Transparenz stimmen und gleichzeitig Auslandsgeld kassieren. Das ist kein Widerspruch. Das ist System.",
    question: "Frag mal: Warum stimmt die AfD gegen das Lobbyregister, waehrend ihre Leute illegales Geld aus dem Ausland nehmen?"
  },
  {
    id: "security",
    statement: "Wir brauchen mehr Sicherheit und haertere Strafen",
    shortLabel: "Sicherheit",
    icon: "🛡️",
    hook: "Du willst dich sicher fuehlen. In deiner Stadt, in deiner Nachbarschaft. Das ist dein Recht.",
    promise: "Die AfD sagt: Mehr Polizei, haertere Strafen, konsequent abschieben.",
    betrayal: "Deutschland hat weniger Straftaten als vor 8 Jahren. 5,2 Millionen statt 6,4 Millionen. Die Kriminalitaetsrate bei Nichtdeutschen ist seit 2014 um 21 Prozent gesunken. Die Ueberrepraesentation bei bestimmten Delikten ist real. Aber die Kriminologie zeigt: Alter, Geschlecht und Aufenthaltsstatus erklaeren den Grossteil. Nicht Herkunft.",
    consequence: "Die AfD stimmt gegen Gesetze, die genau diese Ursachen angehen wuerden. Sie brauchen die Angst. Nicht die Loesung.",
    source: {
      text: "BKA Polizeiliche Kriminalstatistik 2024 + KFN Forschungsbericht 161",
      url: "https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/pks_node.html"
    },
    pattern: "Angst verkauft Stimmen. Sicherheit loest das Problem. Nur eins davon hilft der AfD.",
    question: "Frag mal: Warum sagt die AfD, es wird immer gefaehrlicher, wenn die Zahlen seit Jahren runtergehen?"
  },
  {
    id: "patriotism",
    statement: "Man wird ja als Patriot sofort in die rechte Ecke gestellt",
    shortLabel: "Patriotismus",
    icon: "🇩🇪",
    hook: "Du willst stolz auf dein Land sein. Ohne dass jemand dich gleich Nazi nennt. Kann man verstehen.",
    promise: "Die AfD sagt: Wir sind die echten Patrioten. Alle anderen schaemen sich fuer Deutschland.",
    betrayal: "Ihr Spitzenmann Hoecke wurde verurteilt. Fuer eine SA-Parole. Zweimal. Der BGH hat es bestaetigt. Gauland nannte die Nazi-Zeit einen Vogelschiss. Drei Landesverbaende sind vom Verfassungsschutz als gesichert rechtsextrem eingestuft.",
    consequence: "Sie haben Patriotismus nicht neu definiert. Sie haben Extremismus dahinter versteckt.",
    source: {
      text: "BGH Pressemitteilung 2025 + Bundesamt fuer Verfassungsschutz",
      url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
    },
    pattern: "Patriotismus als Schutzschild fuer Positionen, die Gerichte als rechtsextrem einstufen.",
    question: "Frag mal: Kann eine Partei patriotisch sein, deren Vorsitzender fuer eine Nazi-Parole verurteilt wurde?"
  },
  {
    id: "eu",
    statement: "Die EU bestimmt zu viel ueber Deutschland",
    shortLabel: "EU",
    icon: "🌍",
    hook: "Du aergerst dich ueber EU-Buerokratie. Zu viele Regeln, zu wenig Mitsprache. Geht vielen so.",
    promise: "Die AfD will den Dexit. Oder zumindest eine radikale EU-Reform. Zurueck zur nationalen Souveraenitaet.",
    betrayal: "60 Prozent der deutschen Exporte gehen in die EU. Der Brexit hat gezeigt, was ein Austritt kostet. Und was machen AfD-Abgeordnete im EU-Parlament? Bystron nimmt russisches Geld ueber Voice of Europe. Krahs Mitarbeiter spioniert fuer China.",
    consequence: "Ihre Version von Souveraenitaet heisst: abhaengig von Putin und Xi statt von demokratischen Partnern.",
    source: {
      text: "Destatis Aussenhandel 2024 + Abgeordnetenwatch (Bystron) + ZDF heute (Krah)",
      url: "https://www.destatis.de/DE/Themen/Wirtschaft/Aussenhandel/_inhalt.html"
    },
    pattern: "Souveraenitaet predigen und von autoritaeren Regimen kassieren.",
    question: "Frag mal: Wenn die AfD deutsche Souveraenitaet will, warum nehmen ihre EU-Abgeordneten Geld aus Russland und China?"
  },
  {
    id: "gender",
    statement: "Der Gender-Wahnsinn geht zu weit",
    shortLabel: "Gender",
    icon: "👨‍👩‍👧",
    hook: "Du findest Gendern nervig. Das geht vielen so. Auch Leuten, die nicht rechts sind.",
    promise: "Die AfD will Gendern verbieten. Schluss mit dem Gender-Wahnsinn, sagen sie.",
    betrayal: "0,005 Prozent der Bevoelkerung aendern ihren Geschlechtseintrag. Das ist der ganze Wahnsinn. Gleichzeitig hat die AfD keinen Plan fuer Mieten, Renten oder Pflege.",
    consequence: "Gender ist ihre billigste Ablenkung. Kostet nichts, mobilisiert zuverlaessig. Haelt dich wuetend ueber etwas, das dein Leben nicht betrifft. Waehrend sie ignorieren, was es tut.",
    source: {
      text: "Bundesjustizamt 2023 + AfD Grundsatzprogramm",
      url: "https://icd.who.int/en"
    },
    pattern: "Kulturkampf statt Sachpolitik. Emotion statt Loesung.",
    question: "Frag mal: Betrifft dich Gendern mehr als deine Miete oder deine Rente?"
  }
];
