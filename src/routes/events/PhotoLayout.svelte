<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';

	export let photos: string[];
	export let year: string;
</script>

<PageLayout>
	<InfoBox title="Impressions of JSCraftCamp {year}">
		<div>
			{#each photos as photo, index}
				<img
					src="{photo}"
					alt="Impression {index + 1} of {photos.length} from JSCraftCamp {year}"
				/>
			{/each}
		</div>
	</InfoBox>
</PageLayout>

<style>
	div {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		gap: 2em;
	}
	img {
		height: auto;
		max-height: 10em;
		max-width: 10em;
		width: auto;
	}
</style>
