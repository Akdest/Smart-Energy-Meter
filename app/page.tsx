"use client";

import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Navbar } from "@/components/navbar";
import { ComparisionSection } from "@/components/ComparisionSection";
import { FAQsSection } from "@/components/FAQsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";



export default function LandingPage() {
  return (
   
        <div>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <HowItWorksSection />
          <ComparisionSection />
          <FAQsSection />
          <CTASection />
          <Footer />
        </div>
  );
}
