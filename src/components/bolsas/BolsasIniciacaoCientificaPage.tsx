import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { bolsasIniciacaoCientificaData } from '../../data';

const BolsasIniciacaoCientificaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(bolsasIniciacaoCientificaData) as any;
  
  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default BolsasIniciacaoCientificaPage;
