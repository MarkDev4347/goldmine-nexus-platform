import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CountryPricing from "@/components/sections/CountryPricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Features />
      <CountryPricing />
    </div>
  );
};

export default Index;