import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { carteiraEstudantilData } from '../../data';

const CarteiraEstudantilPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(carteiraEstudantilData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default CarteiraEstudantilPage;
