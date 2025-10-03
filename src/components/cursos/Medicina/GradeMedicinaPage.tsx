import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { medicinaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeMedicinaPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(medicinaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeMedicinaPage;
