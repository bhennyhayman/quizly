import { create } from "zustand";

type QuizStore = {
  data: any[];
  answers: (string | number | null)[];
  setQuizData: (q: any[], a: (string | number | null)[]) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  data: [],
  answers: [],
  setQuizData: (q, a) => set({ data: q, answers: a }),
}));
