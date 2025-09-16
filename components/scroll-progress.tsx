"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
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
    isMounted ? (
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary/20"
        initial={false}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-primary origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
      </motion.div>
    ) : null
  )
}
