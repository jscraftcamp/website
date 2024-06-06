<script lang="ts">
	import cioplenu from './sponsors-2019/cioplenu.jpg';
	import codecentric from './sponsors-2019/codecentric.png';
	import consol from './sponsors-2019/consol.png';
	import datev from './sponsors-2019/datev.png';
	import entwicklerstube from './sponsors-2019/entwicklerstube.png';
	import hetzner from './sponsors-2019/hetzner_cloud.svg';
	import jambit from './sponsors-2019/jambit.png';
	import methodpark from './sponsors-2019/methodpark.png';
	import peerigon from './sponsors-2019/peerigon.png';
	import sinnerschrader from './sponsors-2019/sinnerschrader.svg';
	import tng from './sponsors-2019/tng.png';
	import vi from './sponsors-2019/vi.jpg';
	import Sponsors from './Sponsors.svelte';
	const sponsors = [
		{
			image: vi,
			link: 'http://virtual-identity.com/',
			name: 'Virtual Identity',
			sponsoring: 'Location'
		},
		{
			image: codecentric,
			link: 'https://www.codecentric.de/',
			name: 'codecentric'
		},
		{ image: peerigon, link: 'https://peerigon.com/', name: 'Peerigon' },
		{
			image: entwicklerstube,
			link: 'https://entwicklerstube.com/',
			name: 'Entwicklerstube'
		},
		{
			image: sinnerschrader,
			link: 'https://sinnerschrader.com/',
			name: 'Sinnerschrader'
		},
		{
			image: methodpark,
			link: 'https://www.methodpark.com/',
			name: 'Method Park'
		},
		{ image: cioplenu, link: 'https://cioplenu.com/', name: 'cioplenu' },
		{ image: jambit, link: 'https://www.jambit.com/', name: 'jambit' },
		{
			image: tng,
			link: 'https://www.tngtech.com/',
			name: 'TNG Technology Consulting'
		},
		{ image: consol, link: 'https://github.com/ConSol', name: 'consol' },
		{
			image: hetzner,
			link: 'https://github.com/hetznercloud',
			name: 'Hetzner Cloud'
		},
		{ image: datev, link: 'https://www.datev.de/', name: 'Datev' }
	];
</script>

<Sponsors title="The 2019 event happened thanks to these great sponsors" {sponsors} />
