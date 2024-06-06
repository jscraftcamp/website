<script>
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import Sponsors2016 from '$lib/sponsoring/Sponsors2016.svelte';
	import EventLayout from '../EventLayout.svelte';
	import jscc2016logo from './jscc-logo-without-text.svg';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20161011211857/http://jscraftcamp.org:80/"
	logo={jscc2016logo}
	when="October 8th + 9th, 2016"
	where="Virtual Identity"
	year="2016"
>
	<InfoBox title="Session Notes"
		>Unfortunately, we did not collect session notes in 2016. If you happen to have some and want to
		contribute, please check our GitHub repositories for session notes!</InfoBox
	>
	<p>Have a look at <a href="{base}/events/2016/photos/">impressions of #jscc16</a>.</p>
	<Sponsors2016 />
</EventLayout>
