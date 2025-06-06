import { isSponsor as isSponsor2025 } from './sponsors-2025/is-sponsor';

export interface Sponsor {
	image: string;
	link: string;
	name: string;
	sponsoring?: string;
}

export const isSponsor = isSponsor2025;
