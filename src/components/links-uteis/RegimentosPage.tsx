import { useCampus } from '../../contexts/CampusContext';
import LinksPage from '../LinksPage';
import { regimentosData } from '../../data';

const RegimentosPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(regimentosData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <LinksPage content={content} />;
};

export default RegimentosPage;
