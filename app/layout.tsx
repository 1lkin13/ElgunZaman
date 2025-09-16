import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { NavigationSwitcher } from "@/components/navigation-switcher"
import Particles from "@/components/Particles"

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Elgun Zaman",
  description: "Professional photographer portfolio showcasing wedding, portrait and event photography",
  generator: "Elgun Zaman",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="az" suppressHydrationWarning className={`${manrope.variable} antialiased dark`}>
      <body suppressHydrationWarning>
        {/* Global Particles background - tüm sayfaya yayılan */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Particles
            className="w-full h-full"
            particleCount={300}
            particleSpread={12}
            speed={0.1}
            particleColors={["#ffffff"]}
            alphaParticles={true}
            particleBaseSize={100}
            sizeRandomness={1.2}
            cameraDistance={25}
            moveParticlesOnHover={false}
            disableRotation={false}
          />
        </div>

        <LanguageProvider>
          <NavigationSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
