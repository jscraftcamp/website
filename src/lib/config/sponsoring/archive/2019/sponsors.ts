import cioplenu from './logos/cioplenu.jpg';
import codecentric from './logos/codecentric.png';
import consol from './logos/consol.png';
import datev from './logos/datev.png';
import entwicklerstube from './logos/entwicklerstube.png';
import hetzner from './logos/hetzner_cloud.svg';
import jambit from './logos/jambit.png';
import methodpark from './logos/methodpark.png';
import peerigon from './logos/peerigon.png';
import sinnerschrader from './logos/sinnerschrader.svg';
import tng from './logos/tng.png';
import vi from './logos/vi.jpg';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: vi,
		link: 'http://virtual-identity.com/',
		name: 'Virtual Identity',
		sponsoring: 'Location'
	},
	{
		image: codecentric,
		link: 'https://www.codecentric.de/',
		name: 'codecentric'
	},
	{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon' },
	{
		image: entwicklerstube,
		link: 'https://entwicklerstube.com/',
		name: 'Entwicklerstube'
	},
	{
		image: sinnerschrader,
		link: 'https://sinnerschrader.com/',
		name: 'Sinnerschrader'
	},
	{
		image: methodpark,
		link: 'https://www.methodpark.com/',
		name: 'Method Park'
	},
	{ image: cioplenu, link: 'https://cioplenu.com/', name: 'cioplenu' },
	{ image: jambit, link: 'https://www.jambit.com/', name: 'jambit' },
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting'
	},
	{ image: consol, link: 'https://github.com/ConSol', name: 'consol' },
	{
		image: hetzner,
		link: 'https://github.com/hetznercloud',
		name: 'Hetzner Cloud'
	},
	{ image: datev, link: 'https://www.datev.de/', name: 'Datev' }
].sort((a, b) => a.name.localeCompare(b.name));
