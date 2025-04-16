// parkingArea.ts
export interface ParkingPolygon {
    name: string;
    coordinates: { lat: number; lng: number }[];
  }
  
  const parkingPolygons: ParkingPolygon[] = [
    {
      "name": "Garage 7",
      "coordinates": [
        {
          "lat": 29.6508326859159,
          "lng": -82.3520395347833
        },
        {
          "lat": 29.650825290550483,
          "lng": -82.35096051125629
        },
        {
          "lat": 29.650354944192834,
          "lng": -82.3509741266951
        },
        {
          "lat": 29.650374172231682,
          "lng": -82.35204464057284
        }
      ]
    }
  ];
  
  // Add the default export:
  export default parkingPolygons;