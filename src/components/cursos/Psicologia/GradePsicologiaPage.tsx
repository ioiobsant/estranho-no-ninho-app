import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { psicologiaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradePsicologiaPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(psicologiaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradePsicologiaPage;
