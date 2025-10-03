import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { financasGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeFinancasPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(financasGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeFinancasPage;
