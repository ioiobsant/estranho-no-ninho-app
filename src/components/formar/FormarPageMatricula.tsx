import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { matriculaData } from '../../data';

const FormarPageMatricula = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(matriculaData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageMatricula;
