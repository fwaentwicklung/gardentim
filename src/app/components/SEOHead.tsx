import { useEffect } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  faqs?: FaqItem[];
}

export default function SEOHead({ title, description, keywords, canonical, faqs }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'Garden Time GmbH');
    setMeta('geo.region', 'DE-HE');
    setMeta('geo.placename', 'Frankfurt am Main');

    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:locale', 'de_DE');
    setOg('og:site_name', 'Garden Time GmbH Frankfurt');
    setOg('og:image', `${window.location.origin}/favicon.png`);
    setOg('og:url', canonical || window.location.href);

    // Canonical URL
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical || window.location.href;

    // FAQ Schema.org JSON-LD
    const existingScript = document.querySelector('script[data-schema="faq"]');
    if (existingScript) existingScript.remove();
    if (faqs && faqs.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'faq');
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      });
      document.head.appendChild(script);
    }

    // LocalBusiness Schema (nur auf Startseite)
    const existingLb = document.querySelector('script[data-schema="localbusiness"]');
    if (!existingLb && window.location.pathname === '/') {
      const lbScript = document.createElement('script');
      lbScript.type = 'application/ld+json';
      lbScript.setAttribute('data-schema', 'localbusiness');
      lbScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Gardentime Facility Service GmbH',
        url: 'https://www.gardentime-frankfurt.de',
        telephone: '+496930038013',
        email: 'info@gardentime-frankfurt.de',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Melchiorstraße 3-5',
          addressLocality: 'Frankfurt am Main',
          postalCode: '65929',
          addressCountry: 'DE',
        },
        areaServed: 'Frankfurt am Main',
        priceRange: '€€',
        openingHours: 'Mo-Fr 08:00-18:00',
      });
      document.head.appendChild(lbScript);
    }
  }, [title, description, keywords, canonical, faqs]);

  return null;
}
