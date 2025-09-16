"use client"

import { useLanguage } from "@/hooks/use-language"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import BlurText from "./BlurText"

type Testimonial = {
  name: string
  role: string
  text: string
}

export function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = t.testimonials.clients as Testimonial[]
  const extendedTestimonials = [...testimonials, ...testimonials]

  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const x = useRef(0)
  const rafId = useRef<number | undefined>(undefined)

  const tick = () => {
    if (!carouselRef.current) return
    x.current -= 0.35
    if (x.current <= -width / 2) x.current = 0
    carouselRef.current.style.transform = `translateX(${x.current}px)`
    if (!isHovered) rafId.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 2)
    }
    rafId.current = requestAnimationFrame(tick)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [width, isHovered])

  useEffect(() => {
    if (!isHovered) {
      rafId.current = requestAnimationFrame(tick)
    } else if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
  }, [isHovered])

  return (
    <section className="py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <BlurText
          text={t.testimonials.title}
          delay={150}
          animateBy="words"
          direction="top"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
          animationFrom={{ filter: 'blur(12px)', opacity: 0, y: -60 }}
          animationTo={[
            { filter: 'blur(6px)', opacity: 0.6, y: -20 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.3}
        />
        <BlurText
          text={t.testimonials.subtitle}
          delay={100}
          animateBy="words"
          direction="bottom"
          className="font-sans text-lg text-white/70 max-w-2xl mx-auto"
          animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 40 }}
          animationTo={[
            { filter: 'blur(5px)', opacity: 0.5, y: 10 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.25}
        />
      </div>

      {/* Full Width Carousel */}
      <div
        className="relative w-full overflow-hidden py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(${x.current}px)` }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="inline-block px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 * (index % testimonials.length) }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 25px 60px rgba(0,0,0,0.35)" }}
            >
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 w-[320px] h-[320px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-serif text-xl font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <h4 className="font-serif text-lg font-medium text-white mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-white/60 text-sm">{testimonial.role}</p>
                </div>
                <blockquote className="font-sans text-sm text-white/80 leading-relaxed italic line-clamp-4 whitespace-normal break-words text-center">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
