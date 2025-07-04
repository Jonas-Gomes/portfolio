import { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: "pt",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
