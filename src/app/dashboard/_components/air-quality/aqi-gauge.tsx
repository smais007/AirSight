"use client";

import dynamic from "next/dynamic";
import React from "react";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

const AQIGauge = ({ aqiValue = 50 }) => {
  return (
    <GaugeComponent
      className=""
      type="semicircle"
      minValue={0}
      maxValue={500}
      arc={{
        colorArray: [
          "#00E400", // Good
          "#FFFF00", // Moderate
          "#FF7E00", // Unhealthy for Sensitive Groups
          "#FF0000", // Unhealthy
          "#8F3F97", // Very Unhealthy
          "#7E0023", // Hazardous
        ],
        padding: 0.02,
        subArcs: [
          { limit: 50 }, // Good
          { limit: 100 }, // Moderate
          { limit: 150 }, // Unhealthy for Sensitive Groups
          { limit: 200 }, // Unhealthy
          { limit: 300 }, // Very Unhealthy
          { limit: 500 }, // Hazardous
        ],
      }}
      pointer={{ type: "arrow", animationDelay: 0 }}
      value={aqiValue}
    />
  );
};

export default AQIGauge;
