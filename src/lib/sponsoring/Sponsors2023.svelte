<script lang="ts">
	import alm from './sponsors-2023/alm-logo-2022.svg';
	import codecentric from './sponsors-2023/codecentric.png';
	import composeus from './sponsors-2023/compose-us.svg';
	import hetzner from './sponsors-2023/hetzner-logo-slogan_red-square.png';
	import inovex from './sponsors-2023/inovex-logo.png';
	import jambit from './sponsors-2023/jambit.svg';
	import peerigon from './sponsors-2023/peerigon.svg';
	import projectLary from './sponsors-2023/project-lary.svg';
	import scalableCapital from './sponsors-2023/scalable-capital.svg';
	import seppMed from './sponsors-2023/sepp-med.svg';
	import tng from './sponsors-2023/tng.png';
	import typedigital from './sponsors-2023/typedigital.svg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
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
	];
</script>

<Sponsors title="A big thanks to our 2023 sponsors" {sponsors} />
