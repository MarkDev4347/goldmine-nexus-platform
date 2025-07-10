import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Eye, 
  Gift,
  ArrowUpRight,
  Activity,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$1,250.00",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Trading Profit",
      value: "$320.50",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Referral Earnings",
      value: "$180.00",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-accent"
    },
    {
      title: "Video Rewards",
      value: "$45.20",
      change: "-2.1%",
      trend: "down",
      icon: Eye,
      color: "text-secondary"
    }
  ];

  const recentActivities = [
    { type: "Trading", description: "BTC/USD trade completed", amount: "+$25.30", time: "2 mins ago", icon: TrendingUp },
    { type: "Referral", description: "New user registered", amount: "+$10.00", time: "15 mins ago", icon: Users },
    { type: "Aviator", description: "Game won", amount: "+$15.50", time: "1 hour ago", icon: Gift },
    { type: "Video", description: "Video watched", amount: "+$0.25", time: "2 hours ago", icon: Eye },
    { type: "P2P", description: "USDT trade executed", amount: "+$8.75", time: "3 hours ago", icon: DollarSign },
  ];

  const goals = [
    { title: "Monthly Target", current: 1250, target: 2000, percentage: 62.5 },
    { title: "Referral Goal", current: 8, target: 15, percentage: 53.3 },
    { title: "Video Streak", current: 12, target: 30, percentage: 40 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your Nexus Solution account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-success mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                    {stat.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activities */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activities
              </CardTitle>
              <CardDescription>Your latest earnings and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-success">{activity.amount}</p>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activities
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Goals Progress */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Monthly Goals
              </CardTitle>
              <CardDescription>Track your progress towards monthly targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{goal.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {goal.current}/{goal.target}
                      </p>
                    </div>
                    <Progress value={goal.percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {goal.percentage.toFixed(1)}% completed
                    </p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-primary hover:shadow-glow">
                Boost Your Earnings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Start earning with these popular activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-20 bg-gradient-primary hover:shadow-glow flex-col">
                <TrendingUp className="w-6 h-6 mb-2" />
                Start Trading
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Gift className="w-6 h-6 mb-2" />
                Play Aviator
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Eye className="w-6 h-6 mb-2" />
                Watch Videos
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="w-6 h-6 mb-2" />
                Refer Friends
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;