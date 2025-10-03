import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { odontologiaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeOdontologiaPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(odontologiaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeOdontologiaPage;
