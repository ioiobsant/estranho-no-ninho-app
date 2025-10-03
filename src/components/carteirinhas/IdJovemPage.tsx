import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { idJovemData } from '../../data';

const IdJovemPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(idJovemData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default IdJovemPage;
