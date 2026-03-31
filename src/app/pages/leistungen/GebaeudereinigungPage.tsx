import { Sparkles, Shield, Clock, Award, Users, Leaf, CheckCircle, Building2 } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GebaeudereinigungPage() {
  const { getImage } = useCmsImages();

  return (
    <ServicePageTemplate
      seo={{
        title: 'Gebäudereinigung Frankfurt | Unterhaltsreinigung & Büroreinigung – Garden Time GmbH',
        description: 'Professionelle Gebäudereinigung in Frankfurt ✓ Unterhaltsreinigung ✓ Büroreinigung ✓ Glasreinigung ✓ Tiefgaragenreinigung ✓ DSGVO-konform. Garden Time GmbH Frankfurt.',
        keywords: 'Gebäudereinigung Frankfurt, Unterhaltsreinigung Frankfurt, Büroreinigung Frankfurt, Glasreinigung Frankfurt, Treppenhausreinigung Frankfurt, Reinigungsservice Frankfurt',
      }}
      breadcrumb="Gebäudereinigung"
      hero={{
        badge: '✓ Gebäudereinigung Frankfurt',
        headline: 'Professionelle Gebäudereinigung',
        headlineHighlight: 'in Frankfurt & Rhein-Main',
        subline: 'Makellos saubere Büros, Treppenhäuser, Tiefgaragen und Außenbereiche – zuverlässig, diskret und nach höchsten Hygienestandards in Frankfurt.',
        imageUrl: getImage('leistung:reinigung:hero'),
        checks: [
          'Unterhaltsreinigung & Büroreinigung täglich',
          'Hygienezertifizierte Reinigungskräfte',
          'Umweltfreundliche Reinigungsmittel',
          'DSGVO-konforme Datensicherheit im Betrieb',
        ],
      }}
      intro={{
        headline: 'Sauberkeit, die überzeugt – täglich, zuverlässig, professionell',
        text1: 'Sauberkeit ist der erste Eindruck, den Besucher, Kunden und Mitarbeiter von Ihrer Immobilie gewinnen. Garden Time GmbH bietet in Frankfurt und dem Rhein-Main-Gebiet professionelle Gebäudereinigungsleistungen für Bürogebäude, Wohnanlagen, Hotels, Praxen und Gewerbeobjekte – nach individuellen Reinigungsplänen und zu wettbewerbsfähigen Festpreisen.',
        text2: 'Unsere Reinigungskräfte sind geschult, zuverlässig und arbeiten diskret – auch außerhalb Ihrer Bürozeiten. Wir nutzen umweltfreundliche, allergikergeeignete Reinigungsmittel und modernste Reinigungstechnik. Jeder Reinigungsvertrag beinhaltet einen festen Ansprechpartner und regelmäßige Qualitätskontrollen.',
        imageUrl: getImage('leistung:reinigung:secondary'),
        imageAlt: 'Professionelle Gebäudereinigung Frankfurt',
      }}
      benefits={[
        { title: 'Makelloser Auftritt', description: 'Saubere Räume, Treppenhäuser und Eingangsbereiche – für den perfekten ersten Eindruck bei Kunden und Mietern.', icon: Sparkles },
        { title: 'Hygienestandards', description: 'Zertifizierte Reinigungskräfte arbeiten nach definierten Hygienestandards – für Büros, Praxen und Lebensmittelbetriebe.', icon: Shield },
        { title: 'Flexible Zeiten', description: 'Reinigung vor, während oder nach Ihrer Geschäftszeit – ohne Störung des Betriebsablaufs.', icon: Clock },
        { title: 'Erfahrenes Team', description: 'Geschulte, fest angestellte Reinigungskräfte mit Kenntnissen in allen Reinigungsbereichen.', icon: Award },
        { title: 'Eco-Reinigungsmittel', description: 'Umweltfreundliche und hautverträgliche Reinigungsprodukte nach neuesten ökologischen Standards.', icon: Leaf },
        { title: 'Langfristige Partnerschaft', description: 'Jahresverträge mit festen Teams – keine wechselnden Reinigungskräfte, sondern verlässliche Bekannte.', icon: Users },
      ]}
      leistungsumfang={{
        headline: 'Unser vollständiges Reinigungsangebot',
        items: [
          ['Unterhalts- & Büroreinigung', 'Treppenhausreinigung', 'Sanitärreinigung & Desinfektion', 'Küchen- & Pausenraumreinigung', 'Praxis- & Kanzleireinigung'],
          ['Glasreinigung innen & außen', 'Fassadenreinigung', 'Tiefgaragenreinigung', 'Parkplatzreinigung', 'Eingangsbereich & Briefkastenanlagen'],
          ['Grundreinigung & Erstbezug', 'Bauendreinigung', 'Jahresreinigung & Frühjahrsputz', 'Bodenreinigung & -pflege (Parkett, Laminat, Stein)', 'Sonderreinigungen'],
        ],
      }}
      steps={[
        { step: '1', title: 'Objektbesichtigung', description: 'Kostenlose Begehung und Flächenaufnahme in Frankfurt – wir erfassen alle Reinigungsbereiche.' },
        { step: '2', title: 'Reinigungsplan', description: 'Individueller Reinigungsplan mit Häufigkeit, Leistungen und Festpreisangebot.' },
        { step: '3', title: 'Teameinsatz', description: 'Einsatz Ihres festen Reinigungsteams nach Plan – pünktlich und zuverlässig.' },
        { step: '4', title: 'Qualitätskontrolle', description: 'Regelmäßige Qualitätsbegehungen durch unsere Objektleitung und direktes Feedback-System.' },
      ]}
      faqs={[
        { q: 'Wie oft sollte eine Büroreinigung in Frankfurt erfolgen?', a: 'Für Büros empfehlen wir eine tägliche oder 3-mal-wöchentliche Unterhaltsreinigung. Treppenhäuser werden üblicherweise 1–2 Mal pro Woche gereinigt. Wir passen die Häufigkeit an Ihre Nutzung an.' },
        { q: 'Was kostet Gebäudereinigung in Frankfurt?', a: 'Für Unterhaltsreinigung in Büros rechnen wir üblicherweise ab 1,80 €/m² pro Reinigung. Bei größeren Flächen und höherer Frequenz sinken die Preise. Gerne erstellen wir Ihnen ein konkretes Angebot.' },
        { q: 'Sind Ihre Mitarbeiter vertraulich?', a: 'Ja, alle unsere Reinigungskräfte unterliegen einer strengen Verschwiegenheitspflicht und wurden auf DSGVO-konformes Verhalten geschult. Auf Wunsch unterzeichnen wir auch spezifische Geheimhaltungsvereinbarungen.' },
        { q: 'Führen Sie auch Reinigungen außerhalb der Geschäftszeiten durch?', a: 'Ja, viele unserer Kunden bevorzugen Reinigungen am frühen Morgen oder am Abend. Wir sind flexibel und passen unsere Einsatzzeiten an Ihren Betrieb an.' },
      ]}
      cta={{
        headline: 'Professionelle Gebäudereinigung für Ihr Objekt in Frankfurt',
        subline: 'Jetzt Angebot anfordern – Objektbesichtigung und individueller Reinigungsplan inklusive. Wir melden uns innerhalb von 24 Stunden.',
        servicePreset: 'Gebäudereinigung',
      }}
    />
  );
}
