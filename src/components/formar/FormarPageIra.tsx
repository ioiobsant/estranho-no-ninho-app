import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { iraData } from '../../data';

const FormarPageIra = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(iraData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageIra;
