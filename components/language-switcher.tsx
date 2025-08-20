"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"

type Props = {
  isScrolled?: boolean
}

const languageTheme = {
  az: {
    light: {
      border: "border-emerald-300/50",
      text: "text-emerald-200",
      icon: "text-emerald-300",
      hoverBorder: "hover:border-emerald-400",
      hoverBg: "hover:bg-white/20",
    },
    dark: {
      border: "border-blue-700/60",
      text: "text-blue-800",
      icon: "text-blue-700",
      hoverBorder: "hover:border-blue-800",
      hoverBg: "hover:bg-primary/10",
    },
  },
  en: {
    light: {
      border: "border-blue-300/50",
      text: "text-blue-200",
      icon: "text-blue-300",
      hoverBorder: "hover:border-blue-400",
      hoverBg: "hover:bg-white/20",
    },
    dark: {
      border: "border-blue-700/60",
      text: "text-blue-800",
      icon: "text-blue-700",
      hoverBorder: "hover:border-blue-800",
      hoverBg: "hover:bg-primary/10",
    },
  },
  ru: {
    light: {
      border: "border-rose-300/50",
      text: "text-rose-200",
      icon: "text-rose-300",
      hoverBorder: "hover:border-rose-400",
      hoverBg: "hover:bg-white/20",
    },
    dark: {
      border: "border-rose-700/60",
      text: "text-rose-800",
      icon: "text-rose-700",
      hoverBorder: "hover:border-rose-800",
      hoverBg: "hover:bg-primary/10",
    },
  },
} as const

export function LanguageSwitcher({ isScrolled = false }: Props) {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()
  const tones = languageTheme[currentLanguage][isScrolled ? "dark" : "light"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`gap-2 backdrop-blur-md border-2 transition-all duration-300 rounded-full shadow-lg ${
            isScrolled ? "bg-transparent" : "bg-white/10"
          } ${tones.border} ${tones.hoverBorder} ${tones.hoverBg}`}
        >
          <Globe className={`h-4 w-4 ${tones.icon}`} />
          <span className={`${tones.text} font-medium`}>{availableLanguages[currentLanguage]}</span>
          <ChevronDown className={`h-4 w-4 ${tones.icon}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`bg-white/95 backdrop-blur-sm border shadow-xl ${
          currentLanguage === "az"
            ? "border-emerald-200/50"
            : currentLanguage === "ru"
              ? "border-rose-200/50"
              : "border-blue-200/50"
        }`}
      >
        {Object.entries(availableLanguages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as "az" | "en" | "ru")}
            className={`cursor-pointer text-gray-800 ${
              code === "az"
                ? "hover:bg-emerald-50"
                : code === "ru"
                  ? "hover:bg-rose-50"
                  : "hover:bg-blue-50"
            } ${currentLanguage === code ? "font-semibold" : ""}`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
