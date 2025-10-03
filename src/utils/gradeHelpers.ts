import { Campus } from '../types/contentData';
import { GradePorCampus, GradeCurricular } from '../types/gradeTypes';

/**
 * Obtém a grade curricular para um campus específico
 */
export function getGradeForCampus(
  gradeData: GradePorCampus, 
  campus: Campus
): GradeCurricular | null {
  return gradeData[campus] || null;
}

/**
 * Verifica se existe grade disponível para o campus
 */
export function hasGradeForCampus(
  gradeData: GradePorCampus, 
  campus: Campus
): boolean {
  return !!gradeData[campus];
}
