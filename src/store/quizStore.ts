import { create } from "zustand";

type DifficultyLevel = 'beginner' | 'intermediate' | 'hard';

interface Question {
  question: string;
  possibleSolutions: string[];
  rightAnswer: string;
  level: DifficultyLevel;
}

type QuizStore = {
  data: Question[];
  answers: (string | number | null)[];
  setQuizData: (q: any[], a: (string | number | null)[]) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  data: [],
  answers: [],
  setQuizData: (q, a) => set({ data: q, answers: a }),
}));
