import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoOdontologiaData } from '../../../data';

const CoordenacaoOdontologiaPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoOdontologiaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoOdontologiaPage;
