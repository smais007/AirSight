import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Activity, Shield } from "lucide-react";
import React from "react";

const Model = () => {
  return (
    <div>
      <BackdropGradient className="opacity-20 w-1/2 h-2/6 6">
        <GlassCard className="px-6">
          <div className="flex gap-2  flex-col md:flex-row ">
            <div className="flex gap-2 items-center">
              <Shield className="size-6" />
              <h1 className="text-xl font-semibold">
                Model Transparency & Uncertainty
              </h1>
            </div>
            <div>
              <Badge className="bg-muted text-gray-200">
                Updated 2024-01-15
              </Badge>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-4">
            <Card className="w-full md:w-1/4 p-4">
              <Activity />
              <h1>91.3%</h1>
              <p>Accuracy</p>
            </Card>
            <Card className="w-full md:w-1/4 p-4">
              <Activity />
              <h1>91.3%</h1>
              <p>Accuracy</p>
            </Card>
            <Card className="w-full md:w-1/4 p-4">
              <Activity />
              <h1>91.3%</h1>
              <p>Accuracy</p>
            </Card>
            <Card className="w-full md:w-1/4 p-4">
              <Activity />
              <h1>91.3%</h1>
              <p>Accuracy</p>
            </Card>
          </div>

          <div className="">
            <div>
              <h1 className="text-gray-300 font-semibold">
                Model Architecture & Training
              </h1>
            </div>
            <div className="flex flex-col  lg:flex-row justify-between gap-0 lg:gap-6">
              <div className="lg:w-1/2 w-full">
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">Algorithm</p>
                  <p className="text-right text-muted-foreground font-semibold">
                    XGBoost Ensemble
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Training Data
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    2+ years historical
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">Features</p>
                  <p className="text-right text-muted-foreground font-semibold">
                    45 input variables
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Update Frequency
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    Every 6 hours
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Validation Method
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    Time-series CV
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Bias Correction
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    Ground truth calibrated
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Uncertainty Estimation
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    Quantile regression
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-muted-foreground">
                    Spatial Resolution
                  </p>
                  <p className="text-right text-muted-foreground font-semibold">
                    0.1° × 0.1°
                  </p>
                </div>
              </div>
            </div>
            <Card className="px-4 bg-green-500/10 mt-6">
              <h3 className="text-green-400">Know Limitations</h3>
              <div>
                <ul className="text-muted-foreground text-sm">
                  <li>• Accuracy may decrease during extreme weather events</li>
                  <li>
                    • Limited coverage in remote areas with sparse sensor
                    networks
                  </li>
                  <li>• Forecasts beyond 24 hours have reduced confidence</li>
                  <li>
                    • Indoor air quality not directly measured or predicted
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </GlassCard>
      </BackdropGradient>
    </div>
  );
};

export default Model;
