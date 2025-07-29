import DashboardHeader from "@/components/DashboardHeader";
import FleetStats from "@/components/FleetStats";
import TruckMap from "@/components/TruckMap";
import AlertsPanel from "@/components/AlertsPanel";
import FuelChart from "@/components/FuelChart";
import heroImage from "@/assets/dashboard-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <DashboardHeader />
      
      {/* Hero Section */}
      <div className="relative h-32 md:h-48 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Fleet Dashboard Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Fleet Command Center</h2>
            <p className="text-sm md:text-lg opacity-90">Real-time monitoring & AI-powered insights</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-8">
        <FleetStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <TruckMap />
          <AlertsPanel />
        </div>
        
        <FuelChart />
      </div>
    </div>
  );
};

export default Index;
