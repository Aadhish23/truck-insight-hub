import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Truck, AlertCircle } from "lucide-react";

const TruckMap = () => {
  const trucks = [
    { id: "TRK-001", driver: "John Smith", location: "Highway I-95", status: "active", fuel: 85 },
    { id: "TRK-002", driver: "Maria Garcia", location: "Route 66", status: "drowsy", fuel: 42 },
    { id: "TRK-003", driver: "David Chen", location: "I-10 West", status: "active", fuel: 76 },
    { id: "TRK-004", driver: "Sarah Johnson", location: "US-101", status: "low-fuel", fuel: 15 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-success bg-success/10";
      case "drowsy":
        return "text-accent bg-accent/10";
      case "low-fuel":
        return "text-destructive bg-destructive/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "drowsy":
        return "Drowsy Alert";
      case "low-fuel":
        return "Low Fuel";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Live Fleet Tracking</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-dashboard rounded-lg p-6 min-h-[400px]">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
          
          {/* Map Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-foreground/20"></div>
              ))}
            </div>
          </div>

          {/* Truck Markers */}
          <div className="relative h-full">
            {trucks.map((truck, index) => (
              <div
                key={truck.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + index * 15}%`,
                }}
              >
                <div className={`p-2 rounded-full ${getStatusColor(truck.status)} group-hover:scale-110 transition-transform`}>
                  <Truck className="h-4 w-4" />
                </div>
                
                {/* Truck Info Popup */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
                    <div className="text-sm font-semibold">{truck.id}</div>
                    <div className="text-xs text-muted-foreground">{truck.driver}</div>
                    <div className="text-xs text-muted-foreground">{truck.location}</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs px-2 py-1 rounded ${getStatusColor(truck.status)}`}>
                        {getStatusText(truck.status)}
                      </span>
                      <span className="text-xs text-muted-foreground">⛽ {truck.fuel}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Route Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 80 120 Q 200 80 320 160 T 600 200"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default TruckMap;