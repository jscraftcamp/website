export interface VenueAddress {
	name: string;
	street: string;
	city: string;
	mapsLink: string;
}

export interface VenueAccessibility {
	description: string;
}

export interface VenueConfig {
	/** Flag to indicate if we're searching for a venue */
	noVenueAvailable: boolean;

	/** Venue address details (only used when noVenueAvailable is false) */
	address?: VenueAddress;

	/** Optional link to venue impressions/photos */
	impressionsLink?: string;

	/** Optional custom description */
	description?: string;

	/** Accessibility information */
	accessibility?: VenueAccessibility;
}
