import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoFinancasData } from '../../../data';

const CoordenacaoFinancasPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoFinancasData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoFinancasPage;
