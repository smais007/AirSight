"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { MapView } from "@deck.gl/core";
import Image from "next/image";

interface DataPoint {
  longitude: number;
  latitude: number;
  value: number;
}

interface SatelliteGroundMapProps {
  satelliteData: DataPoint[];
  groundData: DataPoint[];
}

export function SatelliteGroundMap({
  satelliteData,
  groundData,
}: SatelliteGroundMapProps) {
  const [useSatellite, setUseSatellite] = useState(true);
  const data = useSatellite ? satelliteData : groundData;

  const scatterLayer = new ScatterplotLayer({
    id: "scatter-layer",
    data,
    getPosition: (d) => [d.longitude, d.latitude],
    getFillColor: (d) => {
      const val = Math.min(255, (d.value / 300) * 255);
      return [val, 255 - val, 0];
    },
    getRadius: 5000,
    pickable: true,
    radiusMinPixels: 5,
    radiusMaxPixels: 15,
  });

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Air Quality Map</CardTitle>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Satellite</span>
          <Toggle
            pressed={!useSatellite}
            onPressedChange={() => setUseSatellite(!useSatellite)}
          />
          <span className="text-sm text-muted-foreground">Ground</span>
        </div>
      </CardHeader>
      <CardContent className="h-[500px]">
        <DeckGL
          initialViewState={{
            longitude: 90.4125,
            latitude: 23.8103,
            zoom: 10,
            pitch: 0,
            bearing: 0,
          }}
          controller={true}
          layers={[scatterLayer]}
          views={[new MapView({ repeat: true })]}
        >
          <div>
            <Image
              src="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
              unoptimized
            />
          </div>
        </DeckGL>
      </CardContent>
    </Card>
  );
}
