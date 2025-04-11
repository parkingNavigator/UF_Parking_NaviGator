// parkingArea.ts
export interface ParkingPolygon {
    name: string;
    coordinates: { lat: number; lng: number }[];
  }
  
  const parkingPolygons: ParkingPolygon[] = [
    {
      name: "Garage 7",
      coordinates: [
        { lat: 29.6509, lng: -82.3520 },
        { lat: 29.6509, lng: -82.3512 },
        { lat: 29.6505, lng: -82.3512 },
        { lat: 29.6505, lng: -82.3520 }
      ]
    },
    // ... more polygon data
  ];
  
  // Add the default export:
  export default parkingPolygons;