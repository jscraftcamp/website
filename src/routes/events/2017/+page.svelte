<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import Sponsors2017 from '$lib/sponsoring/Sponsors2017.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20170715150754/http://jscraftcamp.org:80/"
	when="July 21st & 22nd, 2017"
	where="Virtual Identity"
	year="2017"
>
	<InfoBox>
		<p>
			This event was facilitated by Tobias Goeschel (<a
				href="https://twitter.com/w3ltraumpirat"
				rel="external">@w3ltraumpirat</a
			>)
		</p>
		<p>
			Check out the session notes at <a href="https://notes2017.jscraftcamp.org/" rel="external"
				>notes2017.jscraftcamp.org</a
			>
		</p>
		<p>Have a look at <a href="{base}/events/2017/photos/">impressions of #jscc17</a>.</p>
	</InfoBox>
	<Sponsors2017 />
</EventLayout>
