import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { odontologiaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeOdontologiaPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/odontologia', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Odontologia"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(odontologiaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeOdontologiaPage;
