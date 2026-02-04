import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <HowItWorks />
        <WhyUs />
      </main>
      <Footer />
      <MobileBottomBar />
      {/* Spacer for mobile bottom bar */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
