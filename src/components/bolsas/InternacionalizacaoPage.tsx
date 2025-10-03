import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { internacionalizacaoData } from '../../data';

const InternacionalizacaoPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(internacionalizacaoData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default InternacionalizacaoPage;
