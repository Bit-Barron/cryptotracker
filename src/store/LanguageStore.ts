import { create } from "zustand";

interface LanguageStore {
  languages: string[];
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

export const LanguageStore = create<LanguageStore>((set) => ({
  languages: ["English", "Deutsch", "Français", "Español"],
  currentLanguage: "English",
  setCurrentLanguage: (language) => set({ currentLanguage: language }),
}));
