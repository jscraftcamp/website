<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import Sponsors2018 from '$lib/sponsoring/Sponsors2018.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20180809182443/http://jscraftcamp.org/"
	when="August 10th & 11th, 2018"
	where="Virtual Identity"
	year="2018"
>
	<InfoBox>
		<p>This event was facilitated by Cecilia Maria Zannini.</p>
		<p>
			Check out the session notes at <a href="https://notes2018.jscraftcamp.org/" rel="external"
				>notes2018.jscraftcamp.org</a
			>
		</p>
		<p>Have a look at <a href="{base}/events/2018/photos/">impressions of #jscc18</a>.</p>
	</InfoBox>
	<Sponsors2018 />
</EventLayout>
