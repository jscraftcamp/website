<script lang="ts">
	import { partners } from '$lib/config/partners';
</script>

<section class="flex flex-col gap-4">
	<h2 class="text-primary text-center">Partners & Friends</h2>
	<div
		class="flex flex-wrap justify-center gap-4 [&>a]:w-[calc(50%-0.5rem)] [&>a]:sm:w-[calc(33.333%-0.67rem)] [&>a]:md:w-[calc(16.666%-0.83rem)]"
	>
		{#each partners as partner (partner.name)}
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
