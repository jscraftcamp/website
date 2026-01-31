import campudus from './logos/campudus-developers-logo-rgb.svg';
import codecentric from './logos/codecentric.png';
import holidaycheck from './logos/holidaycheck.jpg';
import jambit from './logos/jambit_logo.jpg';
import jskongress from './logos/jskongress_logo.png';
import mercateo from './logos/mercateo.jpg';
import peerigon from './logos/peerigon.png';
import sinnerschrader from './logos/sinnerschrader.png';
import tng from './logos/tng.png';
import trustyou from './logos/trustyou-logo.png';
import vi from './logos/vi_logo.jpeg';
import wunder from './logos/wunder.png';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: vi,
		link: 'http://virtual-identity.com/',
		name: 'Virtual Identity',
		sponsoring: 'Location'
	},
	{
		image: sinnerschrader,
		link: 'https://sinnerschrader.com/',
		name: 'Sinnerschrader'
	},
	{ image: trustyou, link: 'https://www.trustyou.com/', name: 'Trust You' },
	{
		image: codecentric,
		link: 'https://www.codecentric.de/',
		name: 'codecentric'
	},
	{
		image: mercateo,
		link: 'http://www.mercateo.com/corporate/',
		name: 'Mercateo'
	},
	{ image: tng, link: 'https://www.tngtech.com/', name: 'TNG' },
	{
		image: holidaycheck,
		link: 'https://holidaycheck.de/',
		name: 'HolidayCheck'
	},
	{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon' },
	{ image: wunder, link: 'https://wunder.io/', name: 'Wunder.io' },
	{
		image: jskongress,
		link: 'https://2017.js-kongress.de/',
		name: 'JSKongress'
	},
	{ image: campudus, link: 'http://campudus.com/', name: 'Campudus' },
	{ image: jambit, link: 'https://www.jambit.com/', name: 'Jambit' }
].sort((a, b) => a.name.localeCompare(b.name));
