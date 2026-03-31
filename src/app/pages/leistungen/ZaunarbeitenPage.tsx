import { Shield, Hammer, Clock, Award, Ruler, Wrench, CheckCircle, Lock } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function ZaunarbeitenPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Zaunarbeiten Frankfurt | Zaunbau & Zaunanlagen – Garden Time GmbH',
        description: 'Professioneller Zaunbau in Frankfurt am Main ✓ Holzzaun ✓ Metallzaun ✓ Sichtschutzzaun ✓ Einfahrtstore ✓ Kostenloses Angebot. Garden Time GmbH – Ihr Zaunbauer in Frankfurt.',
        keywords: 'Zaunbau Frankfurt, Zaun Frankfurt, Sichtschutzzaun Frankfurt, Einfahrtstor Frankfurt, Zaunarbeiten Frankfurt am Main, Holzzaun Frankfurt',
      }}
      breadcrumb="Zaunarbeiten"
      hero={{
        badge: '✓ Zaunarbeiten Frankfurt',
        headline: 'Zaunbau & Zaunanlagen in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Wir planen und bauen Ihren Zaun – vom einfachen Drahtzaun bis zum exklusiven Stabgitterzaun mit automatischem Einfahrtstor.',
        imageUrl: getImage('leistung:zaunarbeiten:hero'),
        checks: [
          'Holz-, Metall- & Kunststoffzäune',
          'Sichtschutzlösungen & Einfahrtstore',
          'Fundament & Pfosten fachgerecht gesetzt',
          'Maßanfertigung nach Wunsch',
        ],
      }}
      intro={{
        headline: 'Zäune für Privat und Gewerbe – sicher und langlebig',
        text1: 'Ein guter Zaun schützt Ihr Grundstück, schafft Privatsphäre und wertet Ihr Grundstück optisch auf. Garden Time plant und baut Zaunanlagen jeder Art in Frankfurt und Umgebung.',
        text2: 'Von der Beratung über Materialbeschaffung und Fundamentierung bis zur finalen Montage – wir übernehmen alles und übergeben Ihnen einen fertigen, stabilen Zaun.',
        imageUrl: getImage('leistung:zaunarbeiten:secondary'),
        imageAlt: 'Zaunarbeiten Frankfurt',
      }}
      benefits={[
        { title: 'Alle Zaunarten', description: 'Holz, Metall, Doppelstabmatte, Gabionen, Sichtschutz – wir bauen was zu Ihrem Grundstück passt.', icon: Shield },
        { title: 'Fachgerechte Fundamentierung', description: 'Stabile Pfosten und korrekte Fundamente sorgen für jahrelange Standfestigkeit.', icon: Hammer },
        { title: 'Einfahrtstore & Automatik', description: 'Wir installieren Dreh-, Schiebe- und Automatiktore für Ihre Einfahrt.', icon: Lock },
        { title: 'Maßgenau & individuell', description: 'Jede Anlage wird nach Ihren Maßen und Wünschen geplant und gefertigt.', icon: Ruler },
        { title: 'Erfahrenes Team', description: 'Unsere Monteure setzen Zaunprojekte aller Größen sauber und zügig um.', icon: Award },
        { title: 'Reparatur & Wartung', description: 'Bestehende Zaunanlagen reparieren, streichen oder erweitern wir auf Wunsch.', icon: Wrench },
      ]}
      leistungsumfang={{
        headline: 'Unsere Zaunleistungen im Überblick',
        items: [
          ['Holzzäune & Holzsichtschutz', 'Doppelstabmattenzäune', 'Stabgitterzäune'],
          ['Gabionenzäune', 'Einfahrtstore (manuell & elektrisch)', 'WPC-Sichtschutz'],
          ['Maschendrahtzäune', 'Pfosten & Fundamentarbeiten', 'Reparatur & Austausch'],
        ],
      }}
      steps={[
        { step: '01', title: 'Besichtigung & Beratung', description: 'Wir kommen zu Ihnen, messen Ihr Grundstück ab und beraten zur optimalen Zaunlösung.' },
        { step: '02', title: 'Angebot & Planung', description: 'Innerhalb von 48 Stunden erhalten Sie ein transparentes Festpreisangebot.' },
        { step: '03', title: 'Montage & Übergabe', description: 'Unser Team baut Ihren Zaun fachgerecht und sauber auf – pünktlich zum vereinbarten Termin.' },
      ]}
      faqs={[
        { q: 'Welche Zaunarten bauen Sie?', a: 'Wir bauen Holzzäune, Doppelstabmattenzäune, Gabionen, Sichtschutzzäune aus WPC und Metall sowie Einfahrtstore.' },
        { q: 'Können Sie auch Einfahrtstore mit Automatik einbauen?', a: 'Ja, wir liefern und montieren elektrische Dreh- und Schiebetore inkl. Fernbedienung und Sprechanlagenanbindung.' },
        { q: 'Wie lange dauert ein Zaunprojekt?', a: 'Ein durchschnittliches Projekt dauert 1–2 Tage. Bei größeren Anlagen planen wir den genauen Zeitrahmen im Angebot ein.' },
        { q: 'Reparieren Sie auch bestehende Zäune?', a: 'Ja, wir reparieren beschädigte Zäune, ersetzen einzelne Pfosten oder Elemente und streichen Holzzäune neu.' },
      ]}
      cta={{ headline: 'Zaunbau in Frankfurt anfragen', subline: 'Kostenloses Angebot – schnell und unverbindlich.', servicePreset: 'Zaunarbeiten' }}
    />
  );
}
