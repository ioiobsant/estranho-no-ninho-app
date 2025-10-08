import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioIngressanteData } from '../../data';

const AuxilioIngressantePage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioIngressanteData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioIngressantePage;

