<script lang="ts">
	import type { Sponsor } from './is-sponsor';
	import allPrintCut from './sponsors-2025/all-print-cut-com.svg';
	import alm from './sponsors-2025/alm-logo-2022.svg';
	import codecentric from './sponsors-2025/codecentric.png';
	import composeus from './sponsors-2025/compose-us.svg';
	import deno from './sponsors-2025/deno-full-light-transparent.svg';
	import finanzvergleich from './sponsors-2025/finanzvergleich-logo.png';
	import hetzner from './sponsors-2025/hetzner-logo-slogan_red-square.png';
	import inovex from './sponsors-2025/inovex-logo.png';
	import inspiredconsulting from './sponsors-2025/inspired-consulting-logo.svg';
	import peerigon from './sponsors-2025/peerigon.svg';
	import saab from './sponsors-2025/saab.svg';
	import tiffingerthiel from './sponsors-2025/tiffinger-thiel.svg';
	import tng from './sponsors-2025/tng.png';
	import typedigital from './sponsors-2025/typedigital.svg';
	import Sponsors from './Sponsors.svelte';

	const sponsors: Array<Sponsor> = [
		{
			image: allPrintCut,
			link: 'https://allprintcut.com/',
			name: 'All Print Cut',
			sponsoring: 'Stickers'
		},
		{
			image: alm,
			link: 'https://alm.sh',
			name: 'Alm Engineering',
			sponsoring: '500 €'
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
			sponsoring: 'Hosted by'
		},
		{
			image: deno,
			link: 'https://deno.land',
			name: 'deno',
			sponsoring: '250 €'
		},
		{
			image: finanzvergleich,
			link: 'https://finanzvergleich.com',
			name: 'Finanzvergleich.com',
			sponsoring: '200 €'
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
			sponsoring: 'Lunch'
		},
		{
			image: inspiredconsulting,
			link: 'https://inspired.consulting',
			name: 'Inspired Consulting',
			sponsoring: '300 €'
		},
		{
			image: peerigon,
			link: 'https://peerigon.com',
			name: 'peerigon',
			sponsoring: 'Coffee / Barista'
		},
		{
			image: saab,
			link: 'https://www.saab.com',
			name: 'Saab',
			sponsoring: 'Breakfast & Energy Drinks'
		},
		{
			image: tiffingerthiel,
			link: 'https://tiffinger-thiel.de/',
			name: 'Tiffinger & Thiel GmbH',
			sponsoring: 'Beverages'
		},
		{
			image: tng,
			link: 'https://www.tngtech.com/',
			name: 'TNG Technology Consulting',
			sponsoring: '500 €'
		},
		{
			image: typedigital,
			link: 'https://typedigital.de',
			name: 'typedigital',
			sponsoring: 'Friday Snacks'
		}
	].sort((a, b) => a.name.localeCompare(b.name));
</script>

<Sponsors title="A big thanks to our 2025 sponsors" {sponsors} />
