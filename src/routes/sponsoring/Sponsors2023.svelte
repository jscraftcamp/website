<script lang="ts">
	import codecentric from './sponsors-2023/codecentric.png';
	import inovex from './sponsors-2023/inovex-logo.svg';
	import projectLary from './sponsors-2023/project-lary.svg';
	import seppMed from './sponsors-2023/sepp-med.svg';
	import typedigital from './sponsors-2023/typedigital.svg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: codecentric,
			link: 'https://www.codecentric.de',
			name: 'codecentric AG',
			sponsoring: 'Location'
		},
		{
			image: inovex,
			link: 'https://inovex.de',
			name: 'inovex',
			sponsoring: 'Coffee / Barista'
		},
		{
			image: projectLary,
			link: 'https://project-lary.de',
			name: 'project lary',
			sponsoring: 'Beverages'
		},
		{
			image: seppMed,
			link: 'https://www.seppmed.de',
			name: 'sepp.med',
			sponsoring: 'Stickers'
		},
		{
			image: typedigital,
			link: 'https://typedigital.de',
			name: 'typedigital',
			sponsoring: 'Saturday Snacks'
		}
	];
</script>

<Sponsors title="A big thanks to our great sponsors" {sponsors} />
