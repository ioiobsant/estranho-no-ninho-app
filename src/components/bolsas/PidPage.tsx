import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { pidData } from '../../data';

const PidPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(pidData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default PidPage;
