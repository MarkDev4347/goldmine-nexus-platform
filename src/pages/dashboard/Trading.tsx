import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign,
  BarChart3,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw
} from "lucide-react";

const Trading = () => {
  const tradingPairs = [
    { pair: "BTC/USD", price: "$43,250.00", change: "+2.5%", trend: "up", volume: "$2.5B" },
    { pair: "ETH/USD", price: "$2,680.50", change: "-1.2%", trend: "down", volume: "$1.8B" },
    { pair: "BNB/USD", price: "$315.80", change: "+0.8%", trend: "up", volume: "$450M" },
    { pair: "ADA/USD", price: "$0.485", change: "+3.2%", trend: "up", volume: "$280M" },
    { pair: "SOL/USD", price: "$98.45", change: "-0.5%", trend: "down", volume: "$320M" },
    { pair: "XRP/USD", price: "$0.615", change: "+1.8%", trend: "up", volume: "$180M" },
  ];

  const recentTrades = [
    { pair: "BTC/USD", type: "BUY", amount: "$500.00", profit: "+$12.50", status: "completed", time: "2 mins ago" },
    { pair: "ETH/USD", type: "SELL", amount: "$300.00", profit: "+$8.75", status: "completed", time: "15 mins ago" },
    { pair: "BNB/USD", type: "BUY", amount: "$200.00", profit: "-$3.20", status: "completed", time: "1 hour ago" },
    { pair: "ADA/USD", type: "BUY", amount: "$150.00", profit: "+$4.50", status: "active", time: "2 hours ago" },
  ];

  const portfolioStats = [
    { title: "Portfolio Value", value: "$2,450.00", change: "+5.2%", trend: "up" },
    { title: "Today's P&L", value: "+$32.50", change: "+1.3%", trend: "up" },
    { title: "Total Trades", value: "127", change: "+8", trend: "up" },
    { title: "Win Rate", value: "68%", change: "+2%", trend: "up" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Portfolio Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioStats.map((stat, index) => (
            <Card key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                    {stat.change}
                  </span>
                  {" "}from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Trading Interface */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Live Trading
                    </CardTitle>
                    <CardDescription>Execute trades with real-time market data</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="spot" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="spot">Spot Trading</TabsTrigger>
                    <TabsTrigger value="futures">Futures</TabsTrigger>
                    <TabsTrigger value="options">Options</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="spot" className="space-y-4">
                    {/* Market Pairs */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Popular Trading Pairs</h4>
                      <div className="space-y-2">
                        {tradingPairs.map((pair, index) => (
                          <div 
                            key={pair.pair}
                            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <div>
                                <p className="font-medium">{pair.pair}</p>
                                <p className="text-xs text-muted-foreground">Vol: {pair.volume}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{pair.price}</p>
                              <div className="flex items-center space-x-1">
                                {pair.trend === "up" ? (
                                  <ArrowUpRight className="w-3 h-3 text-success" />
                                ) : (
                                  <ArrowDownRight className="w-3 h-3 text-destructive" />
                                )}
                                <span className={`text-xs ${pair.trend === "up" ? "text-success" : "text-destructive"}`}>
                                  {pair.change}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Trade */}
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                      <h4 className="text-sm font-medium">Quick Trade</h4>
                      <div className="grid gap-4">
                        <Select defaultValue="BTC/USD">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {tradingPairs.map((pair) => (
                              <SelectItem key={pair.pair} value={pair.pair}>
                                {pair.pair} - {pair.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <div className="grid grid-cols-2 gap-2">
                          <Button className="bg-success hover:bg-success/80">
                            <ArrowUpRight className="w-4 h-4 mr-2" />
                            BUY
                          </Button>
                          <Button variant="destructive">
                            <ArrowDownRight className="w-4 h-4 mr-2" />
                            SELL
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="futures">
                    <div className="text-center py-8">
                      <LineChart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Futures Trading</h3>
                      <p className="text-muted-foreground mb-4">
                        Advanced trading with leverage up to 100x
                      </p>
                      <Button className="bg-gradient-primary hover:shadow-glow">
                        Coming Soon
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="options">
                    <div className="text-center py-8">
                      <Activity className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Options Trading</h3>
                      <p className="text-muted-foreground mb-4">
                        Trade options with various strike prices and expiries
                      </p>
                      <Button className="bg-gradient-primary hover:shadow-glow">
                        Coming Soon
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Recent Trades */}
          <div>
            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Trades
                </CardTitle>
                <CardDescription>Your latest trading activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="space-y-2 p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant={trade.type === "BUY" ? "default" : "secondary"}>
                            {trade.type}
                          </Badge>
                          <span className="font-medium">{trade.pair}</span>
                        </div>
                        <Badge variant={trade.status === "completed" ? "outline" : "secondary"}>
                          {trade.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Amount: {trade.amount}</span>
                        <span className={`font-medium ${trade.profit.startsWith("+") ? "text-success" : "text-destructive"}`}>
                          {trade.profit}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{trade.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Trades
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trading;