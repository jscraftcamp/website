<script lang="ts">
	import type { Sponsor } from './is-sponsor';
	import codecentric from './sponsors-2025/codecentric.png';
	import saab from './sponsors-2025/saab.svg';
	import Sponsors from './Sponsors.svelte';

	const sponsors: Array<Sponsor> = [
		{
			image: codecentric,
			link: 'https://www.codecentric.de',
			name: 'codecentric AG',
			sponsoring: 'Location'
		},
		{
			image: saab,
			link: 'https://www.saab.com/de/markets/germany',
			name: 'Saab',
			sponsoring: 'Breakfast'
		}
	].sort((a, b) => a.name.localeCompare(b.name));
</script>

<Sponsors title="A big thanks to our 2025 sponsors" {sponsors} />
