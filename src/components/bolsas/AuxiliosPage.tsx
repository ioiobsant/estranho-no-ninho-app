import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxiliosData } from '../../data';

const AuxiliosPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxiliosData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default AuxiliosPage;
