<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import agnes from './agnes.png';
	import joern from './joern.jpg';
	import marco from './marco.jpg';
	import michael from './michael.png';
	import patrick from './patrick.jpg';
	import robert from './robert.png';
	import sebastian from './sebastian.jpg';
	import simon from './simon.png';
	import TeamMember from './TeamMember.svelte';
	import wolfram from './wolfram.jpg';
</script>

<PageLayout>
	<h1>The Team</h1>
	<InfoBox title="Who are we?">
		<p>
			We are simple developers organizing this event in our spare time. If you have any questions or
			problems before or during the conference, don't hesitate to contact one of us!
		</p>
	</InfoBox>
	<p>
		You can always reach us by e-mail: <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a
		>
	</p>

	<section>
		<TeamMember image={agnes} name="Agnes Köhler" email="koehler.agnes@gmail.com" />
		<TeamMember image={joern} name="Jörn Bernhardt" email="joern.bernhardt@compose.us" />
		<TeamMember image={marco} name="Marco Emrich" email="marco.emrich@codecentric.de" />
		<TeamMember image={michael} name="Michael Zoidl" email="michael@alm.sh" />
		<TeamMember image={patrick} name="Patrick Müller" email="mp@floatec.de" />
		<TeamMember image={robert} name="Robert Hostlowsky" />
		<TeamMember
			image={sebastian}
			name="Sebastian Frerichs"
			email="sebastian.frerichs@codecentric.de"
		/>
		<TeamMember image={simon} name="Simon Hofmann" email="simon@s1h.org" />
		<TeamMember image={wolfram} name="Wolfram Kriesing" email="w@kriesing.de" />
	</section>
</PageLayout>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 2em;
		margin: 0 auto;
	}
</style>
