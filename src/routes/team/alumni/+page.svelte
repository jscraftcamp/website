<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import TeamMember from '../TeamMember.svelte';
	import TeamMemberSection from '../TeamMemberSection.svelte';
	import agnes from './agnes.png';
	import david from './david.jpg';
	import fii from './fii.jpg';
	import marco from './marco.jpg';
	import patrick from './patrick.jpg';
	import sebastian from './sebastian.jpg';
	import simon from './simon.png';
	import robert from './robert.png';
</script>

<PageLayout>
	<h1>The Alumni of JSCraftCamp Organizers</h1>
	<p>
		Throughout the years, there were lots of helping hands and people who organized previous events.
		Thank you all for the support!
	</p>

	<TeamMemberSection>
		<TeamMember image={agnes} name="Agnes Köhler" email="koehler.agnes@gmail.com" />
		<TeamMember image={david} name="David Losert" email="david@david-losert.com" />
		<TeamMember name="Gustaf Graf" />
		<TeamMember image={marco} name="Marco Emrich" email="marco.emrich@codecentric.de" />
		<TeamMember image={patrick} name="Patrick Müller" email="mp@floatec.de" />
		<TeamMember
			image={sebastian}
			name="Sebastian Frerichs"
			email="sebastian.frerichs@codecentric.de"
		/>
		<TeamMember image={simon} name="Simon Hofmann" email="simon@s1h.org" />
		<TeamMember
			image={fii}
			linkedin="https://www.linkedin.com/in/stefanie-hasler-05458a4/"
			name="Stefanie (Fii) Hasler"
		/>
		<TeamMember image={robert} name="Robert Hostlowsky" />
	</TeamMemberSection>

	<p>Looking for the current team members? <a href="{base}/team">Check the /team page</a>!</p>
</PageLayout>
