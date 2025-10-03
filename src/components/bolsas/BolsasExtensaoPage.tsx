import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { bolsasExtensaoData } from '../../data';

const BolsasExtensaoPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(bolsasExtensaoData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default BolsasExtensaoPage;
