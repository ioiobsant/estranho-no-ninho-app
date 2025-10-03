import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoMedicinaData } from '../../../data';

const CoordenacaoMedicinaPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoMedicinaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoMedicinaPage;
