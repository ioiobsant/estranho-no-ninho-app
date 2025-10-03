import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { passeLivreSobralData } from '../../data';

const PasseLivreSobralPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(passeLivreSobralData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default PasseLivreSobralPage;
