"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Camera, Award, Users, Calendar } from "lucide-react"

const timelineIcons = [Camera, Users, Award, Award, Calendar, Award]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            {t.about.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

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
            <div className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/professional-headshot.png"
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
            {t.about.skillsTitle}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.about.skills.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-border"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-primary"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: `${item.level} 100` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{item.level}%</span>
                  </div>
                </div>
                <h4 className="font-sans text-sm font-medium text-foreground">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
