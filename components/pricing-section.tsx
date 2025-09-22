"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import BlurText from "./BlurText"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

type PricingItem = {
  id: string
  name: string
  price: string
  description: string
}

export function PricingSection() {
  const { t } = useLanguage()
  const items = (t as any).pricing.items as PricingItem[]

  // Detay içerikleri (lokal) – her hizmet için dahil olanlar
  const includesById: Record<string, string[]> = {
    hair: [
      "Saçın yuyulması və hazırlanması",
      "Müşavirə: saç tipi və üz formasına uyğun kəsim",
      "Qayçı və/və ya maşınla kəsim (klassik, fade, taper)",
      "Föndə qurudulma və formaverilmə",
      "Styling: mat/parlaq finiş məhsulları ilə tamamlanma",
    ],
    beard: [
      "İsti dəsmal tətbiqi",
      "Saqqal forması və konturun dəqiq verilməsi",
      "Lazer ustura/ustura ilə təmizlik",
      "Saqqal yağı/balzam ilə baxım",
    ],
    face: [
      "Dərin təmizləmə (peeling/foam cleanse)",
      "Buxar və ya lazer təmizləmə",
      "Qara nöqtə təmizlənməsi",
      "Maska qoyulması və nəmləndirmə",
    ],
  }

  const whatsappNumber = "994507501680"
  const buildWhatsAppUrl = (serviceName: string) => {
    const text = `Salam, ${serviceName} xidməti üçün müraciət etmək istəyirəm.`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <BlurText
            text={(t as any).pricing.title}
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
            text={(t as any).pricing.subtitle}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif text-xl text-white">{item.name}</h4>
                <span className="font-sans text-white/80">{item.price}</span>
              </div>

              {/* Dahil olan xidmətlər */}
              {includesById[item.id] && (
                <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                  {includesById[item.id].map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              )}

              {/* Detay açıklaması */}
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* WhatsApp CTA */}
              <div className="mt-auto pt-4">
                <Button
                  onClick={() => {
                    const url = buildWhatsAppUrl(item.name)
                    window.open(url, "_blank", "noopener,noreferrer")
                  }}
                  className="bg-white text-black hover:bg-white/90 rounded-full px-6"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Müraciət et
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection


