<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PersonLink from '$lib/layout/PersonLink.svelte';
	import Logo2024 from '$lib/logos/Logo2024.svelte';
	import Sponsors2024 from '$lib/sponsoring/Sponsors2024.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20250107140755/https://jscraftcamp.org/"
	when="June 07th & 8th 2024"
	where="Maiborn-Wolff Kraftwerk"
	year="2024"
>
	<InfoBox>
		<p>
			This event was facilitated by <PersonLink
				linkedIn="https://www.linkedin.com/in/stefanie-hasler-05458a4/"
				mastodon="">Stefanie Hasler</PersonLink
			>
		</p>
		<p>
			Check out the session notes at <a
				href="https://github.com/jscraftcamp/jscc24-sessions"
				rel="external">https://github.com/jscraftcamp/jscc24-sessions</a
			>.
		</p>
		<p>
			There are <a href="{base}/events/2024/stats">statistics available for the JSCC24</a>.
		</p>
	</InfoBox>
	<Sponsors2024 />
	<Logo2024 />
</EventLayout>
