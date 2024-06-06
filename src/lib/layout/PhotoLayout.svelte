<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';

	export let photos: string[];
	export let year: string;

	let activePhoto: string | null = null;

	function setOrUnsetPhoto(photo: string) {
		if (activePhoto === photo) {
			activePhoto = null;
		} else {
			activePhoto = photo;
		}
	}
</script>

<PageLayout>
	<InfoBox title="Impressions of JSCraftCamp {year}">
		<div class="images">
			{#each photos as photo, index}
				<button
					class="image"
					class:active={activePhoto === photo}
					on:click={() => setOrUnsetPhoto(photo)}
				>
					<img
						src={photo}
						alt="Impression {index + 1} of {photos.length} from JSCraftCamp {year}"
					/>
				</button>
			{/each}
		</div>
	</InfoBox>
</PageLayout>

<style>
	.images {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		gap: 2em;
	}
	.image {
		height: auto;
		max-height: 10em;
		max-width: 10em;
		width: auto;
	}
	button {
		appearance: none;
		border: 0;
		background: none;
		cursor: pointer;
	}
	img {
		display: block;
		height: auto;
		max-height: 100%;
		max-width: 100%;
	}
	.active.image {
		position: fixed;
		background: #000c;
		align-items: center;
		justify-content: center;
		display: flex;
		padding: 2em;
		inset: 0;
		max-height: unset;
		max-width: unset;
		height: 100%;
		width: 100%;
	}
</style>
