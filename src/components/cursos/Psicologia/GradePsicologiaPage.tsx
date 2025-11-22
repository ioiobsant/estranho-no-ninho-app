import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { psicologiaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradePsicologiaPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/psicologia', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Psicologia"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(psicologiaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradePsicologiaPage;
