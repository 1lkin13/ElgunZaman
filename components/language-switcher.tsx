"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  isScrolled?: boolean
}

// motion yetenekleriyle genişletilmiş bir Button bileşeni oluştur
const MotionButton = motion(Button)
const MotionDropdownMenuItem = motion(DropdownMenuItem)

export function LanguageSwitcher({ isScrolled = false }: Props) {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()

  const labels: Record<string, string> = { az: "Az", en: "Eng", ru: "Rus" }

  const tones = isScrolled
    ? { // Scroll durumunda daha koyu yeşil tonlar
        border: "border-emerald-500/40",
        text: "text-emerald-700",
        icon: "text-emerald-600",
        hoverBorder: "hover:border-emerald-600",
        hoverBg: "hover:bg-emerald-50",
      }
    : { // Normal durumda daha açık yeşil tonlar
        border: "border-emerald-300/60",
        text: "text-emerald-200",
        icon: "text-emerald-300",
        hoverBorder: "hover:border-emerald-400",
        hoverBg: "hover:bg-white/10",
      }

  return (
    <div data-language-dropdown="true">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MotionButton
            data-language-dropdown
            variant="outline"
            size="sm"
            className={`gap-1 h-7 px-2 backdrop-blur-md border border-white/20 transition-all duration-300 rounded-full shadow-lg text-xs ${
              isScrolled ? "bg-white/60" : "bg-white/10"
            } ${tones.border} ${tones.hoverBorder} ${tones.hoverBg}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className={`h-4 w-4 ${tones.icon}`} />
            <span className={`${tones.text} font-medium`}>{labels[currentLanguage]}</span>
            <ChevronDown className={`h-4 w-4 ${tones.icon}`} />
          </MotionButton>
        </DropdownMenuTrigger>
        {/* DropdownMenu.Portal kaldırıldı çünkü DropdownMenuContent kendi içinde portalı yönetiyor */}
        <DropdownMenuContent
          data-language-dropdown
          align="end"
          style={{ zIndex: 150 }}
          sideOffset={8} // Açılır menü içeriğinin tetikleyiciye olan uzaklığını ayarlar
          className={`bg-white/95 backdrop-blur-sm  border shadow-xl border-emerald-200/60 w-max`} // p-1 kaldırıldı
        >
          {(Object.keys(availableLanguages) as Array<keyof typeof availableLanguages>).map((code) => (
            <MotionDropdownMenuItem
              key={code}
              data-language-dropdown
              onClick={() => setLanguage(code as "az" | "en" | "ru")}
              className={`cursor-pointer text-gray-800 hover:bg-emerald-50 ${currentLanguage === code ? "font-semibold" : ""}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm">{availableLanguages[code]}</span>
            </MotionDropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
