import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Check } from "lucide-react";

const CountryPricing = () => {
  const countries = [
    { name: "Kenya", currency: "KES", price: "500", flag: "🇰🇪", popular: true },
    { name: "Nigeria", currency: "NGN", price: "2,500", flag: "🇳🇬", popular: true },
    { name: "South Africa", currency: "ZAR", price: "150", flag: "🇿🇦", popular: false },
    { name: "Ghana", currency: "GHS", price: "60", flag: "🇬🇭", popular: false },
    { name: "Uganda", currency: "UGX", price: "18,000", flag: "🇺🇬", popular: false },
    { name: "Tanzania", currency: "TZS", price: "1,200", flag: "🇹🇿", popular: false },
    { name: "Ethiopia", currency: "ETB", price: "280", flag: "🇪🇹", popular: false },
    { name: "Rwanda", currency: "RWF", price: "520", flag: "🇷🇼", popular: false },
  ];

  const benefits = [
    "Full platform access",
    "Trading tools & analytics",
    "Aviator game access",
    "P2P trading rights",
    "Video rewards program",
    "Affiliate referral system",
    "24/7 customer support",
    "Mobile app access"
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <MapPin className="w-4 h-4 mr-2" />
            54 African Countries
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Country-Based
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One-time registration fee that unlocks all platform features. 
            Pricing varies by country to ensure accessibility across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pricing Grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <Card 
                  key={country.name}
                  className={`relative transition-all duration-300 hover:-translate-y-1 hover:shadow-card animate-fade-in ${
                    country.popular ? 'ring-2 ring-primary/50 bg-primary/5' : 'bg-card/80'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {country.popular && (
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-primary">
                      Popular
                    </Badge>
                  )}
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{country.name}</h3>
                      <div className="text-2xl font-bold text-primary">
                        {country.price} {country.currency}
                      </div>
                    </div>
                    <Button 
                      className={`w-full ${
                        country.popular 
                          ? 'bg-gradient-primary hover:shadow-glow' 
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see your country? We're expanding rapidly!
              </p>
              <Button variant="outline">
                Request Your Country
              </Button>
            </div>
          </div>

          {/* What's Included */}
          <div className="lg:col-span-1">
            <Card className="h-fit bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-center">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">Lifetime Access</div>
                    <p className="text-xs text-muted-foreground">
                      One-time payment, no monthly fees
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPricing;