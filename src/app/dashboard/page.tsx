import React from "react";
import AirQuality from "./_components/air-quality/air-quality";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import MapView from "./_components/map-view/map";
import PlannerTab from "./_components/planner/planner";
import AlertsTab from "./_components/alerts/alerts";
import SystemInfoTab from "./_components/system-info/system-info";
import HomeIcon from "@/icons/hero-icons/home";
import MapIcon from "@/icons/hero-icons/map";
import PlannerIcon from "@/icons/hero-icons/calendar";
import AlertsIcon from "@/icons/hero-icons/alert";
import SystemIcon from "@/icons/hero-icons/info";

const Dashboard = () => {
  const tabs = [
    { value: "home", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { value: "map", label: "Map View", icon: <MapIcon className="w-5 h-5" /> },
    {
      value: "planner",
      label: "Daily Planner",
      icon: <PlannerIcon className="w-5 h-5" />,
    },
    {
      value: "alerts",
      label: "Alerts",
      icon: <AlertsIcon className="w-5 h-5" />,
    },
    {
      value: "system",
      label: "System Info",
      icon: <SystemIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full container mx-auto py-6">
      <Tabs defaultValue="home" className="w-full">
        <Card className="sticky top-10 md:top-16 z-50 bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-2 rounded-xl w-fit mx-auto mb-10">
          <CardContent className="p-0 flex gap-2">
            <TabsList className="flex gap-2 bg-transparent">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "rounded-md flex gap-2 py-2 px-4 items-center transition",
                    "data-[state=active]:bg-[#09090B] data-[state=active]:border-[#27272A]"
                  )}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </CardContent>
        </Card>

        <TabsContent value="home" className="mt-6">
          <AirQuality />
        </TabsContent>
        <TabsContent value="map" className="mt-6">
          <MapView />
        </TabsContent>
        <TabsContent value="planner" className="mt-6">
          <PlannerTab />
        </TabsContent>
        <TabsContent value="alerts" className="mt-6">
          <AlertsTab />
        </TabsContent>
        <TabsContent value="system" className="mt-6">
          <SystemInfoTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
