import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { paipData } from '../../data';

const PaipPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(paipData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default PaipPage;
