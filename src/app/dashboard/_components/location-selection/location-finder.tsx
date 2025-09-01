"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Fix default marker icon issue in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// ✅ Custom hook component to move map to current location
function LocationFinder({
  setPosition,
}: {
  setPosition: (pos: [number, number]) => void;
}) {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 }); // ask device location
    map.on("locationfound", (e) => {
      setPosition([e.latlng.lat, e.latlng.lng]);
    });
  }, [map, setPosition]);

  return null;
}

export default function LocationSelectorMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  return (
    <div className="space-y-4">
      <div className="h-[400px] w-full rounded-lg overflow-hidden shadow">
        <MapContainer
          center={[51.505, -0.09]} // default to London if no location
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {position && <Marker position={position}></Marker>}
          <LocationFinder setPosition={setPosition} />
        </MapContainer>
      </div>

      {/* Show selected location */}
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        {position ? (
          <span>
            Selected:{" "}
            <b>
              {position[0].toFixed(5)}, {position[1].toFixed(5)}
            </b>
          </span>
        ) : (
          <span className="text-muted-foreground">No location selected</span>
        )}
      </div>

      {/* Button to re-fetch device location */}
      <Button
        variant="outline"
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
              setPosition([pos.coords.latitude, pos.coords.longitude]);
            });
          }
        }}
      >
        Use My Current Location
      </Button>
    </div>
  );
}
