import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: navigator.language,
      changeLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: "language-storage",
      getStorage: () => localStorage,
    }
  )
);
