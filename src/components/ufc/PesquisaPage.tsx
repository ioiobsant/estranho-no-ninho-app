import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { pesquisaData } from '../../data';

const PesquisaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(pesquisaData) as any;

  return <ContentPage content={content} />;
};

export default PesquisaPage;

