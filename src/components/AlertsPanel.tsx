import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Fuel, Eye, Clock } from "lucide-react";

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "drowsiness",
      driver: "Maria Garcia",
      vehicle: "TRK-002",
      message: "Drowsiness detected - immediate attention required",
      timestamp: "2 min ago",
      severity: "high",
      icon: Eye,
    },
    {
      id: 2,
      type: "fuel",
      driver: "Sarah Johnson",
      vehicle: "TRK-004",
      message: "Low fuel level - 15% remaining",
      timestamp: "8 min ago",
      severity: "medium",
      icon: Fuel,
    },
    {
      id: 3,
      type: "maintenance",
      driver: "Mike Wilson",
      vehicle: "TRK-007",
      message: "Scheduled maintenance due in 50 miles",
      timestamp: "1 hour ago",
      severity: "low",
      icon: Clock,
    },
  ];

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          bgClass: "glass-card border-2 border-destructive/50 hover:border-destructive hover:shadow-[0_0_20px_hsl(var(--destructive)/0.3)]",
          iconClass: "text-destructive bg-destructive/10 shadow-[0_0_10px_hsl(var(--destructive)/0.3)]",
          badgeClass: "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground",
        };
      case "medium":
        return {
          bgClass: "glass-card border-2 border-warning/50 hover:border-warning hover:shadow-[0_0_20px_hsl(var(--warning)/0.3)]",
          iconClass: "text-warning bg-warning/10 shadow-[0_0_10px_hsl(var(--warning)/0.3)]",
          badgeClass: "bg-gradient-to-r from-warning to-yellow-400 text-warning-foreground",
        };
      case "low":
        return {
          bgClass: "glass-card border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
          iconClass: "text-primary bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.3)]",
          badgeClass: "bg-gradient-to-r from-primary to-blue-400 text-primary-foreground",
        };
      default:
        return {
          bgClass: "glass-card border-2 border-muted/50 hover:border-muted",
          iconClass: "text-muted-foreground bg-muted/10",
          badgeClass: "bg-gradient-to-r from-muted to-gray-400 text-muted-foreground",
        };
    }
  };

  return (
    <Card className="glass-card border-2 border-accent/30 hover:border-accent/60 transition-all duration-500">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 glass rounded-xl">
            <AlertTriangle className="h-6 w-6 text-accent animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              THREAT MATRIX
            </h3>
            <p className="text-sm text-muted-foreground">Real-time monitoring</p>
          </div>
          <Badge className="bg-gradient-to-r from-accent to-cyan-400 text-accent-foreground px-3 py-1 font-bold">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.length === 0 && (
          <div className="text-center py-12 space-y-4">
            <div className="glass rounded-full p-6 w-fit mx-auto">
              <AlertTriangle className="h-12 w-12 text-success" />
            </div>
            <div>
              <h4 className="font-bold text-success text-lg">All Systems Operational</h4>
              <p className="text-muted-foreground">No active threats detected</p>
            </div>
          </div>
        )}
        {alerts.map((alert) => {
          const config = getSeverityConfig(alert.severity);
          return (
            <div
              key={alert.id}
              className={`
                ${config.bgClass} p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group
              `}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl ${config.iconClass} group-hover:scale-110 transition-all duration-300`}>
                  <alert.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={`${config.badgeClass} px-3 py-1 font-bold text-xs tracking-wider rounded-lg`}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <span className="text-sm font-bold text-foreground bg-muted/30 px-2 py-1 rounded">
                      {alert.vehicle}
                    </span>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      {alert.driver} • {alert.timestamp}
                    </span>
                    <Button variant="cyber" size="sm" className="h-8 text-xs">
                      ANALYZE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Button variant="neon" className="w-full mt-6" size="lg">
          ACCESS FULL THREAT LOG
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;