"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "./language-switcher"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function MobileNavigation() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      setIsMobileMenuOpen(false)
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Mobile Menu Button - Sağ üstte sabit */}
      {!isMobileMenuOpen && (
        <div className="fixed top-0 right-0 p-4 md:hidden flex items-center z-[80]">
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`p-3 rounded-full transition-all duration-300 mobile-menu ${isScrolled ? "text-foreground hover:bg-black/5 border border-black/10" : "text-white hover:bg-white/10 border border-white/30"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      )}

      {/* Mobile Navigation Menu - Tam ekran panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] pointer-events-auto bg-black backdrop-blur-md"
          >
            <div className="py-4 border-t border-white/10 px-4 overflow-y-auto h-full">
              {/* Panel üst başlık satırı: Sol logo, sağ X ve dil seçici */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="font-serif text-white/90 text-lg drop-shadow-sm">{t.hero.title}</div>
                <div className="flex items-center gap-2" data-language-dropdown>
                  <LanguageSwitcher isScrolled={false} />
                  <button
                    aria-label="Close menu"
                    className="p-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className={`w-full text-center px-4 py-4 rounded-xl font-sans text-lg font-medium transition-all duration-200 ripple ${
                      activeSection === item.id
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

