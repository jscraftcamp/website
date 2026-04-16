import alm from './logos/alm-engineering.svg';
import tng from './logos/tng.svg';
import stackForge from './logos/stack-forge.svg';
import seorank from './logos/seorank.svg';
import inovex from './logos/inovex-logo.png';
import scalable from './logos/scalable.svg';
import composeUs from './logos/compose-us-white.svg';
import inspiredconsulting from './logos/inspired-consulting.svg';
import pastely from './logos/pastely.svg';
import type { Sponsor } from './types';
import { normalizeCompanyKey } from '$lib/participants/normalize-company';

export const sponsors: Sponsor[] = [
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting',
		sponsoring: 'Venue & Beverages'
	},
	{
		image: stackForge,
		link: 'https://www.stack-forge.eu',
		name: 'StackForge',
		sponsoring: 'T-Shirts'
	},
	{
		image: seorank,
		link: 'https://seorank.tech',
		name: 'SEORank.tech',
		sponsoring: 'various'
	},
	{
		image: inovex,
		link: 'https://www.inovex.de',
		name: 'inovex',
		sponsoring: 'Lunch'
	},
	{
		image: scalable,
		link: 'https://scalable.capital',
		name: 'Scalable Capital',
		sponsoring: 'Lunch'
	},
	{
		image: composeUs,
		link: 'https://compose.us',
		name: 'compose.us',
		sponsoring: 'Event Insurance'
	},
	{
		image: inspiredconsulting,
		link: 'https://inspired.consulting',
		name: 'Inspired Consulting',
		sponsoring: 'various'
	},
	{
		image: pastely,
		link: 'https://www.pastely.eu',
		name: 'Pastely',
		sponsoring: 'Stickers'
	}
	// {
	// 	image: allPrintCut,
	// 	link: 'https://allprintcut.com/',
	// 	name: 'All Print Cut',
	// 	sponsoring: 'Stickers'
	// },
	{
		image: alm,
		link: 'https://alm.sh',
		name: 'alm engineering',
		sponsoring: '500 €'
	},
	// {
	// 	image: codecentric,
	// 	link: 'https://www.codecentric.de',
	// 	name: 'codecentric AG',
	// 	sponsoring: 'Location'
	// },
	// {
	// 	image: composeus,
	// 	link: 'https://compose.us',
	// 	name: 'compose.us',
	// 	sponsoring: 'Hosted by'
	// },
	// {
	// 	image: deno,
	// 	link: 'https://deno.land',
	// 	name: 'deno',
	// 	sponsoring: '250 €'
	// },
	// {
	// 	image: finanzvergleich,
	// 	link: 'https://finanzvergleich.com',
	// 	name: 'Finanzvergleich.com',
	// 	sponsoring: '200 €'
	// },
	// {
	// 	image: gorlug,
	// 	link: 'https://gorlug.de/',
	// 	name: 'Gorlug',
	// 	sponsoring: '100 €'
	// },
	// {
	// 	image: hetzner,
	// 	link: 'https://www.hetzner.com',
	// 	name: 'Hetzner',
	// 	sponsoring: '500 €'
	// },
	// {
	// 	image: inovex,
	// 	link: 'https://inovex.de',
	// 	name: 'inovex',
	// 	sponsoring: 'Lunch'
	// },
	// {
	// 	image: inspiredconsulting,
	// 	link: 'https://inspired.consulting',
	// 	name: 'Inspired Consulting',
	// 	sponsoring: '300 €'
	// },
	// {
	// 	image: peerigon,
	// 	link: 'https://peerigon.com',
	// 	name: 'peerigon',
	// 	sponsoring: 'Coffee / Barista'
	// },
	// {
	// 	image: saab,
	// 	link: 'https://www.saab.com',
	// 	name: 'Saab',
	// 	sponsoring: 'Breakfast & Energy Drinks'
	// },
	// {
	// 	image: tiffingerthiel,
	// 	link: 'https://tiffinger-thiel.de/',
	// 	name: 'Tiffinger & Thiel GmbH',
	// 	sponsoring: 'Beverages'
	// },
	// {
	// 	image: twilio,
	// 	link: 'https://twilio.com/',
	// 	name: 'Twilio',
	// 	sponsoring: '1.500 $'
	// },
	// {
	// 	image: typedigital,
	// 	link: 'https://typedigital.de',
	// 	name: 'typedigital',
	// 	sponsoring: 'Friday Snacks'
	// }
].sort((a, b) => a.name.localeCompare(b.name));

export const isSponsor = (key: string) => {
	const normalizedKey = normalizeCompanyKey(key);
	return sponsors.some((sponsor) => normalizeCompanyKey(sponsor.name) === normalizedKey);
};

// "Thank You" in multiple languages for the scrolling banner
export const thankYouTranslations = [
	'DANKE',
	'THANK YOU',
	'MERCI',
	'GRACIAS',
	'GRAZIE',
	'DANK JE',
	'TACK',
	'TAKK',
	'TAK',
	'KIITOS',
	'DZIĘKUJĘ',
	'DĚKUJI',
	'KÖSZÖNÖM',
	'EFCHARISTÓ',
	'MULȚUMESC',
	'ДAKУЙ'
];
