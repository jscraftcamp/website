<script lang="ts">
	import alm from './sponsors-2024/alm-logo-2022.svg';
	import deno from './sponsors-2024/deno-logo.svg';
	import inovex from './sponsors-2024/inovex-logo.png';
	import jambit from './sponsors-2024/jambit.svg';
	import maibornwolff from './sponsors-2024/maibornwolff.svg';
	import peerigon from './sponsors-2024/peerigon.svg';
	import projectLary from './sponsors-2024/project-lary.svg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
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
		}
	];
</script>

<Sponsors title="A big thanks to our 2024 sponsors" {sponsors} />
