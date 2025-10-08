import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioMoradiaData } from '../../data';

const AuxilioMoradiaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioMoradiaData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioMoradiaPage;

