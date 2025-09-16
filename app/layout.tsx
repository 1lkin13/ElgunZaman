import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { NavigationSwitcher } from "@/components/navigation-switcher"

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Photographer Portfolio",
  description: "Professional photographer portfolio showcasing wedding, portrait and event photography",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="az" suppressHydrationWarning className={`${manrope.variable} antialiased`}>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <NavigationSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
