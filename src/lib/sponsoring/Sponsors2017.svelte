<script lang="ts">
	import campudus from './sponsors-2017/campudus-developers-logo-rgb.svg';
	import codecentric from './sponsors-2017/codecentric.png';
	import holidaycheck from './sponsors-2017/holidaycheck.jpg';
	import jambit from './sponsors-2017/jambit_logo.jpg';
	import jskongress from './sponsors-2017/jskongress_logo.png';
	import mercateo from './sponsors-2017/mercateo.jpg';
	import peerigon from './sponsors-2017/peerigon.png';
	import sinnerschrader from './sponsors-2017/sinnerschrader.png';
	import tng from './sponsors-2017/tng.png';
	import trustyou from './sponsors-2017/trustyou-logo.png';
	import vi from './sponsors-2017/vi_logo.jpeg';
	import wunder from './sponsors-2017/wunder.png';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: vi,
			link: 'http://virtual-identity.com/',
			name: 'Virtual Identity',
			sponsoring: 'Location'
		},
		{
			image: sinnerschrader,
			link: 'https://sinnerschrader.com/',
			name: 'Sinnerschrader'
		},
		{ image: trustyou, link: 'https://www.trustyou.com/', name: 'Trust You' },
		{
			image: codecentric,
			link: 'https://www.codecentric.de/',
			name: 'codecentric'
		},
		{
			image: mercateo,
			link: 'http://www.mercateo.com/corporate/',
			name: 'Mercateo'
		},
		{ image: tng, link: 'https://www.tngtech.com/', name: 'TNG' },
		{
			image: holidaycheck,
			link: 'https://holidaycheck.de/',
			name: 'HolidayCheck'
		},
		{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon' },
		{ image: wunder, link: 'https://wunder.io/', name: 'Wunder.io' },
		{
			image: jskongress,
			link: 'https://2017.js-kongress.de/',
			name: 'JSKongress'
		},
		{ image: campudus, link: 'http://campudus.com/', name: 'Campudus' },
		{ image: jambit, link: 'https://www.jambit.com/', name: 'Jambit' }
	];
</script>

<Sponsors title="The 2017 event happened thanks to these great sponsors" {sponsors} />
