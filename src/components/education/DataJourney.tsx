// =============================================
// File: components/education/DataJourney.tsx
// =============================================
"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Cloud,
  Satellite,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function DataJourney({ onViewed }: { onViewed?: () => void }) {
  useEffect(() => {
    // On mount, mark as viewed (simple heuristic)
    onViewed?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Data Journey</CardTitle>
        <CardDescription>
          How information travels from space to your choices.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-8 gap-3 items-center text-center">
          <div className="col-span-2 p-3 rounded-xl bg-blue-50">
            <Satellite aria-hidden className="mx-auto h-6 w-6 text-blue-600" />
            <div className="text-sm font-semibold">Satellite</div>
          </div>
          <ArrowRight className="hidden sm:block mx-auto text-slate-400" />
          <div className="col-span-2 p-3 rounded-xl bg-sky-50">
            <Cloud aria-hidden className="mx-auto h-6 w-6 text-sky-600" />
            <div className="text-sm font-semibold">Cloud</div>
          </div>
          <ArrowRight className="hidden sm:block mx-auto text-slate-400" />
          <div className="col-span-2 p-3 rounded-xl bg-emerald-50">
            <Smartphone
              aria-hidden
              className="mx-auto h-6 w-6 text-emerald-600"
            />
            <div className="text-sm font-semibold">App</div>
          </div>
          <ArrowRight className="hidden sm:block mx-auto text-slate-400" />
          <div className="col-span-2 p-3 rounded-xl bg-amber-50">
            <Sparkles aria-hidden className="mx-auto h-6 w-6 text-amber-600" />
            <div className="text-sm font-semibold">Your Decision</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
