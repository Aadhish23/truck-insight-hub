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

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-accent text-accent-foreground";
      case "low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getIconStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-destructive bg-destructive/10";
      case "medium":
        return "text-accent bg-accent/10";
      case "low":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-accent" />
          <span>Active Alerts</span>
          <Badge variant="secondary" className="ml-auto">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className={`p-2 rounded-lg ${getIconStyles(alert.severity)}`}>
              <alert.icon className="h-4 w-4" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Badge className={getSeverityStyles(alert.severity)}>
                  {alert.severity.toUpperCase()}
                </Badge>
                <span className="text-sm font-medium">{alert.vehicle}</span>
              </div>
              <p className="text-sm text-foreground">{alert.message}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  {alert.driver} • {alert.timestamp}
                </span>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full" size="sm">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;