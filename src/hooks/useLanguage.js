import { useLanguageStore } from "../store/LanguageStore/LanguageStore";

export const useLanguage = () => {
  const { language, changeLanguage } = useLanguageStore();
  return { language, changeLanguage };
};
