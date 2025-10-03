import { useCampus } from '../../contexts/CampusContext';
import ConteudoIndisponivel from '../ConteudoIndisponivel';
import ContentPage from '../ContentPage';
import { trancamentoData } from '../../data';

const FormarPageTrancamento = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(trancamentoData) as any;
  
  if (!content) {
    return <ConteudoIndisponivel />;
  }

  return <ContentPage content={content} />;
};

export default FormarPageTrancamento;
