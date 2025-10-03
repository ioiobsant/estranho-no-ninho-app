import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { onibusIntracampusData } from '../../data';

const OnibusIntracampusPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(onibusIntracampusData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default OnibusIntracampusPage;
