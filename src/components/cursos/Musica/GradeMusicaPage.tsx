import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { musicaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeMusicaPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/musica', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Música"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(musicaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeMusicaPage;
