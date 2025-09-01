"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Layers,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Satellite,
  Wind,
  Thermometer,
  Eye,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const MapView = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSlider, setTimeSlider] = useState([12]); // 12 represents current hour
  const [selectedLayers, setSelectedLayers] = useState(["aqi", "wind"]);

  const layers = [
    { id: "aqi", name: "AQI Forecast", icon: Eye, color: "primary" },
    { id: "wind", name: "Wind Patterns", icon: Wind, color: "accent" },
    { id: "temp", name: "Temperature", icon: Thermometer, color: "orange-500" },
    {
      id: "satellite",
      name: "Satellite Data",
      icon: Satellite,
      color: "purple-500",
    },
  ];

  const toggleLayer = (layerId: string) => {
    setSelectedLayers((prev) =>
      prev.includes(layerId)
        ? prev.filter((id) => id !== layerId)
        : [...prev, layerId]
    );
  };

  const formatTime = (hour: number) => {
    const date = new Date();
    date.setHours(hour, 0, 0, 0);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="space-y-6 w-full">
      {/* Map Container */}
      <Card className="shadow-elevated py-0">
        <CardContent className="p-0">
          <div className="relative w-full h-[600px] bg-gradient-sky rounded-lg overflow-hidden">
            {/* Placeholder Map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Image
                  src="/images/tempo-map.jpg"
                  alt="Tempo Sattellite "
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 space-y-2">
              {selectedLayers.map((layerId) => {
                const layer = layers.find((l) => l.id === layerId);
                return layer ? (
                  <div
                    key={layerId}
                    className="flex items-center space-x-2 bg-muted backdrop-blur-sm px-3 py-2 rounded-lg shadow-soft"
                  >
                    <layer.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{layer.name}</span>
                  </div>
                ) : null;
              })}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-muted backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <h4 className="text-sm font-semibold mb-3">AQI Scale</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="size-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs">0-50 Good</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="size-2.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs">51-100 Moderate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="size-2.5 bg-amber-500 rounded-full"></div>
                  <span className="text-xs">101-150 Sensitive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="size-2.5 bg-red-500 rounded-full"></div>
                  <span className="text-xs">151-200 Unhealthy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="size-2.5 bg-violet-500 rounded-full"></div>
                  <span className="text-xs">200+ Very Unhealthy</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Map Controls Header */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Time Controls */}
            <div className="flex items-center space-x-4">
              <Button
                variant={isPlaying ? "destructive" : "default"}
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Badge variant="secondary">{formatTime(timeSlider[0])}</Badge>
            </div>

            {/* Layer Controls */}
            <div className="flex items-center space-x-2">
              <div className="flex gap-1 items-center ">
                <Layers className="h-4 w-4 text-muted-foreground hidden md:block" />
                <span className="text-sm font-medium text-muted-foreground">
                  Active Layers:
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {layers.map((layer) => (
                  <Button
                    key={layer.id}
                    variant={
                      selectedLayers.includes(layer.id) ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => toggleLayer(layer.id)}
                    className="h-8"
                  >
                    <layer.icon className="h-3 w-3 mr-1" />
                    {layer.name}
                  </Button>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Time Slider */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Forecast Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="px-2">
              <Slider
                value={timeSlider}
                onValueChange={setTimeSlider}
                max={23}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground px-2">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>11 PM</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium">
                Showing forecast for {formatTime(timeSlider[0])}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Selected Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Current AQI</span>
                <span className="font-medium text-aqi-moderate">78</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">1hr Forecast</span>
                <span className="font-medium text-aqi-moderate">82</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">3hr Forecast</span>
                <span className="font-medium text-aqi-unhealthy-sensitive">
                  105
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Peak Today</span>
                <span className="font-medium text-aqi-unhealthy-sensitive">
                  125
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Data Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">TEMPO Coverage</span>
                <Badge variant="secondary">High</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Ground Sensors</span>
                <Badge variant="secondary">12 Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Weather Data</span>
                <Badge variant="secondary">Live</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Model Confidence</span>
                <Badge variant="secondary">89%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map toggle */}
      </div>
    </div>
  );
};

export default MapView;
