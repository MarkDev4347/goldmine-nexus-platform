import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Copy, Share, DollarSign } from "lucide-react";

const Referrals = () => {
  const referralCode = "NEXUS-JD-2024";
  const referralStats = [
    { title: "Total Referrals", value: "23", icon: Users },
    { title: "Active Referrals", value: "18", icon: Users },
    { title: "Total Earnings", value: "$345.50", icon: DollarSign },
    { title: "This Month", value: "$67.20", icon: DollarSign },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {referralStats.map((stat) => (
            <Card key={stat.title}><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center"><stat.icon className="w-4 h-4 mr-2" />{stat.title}</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">{stat.value}</div></CardContent></Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>Your Referral Link</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 p-3 bg-muted rounded-lg font-mono text-sm">
                https://nexussolution.com/register?ref={referralCode}
              </div>
              <Button><Copy className="w-4 h-4" /></Button>
              <Button variant="outline"><Share className="w-4 h-4" /></Button>
            </div>
            <div className="text-center">
              <Badge>Your Code: {referralCode}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Commission Structure</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">20%</div>
                <div className="text-sm">Registration Commission</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">10%</div>
                <div className="text-sm">Trading Commission</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">5%</div>
                <div className="text-sm">Level 2 Bonus</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Referrals;