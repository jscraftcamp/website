<script lang="ts">
	import atoss from './sponsors-2016/atoss_logo.png';
	import codecentric from './sponsors-2016/cc_logo.png';
	import gutefrage from './sponsors-2016/gf_logo.png';
	import innoq from './sponsors-2016/innoq_logo.png';
	import scandio from './sponsors-2016/scandio_logo_google.jpg';
	import simplabs from './sponsors-2016/simplelabs-logo.png';
	import tng from './sponsors-2016/tng_logo.png';
	import vi from './sponsors-2016/vi_logo.jpeg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: atoss,
			link: 'https://www.atoss.com/',
			name: 'Atoss'
		},
		{
			image: codecentric,
			link: 'https://www.codecentric.de/',
			name: 'codecentric'
		},
		{
			image: gutefrage,
			link: 'http://www.gutefrage.net/',
			name: 'gutefrage.net'
		},
		{
			image: innoq,
			link: 'https://www.innoq.com/',
			name: 'innoQ'
		},
		{
			image: scandio,
			link: 'https://www.scandio.de/',
			name: 'scandio Software & Consulting'
		},
		{
			image: simplabs,
			link: 'http://simplabs.com/',
			name: 'simplabs'
		},
		{
			image: tng,
			link: 'http://www.tngtech.com/',
			name: 'TNG Technology Consulting'
		},
		{
			image: vi,
			link: 'http://virtual-identity.com/',
			name: 'Virtual Identity',
			sponsoring: 'Location'
		}
	];
</script>

<Sponsors title="The 2016 event happened thanks to these great sponsors" {sponsors} />
