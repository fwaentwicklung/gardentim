import { Sparkles, Clock, Shield, Home, Star, CheckCircle, Phone, CalendarCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function FensterputzerPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Fensterputzer Frankfurt Privathaushalt | Fensterreinigung – Garden Time GmbH',
        description: 'Professioneller Fensterputzer für Privathaushalte in Frankfurt ✓ Streifenfrei & gründlich ✓ Zuverlässig & versichert ✓ Kostenlos anfragen – Angebot in 24h. Garden Time GmbH Frankfurt.',
        keywords: 'Fensterputzer Frankfurt, Fensterputzer Privathaushalt Frankfurt, Fensterreinigung Frankfurt, Fensterputzer in der Nähe, Fenster putzen lassen Frankfurt, Fensterreinigung Privathaushalt',
        canonical: 'https://www.gardentime-frankfurt.de/leistungen/fensterputzer',
      }}
      breadcrumb="Fensterputzer Privathaushalt"
      hero={{
        badge: '✓ Fensterputzer für Privathaushalte',
        headline: 'Professioneller Fensterputzer in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Makellos saubere Fenster für Ihr Zuhause – streifenfrei, schnell und zuverlässig. Kein Aufwand für Sie, perfektes Ergebnis garantiert.',
        imageUrl: getImage('leistung:glasreinigung:hero'),
        checks: [
          'Fensterputzer für Privathaushalte & Einfamilienhäuser',
          'Innen- & Außenreinigung, Rahmen & Fensterbänke',
          'Versichert, pünktlich & diskret',
          'Kostenloser Besichtigungstermin – Angebot in 24h',
        ],
      }}
      intro={{
        headline: 'Fenster putzen lassen – entspannt, sauber, professionell',
        text1: 'Streifenfreie Fenster sind das Ergebnis von Technik, Erfahrung und den richtigen Mitteln. Unser Team reinigt Ihre Fenster schnell und gründlich – innen, außen, inkl. Rahmen und Fensterbänken.',
        text2: 'Ob einmaliger Frühjahrsputz, regelmäßige Reinigung alle 4–8 Wochen oder als Teil eines Hauspflege-Pakets: wir passen uns Ihrem Bedarf an. Alle Mitarbeiter sind versichert und diskret.',
        imageUrl: getImage('leistung:glasreinigung:secondary'),
        imageAlt: 'Fensterputzer Privathaushalt Frankfurt',
      }}
      benefits={[
        { title: 'Streifenfreies Ergebnis', description: 'Professionelle Abzieher, osmosegereinigte Wasser und geprüfte Reinigungsmittel – kein Schlieren, keine Streifen.', icon: Sparkles },
        { title: 'Innen & Außen', description: 'Wir reinigen alle zugänglichen Fensterflächen: innen, außen, Rahmen, Dichtungen und Fensterbänke.', icon: Home },
        { title: 'Flexible Termine', description: 'Einmalig, zweimonatlich oder auf Abruf – wir richten uns nach Ihrem Rhythmus, auch am Wochenende.', icon: CalendarCheck },
        { title: 'Versicherte Fachkräfte', description: 'Alle Mitarbeiter sind sozialversicherungspflichtig angestellt, haftpflichtversichert und regelmäßig geschult.', icon: Shield },
        { title: 'Schnelle Reaktion', description: 'Angebot innerhalb von 24 Stunden – viele Kunden erhalten ihren ersten Termin innerhalb einer Woche.', icon: Clock },
        { title: 'Zufriedenheitsgarantie', description: 'Nicht zufrieden? Wir kommen kostenlos nochmal. Über 800 Kunden vertrauen Garden Time seit Jahren.', icon: Star },
      ]}
      leistungsumfang={{
        headline: 'Was wir für Ihren Privathaushalt reinigen',
        items: [
          ['Einfachfenster & Doppelverglasung', 'Dachfenster & Oberlichter', 'Wintergarten-Verglasung'],
          ['Rahmen, Dichtungen & Fensterbänke', 'Glastüren & Schiebetüren', 'Balkontüren & -verglasung'],
          ['Einmalige Grundreinigung', 'Regelmäßige Turnus-Reinigung', 'Frühjahrsputz-Pakete'],
        ],
      }}
      steps={[
        { step: '01', title: 'Kostenlos anfragen', description: 'Formular ausfüllen oder anrufen – wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.' },
        { step: '02', title: 'Termin vereinbaren', description: 'Wir besichtigen kurz Ihr Objekt und legen gemeinsam den Reinigungsumfang und -rhythmus fest.' },
        { step: '03', title: 'Professionelle Reinigung', description: 'Unser Team erscheint pünktlich, arbeitet sorgfältig und hinterlässt Ihnen streifenfreie Fenster.' },
        { step: '04', title: 'Fertig – kein Aufwand für Sie', description: 'Sie müssen nichts vorbereiten. Wir kümmern uns um alles – inkl. Aufräumen und Wegräumen.' },
      ]}
      faqs={[
        { q: 'Wie bekomme ich ein Angebot für die Fensterreinigung?', a: 'Einfach das Formular ausfüllen oder uns anrufen. Wir erstellen ein kostenloses Angebot innerhalb von 24 Stunden – ohne versteckte Kosten.' },
        { q: 'Reinigen Sie auch Dachfenster und Wintergärten?', a: 'Ja, wir reinigen alle zugänglichen Fensterflächen – inkl. Dachfenster, Wintergärten und Glasdächer – sicher und professionell.' },
        { q: 'Wie oft empfehlen Sie die Fensterreinigung?', a: 'Für Privathaushalte empfehlen wir eine Reinigung alle 6–8 Wochen. Viele Kunden wählen auch den Frühjahrs- und Herbstputz (2x jährlich).' },
        { q: 'Muss ich zu Hause sein, wenn die Fenster gereinigt werden?', a: 'Nicht unbedingt. Nach Absprache können wir auch ohne Ihre Anwesenheit arbeiten, solange wir Zugang zu den Fenstern haben.' },
      ]}
      cta={{
        headline: 'Fensterputzer in Frankfurt anfragen',
        subline: 'Kostenlos & unverbindlich – Angebot innerhalb von 24 Stunden.',
        servicePreset: 'Glas- & Gebäudereinigung',
      }}
    />
  );
}
