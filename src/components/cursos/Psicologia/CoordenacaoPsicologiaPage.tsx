import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoPsicologiaData } from '../../../data';

const CoordenacaoPsicologiaPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoPsicologiaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoPsicologiaPage;
