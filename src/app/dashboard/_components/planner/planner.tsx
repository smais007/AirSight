"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Footprints,
  Bike,
  Baby,
  Heart,
  Glasses,
  Home,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import BackdropGradient from "@/components/global/backdrop-gradient";

const PlannerTab = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock hourly forecast data
  const hourlyForecast = [
    { hour: 6, aqi: 45, activity: "excellent" },
    { hour: 7, aqi: 52, activity: "good" },
    { hour: 8, aqi: 68, activity: "moderate" },
    { hour: 9, aqi: 75, activity: "moderate" },
    { hour: 10, aqi: 82, activity: "sensitive" },
    { hour: 11, aqi: 89, activity: "sensitive" },
    { hour: 12, aqi: 95, activity: "sensitive" },
    { hour: 13, aqi: 102, activity: "limited" },
    { hour: 14, aqi: 108, activity: "limited" },
    { hour: 15, aqi: 112, activity: "limited" },
    { hour: 16, aqi: 98, activity: "sensitive" },
    { hour: 17, aqi: 85, activity: "sensitive" },
    { hour: 18, aqi: 72, activity: "moderate" },
    { hour: 19, aqi: 61, activity: "good" },
    { hour: 20, aqi: 55, activity: "good" },
    { hour: 21, aqi: 48, activity: "excellent" },
  ];

  const activities = [
    {
      id: "running",
      name: "Running/Jogging",
      icon: Footprints,
      sensitivity: "high",
      description: "High-intensity outdoor exercise",
    },
    {
      id: "cycling",
      name: "Cycling",
      icon: Bike,
      sensitivity: "medium",
      description: "Moderate outdoor activity",
    },
    {
      id: "children",
      name: "Children's Play",
      icon: Baby,
      sensitivity: "high",
      description: "Outdoor activities for kids",
    },
    {
      id: "heart",
      name: "Heart Conditions",
      icon: Heart,
      sensitivity: "very-high",
      description: "Cardiovascular sensitivity",
    },
  ];

  const getActivityRecommendation = (aqi: number, sensitivity: string) => {
    const thresholds = {
      "very-high": { good: 50, moderate: 75, limited: 100 },
      high: { good: 75, moderate: 100, limited: 150 },
      medium: { good: 100, moderate: 150, limited: 200 },
      low: { good: 150, moderate: 200, limited: 300 },
    };

    const threshold = thresholds[sensitivity as keyof typeof thresholds];
    if (aqi <= threshold.good)
      return { status: "recommended", color: "accent" };
    if (aqi <= threshold.moderate)
      return { status: "caution", color: "aqi-moderate" };
    if (aqi <= threshold.limited)
      return { status: "limited", color: "aqi-unhealthy-sensitive" };
    return { status: "avoid", color: "destructive" };
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getBestTimeWindows = () => {
    const windows = [];
    let currentWindow = null;

    for (let i = 0; i < hourlyForecast.length; i++) {
      const forecast = hourlyForecast[i];
      if (forecast.aqi <= 75) {
        // Good air quality
        if (!currentWindow) {
          currentWindow = {
            start: forecast.hour,
            end: forecast.hour,
            avgAqi: forecast.aqi,
          };
        } else {
          currentWindow.end = forecast.hour;
          currentWindow.avgAqi = (currentWindow.avgAqi + forecast.aqi) / 2;
        }
      } else {
        if (currentWindow && currentWindow.end - currentWindow.start >= 1) {
          windows.push(currentWindow);
        }
        currentWindow = null;
      }
    }

    if (currentWindow && currentWindow.end - currentWindow.start >= 1) {
      windows.push(currentWindow);
    }

    return windows.slice(0, 3); // Return top 3 windows
  };

  const bestWindows = getBestTimeWindows();

  return (
    <div className="space-y-6 w-full">
      {/* Date Navigation */}
      <Card className="">
        <CardContent className="">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setSelectedDate(
                  new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="text-center">
              <h2 className="text-xl font-semibold">
                {formatDate(selectedDate)}
              </h2>
              <p className="text-sm text-muted-foreground">Activity Planner</p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setSelectedDate(
                  new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Best Time Windows */}
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="text-green-500">
                  Best Times for Activities
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {bestWindows.map((window, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">
                        {window.start}:00 - {window.end}:00
                      </span>
                      <Badge variant="secondary">Best</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg AQI: {Math.round(window.avgAqi)}
                    </div>
                    <div className="text-xs text-accent mt-1">
                      Ideal for all activities
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-amber-500" />
                <span className="text-amber-500">Avoid Outdoor Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4">
                {bestWindows.map((window, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-amber-500/20  border border-amber-500"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">
                        {window.start}:00 - {window.end}:00
                      </span>
                      <Badge variant="secondary">Best</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg AQI: {Math.round(window.avgAqi)}
                    </div>
                    <div className="text-xs text-accent mt-1">
                      Ideal for all activities
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </>
      {/* 24-Hour Forecast Chart */}

      <Card className="shadow-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>24-Hour AQI Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Chart Visualization */}
            <div className="relative h-32 bg-muted rounded-lg p-4">
              <div className="flex items-end justify-between h-full">
                {hourlyForecast.map((forecast, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-1"
                  >
                    <div
                      className={`w-3 rounded-t transition-all duration-300 ${
                        forecast.aqi <= 50
                          ? "bg-aqi-good"
                          : forecast.aqi <= 100
                          ? "bg-aqi-moderate"
                          : forecast.aqi <= 150
                          ? "bg-aqi-unhealthy-sensitive"
                          : "bg-aqi-unhealthy"
                      }`}
                      style={{ height: `${(forecast.aqi / 150) * 80}px` }}
                      title={`${forecast.hour}:00 - AQI ${forecast.aqi}`}
                    />
                    <span className="text-xs text-muted-foreground">
                      {forecast.hour < 12
                        ? `${forecast.hour}AM`
                        : forecast.hour === 12
                        ? "12PM"
                        : `${forecast.hour - 12}PM`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center space-x-6 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-aqi-good rounded"></div>
                <span>Good (0-50)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-aqi-moderate rounded"></div>
                <span>Moderate (51-100)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-aqi-unhealthy-sensitive rounded"></div>
                <span>Sensitive (101-150)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Recommendations */}
      <BackdropGradient className=" opacity-30 w-1/2 h-2/6 6 ">
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Activity Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <activity.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{activity.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hourly recommendations for this activity */}
                  <div className="grid grid-cols-8 gap-2">
                    {hourlyForecast.slice(0, 8).map((forecast, index) => {
                      const rec = getActivityRecommendation(
                        forecast.aqi,
                        activity.sensitivity
                      );
                      return (
                        <div key={index} className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            {forecast.hour}:00
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-medium ${
                              rec.status === "recommended"
                                ? "bg-accent/20 text-accent"
                                : rec.status === "caution"
                                ? "bg-aqi-moderate/20 text-aqi-moderate"
                                : rec.status === "limited"
                                ? "bg-aqi-unhealthy-sensitive/20 text-aqi-unhealthy-sensitive"
                                : "bg-destructive/20 text-destructive"
                            }`}
                            title={`${forecast.hour}:00 - ${rec.status}`}
                          >
                            {rec.status === "recommended"
                              ? "✓"
                              : rec.status === "caution"
                              ? "⚠"
                              : rec.status === "limited"
                              ? "△"
                              : "✕"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BackdropGradient>

      {/* Indoor Alternative Suggestions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Home className="h-5 w-5" />
            <span>Indoor Alternatives</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">High AQI Hours (1-3 PM)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Glasses className="h-4 w-4 text-primary" />
                  <span>Gym workouts or home fitness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>Indoor rock climbing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Footprints className="h-4 w-4 text-primary" />
                  <span>Treadmill running</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Air Purifier Tips</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Keep windows closed during peak hours</li>
                <li>• Run air purifiers 30 min before exercise</li>
                <li>• Consider HEPA filters for home gym</li>
                <li>• Monitor indoor air quality</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlannerTab;
