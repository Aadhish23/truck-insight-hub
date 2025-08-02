import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Zap, AlertTriangle } from "lucide-react";

interface DriverStatusCardProps {
  driverName: string;
  status: "awake" | "drowsy" | "unresponsive";
  lastAlert?: string;
}

const statusConfig = {
  awake: {
    label: "ONLINE",
    icon: Zap,
    variant: "default" as const,
    cardClass: "glass-card border-2 border-success/50 hover:border-success hover:shadow-[0_0_30px_hsl(var(--success)/0.3)]",
    badgeClass: "bg-gradient-to-r from-success to-green-400 text-success-foreground",
    glowClass: "shadow-[0_0_20px_hsl(var(--success)/0.5)]",
  },
  drowsy: {
    label: "ALERT",
    icon: AlertTriangle,
    variant: "secondary" as const,
    cardClass: "glass-card border-2 border-warning/50 hover:border-warning hover:shadow-[0_0_30px_hsl(var(--warning)/0.3)]",
    badgeClass: "bg-gradient-to-r from-warning to-yellow-400 text-warning-foreground",
    glowClass: "shadow-[0_0_20px_hsl(var(--warning)/0.5)]",
  },
  unresponsive: {
    label: "CRITICAL",
    icon: AlertTriangle,
    variant: "destructive" as const,
    cardClass: "glass-card border-2 border-destructive/50 hover:border-destructive hover:shadow-[0_0_30px_hsl(var(--destructive)/0.3)] animate-pulse",
    badgeClass: "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground",
    glowClass: "shadow-[0_0_20px_hsl(var(--destructive)/0.5)]",
  },
};

export function DriverStatusCard({ driverName, status, lastAlert }: DriverStatusCardProps) {
  const config = statusConfig[status];

  return (
    <Card
      className={`
        ${config.cardClass} transition-all duration-500 hover:scale-105 group overflow-hidden
      `}
    >
      <CardHeader className="pb-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`glass rounded-2xl p-3 ${config.glowClass} group-hover:scale-110 transition-all duration-300`}>
              <User className="h-8 w-8 text-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl text-foreground tracking-wide">
                {driverName}
              </h3>
              <p className="text-muted-foreground text-sm">Fleet Driver</p>
            </div>
          </div>
          <div className="text-right space-y-2">
            <Badge
              className={`${config.badgeClass} px-4 py-2 text-sm font-bold tracking-wider rounded-xl ${config.glowClass}`}
            >
              <config.icon className="mr-2 h-4 w-4" />
              {config.label}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {lastAlert ? (
            <div className="glass rounded-lg p-3">
              <p className="text-sm text-muted-foreground">Last Alert</p>
              <p className="font-semibold text-foreground">{lastAlert}</p>
            </div>
          ) : (
            <div className="glass rounded-lg p-3">
              <p className="text-sm text-muted-foreground italic">No recent alerts</p>
              <p className="font-semibold text-success">All systems normal</p>
            </div>
          )}
          
          <div className="flex gap-2">
            <div className="glass rounded-lg p-2 flex-1 text-center">
              <p className="text-xs text-muted-foreground">Status</p>
              <p className="font-bold text-sm text-foreground">Active</p>
            </div>
            <div className="glass rounded-lg p-2 flex-1 text-center">
              <p className="text-xs text-muted-foreground">Route</p>
              <p className="font-bold text-sm text-foreground">A-{Math.floor(Math.random() * 100) + 1}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}