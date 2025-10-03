import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { carteiraRuData } from '../../data';

const CarteiraRuPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(carteiraRuData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default CarteiraRuPage;
