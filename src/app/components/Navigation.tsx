import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import {
  Menu, X, Phone, ChevronDown, Leaf, Building2, Scissors, Droplets,
  Palette, Layers, TreePine, Sprout,
} from 'lucide-react';
import { COMPANY } from '../lib/company';

const gartenLinks = [
  { label: 'Gartenpflege', path: '/leistungen/gartenpflege', icon: Leaf },
  { label: 'Gartengestaltung', path: '/leistungen/gartengestaltung', icon: Palette },
  { label: 'Rasenanlagen', path: '/leistungen/rasenanlagen', icon: Sprout },
  { label: 'Bepflanzungen', path: '/leistungen/bepflanzungen', icon: Leaf },
  { label: 'Baumschnitt', path: '/leistungen/baumschnitt', icon: TreePine },
  { label: 'Heckenschnitt & Baumschnitt', path: '/leistungen/heckenschnitt-baumschnitt', icon: Scissors },
  { label: 'Bewässerungsanlagen', path: '/leistungen/bewaesserungsanlagen', icon: Droplets },
  { label: 'Pflasterarbeiten', path: '/leistungen/pflasterarbeiten', icon: Layers },
  { label: 'Terrassenarbeiten', path: '/leistungen/terrassenarbeiten', icon: Layers },
  { label: 'Zaunarbeiten', path: '/leistungen/zaunarbeiten', icon: Leaf },
  { label: 'Außenanlagenpflege', path: '/leistungen/aussenanlagen', icon: Leaf },
];

const facilityLinks = [
  { label: 'Facility Management', path: '/leistungen/facility-management', icon: Building2 },
  { label: 'Glas- & Gebäudereinigung', path: '/leistungen/glasreinigung', icon: Leaf },
  { label: 'Hausmeister & -Techniker', path: '/leistungen/hausmeisterservice', icon: Leaf },
  { label: 'Objektbetreuung', path: '/leistungen/objektbetreuung', icon: Building2 },
  { label: 'Empfangsdienste & Sicherheit', path: '/leistungen/empfangsdienste', icon: Leaf },
  { label: 'Grünpflege', path: '/leistungen/gruenpflege', icon: Leaf },
  { label: 'Graupflege', path: '/leistungen/graupflege', icon: Leaf },
  { label: 'Poolreinigung', path: '/leistungen/poolreinigung', icon: Leaf },
  { label: 'Poolmessung', path: '/leistungen/poolmessung', icon: Leaf },
  { label: 'Winterdienst', path: '/leistungen/winterdienst', icon: Leaf },
];

const gartenMenuLinks = gartenLinks.filter(l => [
  '/leistungen/gartenpflege', '/leistungen/gartengestaltung', '/leistungen/baumschnitt',
  '/leistungen/rasenanlagen', '/leistungen/bepflanzungen', '/leistungen/pflasterarbeiten',
  '/leistungen/terrassenarbeiten', '/leistungen/zaunarbeiten',
].includes(l.path));

const facilityMenuLinks = facilityLinks.filter(l => [
  '/leistungen/facility-management', '/leistungen/glasreinigung', '/leistungen/hausmeisterservice',
  '/leistungen/objektbetreuung', '/leistungen/empfangsdienste', '/leistungen/gruenpflege',
  '/leistungen/graupflege', '/leistungen/poolreinigung', '/leistungen/poolmessung',
].includes(l.path));

const allServicePaths = [...gartenLinks, ...facilityLinks].map(l => l.path);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServiceActive = allServicePaths.includes(pathname) || pathname === '/leistungen';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo.png"
              alt="Gardentime Logo"
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
                pathname === '/' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e] hover:text-[#2d746d] hover:bg-green-50'
              }`}
            >
              Startseite
            </Link>

            {/* Mega-Menu Leistungen */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
                  isServiceActive ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e] hover:text-[#2d746d] hover:bg-green-50'
                }`}
              >
                Leistungen
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] z-50 pt-2"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Garten */}
                      <div>
                        <p className="text-xs font-black text-[#003f2e] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">
                          🌿 Garten & Außenanlagen
                        </p>
                        <div className="space-y-0.5">
                          {gartenMenuLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-green-50 transition-colors group ${
                                pathname === link.path ? 'bg-green-50' : ''
                              }`}
                            >
                              <div className="w-6 h-6 bg-[#003f2e]/10 rounded-lg flex items-center justify-center shrink-0">
                                <link.icon size={12} className="text-[#003f2e]" />
                              </div>
                              <span className="font-medium text-sm text-[#003f2e] group-hover:text-[#2d746d]">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Facility */}
                      <div>
                        <p className="text-xs font-black text-[#003f2e] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">
                          🏢 Facility Management
                        </p>
                        <div className="space-y-0.5">
                          {facilityMenuLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-green-50 transition-colors group ${
                                pathname === link.path ? 'bg-green-50' : ''
                              }`}
                            >
                              <div className="w-6 h-6 bg-[#003f2e]/10 rounded-lg flex items-center justify-center shrink-0">
                                <link.icon size={12} className="text-[#003f2e]" />
                              </div>
                              <span className="font-medium text-sm text-[#003f2e] group-hover:text-[#2d746d]">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        to="/leistungen"
                        className="flex items-center gap-2 text-[#2d746d] font-semibold text-sm hover:text-[#003f2e] transition-colors"
                      >
                        Alle Leistungen im Überblick →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projekte"
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
                pathname === '/projekte' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e] hover:text-[#2d746d] hover:bg-green-50'
              }`}
            >
              Projekte
            </Link>
            <Link
              to="/jobs"
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
                pathname === '/jobs' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e] hover:text-[#2d746d] hover:bg-green-50'
              }`}
            >
              Jobs
            </Link>
            <Link
              to="/kontakt"
              className={`px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
                pathname === '/kontakt' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e] hover:text-[#2d746d] hover:bg-green-50'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 text-[#2d746d] font-semibold text-sm hover:text-[#003f2e] transition-colors"
            >
              <div className="w-7 h-7 bg-[#2d746d]/10 rounded-full flex items-center justify-center">
                <Phone size={13} className="text-[#2d746d]" />
              </div>
              {COMPANY.phonePretty}
            </a>
            <Link
              to="/kontakt"
              className="bg-[#003f2e] text-[#bcff83] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2d746d] transition-colors shadow-sm"
            >
              Angebot anfordern
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#003f2e] rounded-lg hover:bg-green-50"
            aria-label="Menü"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <Link
            to="/"
            className={`block py-3 px-3 font-semibold text-sm rounded-lg mb-1 ${
              pathname === '/' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e]'
            }`}
          >
            Startseite
          </Link>

          <div className="mb-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-3 px-3 font-semibold text-sm text-[#003f2e] rounded-lg"
            >
              Leistungen
              <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 border-l-2 border-[#bcff83] pl-3 mt-1 space-y-0.5">
                <p className="text-[10px] font-black text-[#003f2e] uppercase tracking-widest py-1.5">🌿 Garten & Außenanlagen</p>
                {gartenLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#2d746d]">
                    <link.icon size={13} />
                    {link.label}
                  </Link>
                ))}
                <p className="text-[10px] font-black text-[#003f2e] uppercase tracking-widest py-1.5 mt-2">🏢 Facility Management</p>
                {facilityLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#2d746d]">
                    <link.icon size={13} />
                    {link.label}
                  </Link>
                ))}
                <Link to="/leistungen" className="flex items-center gap-2 py-1.5 text-sm font-bold text-[#003f2e] mt-1">
                  Alle Leistungen →
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/projekte"
            className={`block py-3 px-3 font-semibold text-sm rounded-lg mb-1 ${
              pathname === '/projekte' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e]'
            }`}
          >
            Projekte
          </Link>
          <Link
            to="/jobs"
            className={`block py-3 px-3 font-semibold text-sm rounded-lg mb-1 ${
              pathname === '/jobs' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e]'
            }`}
          >
            Jobs
          </Link>
          <Link
            to="/kontakt"
            className={`block py-3 px-3 font-semibold text-sm rounded-lg mb-3 ${
              pathname === '/kontakt' ? 'text-[#2d746d] bg-green-50' : 'text-[#003f2e]'
            }`}
          >
            Kontakt
          </Link>
          <Link
            to="/kontakt"
            className="block bg-[#003f2e] text-[#bcff83] px-5 py-3 rounded-lg font-semibold text-sm text-center"
          >
            Kostenloses Angebot anfordern
          </Link>
          <a
            href={COMPANY.phoneTel}
            className="block text-[#2d746d] font-semibold text-sm text-center py-3"
          >
            {COMPANY.phonePretty}
          </a>
        </div>
      )}
    </header>
  );
}