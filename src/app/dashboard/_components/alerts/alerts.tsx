"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Bell,
  BellRing,
  Plus,
  Settings,
  Mail,
  Phone,
  Smartphone,
  Heart,
  Baby,
  Users,
  MapPin,
  Clock,
  Trash2,
  Edit,
} from "lucide-react";
import { useState } from "react";
import BackdropGradient from "@/components/global/backdrop-gradient";
import { PolicyDashboard } from "@/components/policy";
import { HealthImpactIndicator } from "./HealthImpactIndicator";

const AlertsTab = () => {
  const [globalAlertsEnabled, setGlobalAlertsEnabled] = useState(true);
  const [newLocationName, setNewLocationName] = useState("");

  // Mock data for user's alert subscriptions
  const alertSubscriptions = [
    {
      id: 1,
      location: "Home - San Francisco",
      coordinates: "37.7749, -122.4194",
      threshold: 100,
      profileType: "general",
      enabled: true,
      methods: ["push", "email"],
    },
    {
      id: 2,
      location: "Work - Downtown SF",
      coordinates: "37.7849, -122.4094",
      threshold: 75,
      profileType: "sensitive",
      enabled: true,
      methods: ["push"],
    },
    {
      id: 3,
      location: "School - Oakland",
      coordinates: "37.8044, -122.2711",
      threshold: 80,
      profileType: "children",
      enabled: false,
      methods: ["email", "sms"],
    },
  ];

  // Mock recent alerts history
  const recentAlerts = [
    {
      id: 1,
      timestamp: "2024-01-15T14:30:00Z",
      location: "San Francisco",
      aqi: 125,
      level: "unhealthy-sensitive",
      message: "Air quality has reached unhealthy levels for sensitive groups",
    },
    {
      id: 2,
      timestamp: "2024-01-15T09:15:00Z",
      location: "Downtown SF",
      aqi: 89,
      level: "moderate",
      message: "Air quality improving - moderate levels detected",
    },
    {
      id: 3,
      timestamp: "2024-01-14T16:45:00Z",
      location: "Oakland",
      aqi: 156,
      level: "unhealthy",
      message: "Unhealthy air quality detected - limit outdoor activities",
    },
  ];

  const profileTypes = [
    {
      id: "general",
      name: "General Public",
      icon: Users,
      description:
        "For people without major health concerns, this profile provides standard guidance to maintain well-being and stay informed about air quality.",
    },
    {
      id: "sensitive",
      name: "Sensitive Groups",
      icon: Heart,
      description:
        "For those with asthma, heart or lung disease, or older adults, this profile gives extra precautions to reduce health risks during poor air-quality days.",
    },
    {
      id: "children",
      name: "Children",
      icon: Baby,
      description:
        "For kids and school environments, this profile offers advice to limit outdoor activity and protect healthy development when air quality is poor.",
    },
  ];

  const getAlertLevelColor = (level: string) => {
    switch (level) {
      case "good":
        return "accent";
      case "moderate":
        return "aqi-moderate";
      case "unhealthy-sensitive":
        return "aqi-unhealthy-sensitive";
      case "unhealthy":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-6 w-full">
      {/* Global Alert Settings */}
      <div className="flex flex-col lg:flex-row  gap-6">
        <Card className="shadow-soft w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Alert Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-medium">
                  Enable Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive air quality alerts for your saved locations
                </p>
              </div>
              <Switch
                checked={globalAlertsEnabled}
                onCheckedChange={setGlobalAlertsEnabled}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg border">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Push Notifications</div>
                  <div className="text-xs text-muted-foreground">
                    Instant alerts
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg border">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Email Alerts</div>
                  <div className="text-xs text-muted-foreground">
                    Daily summaries
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg border">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">SMS Alerts</div>
                  <div className="text-xs text-muted-foreground">
                    Critical only
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Health Profiles Explained</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {profileTypes.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <profile.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{profile.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {profile.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Current Alert Subscriptions */}
        <Card className="shadow-elevated w-full lg:w-2/3">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BellRing className="h-5 w-5" />
              <span>Your Alert Locations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertSubscriptions.map((subscription) => {
                const profile = profileTypes.find(
                  (p) => p.id === subscription.profileType
                );
                return (
                  <div key={subscription.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">
                            {subscription.location}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {subscription.coordinates}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch checked={subscription.enabled} />
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          Threshold: {subscription.threshold} AQI
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-2">
                        {profile && (
                          <>
                            <profile.icon className="h-4 w-4" />
                            <span className="text-sm">{profile.name}</span>
                          </>
                        )}
                      </div>

                      <div className="flex space-x-1">
                        {subscription.methods.map((method) => (
                          <Badge
                            key={method}
                            variant="secondary"
                            className="text-xs"
                          >
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        {/* Add New Location */}
        <Card className="shadow-soft w-full lg:w-1/3">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Add Alert Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location-name">Location Name</Label>
              <Input
                id="location-name"
                placeholder="e.g., Home, Office, School"
                value={newLocationName}
                onChange={(e) => setNewLocationName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address or Coordinates</Label>
              <Input id="address" placeholder="Enter address or click on map" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="threshold">AQI Threshold</Label>
              <Input
                id="threshold"
                type="number"
                placeholder="100"
                min="50"
                max="300"
              />
            </div>
            <div className="space-y-2">
              <Label>Health Profile</Label>
              <select className="w-full p-2 rounded-md border border-input bg-background">
                {profileTypes.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Location
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts History */}
      <BackdropGradient className=" opacity-30 w-1/2 h-2/6 6 ">
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start space-x-4 p-4 rounded-lg border"
                >
                  <div
                    className={`w-3 h-3 rounded-full mt-2 bg-${getAlertLevelColor(
                      alert.level
                    )}`}
                  />

                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{alert.location}</h4>
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(alert.timestamp)}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      {alert.message}
                    </p>

                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className={`border-${getAlertLevelColor(
                          alert.level
                        )}/50 text-${getAlertLevelColor(alert.level)}`}
                      >
                        AQI {alert.aqi}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                View All History
              </Button>
            </div>
          </CardContent>
        </Card>
      </BackdropGradient>

      {/* Health Profile Information */}
      <div className="p-8">
        <PolicyDashboard baselineAQI={160} trafficSensitivity={0.6} />
      </div>
      <div className="p-8 space-y-6">
        <HealthImpactIndicator aqi={219} />
      </div>
    </div>
  );
};

export default AlertsTab;
