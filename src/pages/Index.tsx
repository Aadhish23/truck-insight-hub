import DashboardHeader from "@/components/DashboardHeader";
import FleetStats from "@/components/FleetStats";
import TruckMap from "@/components/TruckMap";
import AlertsPanel from "@/components/AlertsPanel";
import FuelChart from "@/components/FuelChart";
import { DriverStatusCard } from "@/components/DriverStatusCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fleet-hero.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const Index = () => {
  return (
    <div className="flex-1 min-h-screen">
      {/* Top Dashboard Header */}
      <DashboardHeader />

      {/* Futuristic Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden rounded-3xl mx-6 mt-6 shadow-2xl">
        <img
          src={heroImage}
          alt="Modern Fleet Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purple-900/40 to-cyan-900/40">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              NEXUS FLEET
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light">
              Next-Gen Fleet Intelligence Platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button variant="cyber" size="lg">
                Live Monitoring
              </Button>
              <Button variant="neon" size="lg">
                AI Analytics
              </Button>
              <Button variant="plasma" size="lg">
                Fleet Control
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Fleet Stats Overview */}
        <section className="relative">
          <div className="absolute inset-0 rounded-3xl opacity-20" style={{backgroundImage: `url(${patternBg})`}}></div>
          <FleetStats />
        </section>

        {/* Driver Status Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Driver Monitoring
            </h2>
            <p className="text-muted-foreground text-lg">Real-time driver status and alertness tracking</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <DriverStatusCard
              driverName="Ravi Kumar"
              status="drowsy"
              lastAlert="2025-07-29 09:15 AM"
            />
            <DriverStatusCard
              driverName="Meena Devi"
              status="awake"
              lastAlert="2025-07-29 08:00 AM"
            />
            <DriverStatusCard
              driverName="Sundar"
              status="unresponsive"
              lastAlert="2025-07-29 06:20 AM"
            />
          </div>
        </section>

        {/* Fleet Operations Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
              Fleet Operations
            </h2>
            <p className="text-muted-foreground text-lg">Live tracking and intelligent alerts</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <TruckMap />
            </div>
            <div className="space-y-4">
              <AlertsPanel />
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Fleet Analytics
            </h2>
            <p className="text-muted-foreground text-lg">Data-driven insights for optimal performance</p>
          </div>
          <FuelChart />
        </section>
      </div>
    </div>
  );
};

export default Index;
