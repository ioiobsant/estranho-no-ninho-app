import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { CampusData } from '../types/contentData';
import { Campus, DEFAULT_CAMPUS, CampusHelpers, CampusConfig } from '../config/campusConfig';

interface CampusContextType {
  campus: Campus;
  setCampus: (campus: Campus) => void;
  
  /**
   * Helper para buscar automaticamente os dados do campus selecionado
   * @param data - Objeto com dados organizados por campus
   * @returns Os dados do campus atualmente selecionado ou null se não existir
   * 
   * @example
   * const { getCampusData } = useCampus();
   * const dados = getCampusData(assistenciaEstudantilData);
   */
  getCampusData: <T>(data: CampusData<T> | Partial<CampusData<T>>) => T | null;
  
  /**
   * Helper para verificar se um campus específico tem dados disponíveis
   * @param data - Objeto com dados organizados por campus
   * @param targetCampus - Campus a verificar (opcional, usa o campus atual se não fornecido)
   * @returns true se o campus tem dados disponíveis
   */
  hasCampusData: <T>(data: CampusData<T> | Partial<CampusData<T>>, targetCampus?: Campus) => boolean;
  
  /**
   * Nome formatado do campus atual (ex: "Sobral")
   */
  campusName: string;
  
  /**
   * Nome completo do campus atual (ex: "Campus Sobral")
   */
  campusFullName: string;
  
  /**
   * Configuração completa do campus atual
   */
  campusConfig: CampusConfig | undefined;
  
  /**
   * Lista de todos os campus disponíveis
   */
  availableCampus: CampusConfig[];
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

export const CampusProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [campus, setCampus] = useState<Campus>(DEFAULT_CAMPUS as Campus);

  // Helper para buscar dados do campus selecionado
  const getCampusData = useCallback(<T,>(data: CampusData<T> | Partial<CampusData<T>>): T | null => {
    return (data as any)[campus] || null;
  }, [campus]);

  // Helper para verificar se tem dados disponíveis
  const hasCampusData = useCallback(<T,>(
    data: CampusData<T> | Partial<CampusData<T>>, 
    targetCampus?: Campus
  ): boolean => {
    const checkCampus = targetCampus || campus;
    return !!(data as any)[checkCampus];
  }, [campus]);

  // Informações do campus atual (geradas dinamicamente)
  const campusConfig = CampusHelpers.getConfig(campus);
  const campusName = CampusHelpers.getDisplayName(campus);
  const campusFullName = CampusHelpers.getFullName(campus);
  const availableCampus = CampusHelpers.getAll();

  return (
    <CampusContext.Provider value={{ 
      campus, 
      setCampus, 
      getCampusData, 
      hasCampusData,
      campusName,
      campusFullName,
      campusConfig,
      availableCampus
    }}>
      {children}
    </CampusContext.Provider>
  );
};

export const useCampus = () => {
  const context = useContext(CampusContext);
  if (context === undefined) {
    throw new Error('useCampus must be used within a CampusProvider');
  }
  return context;
}; 