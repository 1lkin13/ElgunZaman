"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "./language-switcher"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function DesktopNavigation() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const navItems = [
    { id: "gallery", label: t.nav.gallery },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - (sectionId === "hero" ? 0 : 80)
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sections = ["hero", "gallery", "testimonials", "about", "contact"]
      const windowHeight = window.innerHeight
      const scrollWithOffset = scrollPosition + windowHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollWithOffset >= offsetTop && scrollWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.nav
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:flex ${
          isScrolled ? "bg-black/95 backdrop-blur-xl border-b border-gray-800 shadow-xl py-2" : "bg-transparent py-4"
        }`}
    >
      {isMounted && (
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between w-full">
            {/* Sol taraf: Logo */}
            <motion.div
              className="font-serif font-light cursor-pointer transition-all duration-500 text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.title}
            </motion.div>

            {/* Orta taraf: Navigation Items */}
            <div className="hidden md:flex items-center space-x-6 mx-auto">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-sans text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-full ${
                    activeSection === item.id
                      ? "text-white bg-white/20 backdrop-blur-sm border border-white/30"
                      : "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  }`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full border border-white/40"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Sağ taraf: Language Switcher */}
            <div className="hidden md:flex items-center">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}