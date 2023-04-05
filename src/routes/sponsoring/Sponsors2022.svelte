<script lang="ts">
	import codecentric from './sponsors-2022/codecentric.png';
	import composeus from './sponsors-2022/compose-us.png';
	import grollmus from './sponsors-2022/grollmus.png';
	import instana from './sponsors-2022/instana.png';
	import methodpark from './sponsors-2022/method-park.png';
	import peerigon from './sponsors-2022/peerigon.png';
	import sonomotors from './sponsors-2022/sono-motors.png';
	import tng from './sponsors-2022/tng.png';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: codecentric,
			link: 'https://www.codecentric.de/',
			name: 'codecentric',
			sponsoring: 'Location'
		},
		{ image: grollmus, link: 'https://www.grollmus.de/', name: 'Grollmus', sponsoring: '?' },
		{ image: composeus, link: 'https://www.compose.us/', name: 'compose.us', sponsoring: '?' },
		{
			image: tng,
			link: 'https://www.tngtech.com/',
			name: 'TNG Technology Consulting',
			sponsoring: '?'
		},
		{ image: peerigon, link: 'https://www.peerigon.com/', name: 'Peerigon', sponsoring: '?' },
		{ image: sonomotors, link: 'https://sonomotors.com/', name: 'Sono Motors', sponsoring: '?' },
		{ image: instana, link: 'https://www.instana.com/', name: 'Instana', sponsoring: '?' },
		{ image: methodpark, link: 'https://www.instana.com/', name: 'Method Park', sponsoring: '?' }
	];
</script>

<Sponsors title="The 2022 event happened thanks to these great sponsors" {sponsors} />
