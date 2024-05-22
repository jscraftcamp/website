<script lang="ts">
	import alm from './sponsors-2024/alm-logo-2022.svg';
	import deno from './sponsors-2024/deno-logo.svg';
	import inovex from './sponsors-2024/inovex-logo.png';
	import inspiredconsulting from './sponsors-2024/inspired-consulting-logo.svg';
	import jambit from './sponsors-2024/jambit.svg';
	import maibornwolff from './sponsors-2024/maibornwolff.svg';
	import peerigon from './sponsors-2024/peerigon.svg';
	import projectLary from './sponsors-2024/project-lary.svg';
	import saab from './sponsors-2024/saab.svg';
	import satellytes from './sponsors-2024/satellytes-blue.svg';
	import tng from './sponsors-2024/tng.png';
	import tiffingerthiel from './sponsors-2024/tiffinger-thiel.svg';
	import twilio from './sponsors-2024/twilio.svg';
	import codecentric from './sponsors-2024/codecentric.png';
	import hipsquare from './sponsors-2024/hipsquare.svg';
	import Sponsors from './Sponsors.svelte';
	import type { Sponsor } from './is-sponsor';

	const sponsors: Sponsor[] = [
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
</script>

<Sponsors title="A big thanks to our 2024 sponsors" {sponsors} />
