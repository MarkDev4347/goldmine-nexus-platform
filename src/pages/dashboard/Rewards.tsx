import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Calendar, Trophy, Star } from "lucide-react";

const Rewards = () => {
  const dailyRewards = [
    { day: 1, reward: "$1", claimed: true },
    { day: 2, reward: "$2", claimed: true },
    { day: 3, reward: "$3", claimed: true },
    { day: 4, reward: "$5", claimed: false },
    { day: 5, reward: "$8", claimed: false },
    { day: 6, reward: "$12", claimed: false },
    { day: 7, reward: "$20", claimed: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center"><Gift className="w-4 h-4 mr-2" />Total Rewards</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">$156.50</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center"><Calendar className="w-4 h-4 mr-2" />Login Streak</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">3 days</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center"><Trophy className="w-4 h-4 mr-2" />Level</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">Silver</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center"><Star className="w-4 h-4 mr-2" />Points</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">2,340</div></CardContent></Card>
        </div>

        <Card>
          <CardHeader><CardTitle>Daily Login Rewards</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-7">
              {dailyRewards.map((day) => (
                <div key={day.day} className={`text-center p-4 border rounded-lg ${day.claimed ? 'bg-success/10 border-success/20' : 'bg-muted/20'}`}>
                  <div className="text-sm">Day {day.day}</div>
                  <div className="font-bold">{day.reward}</div>
                  {day.claimed ? <Badge variant="outline" className="mt-2">Claimed</Badge> : <Button size="sm" className="mt-2" disabled={day.day > 4}>Claim</Button>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Special Events</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                <h3 className="font-bold">Weekend Bonus</h3>
                <p className="text-sm text-muted-foreground">Double rewards on all activities</p>
                <Badge className="mt-2">Active</Badge>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">Referral Challenge</h3>
                <p className="text-sm text-muted-foreground">Refer 5 friends this month for $50 bonus</p>
                <div className="mt-2 text-sm">Progress: 3/5</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Rewards;