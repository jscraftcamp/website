import alm from './logos/alm-logo-2022.svg';
import codecentric from './logos/codecentric.png';
import composeus from './logos/compose-us.svg';
import hetzner from './logos/hetzner-logo-slogan_red-square.png';
import inovex from './logos/inovex-logo.png';
import jambit from './logos/jambit.svg';
import peerigon from './logos/peerigon.svg';
import projectLary from './logos/project-lary.svg';
import scalableCapital from './logos/scalable-capital.svg';
import seppMed from './logos/sepp-med.svg';
import tng from './logos/tng.png';
import typedigital from './logos/typedigital.svg';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: alm,
		link: 'https://alm.sh',
		name: 'alm engineering',
		sponsoring: 'Additional lunch money'
	},
	{
		image: codecentric,
		link: 'https://www.codecentric.de',
		name: 'codecentric AG',
		sponsoring: 'Location'
	},
	{
		image: composeus,
		link: 'https://compose.us',
		name: 'compose.us',
		sponsoring: 'Friday breakfast'
	},
	{
		image: hetzner,
		link: 'https://www.hetzner.com',
		name: 'Hetzner',
		sponsoring: 'T-Shirts'
	},
	{
		image: inovex,
		link: 'https://inovex.de',
		name: 'inovex',
		sponsoring: 'Snacks and more'
	},
	{
		image: jambit,
		link: 'https://jambit.com',
		name: 'jambit',
		sponsoring: 'Friday Lunch'
	},
	{
		image: peerigon,
		link: 'https://peerigon.com',
		name: 'peerigon',
		sponsoring: 'Coffee / Barista'
	},
	{
		image: projectLary,
		link: 'https://project-lary.com',
		name: 'project lary',
		sponsoring: 'Beverages'
	},
	{
		image: scalableCapital,
		link: 'https://scalable.capital/',
		name: 'Scalable Capital',
		sponsoring: 'BBQ'
	},
	{
		image: seppMed,
		link: 'https://www.seppmed.de',
		name: 'sepp.med',
		sponsoring: 'Stickers'
	},
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting',
		sponsoring: 'Saturday Lunch'
	},
	{
		image: typedigital,
		link: 'https://typedigital.de',
		name: 'typedigital',
		sponsoring: 'Saturday Snacks'
	}
].sort((a, b) => a.name.localeCompare(b.name));
