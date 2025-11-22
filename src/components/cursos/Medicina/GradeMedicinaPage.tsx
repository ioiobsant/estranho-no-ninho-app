import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { medicinaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeMedicinaPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/medicina', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Medicina"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(medicinaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeMedicinaPage;
