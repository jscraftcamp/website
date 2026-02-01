<script lang="ts">
	import { partners } from '$lib/config/partners';
	import Card from '$lib/layout/Card.svelte';
</script>

<section class="flex flex-col gap-4">
	<h2 class="text-primary text-center">Partners & Friends</h2>
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
		{#each partners as partner}
			<a href={partner.link} rel="external" target="_blank">
				<div
					class="flex aspect-square flex-col items-center justify-between rounded-2xl bg-dark-500 p-4 transition-opacity hover:opacity-80"
				>
					<div class="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
						<img
							src={partner.image}
							alt={partner.name}
							class="max-h-full max-w-full object-contain"
						/>
					</div>
					<span class="mt-2 shrink-0 text-center text-xs font-semibold text-white/30 md:text-sm"
						>{partner.name}</span
					>
				</div>
			</a>
		{/each}
	</div>
</section>
