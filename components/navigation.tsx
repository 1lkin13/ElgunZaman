"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "./language-switcher"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass backdrop-blur-xl border-b border-white/20 shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className={`font-serif font-light cursor-pointer transition-all duration-500 ${
              isScrolled ? "text-xl gradient-text" : "text-2xl text-white"
            }`}
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.title}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-full ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-primary neon-glow bg-primary/10"
                      : "text-white bg-white/10"
                    : isScrolled
                      ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute inset-0 rounded-full ${isScrolled ? "neon-border" : "border border-white/30"}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <div
              className={`${isScrolled ? "glass border border-white/20 rounded-full p-1" : "bg-white/10 border border-white/30 rounded-full p-1"}`}
            >
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center gap-3">
            <div
              className={`${isScrolled ? "glass border border-white/20 rounded-full p-1" : "bg-white/10 border border-white/30 rounded-full p-1"}`}
            >
              <LanguageSwitcher />
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-full transition-all duration-300 mobile-menu ${
                isScrolled
                  ? "text-primary hover:bg-primary/10 neon-border"
                  : "text-white hover:bg-white/10 border border-white/30"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden mobile-menu"
        >
          <div className="py-4 space-y-2 border-t border-white/20 mt-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`block w-full text-left px-6 py-4 rounded-xl font-sans text-sm font-medium transition-all duration-300 ripple ${
                  activeSection === item.id
                    ? isScrolled
                      ? "glass neon-border text-primary"
                      : "bg-white/10 text-white border border-white/30"
                    : isScrolled
                      ? "text-foreground/70 hover:glass hover:text-primary"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
