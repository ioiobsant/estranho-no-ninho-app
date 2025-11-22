import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { financasGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeFinancasPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/financas', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Finanças"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(financasGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeFinancasPage;
