import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoMusicaData } from '../../../data';

const CoordenacaoMusicaPage = () => {
  const { getCampusData } = useCampus();
  const coordenacao = getCampusData(coordenacaoMusicaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoMusicaPage;
