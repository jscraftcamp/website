<script lang="ts">
	import cioplenu from './sponsors-2018/cioplenu.jpg';
	import codecentric from './sponsors-2018/codecentric.png';
	import entwicklerstube from './sponsors-2018/entwicklerstube_logo.jpg';
	import futurice from './sponsors-2018/futurice.png';
	import jambit from './sponsors-2018/jambit_logo.jpg';
	import mayflower from './sponsors-2018/mayflower.png';
	import methodpark from './sponsors-2018/method_park_logo.png';
	import netcentric from './sponsors-2018/netcentric.png';
	import peerigon from './sponsors-2018/peerigon.png';
	import pro7sat1 from './sponsors-2018/pro7sat1.png';
	import tngtech from './sponsors-2018/tng.png';
	import vi from './sponsors-2018/vi_logo.jpeg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: vi,
			link: 'https://virtual-identity.com/',
			name: 'Virtual Identity',
			sponsoring: 'Location'
		},
		{ image: jambit, link: 'https://www.jambit.com/', name: 'jambit', sponsoring: '?' },
		{ image: netcentric, link: 'https://netcentric.biz/', name: 'netcentric', sponsoring: '?' },
		{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon', sponsoring: '?' },
		{ image: methodpark, link: 'https://www.methodpark.de/', name: 'Method Park', sponsoring: '?' },
		{
			image: tngtech,
			link: 'https://www.tngtech.com/',
			name: 'TNG Technology Consulting',
			sponsoring: '?'
		},
		{
			image: codecentric,
			link: 'https://www.codecentric.de/',
			name: 'codecentric',
			sponsoring: '?'
		},
		{
			image: entwicklerstube,
			link: 'https://entwicklerstube.com/',
			name: 'Entwicklerstube',
			sponsoring: '?'
		},
		{ image: cioplenu, link: 'https://cioplenu.com/', name: 'cioplenu', sponsoring: '?' },
		{ image: futurice, link: 'https://www.futurice.com/', name: 'Futurice', sponsoring: '?' },
		{
			image: pro7sat1,
			link: 'http://tech.prosiebensat1.com/',
			name: 'ProSiebenSat.1 Media SE',
			sponsoring: '?'
		},
		{ image: mayflower, link: 'https://www.mayflower.de/', name: 'Mayflower', sponsoring: '?' }
	];
</script>

<Sponsors title="The 2018 event happened thanks to these great sponsors" {sponsors} />
