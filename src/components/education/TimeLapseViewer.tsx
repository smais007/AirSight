// =============================================
// File: components/education/TimeLapseViewer.tsx
// =============================================
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

export function TimeLapseViewer({ onComplete }: { onComplete?: () => void }) {
  const [t, setT] = useState(0); // 0..5 frames
  const [playing, setPlaying] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => setT((p) => (p + 1) % 6), 900);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  useEffect(() => {
    if (t === 5) onComplete?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Time-Lapse Viewer</CardTitle>
        <CardDescription>
          Scrub through time and watch a playful map change.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying((p) => !p)}
            variant="secondary"
          >
            {playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <input
            aria-label="Timeline scrubber"
            type="range"
            min={0}
            max={5}
            step={1}
            value={t}
            onChange={(e) => setT(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm w-12 text-right">t={t}</div>
        </div>

        {/* Placeholder map preview that changes by frame */}
        <div
          role="img"
          aria-label="Time-lapse map preview"
          className="h-40 rounded-xl border flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(${
              50 + t * 30
            }, 150, 220, 0.5), rgba(240, ${120 + t * 20}, 160, 0.5))`,
          }}
        >
          <div className="text-slate-700">Frame {t + 1} / 6 (placeholder)</div>
        </div>
      </CardContent>
    </Card>
  );
}
