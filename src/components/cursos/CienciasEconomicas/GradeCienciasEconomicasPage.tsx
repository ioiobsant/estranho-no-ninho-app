import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { cienciasEconomicasGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeCienciasEconomicasPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(cienciasEconomicasGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeCienciasEconomicasPage;

