import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Cookie, X, Shield, ChevronDown, Check } from 'lucide-react';

interface ConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'gardentime_cookie_consent';

function updateGtagConsent(analytics: boolean, marketing: boolean) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
      analytics_storage: analytics ? 'granted' : 'denied',
    });
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: ConsentState = {
    essential: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  updateGtagConsent(analytics, marketing);
}

function loadConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as ConsentState;
  } catch {}
  return null;
}

/** Öffnet die Cookie-Einstellungen von außen (z. B. aus dem Footer) */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent('gardentime:open-cookie-settings'));
}

/** Toggle-Schalter-Komponente mit echter CSS-Slide-Animation */
function Toggle({
  enabled,
  onChange,
  label,
  disabled = false,
}: {
  enabled: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff83]/60 shrink-0 mt-0.5 ${
        disabled
          ? 'cursor-not-allowed opacity-80'
          : 'cursor-pointer'
      } ${enabled ? 'bg-[#bcff83]/30' : 'bg-white/15'}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200 flex items-center justify-center ${
          enabled
            ? 'left-[calc(100%-1.125rem)] bg-[#bcff83]'
            : 'left-0.5 bg-white/50'
        }`}
      >
        {enabled && disabled && (
          <Check size={9} className="text-[#003f2e]" strokeWidth={3} />
        )}
      </span>
    </button>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false); // true = slide-out
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Beim ersten Laden: Banner zeigen wenn noch kein Consent vorhanden
  useEffect(() => {
    const consent = loadConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auf "Einstellungen öffnen"-Event aus Footer/Datenschutz-Seite hören
  useEffect(() => {
    const handler = () => {
      const consent = loadConsent();
      if (consent) {
        setAnalytics(consent.analytics);
        setMarketing(consent.marketing);
      }
      setShowDetails(true);
      setAnimating(false);
      setVisible(true);
    };
    window.addEventListener('gardentime:open-cookie-settings', handler);
    return () => window.removeEventListener('gardentime:open-cookie-settings', handler);
  }, []);

  const dismiss = (fn: () => void) => {
    setAnimating(true);
    fn();
    setTimeout(() => {
      setVisible(false);
      setAnimating(false);
    }, 280);
  };

  const handleAcceptAll = () =>
    dismiss(() => saveConsent(true, true));

  const handleEssentialOnly = () =>
    dismiss(() => saveConsent(false, false));

  const handleSaveSelection = () =>
    dismiss(() => saveConsent(analytics, marketing));

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] p-3 sm:p-4 ${
        animating
          ? 'animate-out slide-out-to-bottom duration-300'
          : 'animate-in slide-in-from-bottom duration-300'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
    >
      <div className="max-w-3xl mx-auto bg-[#002b1e] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">

        {/* Header */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#bcff83] rounded-xl flex items-center justify-center shrink-0">
                <Cookie size={18} className="text-[#003f2e]" />
              </div>
              <div>
                <h2 className="font-bold text-white text-base leading-tight">Datenschutz & Cookies</h2>
                <p className="text-[#98c4be] text-xs">Gardentime Facility Service GmbH</p>
              </div>
            </div>
            <button
              onClick={handleEssentialOnly}
              className="text-white/40 hover:text-white/80 transition-colors shrink-0 p-1 rounded-lg hover:bg-white/10"
              aria-label="Nur essentielle Cookies – Banner schließen"
              title="Nur essentielle Cookies akzeptieren"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-[#98c4be] text-sm leading-relaxed">
            Wir verwenden Cookies, um diese Website zu betreiben und zu verbessern.
            Essentielle Cookies sind für den Betrieb technisch notwendig.
            Analyse- und Marketing-Cookies setzen wir nur mit Ihrer ausdrücklichen Einwilligung ein.{' '}
            <Link to="/datenschutz" className="text-[#bcff83] underline hover:no-underline text-xs">
              Datenschutzerklärung
            </Link>
          </p>
        </div>

        {/* Details-Toggle */}
        <div className="px-5 pb-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-[#98c4be] text-xs font-semibold hover:text-white transition-colors"
          >
            <Shield size={12} />
            {showDetails ? 'Einstellungen ausblenden' : 'Einstellungen anpassen'}
            <ChevronDown size={12} className={`transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
          </button>

          {showDetails && (
            <div className="mt-3 space-y-1 bg-white/5 rounded-xl p-4">

              {/* Essentielle – immer an */}
              <div className="flex items-start gap-3 py-2">
                <Toggle enabled={true} onChange={() => {}} label="Essentielle Cookies (immer aktiv)" disabled />
                <div>
                  <p className="text-white text-xs font-bold">
                    Essentielle Cookies{' '}
                    <span className="text-[#bcff83] font-normal text-[10px]">(Pflicht)</span>
                  </p>
                  <p className="text-[#98c4be] text-xs mt-0.5">
                    Technisch notwendig für den Betrieb der Website (Formulare, Sicherheit, Cookie-Einwilligung).
                    Rechtsgrundlage: § 25 Abs. 2 TTDSG.
                  </p>
                </div>
              </div>

              {/* Analyse */}
              <div className="flex items-start gap-3 py-2 border-t border-white/5">
                <Toggle
                  enabled={analytics}
                  onChange={setAnalytics}
                  label="Analyse-Cookies aktivieren"
                />
                <div>
                  <p className="text-white text-xs font-bold">Analyse-Cookies</p>
                  <p className="text-[#98c4be] text-xs mt-0.5">
                    Helfen uns zu verstehen, wie Besucher die Website nutzen (anonymisiert).
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3 py-2 border-t border-white/5">
                <Toggle
                  enabled={marketing}
                  onChange={setMarketing}
                  label="Marketing-Cookies aktivieren"
                />
                <div>
                  <p className="text-white text-xs font-bold">Marketing-Cookies</p>
                  <p className="text-[#98c4be] text-xs mt-0.5">
                    Ermöglichen personalisierte Inhalte und Remarketing.
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="px-5 pb-5 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-[#bcff83] text-[#003f2e] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#a8f060] transition-colors"
          >
            Alle akzeptieren
          </button>
          {showDetails ? (
            <button
              onClick={handleSaveSelection}
              className="flex-1 bg-white/15 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/25 transition-colors"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={handleEssentialOnly}
              className="flex-1 bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Nur Essentielle
            </button>
          )}
        </div>

        {/* DSGVO Footer */}
        <div className="px-5 py-3 bg-white/5 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-[#98c4be] text-[10px]">
            Gardentime Facility Service GmbH · Melchiorstraße 3-5 · 65929 Frankfurt
          </span>
          <Link to="/impressum" className="text-[#98c4be] text-[10px] hover:text-white underline">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-[#98c4be] text-[10px] hover:text-white underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
}
