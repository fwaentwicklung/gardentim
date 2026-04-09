import { Building2, Shield, Clock, Award, Users, CheckCircle, FileCheck, Phone } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function ObjektbetreuungPage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Objektbetreuung Frankfurt | Hausverwaltung & Gebäudebetreuung – Garden Time GmbH',
        description: 'Professionelle Objektbetreuung in Frankfurt am Main ✓ Wohn- & Gewerbeobjekte ✓ Hausverwaltung ✓ Leerstandsbetreuung ✓ Kostenloses Angebot. Garden Time GmbH Frankfurt.',
        keywords: 'Objektbetreuung Frankfurt, Gebäudebetreuung Frankfurt, Hausverwaltung Frankfurt, Immobilienbetreuung Frankfurt, Leerstandsverwaltung Frankfurt, Property Management Frankfurt',
      }}
      breadcrumb="Objektbetreuung"
      hero={{
        badge: '✓ Objektbetreuung Frankfurt',
        headline: 'Professionelle Objektbetreuung in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Ganzheitliche Betreuung Ihrer Immobilien – von der Wohnanlage bis zum Gewerbepark. Ein Ansprechpartner für alles.',
        imageUrl: getImage('leistung:objektbetreuung:hero'),
        checks: [
          'Wohn- & Gewerbeobjekte aller Größen',
          'Regelmäßige Begehungen & Protokollierung',
          'Koordination von Handwerkern & Dienstleistern',
          'Leerstandsbetreuung & -sicherung',
        ],
      }}
      intro={{
        headline: 'Objektbetreuung, die Ihre Immobilie dauerhaft in Schuss hält',
        text1: 'Eine professionell betreute Immobilie erhält ihren Wert, senkt Leerstand und sorgt für zufriedene Mieter. Garden Time übernimmt die vollständige Objektbetreuung für Wohn- und Gewerbeimmobilien in Frankfurt.',
        text2: 'Als Ihr verlässlicher Partner koordinieren wir alle Dienstleister, führen regelmäßige Begehungen durch, erkennen Mängel frühzeitig und sorgen für schnelle Abhilfe – ohne dass Sie sich kümmern müssen.',
        imageUrl: getImage('leistung:objektbetreuung:secondary'),
        imageAlt: 'Objektbetreuung Frankfurt',
      }}
      benefits={[
        { title: 'Ein Ansprechpartner', description: 'Sie haben einen festen Ansprechpartner, der Ihr Objekt kennt und bei allen Fragen sofort helfen kann.', icon: Phone },
        { title: 'Regelmäßige Begehungen', description: 'Systematische Objektbegehungen mit detaillierter Protokollierung erkennen Mängel frühzeitig.', icon: FileCheck },
        { title: 'Dienstleisterkoordination', description: 'Wir beauftragen und koordinieren alle Handwerker und Dienstleister – zuverlässig und kostenbewusst.', icon: Users },
        { title: 'Leerstandsbetreuung', description: 'Leerstehende Objekte werden gesichert, regelmäßig begangen und bei Bedarf vermarktet.', icon: Building2 },
        { title: 'Dokumentation & Reporting', description: 'Sie erhalten regelmäßige Berichte über den Zustand Ihres Objekts und alle durchgeführten Maßnahmen.', icon: CheckCircle },
        { title: '24/7 Notfallbereitschaft', description: 'Für Notfälle stehen wir rund um die Uhr zur Verfügung – schnelle Reaktion bei Wasserschaden, Einbruch & Co.', icon: Shield },
      ]}
      leistungsumfang={{
        headline: 'Unsere Objektbetreuungsleistungen im Überblick',
        items: [
          ['Regelmäßige Objektbegehungen', 'Mängelerkennung & Meldung', 'Dienstleisterkoordination'],
          ['Leerstandsbetreuung & -sicherung', 'Mieterbetreuung & Kommunikation', 'Schlüsselverwaltung'],
          ['Notfallbereitschaft 24/7', 'Protokollierung & Reporting', 'Budgetkontrolle & Kostentransparenz'],
        ],
      }}
      steps={[
        { step: '01', title: 'Objektaufnahme & Bestandsanalyse', description: 'Wir nehmen Ihr Objekt systematisch auf, dokumentieren den Ist-Zustand und planen die Betreuung.' },
        { step: '02', title: 'Betreuungskonzept & Vertrag', description: 'Gemeinsam definieren wir Leistungsumfang und Intervalle – transparent und fair bepreist.' },
        { step: '03', title: 'Laufende Betreuung & Reporting', description: 'Regelmäßige Begehungen, schnelle Reaktion bei Bedarf und regelmäßige Berichte an Sie.' },
        { step: '04', title: 'Optimierung & Partnerschaft', description: 'Wir entwickeln unsere Leistungen kontinuierlich weiter – für eine langfristige und verlässliche Partnerschaft.' },
      ]}
      faqs={[
        { q: 'Für welche Objekte bieten Sie Objektbetreuung an?', a: 'Wir betreuen Wohnanlagen, Bürogebäude, Gewerbeparks, Einkaufszentren und einzelne Wohn- oder Gewerbeeinheiten.' },
        { q: 'Wie oft finden Begehungen statt?', a: 'Je nach Vereinbarung wöchentlich, zweiwöchentlich oder monatlich. Bei besonderen Objekten auch täglich.' },
        { q: 'Übernehmen Sie auch die Kommunikation mit Mietern?', a: 'Ja, auf Wunsch sind wir der direkte Ansprechpartner für Ihre Mieter bei Fragen und Mängeln.' },
        { q: 'Was ist mit Notfällen?', a: 'Für Notfälle (Wasserschaden, Einbruch, technische Defekte) sind wir 24/7 erreichbar und koordinieren sofortige Abhilfe.' },
      ]}
      cta={{ headline: 'Objektbetreuung in Frankfurt anfragen', subline: 'Kostenloses Erstgespräch & Angebot für Ihr Objekt.', servicePreset: 'Objektbetreuung' }}
    />
  );
}
