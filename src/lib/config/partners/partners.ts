import type { Partner } from './types';

import frontmuc from './logos/munich-frontend-developers.webp';
import socrates from './logos/socrates.png';
import seneca from './logos/seneca.png';
import deno from './logos/deno-full-light-transparent.svg';
import almEngineering from './logos/alm-logo-2022.svg';
import composeUs from './logos/compose-us.svg';

export const partners: Partner[] = [
	{
		image: frontmuc,
		link: 'https://www.meetup.com/de-DE/munich-frontend-developers/',
		name: 'Munich Frontend Developers'
	},
	{
		image: socrates,
		link: 'https://www.socrates-conference.de/',
		name: 'SoCraTes'
	},
	{
		image: seneca,
		link: 'https://seneca.camp/',
		name: 'Seneca'
	},
	{
		image: deno,
		link: 'https://deno.com/',
		name: 'Deno'
	},
	{
		image: almEngineering,
		link: 'https://alm.sh/',
		name: 'alm engineering'
	},
	{
		image: composeUs,
		link: 'https://compose.us/',
		name: 'compose us'
	}
];
