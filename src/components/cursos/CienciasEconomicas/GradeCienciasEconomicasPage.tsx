import { useCampus } from '../../../contexts/CampusContext';
import GradePage from '../../GradePage';
import { cienciasEconomicasGrade } from '../../../data/cursos/grades';
import { getGradeForCampus } from '../../../utils/gradeHelpers';
import { isCourseAvailableInCampus } from '../../../data';

const GradeCienciasEconomicasPage = () => {
  const { campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/ciencias-economicas', campus);
  
  if (!isAvailable) {
    return (
      <GradePage 
        grade={null}
        courseName="Ciências Econômicas"
        campusName={campusName}
      />
    );
  }
  
  const grade = getGradeForCampus(cienciasEconomicasGrade, campus);
  
  return <GradePage grade={grade} />;
};

export default GradeCienciasEconomicasPage;

