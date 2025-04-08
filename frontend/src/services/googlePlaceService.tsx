const googlePlaceService = {

    fetchAutocompleteSuggestions: async (request: google.maps.places.AutocompleteRequest) => {
        const { suggestions } = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(request);
        return suggestions;
    }
}

export default googlePlaceService;