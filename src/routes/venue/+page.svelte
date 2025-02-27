<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<PageLayout>
	<h1>Location Information</h1>

	<section>
		<InfoBox>
			<p>This year's location will be in codecentric München office.</p>
			<p>
				codecentric AG<br />
				August-Everding-Straße 20<br />
				81671 München<br />
				(<a href="https://maps.app.goo.gl/P2V1zn797ffFdjPm9" rel="external noopener noreferrer"
					>Google Maps</a
				>)
			</p>
			<p>
				See some impressions of the codecentric Plaza here:
				<a href="https://www.codecentric.de/standorte/muenchen" rel="external noopener noreferrer"
					>here</a
				>.
			</p>
		</InfoBox>

		<InfoBox title="Accessibility">
			<p>We'll update this when we have more information available.</p>
		</InfoBox>
	</section>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 2em;
	}
</style>
