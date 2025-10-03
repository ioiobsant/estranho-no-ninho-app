import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { bibliotecaMedicinaData } from '../../data';

const BibliotecaMedicinaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(bibliotecaMedicinaData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default BibliotecaMedicinaPage;
