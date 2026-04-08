import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import Home from './pages/Home';
import Projekte from './pages/Projekte';
import Jobs from './pages/Jobs';
import Kontakt from './pages/Kontakt';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import LeistungenOverview from './pages/leistungen/LeistungenOverview';

// Garten
import GartenpflegePage from './pages/leistungen/GartenpflegePage';
import GartengestaltungPage from './pages/leistungen/GartengestaltungPage';
import HeckenschnittPage from './pages/leistungen/HeckenschnittPage';
import BewaesserungPage from './pages/leistungen/BewaesserungPage';
import AussenanlagenPage from './pages/leistungen/AussenanlagenPage';
import PflasterarbeitenPage from './pages/leistungen/PflasterarbeitenPage';
import ZaunarbeitenPage from './pages/leistungen/ZaunarbeitenPage';
import BaumschnittPage from './pages/leistungen/BaumschnittPage';
import TerrassenarbeitenPage from './pages/leistungen/TerrassenarbeitenPage';
import BepflanzungenPage from './pages/leistungen/BepflanzungenPage';
import RasenanlagenPage from './pages/leistungen/RasenanlagenPage';

// Facility
import FacilityManagementPage from './pages/leistungen/FacilityManagementPage';
import HausmeisterPage from './pages/leistungen/HausmeisterPage';
import GebaeudereinigungPage from './pages/leistungen/GebaeudereinigungPage';
import WinterdienstPage from './pages/leistungen/WinterdienstPage';
import GlasreinigungPage from './pages/leistungen/GlasreinigungPage';
import ObjektbetreuungPage from './pages/leistungen/ObjektbetreuungPage';
import EmpfangsdienstePage from './pages/leistungen/EmpfangsdienstePage';
import GruenpflegePage from './pages/leistungen/GruenpflegePage';
import GraupflegePage from './pages/leistungen/GraupflegePage';
import PoolreinigungPage from './pages/leistungen/PoolreinigungPage';
import PoolmessungPage from './pages/leistungen/PoolmessungPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'leistungen', Component: LeistungenOverview },

      // Garten-Leistungen
      { path: 'leistungen/gartenpflege', Component: GartenpflegePage },
      { path: 'leistungen/gartengestaltung', Component: GartengestaltungPage },
      { path: 'leistungen/heckenschnitt-baumschnitt', Component: HeckenschnittPage },
      { path: 'leistungen/bewaesserungsanlagen', Component: BewaesserungPage },
      { path: 'leistungen/aussenanlagen', Component: AussenanlagenPage },
      { path: 'leistungen/pflasterarbeiten', Component: PflasterarbeitenPage },
      { path: 'leistungen/zaunarbeiten', Component: ZaunarbeitenPage },
      { path: 'leistungen/baumschnitt', Component: BaumschnittPage },
      { path: 'leistungen/terrassenarbeiten', Component: TerrassenarbeitenPage },
      { path: 'leistungen/bepflanzungen', Component: BepflanzungenPage },
      { path: 'leistungen/rasenanlagen', Component: RasenanlagenPage },

      // Facility-Leistungen
      { path: 'leistungen/facility-management', Component: FacilityManagementPage },
      { path: 'leistungen/hausmeisterservice', Component: HausmeisterPage },
      { path: 'leistungen/gebaeudereinigung', Component: GebaeudereinigungPage },
      { path: 'leistungen/winterdienst', Component: WinterdienstPage },
      { path: 'leistungen/glasreinigung', Component: GlasreinigungPage },
      { path: 'leistungen/objektbetreuung', Component: ObjektbetreuungPage },
      { path: 'leistungen/empfangsdienste', Component: EmpfangsdienstePage },
      { path: 'leistungen/gruenpflege', Component: GruenpflegePage },
      { path: 'leistungen/graupflege', Component: GraupflegePage },
      { path: 'leistungen/poolreinigung', Component: PoolreinigungPage },
      { path: 'leistungen/poolmessung', Component: PoolmessungPage },

      // Rest
      { path: 'projekte', Component: Projekte },
      { path: 'jobs', Component: Jobs },
      { path: 'kontakt', Component: Kontakt },
      { path: 'datenschutz', Component: Datenschutz },
      { path: 'impressum', Component: Impressum },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/admin',
    Component: Admin,
  },
]);