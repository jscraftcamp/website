<script lang="ts">
	import socrates from './partners/socrates.png';
	import frontmuc from './partners/munich-frontend-developers.webp';
	import seneca from './partners/seneca.png';
	import Sponsors from './Sponsors.svelte';
	const partners = [
		{
			image: frontmuc,
			link: 'https://www.meetup.com/de-DE/munich-frontend-developers/',
			name: 'Munich Frontend Developers'
		},
		{
			image: socrates,
			link: 'https://www.socrates-conference.de/',
			name: 'SoCraTes',
			sponsoring: 'July 17 - 20, 2025, Hotel Park Soltau, Germany'
		},
		{
			image: seneca,
			link: 'https://seneca.camp/',
			name: 'Seneca',
			sponsoring: '19.-21.09.2025'
		}
	];
</script>

<Sponsors title="Our partner conferences" sponsors={partners} />
