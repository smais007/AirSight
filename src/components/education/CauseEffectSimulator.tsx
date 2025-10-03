// =============================================
// File: components/education/CauseEffectSimulator.tsx
// =============================================
"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export function CauseEffectSimulator({
  onFirstInteract,
}: {
  onFirstInteract?: () => void;
}) {
  const [traffic, setTraffic] = useState<number>(0); // percent reduction
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (traffic > 0 && !interacted) {
      setInteracted(true);
      onFirstInteract?.();
    }
  }, [traffic, interacted, onFirstInteract]);

  // Simulate pollution decrease (simple linear scale)
  const pollutionIndex = Math.max(0, 100 - traffic);

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Cause & Effect Simulator</CardTitle>
        <CardDescription>
          Reduce traffic and watch the pollution index go down on the map
          preview.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="traffic-slider" className="text-sm font-medium">
            Reduce traffic by {traffic}%
          </label>
          <Slider
            id="traffic-slider"
            aria-label="Reduce traffic percentage"
            defaultValue={[0]}
            max={100}
            step={5}
            onValueChange={(v) => setTraffic(v[0])}
          />
        </div>

        {/* Placeholder map card */}
        <div
          role="img"
          aria-label="Map preview with pollution colors"
          className="h-40 rounded-xl border bg-gradient-to-br from-red-200 via-orange-200 to-green-200 flex items-center justify-center"
          style={{
            filter: `saturate(${1 - traffic / 150}) brightness(${
              1 + traffic / 300
            })`,
          }}
        >
          <div className="text-center">
            <div className="text-sm text-slate-700">
              Simulated Pollution Index
            </div>
            <div className="text-3xl font-bold">{pollutionIndex}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
