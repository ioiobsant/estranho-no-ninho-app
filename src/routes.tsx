import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./components/main/HomePage'));
const CoursesPage = lazy(() => import('./components/main/CoursesPage'));
// Páginas de Cursos
const CienciasEconomicasPage = lazy(() => import('./components/cursos/CienciasEconomicas/CienciasEconomicasPage'));
const EngenhariaComputacaoPage = lazy(() => import('./components/cursos/EngenhariaComputacao/EngenhariaComputacaoPage'));
const EngenhariaEletricaPage = lazy(() => import('./components/cursos/EngenhariaEletrica/EngenhariaEletricaPage'));
const FinancasPage = lazy(() => import('./components/cursos/Financas/FinancasPage'));
const MedicinaPage = lazy(() => import('./components/cursos/Medicina/MedicinaPage'));
const MusicaPage = lazy(() => import('./components/cursos/Musica/MusicaPage'));
const OdontologiaPage = lazy(() => import('./components/cursos/Odontologia/OdontologiaPage'));
const PsicologiaPage = lazy(() => import('./components/cursos/Psicologia/PsicologiaPage'));

// Coordenação e Grade Curricular
const CoordenacaoCienciasEconomicasPage = lazy(() => import('./components/cursos/CienciasEconomicas/CoordenacaoCienciasEconomicasPage'));
const GradeCienciasEconomicasPage = lazy(() => import('./components/cursos/CienciasEconomicas/GradeCienciasEconomicasPage'));
const CoordenacaoEngenhariaComputacaoPage = lazy(() => import('./components/cursos/EngenhariaComputacao/CoordenacaoEngenhariaComputacaoPage'));
const GradeEngenhariaComputacaoPage = lazy(() => import('./components/cursos/EngenhariaComputacao/GradeEngenhariaComputacaoPage'));
const CoordenacaoEngenhariaEletricaPage = lazy(() => import('./components/cursos/EngenhariaEletrica/CoordenacaoEngenhariaEletricaPage'));
const GradeEngenhariaEletricaPage = lazy(() => import('./components/cursos/EngenhariaEletrica/GradeEngenhariaEletricaPage'));
const CoordenacaoFinancasPage = lazy(() => import('./components/cursos/Financas/CoordenacaoFinancasPage'));
const GradeFinancasPage = lazy(() => import('./components/cursos/Financas/GradeFinancasPage'));
const CoordenacaoMedicinaPage = lazy(() => import('./components/cursos/Medicina/CoordenacaoMedicinaPage'));
const GradeMedicinaPage = lazy(() => import('./components/cursos/Medicina/GradeMedicinaPage'));
const CoordenacaoMusicaPage = lazy(() => import('./components/cursos/Musica/CoordenacaoMusicaPage'));
const GradeMusicaPage = lazy(() => import('./components/cursos/Musica/GradeMusicaPage'));
const CoordenacaoOdontologiaPage = lazy(() => import('./components/cursos/Odontologia/CoordenacaoOdontologiaPage'));
const GradeOdontologiaPage = lazy(() => import('./components/cursos/Odontologia/GradeOdontologiaPage'));
const CoordenacaoPsicologiaPage = lazy(() => import('./components/cursos/Psicologia/CoordenacaoPsicologiaPage'));
const GradePsicologiaPage = lazy(() => import('./components/cursos/Psicologia/GradePsicologiaPage'));
const FormarPage = lazy(() => import('./components/main/FormarPage'));
const FormarPageMatricula = lazy(() => import('./components/formar/FormarPageMatricula'));
const FormarPageTrancamento = lazy(() => import('./components/formar/FormarPageTrancamento'));
const FormarPageNotas = lazy(() => import('./components/formar/FormarPageNotas'));
const FormarPageFaltas = lazy(() => import('./components/formar/FormarPageFaltas'));
const FormarPageAtivComp = lazy(() => import('./components/formar/FormarPageAtivComp'));
const FormarPageIra = lazy(() => import('./components/formar/FormarPageIra'));
const AssistenciaPage = lazy(() => import('./components/main/AssistenciaPage'));
const AcessibilidadePage = lazy(() => import('./components/assistencia/AcessibilidadePage'));
const AssistenciaEstudantilPage = lazy(() => import('./components/assistencia/AssistenciaEstudantilPage'));
const AssistenciaPsicologicaPage = lazy(() => import('./components/assistencia/AssistenciaPsicologicaPage'));
const CarteirinhasPage = lazy(() => import('./components/main/CarteirinhasPage'));
const CarteiraEstudantilPage = lazy(() => import('./components/carteirinhas/CarteiraEstudantilPage'));
const CarteiraRuPage = lazy(() => import('./components/carteirinhas/CarteiraRuPage'));
const IdJovemPage = lazy(() => import('./components/carteirinhas/IdJovemPage'));
const BolsasPage = lazy(() => import('./components/main/BolsasPage'));
const BolsasIniciacaoCientificaPage = lazy(() => import('./components/bolsas/BolsasIniciacaoCientificaPage'));
const AuxiliosPage = lazy(() => import('./components/bolsas/AuxiliosPage'));
const AuxilioMoradiaPage = lazy(() => import('./components/bolsas/AuxilioMoradiaPage'));
const AuxilioEmergencialPage = lazy(() => import('./components/bolsas/AuxilioEmergencialPage'));
const AuxilioCustosPage = lazy(() => import('./components/bolsas/AuxilioCustosPage'));
const AuxilioCrechePage = lazy(() => import('./components/bolsas/AuxilioCrechePage'));
const AuxilioIngressantePage = lazy(() => import('./components/bolsas/AuxilioIngressantePage'));
const AuxilioConcluentePage = lazy(() => import('./components/bolsas/AuxilioConcluentePage'));
const PidPage = lazy(() => import('./components/bolsas/PidPage'));
const BolsasExtensaoPage = lazy(() => import('./components/bolsas/BolsasExtensaoPage'));
const PaipPage = lazy(() => import('./components/bolsas/PaipPage'));
const PibicPage = lazy(() => import('./components/bolsas/PibicPage'));
const InternacionalizacaoPage = lazy(() => import('./components/bolsas/InternacionalizacaoPage'));
const EditaisBolsasPage = lazy(() => import('./components/bolsas/EditaisBolsasPage'));
const UfcPage = lazy(() => import('./components/main/UfcPage'));
const DirecaoPage = lazy(() => import('./components/ufc/DirecaoPage'));
const EnsinoPage = lazy(() => import('./components/ufc/EnsinoPage'));
const PesquisaPage = lazy(() => import('./components/ufc/PesquisaPage'));
const ExtensaoPage = lazy(() => import('./components/ufc/ExtensaoPage'));
const MapaPage = lazy(() => import('./components/main/MapaPage'));
const BibliotecasPage = lazy(() => import('./components/main/BibliotecasPage'));
const BibliotecaUfcPage = lazy(() => import('./components/bibliotecas/BibliotecaUfcPage'));
const BibliotecaMedicinaPage = lazy(() => import('./components/bibliotecas/BibliotecaMedicinaPage'));
const TransportesPage = lazy(() => import('./components/main/TransportesPage'));
const VltPage = lazy(() => import('./components/transportes/VltPage'));
const PasseLivrePage = lazy(() => import('./components/transportes/PasseLivrePage'));
const OnibusIntracampusPage = lazy(() => import('./components/transportes/OnibusIntracampusPage'));
const PasseLivreSobralPage = lazy(() => import('./components/transportes/PasseLivreSobralPage'));
const TaxiPage = lazy(() => import('./components/transportes/TaxiPage'));
const LinksUteisPage = lazy(() => import('./components/main/LinksUteisPage'));
const CompartilharPage = lazy(() => import('./components/main/CompartilharPage'));
const RegimentosPage = lazy(() => import('./components/links-uteis/RegimentosPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div aria-busy="true" aria-label="Carregando..." />}>
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
    </Suspense>
  );
};

export default AppRoutes; 