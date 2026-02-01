import type { TeamMember } from './types';

import ariadne from './images/ariadne.jpg';
import bernd from './images/bernd.webp';
import joern from './images/joern.jpg';
import leo from './images/leo.webp';
import michael from './images/michael.png';
import patrickp from './images/patrickp.png';
import philip from './images/philip.jpeg';
import sina from './images/sina.jpeg';
import wolfram from './images/wolfram.jpg';

export const team: TeamMember[] = [
	{
		name: 'Ariadne Engelbrecht',
		email: 'Ariadne.Engelbrecht@curiosdevcookie.dev',
		linkedin: 'https://www.linkedin.com/in/ariadne-engelbrecht/',
		image: ariadne
	},
	{
		name: 'Bernd Kaiser',
		linkedin: 'https://www.linkedin.com/in/bernd-kaiser/',
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
		image: leo
	},
	{
		name: 'Michael Zoidl',
		email: 'michael@alm.sh',
		image: michael
	},
	{
		name: 'Patrick Piedad',
		email: 'patrickpiedad@gmail.com',
		linkedin: 'https://www.linkedin.com/in/patrick-piedad/',
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
		name: 'Wolfram Kriesing',
		email: 'w@kriesing.de',
		linkedin: 'https://www.linkedin.com/in/wolframkriesing/',
		github: 'https://github.com/wolframkriesing',
		image: wolfram
	}
];
