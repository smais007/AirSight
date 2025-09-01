import GradientText from "@/components/global/gradient-text";
import { Card } from "@/components/ui/card";
import React from "react";

import UserIcon from "@/icons/iconify/user";
import SettingsIcon from "@/icons/iconify/setting";
import WorldIcon from "@/icons/iconify/world";

const About = () => {
  return (
    <div>
      <GradientText
        className="text-[35px] text-center md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        AirSight
      </GradientText>
      <p className="text-muted-foreground text-center max-w-5xl mx-auto">
        AirSight turns NASA TEMPO satellite data into hyperlocal air quality
        forecasts, using explainable AI to deliver insights that are easy to
        understand and act on. It provides real-time, actionable updates to help
        users protect their health, offering personalized guidance so people can
        plan their day with clean air in mind, making air quality data simple,
        practical, and tailored to each individual.
      </p>
      <div className="py-10">
        <div className="flex md:flex-row w-full justify-between gap-5 flex-col ">
          <Card className="p-4 w-full items-center">
            <WorldIcon className="size-10 -mb-4" />
            <h1 className="font-semibold text-muted-foreground text-lg">
              Real-time Data
            </h1>
            <p className="text-muted-foreground/70 -mt-6">Global coverage</p>
          </Card>
          <Card className="w-full items-center">
            <SettingsIcon className="size-10 -mb-4" />
            <h1 className="font-semibold text-muted-foreground text-lg">
              AI-Powered
            </h1>
            <p className="text-muted-foreground/70 -mt-6">ML forecasting</p>
          </Card>
          <Card className="w-full items-center">
            <UserIcon className="size-10 -mb-4" />
            <h1 className="font-semibold text-muted-foreground text-lg">
              Personalized
            </h1>
            <p className="text-muted-foreground/70 -mt-6">Health-focused</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
