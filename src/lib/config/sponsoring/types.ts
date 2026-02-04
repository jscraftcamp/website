export interface Sponsor {
	image: string;
	link: string;
	name: string;
	sponsoring?: string;
}

export interface SponsoringConfig {
	sponsors: Sponsor[];
	isSponsor: (key: string) => boolean;
}
