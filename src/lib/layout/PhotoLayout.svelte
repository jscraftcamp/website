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
					class="flex grow cursor-pointer appearance-none items-center justify-center border-0 bg-transparent {activePhoto ===
					photo
						? 'fixed inset-0 z-50 h-full max-h-none w-full max-w-none bg-black/80 p-[2em]'
						: 'h-[10em] w-[10em]'}"
					onclick={() => setOrUnsetPhoto(photo)}
				>
					<img
						class="block h-full w-full object-contain"
						src={photo}
						alt="Impression {index + 1} of {photos.length} from JSCraftCamp {year}"
					/>
				</button>
			{/each}
		</div>

		{@render credit?.()}
	</Card>
</PageLayout>
