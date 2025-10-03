import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoEngenhariaComputacaoData } from '../../../data';

const CoordenacaoEngenhariaComputacaoPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoEngenhariaComputacaoData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoEngenhariaComputacaoPage;
