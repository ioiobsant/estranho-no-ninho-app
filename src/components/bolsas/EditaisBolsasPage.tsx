import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { editaisBolsasData } from '../../data';

const EditaisBolsasPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(editaisBolsasData) as any;

    
  // Sempre renderiza o ContentPage, que já trata conteúdo vazio
return <ContentPage content={content} />;
};

export default EditaisBolsasPage;
