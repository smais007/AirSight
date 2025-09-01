"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface HealthImpactProps {
  aqi: number; // Current AQI
}

export function HealthImpactIndicator({ aqi }: HealthImpactProps) {
  const [impactMessage, setImpactMessage] = useState("");
  const [impactLevel, setImpactLevel] = useState(0);

  const calculateImpact = () => {
    // Linear approximation for demo:
    // Risk level 0–100 based on AQI
    const level = Math.min(100, Math.max(0, (aqi / 300) * 100)); // assuming 300 max AQI
    setImpactLevel(level);

    // Translate AQI into human terms
    let message = "";
    if (aqi <= 50)
      message = "Air quality is good. No significant health impact.";
    else if (aqi <= 100)
      message =
        "Moderate air quality. Sensitive individuals may experience minor effects.";
    else if (aqi <= 150)
      message =
        "Unhealthy for sensitive groups. Equivalent to ~1 cigarette/day.";
    else if (aqi <= 200)
      message = "Unhealthy for everyone. Equivalent to ~3 cigarettes/day.";
    else if (aqi <= 300)
      message = "Very unhealthy. Equivalent to ~5 cigarettes/day.";
    else message = "Hazardous! Equivalent to ~10 cigarettes/day.";

    setImpactMessage(message);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Health Impact Indicator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Current AQI: <span className="font-semibold">{aqi}</span>
          </p>
        </div>

        <div className="space-y-2">
          <Progress value={impactLevel} className="h-4 rounded-lg" />
          <p className="text-sm font-medium">{impactMessage}</p>
        </div>

        <Button onClick={calculateImpact} className="w-full">
          Calculate Health Impact
        </Button>
      </CardContent>
    </Card>
  );
}
