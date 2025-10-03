import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { acessibilidadeData } from '../../data';

const AcessibilidadePage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(acessibilidadeData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default AcessibilidadePage;
