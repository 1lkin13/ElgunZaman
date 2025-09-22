"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Facebook, Camera, Send, CheckCircle, AlertCircle } from "lucide-react"
import BlurText from "./BlurText"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: "+994 50 750 16 80",
      href: "tel:+994507501680",
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "hello@photographer.az",
      href: "mailto:hello@photographer.az",
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: "Baku, Azerbaijan",
      href: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/photographer",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/photographer",
      color: "hover:text-blue-600",
    },
    {
      icon: Camera,
      label: "Behance",
      href: "https://behance.net/photographer",
      color: "hover:text-blue-500",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurText
            text={t.contact.title}
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
            text={t.contact.subtitle}
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border shadow-lg"
          >
            <h3 className="font-serif text-2xl font-light text-card-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                  placeholder="Tell me about your photography needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    {t.contact.form.send}
                  </div>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>{t.contact.form.success}</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>{t.contact.form.error}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-card-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Follow My Work</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-card p-4 rounded-xl border border-border hover:shadow-md transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-6 rounded-xl border border-primary/20"
            >
              <h4 className="font-serif text-xl font-medium text-foreground mb-2">{t.contact.title}</h4>
              <p className="text-muted-foreground mb-4">{t.contact.subtitle}</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => document.getElementById("name")?.focus()}
              >
                {t.contact.cta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
