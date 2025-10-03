import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { notasData } from '../../data';

const FormarPageNotas = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(notasData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageNotas;
