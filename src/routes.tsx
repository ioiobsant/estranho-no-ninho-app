import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import FormarPage from './components/FormarPage';
import AssistenciaPage from './components/AssistenciaPage';
import CarteirinhasPage from './components/CarteirinhasPage';
import BolsasPage from './components/BolsasPage';
import UfcPage from './components/UfcPage';
import MapaPage from './components/MapaPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/formar" element={<FormarPage />} />
      <Route path="/assistencia" element={<AssistenciaPage />} />
      <Route path="/carteirinhas" element={<CarteirinhasPage />} />
      <Route path="/bolsas" element={<BolsasPage />} />
      <Route path="/ufc" element={<UfcPage />} />
      <Route path="/mapa" element={<MapaPage />} />
    </Routes>
  );
};

export default AppRoutes; 