import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Menu, 
  Home, 
  TrendingUp, 
  Play, 
  DollarSign, 
  Users, 
  Eye, 
  Gift,
  User,
  LogOut,
  Bell,
  Settings
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Trading", href: "/trading", icon: TrendingUp },
    { name: "Aviator", href: "/aviator", icon: Play },
    { name: "P2P Trading", href: "/p2p", icon: DollarSign },
    { name: "Videos", href: "/videos", icon: Eye },
    { name: "Referrals", href: "/referrals", icon: Users },
    { name: "Rewards", href: "/rewards", icon: Gift },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleLogout = () => {
    // Mock logout - replace with actual logout logic
    navigate("/");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nexus Solution
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Premium Member</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Link
            to="/profile"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            <User className="w-4 h-4" />
            <span className="text-sm">Profile</span>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start p-3 h-auto text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-3" />
            <span className="text-sm">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <div className="lg:hidden">
          {/* Mobile Header */}
          <header className="bg-card border-b border-border p-4 flex items-center justify-between">
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                Nexus
              </span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Avatar className="w-6 h-6">
                <AvatarFallback className="text-xs">JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
        </div>

        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="lg:flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-card border-r border-border">
          <SidebarContent />
        </div>

        {/* Main Content */}
        <div className="lg:pl-64 flex-1">
          {/* Desktop Header */}
          <header className="hidden lg:flex bg-card border-b border-border px-6 py-4 items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">
                {navigation.find(item => isActive(item.href))?.name || "Dashboard"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Balance: $1,250.00
              </Badge>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;