import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { bibliotecaUfcData } from '../../data';

const BibliotecaUfcPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(bibliotecaUfcData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default BibliotecaUfcPage;
