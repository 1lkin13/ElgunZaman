"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Camera, Award, Users, Calendar } from "lucide-react"
import elgunZaman from "@/public/elgun.jpg"
import { AnimatedCounter } from "./animated-counter"
import BlurText from "./BlurText"
const timelineIcons = [Camera, Users, Award, Award, Calendar, Award]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurText
            text={t.about.title}
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
            text={t.about.subtitle}
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative ">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={elgunZaman.src}
                  alt="Photographer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
                <Camera className="h-8 w-8" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-sans text-lg leading-relaxed text-foreground"
              >
                {t.about.bio}
              </motion.p>

              {/* Key Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h4 className="font-serif text-lg font-medium text-card-foreground">{t.about.education}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{t.about.labels.certification}</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h4 className="font-serif text-lg font-medium text-card-foreground">{t.about.experience}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{t.about.labels.industry}</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border sm:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h4 className="font-serif text-lg font-medium text-card-foreground">{t.about.specialty}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{t.about.labels.expertise}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-12 text-center lg:text-left">
              {t.about.journey}
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {t.about.timeline.map((event, index) => {
                  const IconComponent = timelineIcons[index] || Camera
                  return (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Icon */}
                      <div className="relative z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      {/* Timeline Content */}
                      <div className="flex-1 bg-card p-6 rounded-xl border border-border shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-serif text-2xl font-light text-primary">{event.year}</span>
                        </div>
                        <h4 className="font-serif text-xl font-medium text-card-foreground mb-2">{event.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Counters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-8 text-center">
            Fotoqrafiya Bacarıqları
          </h3>
       

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={23823} suffix="+" className="block mb-2" />
              <p className="text-white/80 text-sm md:text-base">Uğurlu Toy Şəkli</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={15420} suffix="+" className="block mb-2" />
              <p className="text-white/80 text-sm md:text-base">Portret Çəkilişi</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={8920} suffix="+" className="block mb-2" />
              <p className="text-white/80 text-sm md:text-base">Hadisə Fotoqrafiyası</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={12500} suffix="+" className="block mb-2" />
              <p className="text-white/80 text-sm md:text-base">Redaktə Edilmiş Şəkil</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
