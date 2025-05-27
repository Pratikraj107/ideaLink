import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { AppPreview } from "@/components/app-preview";
import { StoreButtons } from "@/components/store-buttons";
import { CtaButton } from "@/components/cta-button";
import { BackgroundEffect } from "@/components/background-effect";
import { FeaturesSection } from "@/components/features-section";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />
      
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <HeroSection />
          <AppPreview />
        </div>
      </div>

      <FeaturesSection />
      <FaqSection />
    </main>
  );
}