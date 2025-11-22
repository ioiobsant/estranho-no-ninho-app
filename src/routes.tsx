import { Routes, Route } from 'react-router-dom';
import HomePage from './components/main/HomePage';
import CoursesPage from './components/main/CoursesPage';
// Páginas de Cursos
import CienciasEconomicasPage from './components/cursos/CienciasEconomicas/CienciasEconomicasPage';
import EngenhariaComputacaoPage from './components/cursos/EngenhariaComputacao/EngenhariaComputacaoPage';
import EngenhariaEletricaPage from './components/cursos/EngenhariaEletrica/EngenhariaEletricaPage';
import FinancasPage from './components/cursos/Financas/FinancasPage';
import MedicinaPage from './components/cursos/Medicina/MedicinaPage';
import MusicaPage from './components/cursos/Musica/MusicaPage';
import OdontologiaPage from './components/cursos/Odontologia/OdontologiaPage';
import PsicologiaPage from './components/cursos/Psicologia/PsicologiaPage';

// Coordenação e Grade Curricular
import CoordenacaoCienciasEconomicasPage from './components/cursos/CienciasEconomicas/CoordenacaoCienciasEconomicasPage';
import GradeCienciasEconomicasPage from './components/cursos/CienciasEconomicas/GradeCienciasEconomicasPage';
import CoordenacaoEngenhariaComputacaoPage from './components/cursos/EngenhariaComputacao/CoordenacaoEngenhariaComputacaoPage';
import GradeEngenhariaComputacaoPage from './components/cursos/EngenhariaComputacao/GradeEngenhariaComputacaoPage';
import CoordenacaoEngenhariaEletricaPage from './components/cursos/EngenhariaEletrica/CoordenacaoEngenhariaEletricaPage';
import GradeEngenhariaEletricaPage from './components/cursos/EngenhariaEletrica/GradeEngenhariaEletricaPage';
import CoordenacaoFinancasPage from './components/cursos/Financas/CoordenacaoFinancasPage';
import GradeFinancasPage from './components/cursos/Financas/GradeFinancasPage';
import CoordenacaoMedicinaPage from './components/cursos/Medicina/CoordenacaoMedicinaPage';
import GradeMedicinaPage from './components/cursos/Medicina/GradeMedicinaPage';
import CoordenacaoMusicaPage from './components/cursos/Musica/CoordenacaoMusicaPage';
import GradeMusicaPage from './components/cursos/Musica/GradeMusicaPage';
import CoordenacaoOdontologiaPage from './components/cursos/Odontologia/CoordenacaoOdontologiaPage';
import GradeOdontologiaPage from './components/cursos/Odontologia/GradeOdontologiaPage';
import CoordenacaoPsicologiaPage from './components/cursos/Psicologia/CoordenacaoPsicologiaPage';
import GradePsicologiaPage from './components/cursos/Psicologia/GradePsicologiaPage';
import FormarPage from './components/main/FormarPage';
import FormarPageMatricula from './components/formar/FormarPageMatricula';
import FormarPageTrancamento from './components/formar/FormarPageTrancamento';
import FormarPageNotas from './components/formar/FormarPageNotas';
import FormarPageFaltas from './components/formar/FormarPageFaltas';
import FormarPageAtivComp from './components/formar/FormarPageAtivComp';
import FormarPageIra from './components/formar/FormarPageIra';
import AssistenciaPage from './components/main/AssistenciaPage';
import AcessibilidadePage from './components/assistencia/AcessibilidadePage';
import AssistenciaEstudantilPage from './components/assistencia/AssistenciaEstudantilPage';
import AssistenciaPsicologicaPage from './components/assistencia/AssistenciaPsicologicaPage';
import CarteirinhasPage from './components/main/CarteirinhasPage';
import CarteiraEstudantilPage from './components/carteirinhas/CarteiraEstudantilPage';
import CarteiraRuPage from './components/carteirinhas/CarteiraRuPage';
import IdJovemPage from './components/carteirinhas/IdJovemPage';
import BolsasPage from './components/main/BolsasPage';
import BolsasIniciacaoCientificaPage from './components/bolsas/BolsasIniciacaoCientificaPage';
import AuxiliosPage from './components/bolsas/AuxiliosPage';
import AuxilioMoradiaPage from './components/bolsas/AuxilioMoradiaPage';
import AuxilioEmergencialPage from './components/bolsas/AuxilioEmergencialPage';
import AuxilioCustosPage from './components/bolsas/AuxilioCustosPage';
import AuxilioCrechePage from './components/bolsas/AuxilioCrechePage';
import AuxilioIngressantePage from './components/bolsas/AuxilioIngressantePage';
import AuxilioConcluentePage from './components/bolsas/AuxilioConcluentePage';
import PidPage from './components/bolsas/PidPage';
import BolsasExtensaoPage from './components/bolsas/BolsasExtensaoPage';
import PaipPage from './components/bolsas/PaipPage';
import PibicPage from './components/bolsas/PibicPage';
import InternacionalizacaoPage from './components/bolsas/InternacionalizacaoPage';
import EditaisBolsasPage from './components/bolsas/EditaisBolsasPage';
import UfcPage from './components/main/UfcPage';
import DirecaoPage from './components/ufc/DirecaoPage';
import EnsinoPage from './components/ufc/EnsinoPage';
import PesquisaPage from './components/ufc/PesquisaPage';
import ExtensaoPage from './components/ufc/ExtensaoPage';
import MapaPage from './components/main/MapaPage';
import BibliotecasPage from './components/main/BibliotecasPage';
import BibliotecaUfcPage from './components/bibliotecas/BibliotecaUfcPage';
import BibliotecaMedicinaPage from './components/bibliotecas/BibliotecaMedicinaPage';
import TransportesPage from './components/main/TransportesPage';
import VltPage from './components/transportes/VltPage';
import PasseLivrePage from './components/transportes/PasseLivrePage';
import OnibusIntracampusPage from './components/transportes/OnibusIntracampusPage';
import PasseLivreSobralPage from './components/transportes/PasseLivreSobralPage';
import TaxiPage from './components/transportes/TaxiPage';
import LinksUteisPage from './components/main/LinksUteisPage';
import CompartilharPage from './components/main/CompartilharPage';
import RegimentosPage from './components/links-uteis/RegimentosPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/cursos/ciencias-economicas" element={<CienciasEconomicasPage />} />
      <Route path="/cursos/ciencias-economicas/coordenacao" element={<CoordenacaoCienciasEconomicasPage />} />
      <Route path="/cursos/ciencias-economicas/grade" element={<GradeCienciasEconomicasPage />} />
      <Route path="/cursos/engenharia-computacao" element={<EngenhariaComputacaoPage />} />
      <Route path="/cursos/engenharia-computacao/coordenacao" element={<CoordenacaoEngenhariaComputacaoPage />} />
      <Route path="/cursos/engenharia-computacao/grade" element={<GradeEngenhariaComputacaoPage />} />
      <Route path="/cursos/engenharia-eletrica" element={<EngenhariaEletricaPage />} />
      <Route path="/cursos/engenharia-eletrica/coordenacao" element={<CoordenacaoEngenhariaEletricaPage />} />
      <Route path="/cursos/engenharia-eletrica/grade" element={<GradeEngenhariaEletricaPage />} />
      <Route path="/cursos/financas" element={<FinancasPage />} />
      <Route path="/cursos/financas/coordenacao" element={<CoordenacaoFinancasPage />} />
      <Route path="/cursos/financas/grade" element={<GradeFinancasPage />} />
      <Route path="/cursos/medicina" element={<MedicinaPage />} />
      <Route path="/cursos/medicina/coordenacao" element={<CoordenacaoMedicinaPage />} />
      <Route path="/cursos/medicina/grade" element={<GradeMedicinaPage />} />
      <Route path="/cursos/musica" element={<MusicaPage />} />
      <Route path="/cursos/musica/coordenacao" element={<CoordenacaoMusicaPage />} />
      <Route path="/cursos/musica/grade" element={<GradeMusicaPage />} />
      <Route path="/cursos/odontologia" element={<OdontologiaPage />} />
      <Route path="/cursos/odontologia/coordenacao" element={<CoordenacaoOdontologiaPage />} />
      <Route path="/cursos/odontologia/grade" element={<GradeOdontologiaPage />} />
      <Route path="/cursos/psicologia" element={<PsicologiaPage />} />
      <Route path="/cursos/psicologia/coordenacao" element={<CoordenacaoPsicologiaPage />} />
      <Route path="/cursos/psicologia/grade" element={<GradePsicologiaPage />} />
      <Route path="/formar" element={<FormarPage />} />
      <Route path="/formar/ira" element={<FormarPageIra />} />
      <Route path="/formar/matricula" element={<FormarPageMatricula />} />
      <Route path="/formar/trancamentos" element={<FormarPageTrancamento />} />
      <Route path="/formar/notas" element={<FormarPageNotas />} />
      <Route path="/formar/faltas" element={<FormarPageFaltas />} />
      <Route path="/formar/atividades-complementares" element={<FormarPageAtivComp />} />
      <Route path="/assistencia" element={<AssistenciaPage />} />
      <Route path="/assistencia/acessibilidade" element={<AcessibilidadePage />} />
      <Route path="/assistencia/estudantil" element={<AssistenciaEstudantilPage />} />
      <Route path="/assistencia/psicologica" element={<AssistenciaPsicologicaPage />} />
      <Route path="/carteirinhas" element={<CarteirinhasPage />} />
      <Route path="/carteirinhas/estudantil" element={<CarteiraEstudantilPage />} />
      <Route path="/carteirinhas/ru" element={<CarteiraRuPage />} />
      <Route path="/carteirinhas/id-jovem" element={<IdJovemPage />} />
      <Route path="/bolsas" element={<BolsasPage />} />
      <Route path="/bolsas/iniciacao-cientifica" element={<BolsasIniciacaoCientificaPage />} />
      <Route path="/bolsas/auxilios" element={<AuxiliosPage />} />
      <Route path="/bolsas/auxilios/moradia" element={<AuxilioMoradiaPage />} />
      <Route path="/bolsas/auxilios/emergencial" element={<AuxilioEmergencialPage />} />
      <Route path="/bolsas/auxilios/custos" element={<AuxilioCustosPage />} />
      <Route path="/bolsas/auxilios/creche" element={<AuxilioCrechePage />} />
      <Route path="/bolsas/auxilios/ingressante" element={<AuxilioIngressantePage />} />
      <Route path="/bolsas/auxilios/concludente" element={<AuxilioConcluentePage />} />
      <Route path="/bolsas/pid" element={<PidPage />} />
      <Route path="/bolsas/extensao" element={<BolsasExtensaoPage />} />
      <Route path="/bolsas/paip" element={<PaipPage />} />
      <Route path="/bolsas/pibic" element={<PibicPage />} />
      <Route path="/bolsas/internacionalizacao" element={<InternacionalizacaoPage />} />
      <Route path="/bolsas/editais" element={<EditaisBolsasPage />} />
      <Route path="/ufc" element={<UfcPage />} />
      <Route path="/ufc/direcao" element={<DirecaoPage />} />
      <Route path="/ufc/ensino" element={<EnsinoPage />} />
      <Route path="/ufc/pesquisa" element={<PesquisaPage />} />
      <Route path="/ufc/extensao" element={<ExtensaoPage />} />
      <Route path="/mapa" element={<MapaPage />} />
      <Route path="/bibliotecas" element={<BibliotecasPage />} />
      <Route path="/bibliotecas/ufc" element={<BibliotecaUfcPage />} />
      <Route path="/bibliotecas/medicina" element={<BibliotecaMedicinaPage />} />
      <Route path="/transportes" element={<TransportesPage />} />
      <Route path="/transportes/vlt" element={<VltPage />} />
      <Route path="/transportes/passe-livre" element={<PasseLivrePage />} />
      <Route path="/transportes/onibus-intracampus" element={<OnibusIntracampusPage />} />
      <Route path="/transportes/passe-livre-sobral" element={<PasseLivreSobralPage />} />
      <Route path="/transportes/taxi" element={<TaxiPage />} />
      <Route path="/links-uteis" element={<LinksUteisPage />} />
      <Route path="/compartilhar" element={<CompartilharPage />} />
      <Route path="/regimentos" element={<RegimentosPage />} />
    </Routes>
  );
};

export default AppRoutes; 