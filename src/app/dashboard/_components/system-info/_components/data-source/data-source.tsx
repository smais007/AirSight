import BackdropGradient from "@/components/global/backdrop-gradient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dataSources } from "@/constants/dataSource";
import {
  Activity,
  Database,
  ExternalLink,
  Globe,
  Satellite,
  TrendingUp,
} from "lucide-react";
import React from "react";

const DataSource = () => {
  return (
    <div className="mt-10">
      <BackdropGradient className="opacity-40 w-1/2 h-2/6 6 ">
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Data Sources & Credits</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataSources.map((source, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {source.type === "Satellite Data" && (
                          <Satellite className="h-5 w-5 text-primary" />
                        )}
                        {source.type === "Ground Sensors" && (
                          <Activity className="h-5 w-5 text-primary" />
                        )}
                        {source.type === "Global Network" && (
                          <Globe className="h-5 w-5 text-primary" />
                        )}
                        {source.type === "Weather Data" && (
                          <TrendingUp className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold">{source.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {source.type}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm mb-3">{source.description}</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="font-medium">Parameters:</span>
                      <div className="mt-1 space-x-1">
                        {source.parameters.map((param) => (
                          <Badge
                            key={param}
                            variant="outline"
                            className="text-xs"
                          >
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Coverage:</span>
                      <div className="text-muted-foreground">
                        {source.coverage}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Resolution:</span>
                      <div className="text-muted-foreground">
                        {source.resolution}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Frequency:</span>
                      <div className="text-muted-foreground">
                        {source.frequency}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BackdropGradient>
    </div>
  );
};

export default DataSource;
