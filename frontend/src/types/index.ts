
export type PlaceData = {
    name: string | null | undefined;
    address: string | null | undefined;
    location: google.maps.LatLng | null | undefined;
    rating: number | null | undefined;
    photos: google.maps.places.Photo[] | undefined;
    websiteURI: string | null | undefined;
};