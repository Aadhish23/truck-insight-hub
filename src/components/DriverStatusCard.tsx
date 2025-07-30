import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";

interface DriverStatusCardProps {
  driverName: string;
  status: "awake" | "drowsy" | "unresponsive";
  lastAlert?: string;
}

const statusConfig = {
  awake: {
    label: "Awake",
    emoji: "🟢",
    variant: "default" as const,
    bgClass: "bg-success/10 border-success/20"
  },
  drowsy: {
    label: "Drowsy", 
    emoji: "🟠",
    variant: "secondary" as const,
    bgClass: "bg-warning/10 border-warning/20"
  },
  unresponsive: {
    label: "Unresponsive",
    emoji: "🔴", 
    variant: "destructive" as const,
    bgClass: "bg-destructive/10 border-destructive/20"
  }
};

export function DriverStatusCard({ driverName, status, lastAlert }: DriverStatusCardProps) {
  const config = statusConfig[status];
  
  return (
    <Card className={`${config.bgClass} transition-all duration-300 hover:shadow-md`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm">{driverName}</span>
          </div>
          <Badge variant={config.variant} className="text-xs">
            <span className="mr-1">{config.emoji}</span>
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {lastAlert && (
          <div className="text-xs text-muted-foreground">
            Last alert: {lastAlert}
          </div>
        )}
      </CardContent>
    </Card>
  );
}