import { useEffect, useState } from "react";
import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card";
import { Truck, Fuel, AlertTriangle, MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// Simulated API hook
const useFleetStats = () => {
  const [data, setData] = useState<null | typeof initialStats>(null);

  useEffect(() => {
    setTimeout(() => setData(initialStats), 1200);
  }, []);

  return data;
};

const initialStats = [
  {
    title: "Active Vehicles",
    value: "247",
    change: "+12 today",
    icon: Truck,
    variant: "primary" as const,
    tooltip: "Fleet vehicles currently operational",
  },
  {
    title: "Fuel Efficiency",
    value: "8.2L / 100km",
    change: "+5% vs last week",
    icon: Fuel,
    variant: "success" as const,
    tooltip: "Average consumption across all trucks",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "2 drowsiness, 1 low fuel",
    icon: AlertTriangle,
    variant: "warning" as const,
    tooltip: "Live alert count in system",
  },
  {
    title: "Routes Active",
    value: "89",
    change: "12 completed today",
    icon: MapPin,
    variant: "primary" as const,
    tooltip: "Ongoing fleet routes",
  },
];

const variantStyles = {
  primary: {
    card: "glass-card border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
    icon: "text-primary bg-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.5)]",
    glow: "neon-glow",
  },
  success: {
    card: "glass-card border-2 border-success/50 hover:border-success hover:shadow-[0_0_30px_hsl(var(--success)/0.4)]",
    icon: "text-success bg-success/20 shadow-[0_0_15px_hsl(var(--success)/0.5)]",
    glow: "shadow-[0_0_20px_hsl(var(--success)/0.5)]",
  },
  warning: {
    card: "glass-card border-2 border-accent/50 hover:border-accent hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]",
    icon: "text-accent bg-accent/20 shadow-[0_0_15px_hsl(var(--accent)/0.5)]",
    glow: "shadow-[0_0_20px_hsl(var(--accent)/0.5)]",
  },
};

export default function FleetStats() {
  const stats = useFleetStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {(stats ?? Array(4).fill(null)).map((stat, index) => {
        const variant = stat?.variant ?? "primary";
        const style = variantStyles[variant];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group"
          >
            <Card className={`${style.card} transition-all duration-500 hover:scale-105 overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <CardHeader className="flex flex-row items-center justify-between pb-4 space-y-0 relative z-10">
                <div className="space-y-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CardTitle className="text-sm font-medium text-muted-foreground cursor-help uppercase tracking-wider">
                        {stat?.title ?? <Skeleton className="h-4 w-28" />}
                      </CardTitle>
                    </TooltipTrigger>
                    <TooltipContent className="glass-card border border-primary/30">
                      {stat?.tooltip ?? "Loading..."}
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className={`p-3 rounded-2xl ${style.icon} group-hover:scale-110 transition-all duration-300`}>
                  {stat?.icon ? <stat.icon className="h-6 w-6" /> : <Skeleton className="h-6 w-6" />}
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {stat?.value ? (
                  <div className="text-3xl font-bold mb-2 text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    {stat.value}
                  </div>
                ) : (
                  <Skeleton className="h-8 w-20 mb-2" />
                )}
                {stat?.change ? (
                  <div className="glass rounded-lg p-2">
                    <p className="text-sm text-muted-foreground font-medium">{stat.change}</p>
                  </div>
                ) : (
                  <Skeleton className="h-6 w-32" />
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
