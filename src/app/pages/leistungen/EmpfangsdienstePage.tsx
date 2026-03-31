import { Users, Shield, Clock, Award, Eye, Phone, CheckCircle, Lock } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function EmpfangsdienstePage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Empfangsdienste & Sicherheit Frankfurt | Empfangsservice – Garden Time GmbH',
        description: 'Professionelle Empfangsdienste & Sicherheitsdienste in Frankfurt ✓ Rezeptionsservice ✓ Zugangskontrolle ✓ Objektschutz ✓ Kostenloses Angebot. Garden Time GmbH.',
        keywords: 'Empfangsdienst Frankfurt, Empfangsservice Frankfurt, Sicherheitsdienst Frankfurt, Zugangskontrolle Frankfurt, Rezeptionsservice Frankfurt, Empfang Gewerbe Frankfurt',
      }}
      breadcrumb="Empfangsdienste & Sicherheit"
      hero={{
        badge: '✓ Empfangsdienste & Sicherheit Frankfurt',
        headline: 'Empfangsdienste & Sicherheit in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Professioneller Empfang, Zugangskontrolle und Objektschutz für Bürogebäude, Hotels, Kliniken und Gewerbeimmobilien in Frankfurt.',
        imageUrl: getImage('leistung:empfangsdienste:hero'),
        checks: [
          'Rezeptionsdienste & Besucherempfang',
          'Zugangskontrolle & Sicherheitspforte',
          'Objektschutz & Sicherheitsrundgänge',
          'Diskret, professionell & zertifiziert',
        ],
      }}
      intro={{
        headline: 'Der erste Eindruck zählt – professioneller Empfang für Ihr Unternehmen',
        text1: 'Ein professioneller Empfang repräsentiert Ihr Unternehmen und sorgt gleichzeitig für Sicherheit und geordneten Ablauf. Garden Time stellt qualifiziertes Empfangs- und Sicherheitspersonal für alle Objekttypen.',
        text2: 'Unsere Mitarbeiter sind geschult, freundlich und durchsetzen Ihre Hausordnung und Zugangsregeln konsequent – ob als klassischer Rezeptionist oder kombinierter Empfang/Sicherheitsdienst.',
        imageUrl: getImage('leistung:empfangsdienste:secondary'),
        imageAlt: 'Empfangsdienste Frankfurt',
      }}
      benefits={[
        { title: 'Professioneller Besucherempfang', description: 'Freundliche und repräsentative Empfangskräfte für Büros, Hotels, Kliniken und öffentliche Gebäude.', icon: Users },
        { title: 'Zugangskontrolle', description: 'Kontrolle und Dokumentation des Personenverkehrs, Ausgabe von Besucherausweisen, Zutrittsverwaltung.', icon: Lock },
        { title: 'Sicherheitsrundgänge', description: 'Regelmäßige Begehungen des Objekts zur Früherkennung von Sicherheitsrisiken und Mängeln.', icon: Eye },
        { title: 'Telefonservice', description: 'Auf Wunsch übernehmen unsere Empfangskräfte die Annahme und Weiterleitung Ihrer Telefonate.', icon: Phone },
        { title: 'Flexible Einsatzzeiten', description: 'Wochentags, Wochenende, Nachtdienst – wir stellen Personal nach Ihrem Bedarf und Zeitplan.', icon: Clock },
        { title: 'Zertifiziertes Personal', description: 'Alle Mitarbeiter sind nach §34a GewO geprüft, diskret, zuverlässig und erfahren.', icon: Shield },
      ]}
      leistungsumfang={{
        headline: 'Unsere Empfangs- & Sicherheitsleistungen im Überblick',
        items: [
          ['Rezeptionsdienste', 'Besucherempfang & -verwaltung', 'Telefonzentrale & Anrufweiterleitung'],
          ['Zugangskontrolle & Pforte', 'Schlüssel- & Ausweisverwaltung', 'Paketannahme & -ausgabe'],
          ['Objektschutz', 'Sicherheitsrundgänge', 'Alarmierungs- & Notfallprotokoll'],
        ],
      }}
      steps={[
        { step: '01', title: 'Bedarfsanalyse', description: 'Wir analysieren Ihr Objekt, Ihren Bedarf und Ihre Anforderungen an Empfang und Sicherheit.' },
        { step: '02', title: 'Personalplanung & Angebot', description: 'Wir erstellen ein maßgeschneidertes Personalkonzept mit transparenten Kosten.' },
        { step: '03', title: 'Einarbeitung & Start', description: 'Unsere Mitarbeiter werden objektbezogen eingearbeitet und starten zuverlässig zum vereinbarten Termin.' },
      ]}
      faqs={[
        { q: 'Stellen Sie Personal auch kurzfristig zur Verfügung?', a: 'Ja, bei kurzfristigem Bedarf (z.B. Urlaubs- oder Krankheitsvertretung) können wir oft innerhalb von 24 Stunden Ersatz stellen.' },
        { q: 'Sind Ihre Mitarbeiter nach §34a zertifiziert?', a: 'Ja, alle Sicherheitsmitarbeiter sind nach §34a GewO geprüft und regelmäßig fortgebildet.' },
        { q: 'Können Empfang und Sicherheit kombiniert werden?', a: 'Ja, kombinierte Empfang/Sicherheitsdienste sind sehr effizient und bei uns Standard in vielen Objekten.' },
        { q: 'In welchen Branchen arbeiten Sie?', a: 'Bürogebäude, Hotels, Kliniken, Einkaufszentren, Logistikzentren und öffentliche Einrichtungen im Rhein-Main-Gebiet.' },
      ]}
      cta={{ headline: 'Empfangsdienste in Frankfurt anfragen', subline: 'Kostenloses Beratungsgespräch & Angebot für Ihr Objekt.', servicePreset: 'Empfangsdienste & Sicherheit' }}
    />
  );
}
