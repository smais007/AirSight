"use client";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet marker issue in Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  { value: "new_york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
];

// ✅ User can click map to set marker
function LocationPicker({
  onSelect,
}: {
  onSelect: (pos: [number, number]) => void;
}) {
  useMapEvents({
    click(e) {
      onSelect([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

// ✅ Automatically move map to device location
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

export default function LocationSelector() {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [value, setValue] = useState("");
  const [pickedPosition, setPickedPosition] = useState<[number, number] | null>(
    null
  );

  const selectedLocation = locations.find(
    (location) => location.value === value
  );

  return (
    <>
      {/* Popover Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between"
          >
            {selectedLocation ? (
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                {selectedLocation.label}
              </span>
            ) : pickedPosition ? (
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                {pickedPosition[0].toFixed(3)}, {pickedPosition[1].toFixed(3)}
              </span>
            ) : (
              "Select location..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandList>
              {/* 🔥 Custom button on top */}
              <div className="px-2 py-1 border-b">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDialogOpen(true);
                    setOpen(false);
                  }}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Use my current location
                </Button>
              </div>

              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    value={location.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setPickedPosition(null);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === location.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {location.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Dialog with Leaflet Map */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Select your location</DialogTitle>
          </DialogHeader>

          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <MapContainer
              center={[51.505, -0.09]} // default center
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {pickedPosition && <Marker position={pickedPosition} />}
              <LocationFinder setPosition={setPickedPosition} />{" "}
              {/* ✅ auto locate */}
              <LocationPicker onSelect={setPickedPosition} />{" "}
              {/* ✅ manual click */}
            </MapContainer>
          </div>

          <DialogFooter>
            <Button
              disabled={!pickedPosition}
              onClick={() => setDialogOpen(false)}
            >
              Confirm Location
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
