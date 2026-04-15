import type { TeamMember } from './types';

import ariadne from './images/ariadne.jpg';
import bernd from './images/bernd.webp';
import joern from './images/joern.jpg';
import leo from './images/leo.webp';
import michael from './images/michael.png';
import patrickp from './images/patrickp.jpg';
import philip from './images/philip.jpeg';
import sina from './images/sina.jpeg';
import wolfram from './images/wolfram.jpg';
import tobias from './images/tobias.jpg';

export const team: TeamMember[] = [
	{
		name: 'Ariadne Engelbrecht',
		email: 'Ariadne.Engelbrecht@curiosdevcookie.dev',
		linkedin: 'https://www.linkedin.com/in/ariadne-engelbrecht/',
		github: 'https://github.com/curiosdevcookie',
		image: ariadne
	},
	{
		name: 'Bernd Kaiser',
		linkedin: 'https://www.linkedin.com/in/bernd-kaiser/',
		github: 'https://github.com/meldron',
		image: bernd
	},
	{
		name: 'Jörn Bernhardt',
		email: 'joern.bernhardt@compose.us',
		linkedin: 'https://www.linkedin.com/in/joern-bernhardt/',
		github: 'https://github.com/Narigo',
		image: joern
	},
	{
		name: 'Leo Kettmeir',
		email: 'leo@deno.com',
		linkedin: 'https://www.linkedin.com/in/leo-kettmeir/',
		github: 'https://github.com/crowlkats',
		image: leo
	},
	{
		name: 'Michael Zoidl',
		email: 'michael@alm.sh',
		github: 'https://github.com/michaelzoidl',
		image: michael
	},
	{
		name: 'Patrick Piedad',
		email: 'patrickpiedad@gmail.com',
		linkedin: 'https://www.linkedin.com/in/patrick-piedad/',
		github: 'https://github.com/patrickpiedad',
		image: patrickp
	},
	{
		name: 'Philip Saa',
		linkedin: 'https://www.linkedin.com/in/philipsaa/',
		github: 'https://github.com/cowglow',
		image: philip
	},
	{
		name: 'Sina Aschenbrenner',
		linkedin: 'https://www.linkedin.com/in/sina-aschenbrenner-146aa8229/',
		image: sina
	},
	{
		name: 'Tobias Sittenauer',
		email: 'tobias.sittenauer@stack-forge.eu',
		linkedin: 'https://www.linkedin.com/in/tobias-sittenauer-b25b27262/',
		github: 'https://github.com/xetoxyc',
		image: tobias
	},
	{
		name: 'Wolfram Kriesing',
		email: 'w@kriesing.de',
		linkedin: 'https://www.linkedin.com/in/wolframkriesing/',
		github: 'https://github.com/wolframkriesing',
		codeberg: 'https://codeberg.org/wolframkriesing',
		image: wolfram
	}
];

const extractUsername = (url: string) => url.split('/').pop()!;

export const orgaUsernames: string[] = team.flatMap((m) =>
	[m.github, m.codeberg].filter((u): u is string => u != null).map(extractUsername)
);
