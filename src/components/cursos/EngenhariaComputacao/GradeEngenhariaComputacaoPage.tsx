import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { engenhariaComputacaoGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeEngenhariaComputacaoPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/engenharia-computacao', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Engenharia da Computação"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(engenhariaComputacaoGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeEngenhariaComputacaoPage;
