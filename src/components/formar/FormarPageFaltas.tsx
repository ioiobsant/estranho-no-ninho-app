import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { faltasData } from '../../data';

const FormarPageFaltas = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(faltasData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageFaltas;
