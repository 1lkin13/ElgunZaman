"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-white/10 backdrop-blur-md border-2 border-blue-700/60 text-white hover:bg-white/20 hover:border-blue-800 transition-all duration-300 rounded-full shadow-lg"
        >
          <Globe className="h-4 w-4 text-blue-800" />
          <span className="text-blue-800 font-medium">{availableLanguages[currentLanguage]}</span>
          <ChevronDown className="h-4 w-4 text-blue-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border border-blue-200/50 shadow-xl">
        {Object.entries(availableLanguages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as "az" | "en" | "ru")}
            className={`cursor-pointer text-gray-800 hover:bg-blue-50 ${
              currentLanguage === code ? "bg-blue-100 text-blue-900 font-semibold" : ""
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
