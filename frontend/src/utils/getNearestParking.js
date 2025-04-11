import { permitText } from "../data/permitData"; // Adjust the relative path if needed

/**
 * Helper function to normalize permit strings.
 * It lowercases and removes all whitespace.
 */
function normalizePermit(permitStr) {
  return permitStr.toLowerCase().replace(/\s+/g, "");
}

/**
 * Extracts the permits array from a parking spot.
 * If the spot has a `permits` array, it is returned.
 * Otherwise, if it has a single `permit` string, it is returned as an array.
 */
function extractPermits(spot) {
  if (Array.isArray(spot.permits)) {
    return spot.permits;
  } else if (typeof spot.permit === "string") {
    return [spot.permit];
  }
  return [];
}

/**
 * A helper function that uses the Haversine formula
 * to calculate the straight‑line distance between two points.
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
 * Filters the parking spots to only include the closest N spots based on straight‑line distance.
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
 * Uses the built‑in DistanceMatrixService to determine the nearest parking spot (by walking distance)
 * from the destination among the spots that have a permit matching the given permit text.
 *
 * @param {Object} destination - The destination coordinates { lat, lng }.
 * @param {Array} spots - The full list of parking spots.
 * @param {string} currentPermitKey - The current permit key (e.g. "staff").
 * @param {Function} callback - A function to call with the nearest spot.
 */
export function getNearestParkingWalkingUsingService(
  destination,
  spots,
  currentPermitKey,
  callback
) {
  if (!window.google || !google.maps) {
    console.error("Google Maps API not loaded");
    callback(null);
    return;
  }

  // Convert current permit key (e.g., "staff") to its full text using permitText mapping.
  const currentPermitFullText = permitText[currentPermitKey] || currentPermitKey;
  // Normalize the full text (remove spaces and lowercase)
  const normalizedCurrentPermit = normalizePermit(currentPermitFullText);

  // Filter spots by checking if any normalized permit in the spot matches the normalized current permit.
  const permitFilteredSpots = spots.filter((spot) => {
    const permits = extractPermits(spot);
    return permits.some((p) => {
      // Split permit string on '/' in case there are multiple permits in one field,
      // normalize each part, and then check for an exact match.
      const parts = p.split("/").map((part) => normalizePermit(part));
      return parts.includes(normalizedCurrentPermit);
    });
  });

  if (permitFilteredSpots.length === 0) {
    console.warn("No parking spots available for permit:", currentPermitFullText);
    callback(null);
    return;
  }

  // Filter to the closest 25 spots (by straight‑line distance).
  const filteredSpots = filterClosestSpots(destination, permitFilteredSpots, 25);
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

      // Attach the walking distance and duration to each spot.
      const spotsWithDistance = response.rows.map((row, index) => {
        const element = row.elements[0];
        return {
          ...filteredSpots[index],
          walkingDistance: element.distance.value, // in meters
          walkingDuration: element.duration.value,   // in seconds
        };
      });

      // Find the parking spot with the smallest walking distance.
      const nearest = spotsWithDistance.reduce((prev, curr) =>
        prev.walkingDistance < curr.walkingDistance ? prev : curr
      );
      callback(nearest);
    }
  );
}