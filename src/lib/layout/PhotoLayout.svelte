<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';

	interface Props {
		photos: string[];
		year: string;
	}

	let { photos, year }: Props = $props();

	let activePhoto: string | null = $state(null);

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
			{#each photos as photo, index (photo)}
				<button
					class="image"
					class:active={activePhoto === photo}
					onclick={() => setOrUnsetPhoto(photo)}
				>
					<img
						src={photo}
						alt="Impression {index + 1} of {photos.length} from JSCraftCamp {year}"
					/>
				</button>
			{/each}
		</div>

		<p>
			Photos by
			<a href="https://github.com/weiliddat" target="_blank">Chiawei</a>
			is licensed under
			<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> for
			JSCraftCamp {year}.
		</p>
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
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10em;
		height: 10em;
	}
	button {
		appearance: none;
		border: 0;
		background: none;
		cursor: pointer;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
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
