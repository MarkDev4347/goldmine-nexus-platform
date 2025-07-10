import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DollarSign, 
  ArrowUpDown, 
  Clock, 
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Plus
} from "lucide-react";

const P2PTrading = () => {
  const buyOffers = [
    {
      trader: "John_Trader",
      price: "$0.9995",
      available: "5,000 USDT",
      limit: "$50 - $500",
      payment: "M-Pesa",
      rating: 98.5,
      trades: 245,
      online: true
    },
    {
      trader: "CryptoKing",
      price: "$1.0005",
      available: "10,000 USDT",
      limit: "$100 - $1000",
      payment: "Bank Transfer",
      rating: 99.2,
      trades: 892,
      online: true
    },
    {
      trader: "SafeTrader",
      price: "$0.9998",
      available: "2,500 USDT",
      limit: "$25 - $250",
      payment: "Mobile Money",
      rating: 97.8,
      trades: 156,
      online: false
    },
    {
      trader: "FastPay",
      price: "$1.0002",
      available: "7,500 USDT",
      limit: "$200 - $2000",
      payment: "Airtel Money",
      rating: 98.9,
      trades: 567,
      online: true
    },
  ];

  const sellOffers = [
    {
      trader: "USDT_Seller",
      price: "$1.0015",
      available: "3,000 USDT",
      limit: "$100 - $500",
      payment: "M-Pesa",
      rating: 99.1,
      trades: 334,
      online: true
    },
    {
      trader: "QuickSell",
      price: "$1.0020",
      available: "8,000 USDT",
      limit: "$50 - $800",
      payment: "Bank Transfer",
      rating: 98.7,
      trades: 445,
      online: true
    },
    {
      trader: "InstantCash",
      price: "$1.0012",
      available: "1,500 USDT",
      limit: "$25 - $150",
      payment: "Tigo Pesa",
      rating: 97.5,
      trades: 123,
      online: true
    },
  ];

  const myTrades = [
    {
      id: "#P2P001",
      type: "BUY",
      amount: "500 USDT",
      price: "$0.9995",
      total: "$499.75",
      counterparty: "John_Trader",
      status: "completed",
      time: "2 hours ago"
    },
    {
      id: "#P2P002",
      type: "SELL",
      amount: "250 USDT",
      price: "$1.0015",
      total: "$250.38",
      counterparty: "USDT_Seller",
      status: "in_progress",
      time: "30 mins ago"
    },
    {
      id: "#P2P003",
      type: "BUY",
      amount: "1000 USDT",
      price: "$1.0005",
      total: "$1000.50",
      counterparty: "CryptoKing",
      status: "pending",
      time: "5 mins ago"
    },
  ];

  const p2pStats = [
    { title: "Total Volume", value: "$12,450", change: "+15.3%", icon: DollarSign },
    { title: "Completed Trades", value: "47", change: "+8", icon: CheckCircle },
    { title: "Success Rate", value: "98.9%", change: "+1.2%", icon: TrendingUp },
    { title: "Active Orders", value: "3", change: "0", icon: Clock },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* P2P Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {p2pStats.map((stat, index) => (
            <Card key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> from last month
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
                      <ArrowUpDown className="w-5 h-5 mr-2" />
                      P2P Trading
                    </CardTitle>
                    <CardDescription>Buy and sell USDT with other users</CardDescription>
                  </div>
                  <Button className="bg-gradient-primary hover:shadow-glow">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Order
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buy" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy">Buy USDT</TabsTrigger>
                    <TabsTrigger value="sell">Sell USDT</TabsTrigger>
                  </TabsList>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-lg">
                    <div className="flex-1 min-w-40">
                      <Label htmlFor="amount">Amount (USD)</Label>
                      <Input id="amount" placeholder="Enter amount" />
                    </div>
                    <div className="flex-1 min-w-40">
                      <Label htmlFor="payment">Payment Method</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All methods" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mpesa">M-Pesa</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="airtel">Airtel Money</SelectItem>
                          <SelectItem value="tigo">Tigo Pesa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline">Filter</Button>
                    </div>
                  </div>

                  <TabsContent value="buy" className="space-y-4">
                    <div className="space-y-3">
                      {buyOffers.map((offer, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{offer.trader}</span>
                                {offer.online && (
                                  <div className="w-2 h-2 bg-success rounded-full"></div>
                                )}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {offer.rating}% | {offer.trades} trades
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">{offer.price}</div>
                              <div className="text-xs text-muted-foreground">per USDT</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                            <div>
                              <div className="text-muted-foreground">Available</div>
                              <div className="font-medium">{offer.available}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Limit</div>
                              <div className="font-medium">{offer.limit}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Payment</div>
                              <div className="font-medium">{offer.payment}</div>
                            </div>
                          </div>

                          <Button 
                            className="w-full bg-success hover:bg-success/80"
                            disabled={!offer.online}
                          >
                            {offer.online ? "Buy USDT" : "Offline"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="sell" className="space-y-4">
                    <div className="space-y-3">
                      {sellOffers.map((offer, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{offer.trader}</span>
                                {offer.online && (
                                  <div className="w-2 h-2 bg-success rounded-full"></div>
                                )}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {offer.rating}% | {offer.trades} trades
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-accent">{offer.price}</div>
                              <div className="text-xs text-muted-foreground">per USDT</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                            <div>
                              <div className="text-muted-foreground">Available</div>
                              <div className="font-medium">{offer.available}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Limit</div>
                              <div className="font-medium">{offer.limit}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Payment</div>
                              <div className="font-medium">{offer.payment}</div>
                            </div>
                          </div>

                          <Button 
                            className="w-full bg-accent hover:bg-accent/80"
                            disabled={!offer.online}
                          >
                            {offer.online ? "Sell USDT" : "Offline"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* My Trades */}
          <div>
            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  My Trades
                </CardTitle>
                <CardDescription>Your recent P2P transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myTrades.map((trade, index) => (
                    <div key={trade.id} className="space-y-3 p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant={trade.type === "BUY" ? "default" : "secondary"}>
                            {trade.type}
                          </Badge>
                          <span className="text-sm font-mono">{trade.id}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={
                            trade.status === "completed" ? "bg-success/10 text-success border-success/20" :
                            trade.status === "in_progress" ? "bg-primary/10 text-primary border-primary/20" :
                            "bg-muted"
                          }
                        >
                          {trade.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {trade.status === "in_progress" && <Clock className="w-3 h-3 mr-1" />}
                          {trade.status === "pending" && <AlertCircle className="w-3 h-3 mr-1" />}
                          {trade.status.replace("_", " ")}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-medium">{trade.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium">{trade.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total:</span>
                          <span className="font-medium text-primary">{trade.total}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">With:</span>
                          <span className="font-medium">{trade.counterparty}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{trade.time}</span>
                        {trade.status === "in_progress" && (
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Users className="w-4 h-4 mr-2" />
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

export default P2PTrading;