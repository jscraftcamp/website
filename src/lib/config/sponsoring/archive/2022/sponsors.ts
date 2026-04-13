import codecentric from './logos/codecentric.png';
import composeus from './logos/compose-us.png';
import grollmus from './logos/grollmus.png';
import instana from './logos/instana.png';
import methodpark from './logos/method-park.png';
import peerigon from './logos/peerigon.png';
import sonomotors from './logos/sono-motors.png';
import tng from './logos/tng.png';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: codecentric,
		link: 'https://www.codecentric.de/',
		name: 'codecentric',
		sponsoring: 'Location'
	},
	{ image: grollmus, link: 'https://www.grollmus.de/', name: 'Grollmus', sponsoring: 'Lunch' },
	{ image: composeus, link: 'https://www.compose.us/', name: 'compose.us', sponsoring: 'Snacks' },
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting'
	},
	{
		image: peerigon,
		link: 'https://www.peerigon.com/',
		name: 'Peerigon',
		sponsoring: 'Coffee / Barista'
	},
	{ image: sonomotors, link: 'https://sonomotors.com/', name: 'Sono Motors' },
	{ image: instana, link: 'https://www.instana.com/', name: 'Instana' },
	{ image: methodpark, link: 'https://www.instana.com/', name: 'Method Park' }
].sort((a, b) => a.name.localeCompare(b.name));
