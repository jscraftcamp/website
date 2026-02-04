import atoss from './logos/atoss_logo.png';
import codecentric from './logos/cc_logo.png';
import gutefrage from './logos/gf_logo.png';
import innoq from './logos/innoq_logo.png';
import scandio from './logos/scandio_logo_google.jpg';
import simplabs from './logos/simplelabs-logo.png';
import tng from './logos/tng_logo.png';
import vi from './logos/vi_logo.jpeg';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: atoss,
		link: 'https://www.atoss.com/',
		name: 'Atoss'
	},
	{
		image: codecentric,
		link: 'https://www.codecentric.de/',
		name: 'codecentric'
	},
	{
		image: gutefrage,
		link: 'http://www.gutefrage.net/',
		name: 'gutefrage.net'
	},
	{
		image: innoq,
		link: 'https://www.innoq.com/',
		name: 'innoQ'
	},
	{
		image: scandio,
		link: 'https://www.scandio.de/',
		name: 'scandio Software & Consulting'
	},
	{
		image: simplabs,
		link: 'http://simplabs.com/',
		name: 'simplabs'
	},
	{
		image: tng,
		link: 'http://www.tngtech.com/',
		name: 'TNG Technology Consulting'
	},
	{
		image: vi,
		link: 'http://virtual-identity.com/',
		name: 'Virtual Identity',
		sponsoring: 'Location'
	}
].sort((a, b) => a.name.localeCompare(b.name));
