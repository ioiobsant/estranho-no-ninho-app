import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { engenhariaEletricaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';

const GradeEngenhariaEletricaPage = () => {
  const { campus } = useCampus();
  const grade = getGradeForCampus(engenhariaEletricaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeEngenhariaEletricaPage;
