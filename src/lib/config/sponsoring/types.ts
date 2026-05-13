export interface Sponsor {
	image: string;
	link: string;
	name: string;
	sponsoring?: string;
	/** Tailwind max-width class for the logo in the scrolling banner. Defaults to `max-w-48`. */
	scrollingMaxWidth?: string;
}

export interface SponsoringConfig {
	sponsors: Sponsor[];
	isSponsor: (key: string) => boolean;
}
