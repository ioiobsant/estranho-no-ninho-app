import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { taxiData } from '../../data';

const TaxiPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(taxiData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default TaxiPage;
