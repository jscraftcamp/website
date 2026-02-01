<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Card from './Card.svelte';

	interface Props {
		photos: string[];
		year: string;
		credit?: Snippet;
	}

	let { photos, year, credit }: Props = $props();

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
	<Card>
		<h2>Impressions of JSCraftCamp {year}</h2>
		<div class="flex flex-row flex-wrap items-center justify-between gap-[2em]">
			{#each photos as photo, index (photo)}
				<button
					class="appearance-none border-0 bg-transparent cursor-pointer grow flex items-center justify-center {activePhoto ===
					photo
						? 'fixed inset-0 p-[2em] bg-black/80 max-h-none max-w-none w-full h-full z-50'
						: 'w-[10em] h-[10em]'}"
					onclick={() => setOrUnsetPhoto(photo)}
				>
					<img
						class="block w-full h-full object-contain"
						src={photo}
						alt="Impression {index + 1} of {photos.length} from JSCraftCamp {year}"
					/>
				</button>
			{/each}
		</div>

		{@render credit?.()}
	</Card>
</PageLayout>
