<script lang="ts">
	import Content from '$lib/layout/Content.svelte';
	import type { Sponsor } from './is-sponsor';

	interface Props {
		title: string;
		sponsors?: Sponsor[];
	}

	let { title, sponsors = [] }: Props = $props();
</script>

<Content>
	<h2 class="text-primary text-center">{title}</h2>
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
		{#each sponsors as sponsor (sponsor.name)}
			<a href={sponsor.link} rel="external" target="_blank" class="group">
				<div
					class="relative flex aspect-square flex-col items-center justify-between overflow-hidden rounded-2xl bg-dark-500 p-4 transition-opacity hover:opacity-90"
				>
					<div class="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
						<img
							src={sponsor.image}
							alt={sponsor.name}
							class="max-h-full max-w-full object-contain"
						/>
					</div>
					<span class="mt-2 shrink-0 text-center text-xs font-semibold text-white/30 md:text-sm">
						{sponsor.name}
					</span>
					{#if sponsor.sponsoring}
						<div
							class="absolute inset-0 flex items-start rounded-2xl bg-linear-to-br from-black/80 via-black/60 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
						>
							{sponsor.sponsoring}
						</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</Content>
