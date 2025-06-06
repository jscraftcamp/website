<script>
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import Sponsors2022 from '$lib/sponsoring/Sponsors2022.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20221028190502/https://jscraftcamp.org/"
	when="July 19th & 20th 2022"
	where="Codecentric"
	year="2022"
>
	<InfoBox>
		<p>This event was facilitated by Marco Emrich.</p>
		<p>
			Check out the session notes at <a
				href="https://github.com/jscraftcamp/jscc22-sessions"
				rel="external">https://github.com/jscraftcamp/jscc22-sessions</a
			>.
		</p>
	</InfoBox>
	<Sponsors2022 />
</EventLayout>
