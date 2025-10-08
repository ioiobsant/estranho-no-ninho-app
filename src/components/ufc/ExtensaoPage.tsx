import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { extensaoData } from '../../data';

const ExtensaoPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(extensaoData) as any;

  return <ContentPage content={content} />;
};

export default ExtensaoPage;

