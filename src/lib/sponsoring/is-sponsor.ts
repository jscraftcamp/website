import { isSponsor as isSponsor2024 } from './sponsors-2024/is-sponsor';

export interface Sponsor {
	image: string;
	link: string;
	name: string;
	sponsoring?: string;
}

export const isSponsor = isSponsor2024;
