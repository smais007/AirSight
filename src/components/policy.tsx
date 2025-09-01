"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PolicyDashboardProps {
  baselineAQI: number; // Current AQI for the selected city
  trafficSensitivity?: number; // How much AQI changes per 1% traffic reduction
}

export function PolicyDashboard({
  baselineAQI,
  trafficSensitivity = 0.5,
}: PolicyDashboardProps) {
  const [trafficReduction, setTrafficReduction] = useState(0);
  const [predictedAQI, setPredictedAQI] = useState(baselineAQI);

  const handleSimulation = () => {
    // Linear approximation: AQI reduction = trafficReduction * sensitivity
    const reduction = trafficReduction * trafficSensitivity;
    setPredictedAQI(Math.max(0, baselineAQI - reduction));
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Policy Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="traffic-slider">Traffic Reduction (%)</Label>
          <Slider
            id="traffic-slider"
            value={[trafficReduction]}
            onValueChange={(value) => setTrafficReduction(value[0])}
            max={100}
          />
          <p className="mt-2 text-sm text-muted-foreground">
            {trafficReduction}% traffic reduction
          </p>
        </div>

        <div className="space-y-2">
          <p>
            Current AQI: <span className="font-semibold">{baselineAQI}</span>
          </p>
          <p>
            Predicted AQI after simulation:{" "}
            <span className="font-semibold">{predictedAQI.toFixed(1)}</span>
          </p>
        </div>

        <Button onClick={handleSimulation} className="w-full">
          Run Simulation
        </Button>
      </CardContent>
    </Card>
  );
}
