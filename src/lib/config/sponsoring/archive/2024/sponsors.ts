import abs from './logos/abs-logo.svg';
import alm from './logos/alm-logo-2022.svg';
import codecentric from './logos/codecentric.png';
import deno from './logos/deno-logo.svg';
import hipsquare from './logos/hipsquare.svg';
import inovex from './logos/inovex-logo.png';
import inspiredconsulting from './logos/inspired-consulting-logo.svg';
import jambit from './logos/jambit.svg';
import maibornwolff from './logos/maibornwolff.svg';
import peerigon from './logos/peerigon.svg';
import projectLary from './logos/project-lary.svg';
import saab from './logos/saab.svg';
import satellytes from './logos/satellytes-blue.svg';
import tiffingerthiel from './logos/tiffinger-thiel.svg';
import tng from './logos/tng.png';
import twilio from './logos/twilio.svg';
import type { Sponsor } from '../../types';

export const sponsors: Sponsor[] = [
	{
		image: abs,
		link: 'https://www.absturzsicherung.de/',
		name: 'ABS Safety GmbH',
		sponsoring: 'Money'
	},
	{
		image: alm,
		link: 'https://alm.sh',
		name: 'alm engineering',
		sponsoring: '500 €'
	},
	{
		image: deno,
		link: 'https://deno.land',
		name: 'deno',
		sponsoring: 'Stickers'
	},
	{
		image: inovex,
		link: 'https://inovex.de',
		name: 'inovex',
		sponsoring: 'Lunch'
	},
	{
		image: inspiredconsulting,
		link: 'https://inspired.consulting',
		name: 'Inspired Consulting',
		sponsoring: '200 €'
	},
	{
		image: jambit,
		link: 'https://jambit.com',
		name: 'jambit',
		sponsoring: '500 €'
	},
	{
		image: maibornwolff,
		link: 'https://maibornwolff.com',
		name: 'maibornwolff',
		sponsoring: 'Location'
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
		image: saab,
		link: 'https://www.saab.com',
		name: 'Saab',
		sponsoring: 'Breakfast'
	},
	{
		image: satellytes,
		link: 'https://www.satellytes.com/',
		name: 'Satellytes Digital Consulting',
		sponsoring: 'T-Shirts'
	},
	{
		image: tng,
		link: 'https://www.tngtech.com/',
		name: 'TNG Technology Consulting',
		sponsoring: 'Lunch'
	},
	{
		image: tiffingerthiel,
		link: 'https://tiffinger-thiel.de/',
		name: 'Tiffinger & Thiel GmbH',
		sponsoring: '200 €'
	},
	{
		image: twilio,
		link: 'https://twilio.com/',
		name: 'Twilio',
		sponsoring: '400 €'
	},
	{
		image: codecentric,
		link: 'https://www.codecentric.de',
		name: 'codecentric AG',
		sponsoring: 'Snacks Friday'
	},
	{
		image: hipsquare,
		link: 'https://www.hipsquare.net',
		name: 'HipSquare GmbH',
		sponsoring: 'Snacks Saturday'
	}
].sort((a, b) => a.name.localeCompare(b.name));

export const isSponsor = (key: string) =>
	[
		'abs-safety',
		'alm',
		'codecentric',
		'deno',
		'hipsquare',
		'inovex',
		'inspired-consulting',
		'jambit',
		'maibornwolff',
		'peerigon',
		'project-lary',
		'saab',
		'satellytes',
		'tiffinger-thiel',
		'tng-technology-consulting',
		'twilio'
	].includes(key);
