import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { rssData } from '../../data';

const RssPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(rssData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default RssPage;
