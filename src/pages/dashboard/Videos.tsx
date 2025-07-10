import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Play, Clock, DollarSign } from "lucide-react";

const Videos = () => {
  const videoCategories = [
    { name: "Crypto Education", count: 45, reward: "$0.15" },
    { name: "Market Analysis", count: 32, reward: "$0.20" },
    { name: "Platform Tutorials", count: 28, reward: "$0.10" },
    { name: "Success Stories", count: 19, reward: "$0.12" },
  ];

  const availableVideos = [
    { title: "Bitcoin Trading Basics", duration: "5:30", reward: "$0.15", category: "Education", thumbnail: "🎓" },
    { title: "Market Trends 2024", duration: "8:45", reward: "$0.20", category: "Analysis", thumbnail: "📈" },
    { title: "How to Use Aviator", duration: "3:20", reward: "$0.10", category: "Tutorial", thumbnail: "✈️" },
    { title: "Success Story: John's Journey", duration: "6:15", reward: "$0.12", category: "Story", thumbnail: "🏆" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Videos Watched</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">127</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Total Earned</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">$18.50</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Today's Streak</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">8</div></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Available Videos</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">124</div></CardContent></Card>
        </div>

        {/* Video Categories */}
        <Card>
          <CardHeader><CardTitle>Video Categories</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {videoCategories.map((category) => (
                <div key={category.name} className="p-4 border rounded-lg">
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} videos</p>
                  <Badge className="mt-2">{category.reward} per video</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Videos */}
        <Card>
          <CardHeader><CardTitle className="flex items-center"><Eye className="w-5 h-5 mr-2" />Available Videos</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {availableVideos.map((video, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="text-4xl">{video.thumbnail}</div>
                  <div className="flex-1">
                    <h3 className="font-medium">{video.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{video.duration}</span>
                      <Badge variant="outline">{video.category}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-primary">{video.reward}</div>
                    <Button size="sm" className="mt-2">
                      <Play className="w-4 h-4 mr-1" />Watch
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Videos;