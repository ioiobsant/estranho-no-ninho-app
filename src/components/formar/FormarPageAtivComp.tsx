import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { atividadesComplementaresData } from '../../data';

const FormarPageAtivComp = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(atividadesComplementaresData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageAtivComp;
