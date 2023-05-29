<script>
	import { base } from '$app/paths';
	import Sponsors2017 from '../../sponsoring/Sponsors2017.svelte';
	import EventLayout from '../EventLayout.svelte';
</script>

<EventLayout
	archiveLink="https://web.archive.org/web/20170715150754/http://jscraftcamp.org:80/"
	when="July 21st & 22nd, 2017"
	where="Virtual Identity"
	year="2017"
>
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
	<Sponsors2017 />
</EventLayout>
