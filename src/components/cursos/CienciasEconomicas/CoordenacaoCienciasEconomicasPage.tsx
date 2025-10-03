import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoCienciasEconomicasData } from '../../../data';

const CoordenacaoCienciasEconomicasPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoCienciasEconomicasData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoCienciasEconomicasPage;
