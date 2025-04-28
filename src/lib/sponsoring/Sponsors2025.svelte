<script lang="ts">
	import type { Sponsor } from './is-sponsor';
	import allPrintCut from './sponsors-2025/all-print-cut-com.svg';
	import codecentric from './sponsors-2025/codecentric.png';
	import composeus from './sponsors-2025/compose-us.svg';
	import deno from './sponsors-2025/deno-full-light-transparent.svg';
	import inspiredconsulting from './sponsors-2025/inspired-consulting-logo.svg';
	import peerigon from './sponsors-2025/peerigon.svg';
	import saab from './sponsors-2025/saab.svg';
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
			sponsoring: 'Breakfast'
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
