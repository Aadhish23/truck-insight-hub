import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Fuel } from "lucide-react";

const FuelChart = () => {
  const weeklyData = [
    { day: "Mon", consumption: 1200 },
    { day: "Tue", consumption: 1100 },
    { day: "Wed", consumption: 1350 },
    { day: "Thu", consumption: 980 },
    { day: "Fri", consumption: 1250 },
    { day: "Sat", consumption: 800 },
    { day: "Sun", consumption: 600 },
  ];

  const fuelLevels = [
    { name: "Good (80-100%)", value: 65, color: "hsl(var(--success))" },
    { name: "Medium (50-79%)", value: 25, color: "hsl(var(--accent))" },
    { name: "Low (<50%)", value: 10, color: "hsl(var(--destructive))" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Fuel className="h-5 w-5 text-primary" />
            <span>Weekly Fuel Consumption</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Bar 
                dataKey="consumption" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Fuel className="h-5 w-5 text-primary" />
            <span>Fleet Fuel Levels</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={fuelLevels}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {fuelLevels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {fuelLevels.map((level, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: level.color }}
                  ></div>
                  <span>{level.name}</span>
                </div>
                <span className="font-medium">{level.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FuelChart;