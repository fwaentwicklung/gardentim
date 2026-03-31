import { Leaf, Trees, Clock, Award, Droplets, Scissors, CheckCircle, Shield } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { useCmsImages } from '../../lib/useCmsImages';

export default function GruenpflegePage() {
  const { getImage } = useCmsImages();
  return (
    <ServicePageTemplate
      seo={{
        title: 'Grünpflege Frankfurt | Grünflächenpflege Gewerbe & Wohnanlagen – Garden Time GmbH',
        description: 'Professionelle Grünpflege in Frankfurt am Main ✓ Rasenpflege ✓ Strauchpflege ✓ Baumpflege ✓ Gewerbeimmobilien & Wohnanlagen ✓ Jahresvertrag. Garden Time GmbH.',
        keywords: 'Grünpflege Frankfurt, Grünflächenpflege Frankfurt, Außenanlage Gewerbe Frankfurt, Grünflächenmanagement Frankfurt, Jahrespflege Grünflächen Frankfurt',
      }}
      breadcrumb="Grünpflege"
      hero={{
        badge: '✓ Grünpflege Frankfurt',
        headline: 'Ganzjährige Grünpflege in',
        headlineHighlight: 'Frankfurt & Umgebung',
        subline: 'Gepflegte Grünanlagen rund ums Jahr – für Gewerbeimmobilien, Wohnanlagen und öffentliche Flächen im Rhein-Main-Gebiet.',
        imageUrl: getImage('leistung:gruenpflege:hero'),
        checks: [
          'Rasenpflege & regelmäßiger Schnitt',
          'Strauch- & Heckenpflege',
          'Beet- & Staudenpflege',
          'Jahresverträge für Gewerbe & Wohnanlagen',
        ],
      }}
      intro={{
        headline: 'Grünpflege für Gewerbe und Wohnanlagen – aus einer Hand',
        text1: 'Gepflegte Außenanlagen steigern den Wert Ihrer Immobilie, schaffen einen positiven ersten Eindruck und sorgen für Wohlbefinden von Mietern, Mitarbeitern und Kunden. Garden Time übernimmt die ganzjährige Grünpflege.',
        text2: 'Wir erstellen einen individuellen Pflegeplan, führen alle Leistungen zum vereinbarten Zeitpunkt durch und dokumentieren unsere Arbeit. Fester Ansprechpartner, zuverlässige Termine, transparente Abrechnung.',
        imageUrl: getImage('leistung:gruenpflege:secondary'),
        imageAlt: 'Grünpflege Frankfurt',
      }}
      benefits={[
        { title: 'Rasenpflege', description: 'Regelmäßiges Mähen, Kantenschnitt, Düngen und Bewässerung für einen gepflegten Rasen das ganze Jahr.', icon: Leaf },
        { title: 'Strauch- & Heckenpflege', description: 'Formschnitt, Rückschnitt und Pflege aller Hecken und Sträucher nach Pflegeplan.', icon: Scissors },
        { title: 'Baum- & Gehölzpflege', description: 'Sicherheitsschnitt, Kronenpflege und Totholzentfernung an Bäumen und großen Gehölzen.', icon: Trees },
        { title: 'Beet- & Staudenpflege', description: 'Unkrautbekämpfung, Düngen, Rückschnitt und Beetpflege für dauerhaft schöne Beete.', icon: CheckCircle },
        { title: 'Jahrespflegevertrag', description: 'Mit einem Jahresvertrag sichern Sie sich feste Termine, Priorität und planbare Kosten.', icon: Award },
        { title: 'Protokollierung', description: 'Jeder Pflegeeinsatz wird dokumentiert – Sie haben stets den Überblick über alle durchgeführten Leistungen.', icon: Shield },
      ]}
      leistungsumfang={{
        headline: 'Unsere Grünpflegeleistungen im Überblick',
        items: [
          ['Rasenmähen & Kantenschnitt', 'Heckenschnitt & Formschnitt', 'Strauchpflege & Rückschnitt'],
          ['Beetpflege & Unkrautbekämpfung', 'Beet- & Staudenpflege', 'Bewässerung & Düngedienst'],
          ['Baumpflege & Kronenschnitt', 'Herbst- & Frühjahrsputz', 'Laubblasen & Laubentsorgung'],
        ],
      }}
      steps={[
        { step: '01', title: 'Besichtigung & Pflegeplan', description: 'Wir besichtigen Ihre Anlage und erstellen einen maßgeschneiderten Jahrespflegeplan.' },
        { step: '02', title: 'Angebot & Vertragsabschluss', description: 'Transparentes Angebot mit klaren Leistungspositionen und festem Jahrespreis.' },
        { step: '03', title: 'Regelmäßige Pflege', description: 'Pünktliche Durchführung aller Leistungen – mit Qualitätskontrolle und Dokumentation.' },
      ]}
      faqs={[
        { q: 'Für welche Objekte bieten Sie Grünpflege an?', a: 'Wir pflegen Grünanlagen von Wohnanlagen, Bürogebäuden, Gewerbeparks, Schulen, Kliniken und öffentlichen Flächen.' },
        { q: 'Wie oft finden Pflegeeinsätze statt?', a: 'Je nach Saison wöchentlich bis monatlich. Im Pflegeplan ist für jede Leistung die optimale Häufigkeit definiert.' },
        { q: 'Bieten Sie auch Winterdienst an?', a: 'Ja, auf Wunsch ergänzen wir den Grünpflegevertrag um Winterdienstleistungen – alles aus einer Hand.' },
        { q: 'Wie funktioniert die Abrechnung?', a: 'Sie zahlen einen festen Jahresbetrag in monatlichen Raten – planbar und ohne Überraschungen.' },
      ]}
      cta={{ headline: 'Grünpflege in Frankfurt anfragen', subline: 'Kostenlose Besichtigung & Pflegeplan innerhalb von 48 Stunden.', servicePreset: 'Grünpflege' }}
    />
  );
}
