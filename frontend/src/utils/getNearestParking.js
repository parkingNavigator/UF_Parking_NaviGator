/**
 * A helper function that uses the Haversine formula
 * to calculate the straight-line distance between two points.
 */
function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // Earth radius in meters
    const toRad = (x) => (x * Math.PI) / 180;
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lng2 - lng1);
    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // in meters
  }
  
  /**
   * Filters the parking spots to only include the closest N spots 
   * based on straight-line distance.
   */
  function filterClosestSpots(destination, spots, maxCount = 25) {
    const sorted = spots.slice().sort((a, b) => {
      const distA = haversineDistance(
        destination.lat,
        destination.lng,
        a.position.lat,
        a.position.lng
      );
      const distB = haversineDistance(
        destination.lat,
        destination.lng,
        b.position.lat,
        b.position.lng
      );
      return distA - distB;
    });
    return sorted.slice(0, maxCount);
  }
  
  /**
   * Uses the built-in DistanceMatrixService to determine the nearest
   * parking spot based on walking distance, only considering spots
   * that match the given permit type.
   * 
   * @param destination The destination coordinates.
   * @param spots The full list of parking spots.
   * @param currentPermit The current permit type (e.g., "Green").
   * @param callback A function to call with the nearest spot.
   */
  export function getNearestParkingWalkingUsingService(
    destination,
    spots,
    currentPermit,
    callback
  ) {
    if (!window.google || !google.maps) {
      console.error("Google Maps API not loaded");
      callback(null);
      return;
    }
  
    // First, filter spots by the current permit type.
    const permitFilteredSpots = spots.filter(
      (spot) => spot.permit === currentPermit
    );
  
    if (permitFilteredSpots.length === 0) {
      console.warn("No parking spots available for permit:", currentPermit);
      callback(null);
      return;
    }
  
    // Filter to the closest 25 spots (adjust as needed)
    const filteredSpots = filterClosestSpots(destination, permitFilteredSpots, 25);
  
    // Build an array of origin positions from the filtered spots.
    const origins = filteredSpots.map((spot) => spot.position);
  
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: origins,
        destinations: [destination],
        travelMode: google.maps.TravelMode.WALKING,
      },
      (response, status) => {
        if (status !== "OK") {
          console.error("Distance Matrix API error:", status);
          callback(null);
          return;
        }
  
        // Each row corresponds to a parking spot (origin)
        const spotsWithDistance = response.rows.map((row, index) => {
          const element = row.elements[0];
          return {
            ...filteredSpots[index],
            walkingDistance: element.distance.value, // in meters
            walkingDuration: element.duration.value,   // in seconds
          };
        });
  
        // Find the parking spot with the smallest walking distance
        const nearest = spotsWithDistance.reduce((prev, curr) =>
          prev.walkingDistance < curr.walkingDistance ? prev : curr
        );
        callback(nearest);
      }
    );
  }