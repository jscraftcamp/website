<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import ariadne from './ariadne.jpg';
	import bernd from './bernd.webp';
	import joern from './joern.jpg';
	import leo from './leo.webp';
	import michael from './michael.png';
	import patrickp from './patrickp.png';
	import philip from './philip.jpeg';
	import sina from './sina.jpeg';
	import wolfram from './wolfram.jpg';
	import TeamMember from './TeamMember.svelte';
	import TeamMemberSection from './TeamMemberSection.svelte';
</script>

<PageLayout>
	<h1>The Team</h1>
	<InfoBox title="Who are we?">
		<p>
			We are simple developers organizing this event in our spare time. If you have any questions or
			problems before or during the conference, don't hesitate to contact one of us!
		</p>
		<p>
			Throughout the years, there were lots of people involved in organizing the past events. You
			can <a href="{base}/team/alumni">find out more about our alumnis on the /team/alumni page</a>.
		</p>
	</InfoBox>

	<p>
		You can always reach us by e-mail: <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a
		>
	</p>

	<TeamMemberSection>
		<TeamMember
			image={ariadne}
			linkedin="https://www.linkedin.com/in/ariadne-engelbrecht/"
			name="Ariadne Engelbrecht"
			email="Ariadne.Engelbrecht@curiosdevcookie.dev"
		/>
		<TeamMember
			image={bernd}
			linkedin="https://www.linkedin.com/in/bernd-kaiser/"
			name="Bernd Kaiser"
		/>
		<TeamMember
			image={joern}
			linkedin="https://www.linkedin.com/in/joern-bernhardt/"
			name="Jörn Bernhardt"
			email="joern.bernhardt@compose.us"
		/>
		<TeamMember
			image={leo}
			linkedin="https://www.linkedin.com/in/leo-kettmeir/"
			name="Leo Kettmeir"
			email="leo@deno.com"
		/>
		<TeamMember image={michael} name="Michael Zoidl" email="michael@alm.sh" />
		<TeamMember
			image={patrickp}
			name="Patrick Piedad"
			email="patrickpiedad@gmail.com"
			linkedin="https://www.linkedin.com/in/patrick-piedad/"
		/>
		<TeamMember
			image={philip}
			linkedin="https://www.linkedin.com/in/philipsaa/"
			name="Philip Saa"
		/>
		<TeamMember
			image={sina}
			linkedin="https://www.linkedin.com/in/sina-aschenbrenner-146aa8229/"
			name="Sina Aschenbrenner"
		/>
		<TeamMember
			image={wolfram}
			linkedin="https://www.linkedin.com/in/wolframkriesing/"
			name="Wolfram Kriesing"
			email="w@kriesing.de"
		/>
	</TeamMemberSection>

	<p>
		Want to see yourself on the list and help out? <a href="https://discord.gg/3mHhaXVEjP"
			>Join our Discord and the regular orga meetings</a
		>!
	</p>
</PageLayout>
