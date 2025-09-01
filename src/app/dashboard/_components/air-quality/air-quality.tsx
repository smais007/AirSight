"use client";

import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  CloudSunRain,
  Droplets,
  Eye,
  MapPin,
  SatelliteDish,
  ThermometerSun,
  Wind,
  ZapIcon,
} from "lucide-react";
import AQIGauge from "./aqi-gauge";
import { DetailsModal } from "./details-modal";
import React from "react";

export default function AirQuality() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-8 flex-col">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full lg:w-3/5 ">
          <Card className="p-6 ">
            <CardHeader>
              <CardTitle>Current Air Quality Index</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {/* Place your gauge component or image here */}
              <div>
                <AQIGauge />
              </div>
              <div className="text-yellow-500 font-bold text-2xl">78</div>
              <div className="mt-2 text-sm text-gray-500 flex flex-col items-center gap-2">
                <Badge className="h-7  text-md bg-amber-500/80">Moderate</Badge>
                <p>Acceptable for most people</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col  gap-4">
            <Card className="p-6  w-full ">
              <CardHeader>
                <CardTitle>Current Condition</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center w-full justify-between text-muted-foreground pb-3">
                  <div className="flex items-center gap-1.5 ">
                    <ThermometerSun className="size-5" /> <p>Temperature</p>
                  </div>
                  <p className="font-semibold ">22°C</p>
                </div>
                <div className="flex items-center w-full justify-between text-muted-foreground pb-3">
                  <div className="flex items-center gap-1.5 ">
                    <Droplets className="size-5" /> <p>Humidity</p>
                  </div>
                  <p className="font-semibold ">65%</p>
                </div>
                <div className="flex items-center w-full justify-between text-muted-foreground pb-3">
                  <div className="flex items-center gap-1.5 ">
                    <Wind className="size-5" /> <p>Wind Speed</p>
                  </div>
                  <p className="font-semibold ">12 km/h</p>
                </div>
                <div className="flex items-center w-full justify-between text-muted-foreground">
                  <div className="flex items-center gap-1.5 ">
                    <Eye className="size-5" /> <p>Visibility</p>
                  </div>
                  <p className="font-semibold ">8.5 km</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 w-full ">
              <CardHeader>
                <CardTitle>Health Tips</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="border rounded-lg p-2 border-green-500 bg-[#0F2E20] ">
                  <h2 className="font-semibold text-green-300">Recommended</h2>
                  <p className="text-muted-foreground text-sm">
                    Indoor activities are fine for most people
                  </p>
                </div>
                <div className="border rounded-lg p-2 border-red-500 bg-[#3B0A0A] ">
                  <h2 className="font-semibold text-red-300">
                    Sensitive Groups
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Consider reducing outdoor activities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Why today insiges */}
      <BackdropGradient
        className=" opacity-40 w-1/2 h-2/6 6 "
        container="itemes-center"
      >
        <Card className="w-full p-6">
          <div className="flex justify-between">
            <div className="flex gap-1.5 items-center text-gray-300">
              <CloudSunRain className="size-8 hidden md:inline" />
              <h1 className=" text-xl md:text-2xl font-semibold">Why Today?</h1>
              <Badge className="ml-2 ">
                <ZapIcon
                  className="-ms-0.5 opacity-60  "
                  size={12}
                  aria-hidden="true"
                />
                AI Insights
              </Badge>
            </div>
            <div>
              <div
                className="flex items-center text-muted-foreground cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <p className="text-sm">View Details</p>
                <ChevronRight className="ml-2 size-4" />
              </div>

              <DetailsModal open={open} onOpenChange={setOpen} />
            </div>
          </div>
          <Separator />

          <div>
            <div className=" border-l-4 pl-3 border-amber-500/90 rounded-md">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-gray-300" />
                <h2 className="text-xl font-semibold">Washington, DC</h2>
              </div>
              <div className="flex gap-4 py-2">
                <h2 className="text-2xl font-semibold text-amber-500">
                  AQI 125
                </h2>
                <span>
                  <Badge
                    variant="outline"
                    className="gap-1.5 text-amber-500/80"
                  >
                    <span
                      className="size-1.5 rounded-full bg-amber-500"
                      aria-hidden="true"
                    ></span>
                    Unhealthy for Sensitive Groups
                  </Badge>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Today, Sunday, August 24, 2025
              </p>
            </div>
          </div>
          {/* Contributing Factors */}
          <div>
            <h1 className="text-xl text-gray-300 pb-3">Contributing Fectors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <GlassCard className="">
                <div className="px-4">
                  <div className="flex justify-between">
                    <div className="flex items-center  gap-3">
                      <SatelliteDish className="size-10  text-muted-foreground" />
                      <div>
                        <h1 className="font-semibold text-gray-200">
                          TEMPO Satellite Data
                        </h1>
                        <span>
                          <Badge
                            variant="outline"
                            className="gap-1.5 text-red-500"
                          >
                            High Impact
                          </Badge>
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Confidence
                      </p>
                      <p className="text-gray-300 text-sm">85%</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-gray-300">
                      Elevated NO₂ columns detected over metropolitan area
                    </p>
                    <p className="text-xs text-muted-foreground pt-2">
                      NASA TEMPO satellite shows nitrogen dioxide concentrations
                      20% above normal levels
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="">
                <div className="px-4">
                  <div className="flex justify-between">
                    <div className="flex items-center  gap-3">
                      <SatelliteDish className="size-10  text-muted-foreground" />
                      <div>
                        <h1 className="font-semibold text-gray-200">
                          Atmospheric Conditions
                        </h1>
                        <span>
                          <Badge
                            variant="outline"
                            className="gap-1.5 text-amber-500"
                          >
                            Medium Impact
                          </Badge>
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Confidence
                      </p>
                      <p className="text-gray-300 text-sm">95%</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-gray-300">
                      Calm winds reducing pollutant dispersion
                    </p>
                    <p className="text-xs text-muted-foreground pt-2">
                      Wind speeds below 5 mph creating stagnant air conditions
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="">
                <div className="px-4">
                  <div className="flex justify-between">
                    <div className="flex items-center  gap-3">
                      <SatelliteDish className="size-10  text-muted-foreground" />
                      <div>
                        <h1 className="font-semibold text-gray-200">
                          Ground Monitoring
                        </h1>
                        <span>
                          <Badge
                            variant="outline"
                            className="gap-1.5 text-amber-500"
                          >
                            High Impact
                          </Badge>
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Confidence
                      </p>
                      <p className="text-gray-300 text-sm">79%</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-gray-300">
                      PM₂.₅ sensors show rising particulate matter since
                      morning.
                    </p>
                    <p className="text-xs text-muted-foreground pt-2">
                      EPA monitoring stations report 35% increase in fine
                      particulate matter
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="">
                <div className="px-4">
                  <div className="flex justify-between">
                    <div className="flex items-center  gap-3">
                      <SatelliteDish className="size-10  text-muted-foreground" />
                      <div>
                        <h1 className="font-semibold text-gray-200">
                          Traffic Patterns
                        </h1>
                        <span>
                          <Badge
                            variant="outline"
                            className="gap-1.5 text-red-500"
                          >
                            High Impact
                          </Badge>
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Confidence
                      </p>
                      <p className="text-gray-300 text-sm">69%</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-gray-300">
                      Rush hour emissions peak contributing to pollution buildup
                    </p>
                    <p className="text-xs text-muted-foreground pt-2">
                      Vehicle emissions during morning commute affecting air
                      quality
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="flex text-muted-foreground text-[10px] md:text-xs  justify-between">
            <p>Data sources: NASA TEMPO, EPA AirNow, ECMWF</p>
            <p>Model: XGBoost v2.1</p>
          </div>
        </Card>
      </BackdropGradient>
    </div>
  );
}
