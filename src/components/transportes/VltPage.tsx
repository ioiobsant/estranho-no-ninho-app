import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { vltData } from '../../data';

const VltPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(vltData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default VltPage;
