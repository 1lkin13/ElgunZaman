"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { portfolioData, languages } from "@/lib/data"

type Language = "az" | "en" | "ru"

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: typeof portfolioData.az
  availableLanguages: typeof languages
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("az")

  useEffect(() => {
    // Get saved language from localStorage or default to 'az'
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["az", "en", "ru"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    currentLanguage,
    setLanguage,
    t: portfolioData[currentLanguage],
    availableLanguages: languages,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
