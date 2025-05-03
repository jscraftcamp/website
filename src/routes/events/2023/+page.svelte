<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import Logo2023 from '$lib/logos/Logo2023.svelte';
	import Sponsors2023 from '$lib/sponsoring/Sponsors2023.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20230517132423/https://jscraftcamp.org/"
	when="June 30th & July 1st 2023"
	where="Codecentric"
	year="2023"
>
	<InfoBox>
		<p>
			This event was facilitated by Tobias Goeschel (<a
				href="https://twitter.com/w3ltraumpirat"
				rel="external">@w3ltraumpirat</a
			>)
		</p>
		<p>
			Check out the session notes at <a
				href="https://github.com/jscraftcamp/jscc23-sessions"
				rel="external">https://github.com/jscraftcamp/jscc23-sessions</a
			>.
		</p>
		<p>
			There are <a href="{base}/events/2023/stats">statistics available for the JSCC23</a>.
		</p>
	</InfoBox>
	<Sponsors2023 />
	<Logo2023 />
</EventLayout>
