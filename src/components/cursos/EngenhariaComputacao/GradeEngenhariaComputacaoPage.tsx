import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { engenhariaComputacaoGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeEngenhariaComputacaoPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(engenhariaComputacaoGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeEngenhariaComputacaoPage;
