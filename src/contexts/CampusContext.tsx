import React, { createContext, useContext, useState, ReactNode } from 'react';

type Campus = 'sobral' | 'russas';

interface CampusContextType {
  campus: Campus;
  setCampus: (campus: Campus) => void;
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

export const CampusProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [campus, setCampus] = useState<Campus>('sobral');

  return (
    <CampusContext.Provider value={{ campus, setCampus }}>
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