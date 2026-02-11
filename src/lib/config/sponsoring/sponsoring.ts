import tng from './logos/tng.png';
import type { Sponsor } from './types';

export const sponsors: Sponsor[] = [
	// tobi: kann man stehen lassen für 2026 ;)
	/*{
		image: stackForge,
		link: 'https://www.stack-forge.eu',
		name: 'StackForge',
		sponsoring: 'Breakfast Fr & Sa'
	},*/
	// {
	// 	image: allPrintCut,
	// 	link: 'https://allprintcut.com/',
	// 	name: 'All Print Cut',
	// 	sponsoring: 'Stickers'
	// },
	// {
	// 	image: alm,
	// 	link: 'https://alm.sh',
	// 	name: 'Alm Engineering',
	// 	sponsoring: '500 €'
	// },
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
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting',
		sponsoring: '500 €'
	}
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
	return sponsors.some(
		(sponsor) =>
			sponsor.name.replace(/\s/g, '-').toLowerCase() === key.replace(/\s/g, '-').toLowerCase()
	);
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
