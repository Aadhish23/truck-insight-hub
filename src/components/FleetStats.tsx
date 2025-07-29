import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Fuel, AlertTriangle, MapPin } from "lucide-react";

const FleetStats = () => {
  const stats = [
    {
      title: "Active Vehicles",
      value: "247",
      change: "+12 today",
      icon: Truck,
      variant: "primary" as const,
    },
    {
      title: "Fuel Efficiency",
      value: "8.2L",
      change: "+5% vs last week",
      icon: Fuel,
      variant: "success" as const,
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "2 drowsiness alerts",
      icon: AlertTriangle,
      variant: "warning" as const,
    },
    {
      title: "Routes Active",
      value: "89",
      change: "12 completed today",
      icon: MapPin,
      variant: "primary" as const,
    },
  ];

  const getCardStyles = (variant: string) => {
    switch (variant) {
      case "primary":
        return "shadow-fleet border-primary/20";
      case "success":
        return "shadow-success border-success/20";
      case "warning":
        return "shadow-alert border-accent/20";
      default:
        return "";
    }
  };

  const getIconStyles = (variant: string) => {
    switch (variant) {
      case "primary":
        return "text-primary bg-primary/10";
      case "success":
        return "text-success bg-success/10";
      case "warning":
        return "text-accent bg-accent/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className={`${getCardStyles(stat.variant)} transition-all duration-300 hover:scale-105`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${getIconStyles(stat.variant)}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FleetStats;