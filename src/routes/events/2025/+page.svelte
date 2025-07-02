<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PersonLink from '$lib/layout/PersonLink.svelte';
	import Logo2025 from '$lib/logos/Logo2025.svelte';
	import Sponsors2025 from '$lib/sponsoring/Sponsors2025.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20250628212649/https://jscraftcamp.org/"
	when="June 27th and 28th, 2025"
	where="codecentric AG"
	year="2025"
>
	<InfoBox>
		<p>
			This event was facilitated by <PersonLink linkedIn="https://www.linkedin.com/in/marco-emrich/"
				>Marco Emrich</PersonLink
			>.
		</p>
		<p>
			Check out the session notes at <a
				href="https://github.com/jscraftcamp/jscc2025"
				rel="external">https://github.com/jscraftcamp/jscc2025</a
			>.
		</p>
		<p>
			There are <a href="{base}/events/2025/stats">statistics available for the JSCC25</a>.
		</p>
		<p>
			Have a look at <a href="{base}/events/2025/photos/">impressions of #jscc25</a>.
		</p>
	</InfoBox>
	<Sponsors2025 />
	<Logo2025 />
</EventLayout>
