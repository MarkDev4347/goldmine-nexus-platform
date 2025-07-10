import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  TrendingUp, 
  Zap,
  Trophy,
  Users,
  Timer
} from "lucide-react";

const Aviator = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [multiplier, setMultiplier] = useState(1.00);
  const [gamePhase, setGamePhase] = useState<"waiting" | "flying" | "crashed">("waiting");
  const [betAmount, setBetAmount] = useState(10);
  const [balance, setBalance] = useState(1250);

  // Mock game simulation
  useEffect(() => {
    if (isPlaying && gamePhase === "flying") {
      const interval = setInterval(() => {
        setMultiplier(prev => {
          const newMultiplier = prev + (Math.random() * 0.1);
          // Random crash between 1.2x and 10x
          if (newMultiplier > (1.2 + Math.random() * 8.8)) {
            setGamePhase("crashed");
            setIsPlaying(false);
            return prev;
          }
          return newMultiplier;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying, gamePhase]);

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase("flying");
    setMultiplier(1.00);
  };

  const cashOut = () => {
    if (gamePhase === "flying") {
      const winAmount = betAmount * multiplier;
      setBalance(prev => prev + winAmount - betAmount);
      setIsPlaying(false);
      setGamePhase("waiting");
    }
  };

  const resetGame = () => {
    setIsPlaying(false);
    setGamePhase("waiting");
    setMultiplier(1.00);
  };

  const recentGames = [
    { multiplier: "2.45x", bet: 10, win: 24.50, time: "2 mins ago" },
    { multiplier: "1.20x", bet: 20, win: 24.00, time: "5 mins ago" },
    { multiplier: "crashed at 1.05x", bet: 15, win: 0, time: "8 mins ago" },
    { multiplier: "3.78x", bet: 10, win: 37.80, time: "12 mins ago" },
    { multiplier: "1.85x", bet: 25, win: 46.25, time: "15 mins ago" },
  ];

  const gameStats = [
    { title: "Games Played", value: "127", icon: Play },
    { title: "Total Winnings", value: "$1,245.50", icon: Trophy },
    { title: "Best Multiplier", value: "12.5x", icon: TrendingUp },
    { title: "Win Rate", value: "68%", icon: Zap },
  ];

  const liveMultipliers = [
    { player: "Player1", multiplier: "2.34x", bet: "$25" },
    { player: "Player2", multiplier: "1.89x", bet: "$50" },
    { player: "Player3", multiplier: "3.45x", bet: "$15" },
    { player: "Player4", multiplier: "1.23x", bet: "$30" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Game Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gameStats.map((stat, index) => (
            <Card key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Game */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Aviator Game
                    </CardTitle>
                    <CardDescription>Watch the multiplier rise and cash out before it crashes!</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    Balance: ${balance.toFixed(2)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Game Display */}
                <div className="relative h-64 bg-gradient-to-b from-sky-400 to-blue-600 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {gamePhase === "waiting" && (
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">Ready to Fly?</div>
                        <p className="text-lg opacity-80">Place your bet and start the game</p>
                      </div>
                    )}
                    {gamePhase === "flying" && (
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2 animate-pulse-glow">
                          {multiplier.toFixed(2)}x
                        </div>
                        <div className="text-lg">🚀 Flying High!</div>
                        <Progress value={multiplier * 10} className="w-32 mx-auto mt-4" />
                      </div>
                    )}
                    {gamePhase === "crashed" && (
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2 text-red-300">
                          CRASHED at {multiplier.toFixed(2)}x
                        </div>
                        <div className="text-lg">💥 Better luck next time!</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Plane Animation */}
                  <div className={`absolute bottom-4 transition-all duration-1000 ${
                    isPlaying ? "left-3/4" : "left-4"
                  }`}>
                    <div className="text-2xl">✈️</div>
                  </div>
                </div>

                {/* Game Controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <label className="text-sm font-medium">Bet Amount</label>
                        <div className="flex items-center space-x-2 mt-1">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setBetAmount(Math.max(1, betAmount - 5))}
                            disabled={isPlaying}
                          >
                            -
                          </Button>
                          <span className="font-mono text-lg w-16 text-center">${betAmount}</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setBetAmount(betAmount + 5)}
                            disabled={isPlaying}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Potential Win</div>
                      <div className="text-lg font-bold text-primary">
                        ${(betAmount * multiplier).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {gamePhase === "waiting" && (
                      <Button 
                        onClick={startGame}
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                        disabled={betAmount > balance}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Game - ${betAmount}
                      </Button>
                    )}
                    {gamePhase === "flying" && (
                      <Button 
                        onClick={cashOut}
                        className="flex-1 bg-success hover:bg-success/80"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Cash Out at {multiplier.toFixed(2)}x
                      </Button>
                    )}
                    {gamePhase === "crashed" && (
                      <Button 
                        onClick={resetGame}
                        className="flex-1 bg-gradient-primary hover:shadow-glow"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Play Again
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Players */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Live Players
                </CardTitle>
                <CardDescription>Recent cash outs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {liveMultipliers.map((player, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{player.player}</p>
                        <p className="text-xs text-muted-foreground">Bet: {player.bet}</p>
                      </div>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        {player.multiplier}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Games */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Timer className="w-5 h-5 mr-2" />
                  Your Recent Games
                </CardTitle>
                <CardDescription>Last 5 games played</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentGames.map((game, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{game.multiplier}</p>
                        <p className="text-xs text-muted-foreground">{game.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Bet: ${game.bet}</p>
                        <p className={`font-medium ${game.win > 0 ? "text-success" : "text-destructive"}`}>
                          {game.win > 0 ? `+$${game.win}` : `-$${game.bet}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Aviator;