import { Link } from 'react-router';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY } from '../lib/company';
import { openCookieSettings } from './CookieBanner';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003f2e] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Gardentime Logo"
                className="h-24 w-auto object-contain"
                style={{ mixBlendMode: 'luminosity', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
            <p className="text-[#98c4be] text-sm leading-relaxed mb-6">
              Ihr professioneller Partner für Gartenpflege, Gartengestaltung und Facility Management
              in Frankfurt am Main und dem gesamten Rhein-Main-Gebiet.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bcff83] hover:text-[#003f2e] transition-all group"
                >
                  <Icon size={16} className="text-white group-hover:text-[#003f2e]" />
                </a>
              ))}
            </div>
          </div>

          {/* Gartenpflege Services */}
          <div>
            <h3 className="font-bold text-[#bcff83] uppercase tracking-widest text-xs mb-5">
              Gartenpflege
            </h3>
            <ul className="space-y-3">
              {[
                'Rasenpflege & Rasenschnitt',
                'Heckenschnitt & Baumschnitt',
                'Gartengestaltung & Planung',
                'Bepflanzung & Beratung',
                'Bewässerungsanlagen',
                'Saisonale Pflege',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/gartenpflege"
                    className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facility Services */}
          <div>
            <h3 className="font-bold text-[#bcff83] uppercase tracking-widest text-xs mb-5">
              Facility Management
            </h3>
            <ul className="space-y-3">
              {[
                'Hausmeisterservice',
                'Gebäudereinigung',
                'Winterdienst',
                'Außenanlagenpflege',
                'Technisches Gebäudemanagement',
                'Grünflächenpflege Gewerbe',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/facility-management"
                    className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#bcff83] uppercase tracking-widest text-xs mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#bcff83] mt-0.5 shrink-0" />
                <span className="text-[#98c4be] text-sm">
                  {COMPANY.street}<br />
                  {COMPANY.zip} {COMPANY.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#bcff83] shrink-0" />
                <div>
                  <a href={COMPANY.phoneTel} className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors block">
                    {COMPANY.phonePretty}
                  </a>
                  <a href={COMPANY.mobileTel} className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors block">
                    {COMPANY.mobilePretty}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#bcff83] shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-[#bcff83] text-xs font-semibold uppercase tracking-widest mb-2">
                Öffnungszeiten
              </p>
              <p className="text-[#98c4be] text-sm">Mo–Fr: 07:00 – 18:00 Uhr</p>
              <p className="text-[#98c4be] text-sm">Sa: 08:00 – 14:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#98c4be] text-sm">
            © {year} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/datenschutz" className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors">
              Datenschutzerklärung
            </Link>
            <Link to="/impressum" className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors">
              Impressum
            </Link>
            <Link to="/kontakt" className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors">
              Kontakt
            </Link>
            <button
              onClick={openCookieSettings}
              className="text-[#98c4be] text-sm hover:text-[#bcff83] transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
        {/* Agentur-Credit */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center">
            <a
              href="https://www.frankfurter-werbeagentur.de"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Entwickelt von der Frankfurter Werbeagentur"
            >
              <img
                src="/fwa-logo.png"
                alt="Frankfurter Werbeagentur Logo"
                className="h-5 w-auto object-contain"
              />
              <span className="text-[#98c4be] text-xs group-hover:text-white transition-colors">
                Entwickelt von der <span className="font-semibold">Frankfurter Werbeagentur</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}