<script lang="ts">
	import type { Sponsor } from './is-sponsor';
	import codecentric from './sponsors-2025/codecentric.png';
	import composeus from './sponsors-2025/compose-us.svg';
	import deno from './sponsors-2025/deno-logo.svg';
	import peerigon from './sponsors-2025/peerigon.svg';
	import saab from './sponsors-2025/saab.svg';
	import typedigital from './sponsors-2025/typedigital.svg';
	import Sponsors from './Sponsors.svelte';

	const sponsors: Array<Sponsor> = [
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
