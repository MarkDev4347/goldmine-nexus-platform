import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Play, 
  DollarSign, 
  Users, 
  Eye, 
  Gift,
  ArrowRight,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      id: "trading",
      title: "Advanced Trading",
      description: "Access real-time market data and execute trades with our professional trading platform.",
      icon: TrendingUp,
      gradient: "from-primary to-primary-glow",
      benefits: ["Real-time charts", "Multiple markets", "Expert analysis", "24/7 support"],
      cta: "Start Trading",
      earning: "Up to 15% daily returns"
    },
    {
      id: "aviator",
      title: "Aviator Game",
      description: "Play our exciting crash game and multiply your earnings with strategic timing.",
      icon: Play,
      gradient: "from-accent to-orange-400",
      benefits: ["Instant payouts", "Fair gameplay", "Live multiplayer", "Demo mode"],
      cta: "Play Now",
      earning: "Win up to 100x"
    },
    {
      id: "p2p",
      title: "P2P Trading",
      description: "Buy and sell USDT directly with other users in a secure, escrow-protected environment.",
      icon: DollarSign,
      gradient: "from-success to-green-400",
      benefits: ["Secure escrow", "Low fees", "Multiple payment methods", "Fast transactions"],
      cta: "Trade USDT",
      earning: "0.5% transaction fee"
    },
    {
      id: "videos",
      title: "Video Rewards",
      description: "Watch engaging content and earn money for your time and attention.",
      icon: Eye,
      gradient: "from-secondary to-teal-400",
      benefits: ["Daily content", "Various categories", "Instant rewards", "No limits"],
      cta: "Watch & Earn",
      earning: "$0.10 per video"
    },
    {
      id: "referrals",
      title: "Affiliate Program",
      description: "Build your network and earn from every person you refer to the platform.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      benefits: ["Unlimited referrals", "Multi-level commissions", "Real-time tracking", "Bonus rewards"],
      cta: "Get Link",
      earning: "20% commission + bonuses"
    },
    {
      id: "rewards",
      title: "Daily Bonuses",
      description: "Claim daily login rewards and participate in special promotional events.",
      icon: Gift,
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["Daily check-ins", "Special events", "Loyalty rewards", "VIP programs"],
      cta: "Claim Bonus",
      earning: "Up to $50 daily"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Multiple Income Streams
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Diversify Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Earning Potential
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore multiple ways to generate income through our comprehensive platform 
            designed for the African market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.earning}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full group-hover:shadow-glow transition-all"
                  variant="outline"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-success/10 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Start Earning?</h3>
              <p className="text-muted-foreground">
                Join thousands of successful users across Africa and start building your income today.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Register Now - 500 KES
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;