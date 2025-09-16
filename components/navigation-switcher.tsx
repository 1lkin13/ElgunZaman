"use client"

import dynamic from "next/dynamic"
import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"
import { useIsMobile } from "@/hooks/use-is-mobile"

// Dinamik olarak yüklenen navigasyon bileşenleri
const DynamicDesktopNavigation = dynamic(() => Promise.resolve(DesktopNavigation), { ssr: false });
const DynamicMobileNavigation = dynamic(() => Promise.resolve(MobileNavigation), { ssr: false });

// Navigasyon bileşenini seçen client-side bileşen
export function NavigationSwitcher() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <DynamicMobileNavigation />;
  } else {
    return <DynamicDesktopNavigation />;
  }
}
