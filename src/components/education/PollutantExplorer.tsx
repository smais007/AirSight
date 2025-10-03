// =============================================
// File: components/education/PollutantExplorer.tsx
// =============================================
"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car, Factory, Sun, CloudSun } from "lucide-react";

export type PollutantKey = "NO2" | "O3" | "SO2" | "PM25";

const pollutantMeta: Record<
  PollutantKey,
  {
    icon: React.ReactElement;
    label: string;
    source: string;
    impact: string;
    details: string;
  }
> = {
  NO2: {
    icon: <Car className="h-5 w-5" aria-hidden />,
    label: "NO₂",
    source: "Cars and trucks",
    impact: "Can irritate lungs",
    details:
      "Nitrogen dioxide often comes from vehicle exhaust. High levels can worsen asthma and reduce lung function.",
  },
  O3: {
    icon: <Sun className="h-5 w-5" aria-hidden />,
    label: "O₃",
    source: "Sunlight + pollution",
    impact: "Makes breathing hard",
    details:
      "Ozone at ground level forms when sunlight reacts with other pollutants. It can cause chest pain and coughing.",
  },
  SO2: {
    icon: <Factory className="h-5 w-5" aria-hidden />,
    label: "SO₂",
    source: "Factories and power plants",
    impact: "Irritates airways",
    details:
      "Sulfur dioxide mainly comes from burning fuels at power plants and industry. It can trigger asthma symptoms.",
  },
  PM25: {
    icon: <CloudSun className="h-5 w-5" aria-hidden />,
    label: "PM2.5",
    source: "Tiny dust and smoke",
    impact: "Reaches deep in lungs",
    details:
      "Fine particles are tiny pieces of dust, smoke, and soot. They can travel deep into the lungs and even the blood.",
  },
};

export function PollutantExplorer({ onComplete }: { onComplete?: () => void }) {
  const [visited, setVisited] = useState<Set<PollutantKey>>(new Set());

  useEffect(() => {
    if (visited.size === 4) onComplete?.();
  }, [visited, onComplete]);

  const markVisited = (key: PollutantKey) => {
    setVisited((prev) => new Set(prev).add(key));
  };

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Pollutant Explorer</CardTitle>
        <CardDescription>
          Tap each tab to learn quick facts. Unlock the Pollution Detective
          badge by viewing all four.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="NO2" className="w-full">
          <TabsList className="flex flex-wrap">
            {Object.entries(pollutantMeta).map(([key, meta]) => (
              <TabsTrigger
                key={key}
                value={key}
                onClick={() => markVisited(key as PollutantKey)}
              >
                <span className="mr-2" aria-hidden>
                  {meta.icon}
                </span>
                {meta.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(pollutantMeta).map(([key, meta]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <Card className="border bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span aria-hidden>{meta.icon}</span> {meta.label}
                  </CardTitle>
                  <CardDescription>
                    <span className="font-medium">Source:</span> {meta.source} •{" "}
                    <span className="font-medium">Health:</span> {meta.impact}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-slate-700 max-w-prose">{meta.details}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        aria-label={`Learn more about ${meta.label}`}
                        variant="outline"
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>More about {meta.label}</DialogTitle>
                      </DialogHeader>
                      <div className="text-sm text-slate-700">
                        <p>
                          Placeholder extended content for {meta.label}. Add
                          charts, links, and maps here later. All content is
                          simplified for learning.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
