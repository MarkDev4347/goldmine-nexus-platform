import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Play, DollarSign, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Countries", value: "54", icon: MapPin },
    { label: "Total Earnings", value: "$2M+", icon: DollarSign },
    { label: "Success Rate", value: "96%", icon: Star },
  ];

  const features = [
    { name: "Trading", icon: TrendingUp, color: "text-primary" },
    { name: "Aviator", icon: Play, color: "text-accent" },
    { name: "P2P Trading", icon: DollarSign, color: "text-success" },
    { name: "Referrals", icon: Users, color: "text-secondary" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Nexus Solution Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                🌍 Available across Africa
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Earn Money with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nexus Solution
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join Africa's leading affiliate marketing platform. Trade, play games, 
                watch videos, and earn real money through our innovative referral system.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="font-medium">{feature.name}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow animate-pulse-glow text-lg px-8"
                >
                  Start Earning Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Registration: <span className="text-primary font-semibold">500 KES</span> 
                {" "}(varies by country)
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-card/80 backdrop-blur-lg border-border/50 shadow-card animate-float">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Platform Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center space-y-2">
                      <div className="flex justify-center">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground">
                    Join thousands of successful affiliates across Africa
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "-1s" }} />
    </section>
  );
};

export default Hero;