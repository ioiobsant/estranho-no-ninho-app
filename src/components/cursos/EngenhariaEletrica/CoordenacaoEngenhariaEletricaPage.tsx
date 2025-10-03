import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoEngenhariaEletricaData } from '../../../data';

const CoordenacaoEngenhariaEletricaPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoEngenhariaEletricaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoEngenhariaEletricaPage;
