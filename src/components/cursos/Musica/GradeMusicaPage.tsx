import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { musicaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeMusicaPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(musicaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeMusicaPage;
