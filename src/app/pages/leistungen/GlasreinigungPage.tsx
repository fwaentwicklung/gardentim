import { Sparkles, Eye, Clock, Award, Shield, CheckCircle, Building2, Star } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GlasreinigungPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Glas- & Gebäudereinigung Frankfurt | Glasreinigung Gewerbe – Garden Time GmbH',
        description: 'Professionelle Glas- & Gebäudereinigung in Frankfurt ✓ Schaufenster & Fassaden ✓ Büros & Hotels ✓ Treppenhäuser ✓ Industriereinigung. Garden Time GmbH Frankfurt.',
        keywords: 'Glasreinigung Frankfurt, Gebäudereinigung Frankfurt, Fensterreinigung Frankfurt, Fassadenreinigung Frankfurt, Schaufensterreinigung Frankfurt, Glasfassade reinigen Frankfurt',
      }}
      breadcrumb="Glas- & Gebäudereinigung"
      hero={{
        badge: '✓ Glas- & Gebäudereinigung Frankfurt',
        headline: 'Glas- & Gebäudereinigung in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Streifenfreie Glasflächen, makellose Fassaden und blitzsaubere Gebäude – für Büros, Hotels, Einzelhandel und Industriebetriebe.',
        imageUrl: getImage('leistung:glasreinigung:hero'),
        checks: [
          'Glasreinigung – streifenfrei & gründlich',
          'Fassaden- & Fensterfrontreinigung',
          'Treppenhäuser & Gemeinschaftsflächen',
          'Flexibel: täglich, wöchentlich oder monatlich',
        ],
      }}
      intro={{
        headline: 'Glasreinigung auf Profiniveau – für den perfekten ersten Eindruck',
        text1: 'Saubere Glasflächen und gepflegte Gebäudehüllen hinterlassen einen professionellen Eindruck – bei Kunden, Mietern und Besuchern. Garden Time reinigt Ihre Glasflächen und Fassaden nach höchsten Standards.',
        text2: 'Ob Schaufensterfront im Einzelhandel, Glasfassade im Bürogebäude oder Wintergartenverglasung – wir arbeiten mit professionellen Reinigungsmitteln, moderner Ausstattung und geschultem Personal.',
        imageUrl: getImage('leistung:glasreinigung:secondary'),
        imageAlt: 'Glasreinigung Frankfurt',
      }}
      benefits={[
        { title: 'Streifenfreies Ergebnis', description: 'Professionelle Technik und geeignete Reinigungsmittel garantieren streifenfreie Glasflächen.', icon: Sparkles },
        { title: 'Alle Glasarten', description: 'Schaufenster, Glasfassaden, Dachverglasungen, Wintergärten, Trennwände – wir reinigen alles.', icon: Eye },
        { title: 'Fassadenreinigung', description: 'Schonende Reinigung von Klinkerfassaden, Putz, Naturstein und Metallfassaden.', icon: Building2 },
        { title: 'Flexible Reinigungsintervalle', description: 'Täglich, wöchentlich, monatlich oder nach Bedarf – wir passen uns Ihrem Rhythmus an.', icon: Clock },
        { title: 'Zertifiziertes Personal', description: 'Alle Reinigungskräfte sind geschult, versichert und arbeiten diskret und zuverlässig.', icon: Shield },
        { title: 'Jahresverträge', description: 'Mit einem Jahresvertrag sichern Sie sich feste Reinigungstermine und attraktive Konditionen.', icon: Award },
      ]}
      leistungsumfang={{
        headline: 'Unsere Reinigungsleistungen im Überblick',
        items: [
          ['Schaufensterreinigung', 'Glasfassadenreinigung', 'Wintergartenreinigung'],
          ['Fensterfronten & Glastüren', 'Treppenhausreinigung', 'Unterhaltsreinigung'],
          ['Fassadenreinigung', 'Sonderreinigung nach Bau', 'Außenreinigung'],
        ],
      }}
      steps={[
        { step: '01', title: 'Objektbesichtigung', description: 'Wir begutachten Ihr Objekt und erstellen ein maßgeschneidertes Reinigungskonzept.' },
        { step: '02', title: 'Angebot & Vertragsabschluss', description: 'Transparentes Angebot mit klaren Preisen und definierten Leistungsumfängen.' },
        { step: '03', title: 'Regelmäßige Reinigung', description: 'Pünktlich, zuverlässig und nach höchsten Qualitätsstandards – immer mit Qualitätskontrolle.' },
        { step: '04', title: 'Dokumentation & Reporting', description: 'Alle Einsätze werden dokumentiert – Sie erhalten auf Wunsch monatliche Berichte über erbrachte Leistungen.' },
      ]}
      faqs={[
        { q: 'Wie oft empfehlen Sie Glasreinigung?', a: 'Für Gewerbeobjekte empfehlen wir je nach Lage wöchentliche bis monatliche Reinigung. Wir beraten Sie zur optimalen Frequenz.' },
        { q: 'Arbeiten Sie auch bei großen Glasfassaden?', a: 'Ja, wir arbeiten mit Hubarbeitsbühnen, Steigern und Seilzugangstechnik auch an hohen Fassaden.' },
        { q: 'Reinigen Sie auch nach Bauarbeiten?', a: 'Ja, Baureinigungen (Glasreinigung, Bodenreinigung, Endreinigung) sind ein Schwerpunkt unseres Leistungsangebots.' },
        { q: 'Bieten Sie Jahresverträge an?', a: 'Ja, mit einem Rahmenvertrag sichern Sie sich regelmäßige Termine, Prioritätsbehandlung und günstige Konditionen.' },
      ]}
      cta={{ headline: 'Glasreinigung in Frankfurt anfragen', subline: 'Kostenloses Angebot für Ihr Objekt – innerhalb von 48 Stunden.', servicePreset: 'Glas- & Gebäudereinigung' }}
    />
  );
}
