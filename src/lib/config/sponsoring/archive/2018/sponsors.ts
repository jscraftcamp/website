import cioplenu from './logos/cioplenu.jpg';
import codecentric from './logos/codecentric.png';
import entwicklerstube from './logos/entwicklerstube_logo.jpg';
import futurice from './logos/futurice.png';
import jambit from './logos/jambit_logo.jpg';
import mayflower from './logos/mayflower.png';
import methodpark from './logos/method_park_logo.png';
import netcentric from './logos/netcentric.png';
import peerigon from './logos/peerigon.png';
import pro7sat1 from './logos/pro7sat1.png';
import tngtech from './logos/tng.png';
import vi from './logos/vi_logo.jpeg';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: vi,
		link: 'https://virtual-identity.com/',
		name: 'Virtual Identity',
		sponsoring: 'Location'
	},
	{ image: jambit, link: 'https://www.jambit.com/', name: 'jambit' },
	{ image: netcentric, link: 'https://netcentric.biz/', name: 'netcentric' },
	{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon' },
	{ image: methodpark, link: 'https://www.methodpark.de/', name: 'Method Park' },
	{
		image: tngtech,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting'
	},
	{
		image: codecentric,
		link: 'https://www.codecentric.de/',
		name: 'codecentric'
	},
	{
		image: entwicklerstube,
		link: 'https://entwicklerstube.com/',
		name: 'Entwicklerstube'
	},
	{ image: cioplenu, link: 'https://cioplenu.com/', name: 'cioplenu' },
	{ image: futurice, link: 'https://www.futurice.com/', name: 'Futurice' },
	{
		image: pro7sat1,
		link: 'http://tech.prosiebensat1.com/',
		name: 'ProSiebenSat.1 Media SE'
	},
	{ image: mayflower, link: 'https://www.mayflower.de/', name: 'Mayflower' }
].sort((a, b) => a.name.localeCompare(b.name));
