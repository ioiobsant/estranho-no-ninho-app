import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { engenhariaEletricaGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeEngenhariaEletricaPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/engenharia-eletrica', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Engenharia Elétrica"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(engenhariaEletricaGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeEngenhariaEletricaPage;
