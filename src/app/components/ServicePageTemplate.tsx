import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, CheckCircle, ChevronRight, ArrowRight, Star, type LucideIcon } from 'lucide-react';
import SEOHead from './SEOHead';
import LeadForm from './LeadForm';
import { COMPANY } from '../lib/company';

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageProps {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical?: string;
  };
  breadcrumb: string;
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subline: string;
    imageUrl: string;
    checks: string[];
  };
  intro: {
    headline: string;
    text1: string;
    text2: string;
    imageUrl: string;
    imageAlt: string;
  };
  benefits: ServiceBenefit[];
  leistungsumfang: {
    headline: string;
    items: string[][];
  };
  steps: ServiceStep[];
  faqs: ServiceFaq[];
  cta: {
    headline: string;
    subline: string;
    servicePreset: string;
  };
}

export default function ServicePageTemplate(props: ServicePageProps) {
  const { seo, breadcrumb, hero, intro, benefits, leistungsumfang, steps, faqs, cta } = props;
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} canonical={seo.canonical} faqs={faqs} />

      {/* Breadcrumb */}
      <div className="bg-[#f7f8f6] border-b border-gray-200 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#2d746d] transition-colors font-medium">Startseite</Link>
            <ChevronRight size={12} />
            <Link to="/leistungen" className="hover:text-[#2d746d] transition-colors font-medium">Leistungen</Link>
            <ChevronRight size={12} />
            <span className="text-[#003f2e] font-semibold">{breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#003f2e]">
        <div className="absolute inset-0">
          {hero.imageUrl && (
            <img src={hero.imageUrl} alt={hero.headline} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003f2e]/90 via-[#003f2e]/75 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              {hero.badge}
            </span>
            <h1 className="text-white font-black mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
              {hero.headline}{' '}
              <span className="text-[#bcff83]">{hero.headlineHighlight}</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              {hero.subline}
            </p>
            <div className="space-y-2.5 mb-8">
              {hero.checks.map((check) => (
                <div key={check} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#bcff83] shrink-0" />
                  <span className="text-white/90 text-sm font-medium">{check}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#anfrage"
                className="inline-flex items-center gap-2 bg-[#bcff83] text-[#003f2e] px-7 py-3.5 rounded-xl font-black text-sm hover:bg-[#a8f060] transition-all shadow-lg"
              >
                Kostenloses Angebot
                <ArrowRight size={16} />
              </a>
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                <Phone size={16} />
                {COMPANY.phonePretty}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inline-Formular direkt nach Hero */}
      <section id="anfrage" className="py-10 bg-[#f7f8f6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#2d746d] text-xs font-black uppercase tracking-widest mb-2">Jetzt anfragen</p>
              <h2 className="text-[#003f2e] font-black text-2xl lg:text-3xl mb-2 leading-tight">
                Kostenloses Angebot anfordern
              </h2>
              <p className="text-gray-500 text-sm">
                Antwort innerhalb von 24 Stunden · Unverbindlich · Keine versteckten Kosten
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <LeadForm servicePreset={cta.servicePreset} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#003f2e] font-black text-3xl mb-6 leading-tight">{intro.headline}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{intro.text1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{intro.text2}</p>
              <div className="flex items-center gap-4 bg-[#f7f8f6] rounded-2xl p-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#2d746d] border-2 border-white flex items-center justify-center">
                      <Star size={12} className="text-[#bcff83]" fill="#bcff83" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={14} className="text-yellow-400" fill="#facc15" />)}
                  </div>
                  <p className="text-[#003f2e] text-xs font-semibold mt-0.5">4,9/5 – aus 320+ Bewertungen</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {intro.imageUrl ? (
                <img
                  src={intro.imageUrl}
                  alt={intro.imageAlt}
                  className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
                />
              ) : (
                <div className="w-full h-[420px] rounded-3xl bg-[#003f2e]/10" />
              )}
              <div className="absolute -bottom-5 -left-5 bg-[#003f2e] text-white rounded-2xl p-4 shadow-xl">
                <p className="font-black text-3xl text-[#bcff83]">15+</p>
                <p className="text-xs text-white/70">Jahre Erfahrung</p>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#bcff83] text-[#003f2e] rounded-2xl p-4 shadow-xl">
                <p className="font-black text-3xl">800+</p>
                <p className="text-xs text-[#003f2e]/70">Kunden in Frankfurt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f7f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Ihre Vorteile
            </span>
            <h2 className="text-[#003f2e] font-black text-3xl">Warum Garden Time?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#003f2e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2d746d] transition-colors">
                  <benefit.icon size={22} className="text-[#bcff83]" />
                </div>
                <h3 className="text-[#003f2e] font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section className="py-16 bg-[#003f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Vollständige Übersicht
            </span>
            <h2 className="text-white font-black text-3xl">{leistungsumfang.headline}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leistungsumfang.items.map((group, gi) => (
              <div key={gi} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3">
                  {group.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#bcff83] shrink-0 mt-0.5" />
                      <span className="text-white/85 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf / Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Unser Ablauf
            </span>
            <h2 className="text-[#003f2e] font-black text-3xl">So einfach funktioniert es</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#bcff83] -translate-x-4 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 bg-[#003f2e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#bcff83] font-black text-xl">{step.step}</span>
                </div>
                <h3 className="text-[#003f2e] font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f7f8f6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Häufige Fragen
            </span>
            <h2 className="text-[#003f2e] font-black text-3xl">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#003f2e] text-sm list-none">
                  {faq.q}
                  <ChevronRight size={16} className="text-[#2d746d] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Formular */}
      <section className="py-20 bg-[#003f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#bcff83] text-[#003f2e] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Jetzt anfragen
              </span>
              <h2 className="text-white font-black text-3xl mb-4 leading-tight">{cta.headline}</h2>
              <p className="text-white/70 leading-relaxed mb-8">{cta.subline}</p>
              <div className="space-y-4">
                {[
                  'Kostenlose Besichtigung & Angebot',
                  'Antwort innerhalb von 24 Stunden',
                  'Keine versteckten Kosten',
                  'Langjährige Erfahrung in Frankfurt',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={17} className="text-[#bcff83] shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                <div className="w-12 h-12 bg-[#bcff83] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#003f2e]" />
                </div>
                <div>
                  <p className="text-white/70 text-xs">Direkt erreichbar:</p>
                  <a href={COMPANY.phoneTel} className="text-white font-black text-lg hover:text-[#bcff83] transition-colors">
                    {COMPANY.phonePretty}
                  </a>
                </div>
              </div>
            </div>
            <LeadForm servicePreset={cta.servicePreset} variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}