// Tipos para Grades Curriculares

import { Campus } from './contentData';

export interface Disciplina {
  materia: string;
  horas: string;
  creditos: string;
}

export interface Semestre {
  nome: string;
  disciplinas: Disciplina[];
}

export interface GradeCurricular {
  titulo: string;
  subtitulo: string;
  semestres: Semestre[];
  emConstrucao?: boolean; // Para cursos sem grade definida ainda
}

export type CampusDataGrade<T> = {
  [K in Campus]?: T;
};

export type GradePorCampus = CampusDataGrade<GradeCurricular>;
