import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { passeLivreData } from '../../data';

const PasseLivrePage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(passeLivreData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default PasseLivrePage;
