import { SatelliteGroundMap } from "../dashboard/_components/map-view/SatelliteGroundMap";

const satelliteData = [
  { longitude: 90.41, latitude: 23.81, value: 120 },
  { longitude: 90.42, latitude: 23.82, value: 150 },
];

const groundData = [
  { longitude: 90.41, latitude: 23.81, value: 130 },
  { longitude: 90.43, latitude: 23.8, value: 160 },
];

export default function MapPage() {
  return (
    <div className="p-8">
      <SatelliteGroundMap
        satelliteData={satelliteData}
        groundData={groundData}
      />
    </div>
  );
}
