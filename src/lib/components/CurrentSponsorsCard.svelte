<script lang="ts">
	import { sponsors, thankYouTranslations } from '$lib/config/sponsoring';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	const baseSponsors = sponsors;

	// Duplicate items for seamless infinite scroll
	const duplicatedTranslations = [...thankYouTranslations, ...thankYouTranslations];

	const isSmallCount = $derived(baseSponsors.length > 0 && baseSponsors.length <= 4);

	const minSponsorsVisible = 8;

	const repeatCount = $derived.by(() => {
		if (baseSponsors.length === 0) {
			return 0;
		}
		if (isSmallCount) {
			return 2;
		}

		const min = Math.max(2, Math.ceil(minSponsorsVisible / baseSponsors.length));
		return min % 2 === 0 ? min : min + 1;
	});

	const duplicatedSponsors = $derived(
		repeatCount > 0 ? Array(repeatCount).fill(baseSponsors).flat() : []
	);

	// Calculate duration: faster for small groups
	const scrollDuration = $derived(isSmallCount ? '20s' : '40s');
</script>

<Card class={cn('flex flex-col gap-3 overflow-hidden px-0 py-4 sm:px-0 sm:py-4', className)}>
	<div class="scroll-container w-full overflow-hidden py-2">
		<div class="flex w-max animate-scroll-left items-center gap-8">
			{#each duplicatedTranslations as text, i (`${text}-${i}`)}
				<span
					class="text-xs font-medium tracking-wide whitespace-nowrap uppercase {i % 2 === 1
						? 'text-white/80'
						: 'text-white/40'}">{text}</span
				>
			{/each}
		</div>
	</div>

	{#if baseSponsors.length > 0}
		<div class="scroll-container w-full overflow-hidden py-3" style="container-type: inline-size">
			<div
				class="flex w-max animate-scroll-right items-center"
				style="animation-duration: {scrollDuration}; animation-timing-function: linear;"
			>
				{#if isSmallCount}
					{#each [0, 1] as i (i)}
						<div class="flex w-[100cqw] shrink-0 items-center gap-8 px-8">
							{#each baseSponsors as sponsor, j (sponsor.name + j)}
								<a
									href={sponsor.link}
									title={sponsor.name}
									target="_blank"
									rel="noopener noreferrer"
									class="flex shrink-0 flex-col items-center justify-center gap-1 transition-opacity duration-200 hover:opacity-80"
								>
									<img
										src={sponsor.image}
										alt={sponsor.name}
										class="h-8 w-auto max-w-32 object-contain"
									/>
									<span class="text-xs font-medium text-stone-400">{sponsor.name}</span>
								</a>
							{/each}
						</div>
					{/each}
				{:else}
					{#each duplicatedSponsors as sponsor, i (sponsor.name + i)}
						<a
							href={sponsor.link}
							title={sponsor.name}
							target="_blank"
							rel="noopener noreferrer"
							class="flex shrink-0 flex-col items-center justify-center gap-1 px-8 transition-opacity duration-200 hover:opacity-80"
						>
							<img
								src={sponsor.image}
								alt={sponsor.name}
								class="h-8 w-auto max-w-32 object-contain"
							/>
							<span class="text-xs font-medium text-stone-400">{sponsor.name}</span>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	{/if}
</Card>

<style>
	.scroll-container {
		mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 5%,
			black 95%,
			transparent 100%
		);
	}

	.animate-scroll-left,
	.animate-scroll-right {
		will-change: transform;
	}

	/* Pause animation on hover for accessibility */
	.scroll-container:hover :global(.animate-scroll-left),
	.scroll-container:hover :global(.animate-scroll-right) {
		animation-play-state: paused;
	}

	/* Support for users with motion sensitivity */
	@media (prefers-reduced-motion: reduce) {
		:global(.animate-scroll-left),
		:global(.animate-scroll-right) {
			animation: none !important;
			transform: none !important;
			width: 100% !important;
			flex-wrap: wrap;
			justify-content: center;
		}
		.scroll-container {
			overflow-x: auto;
			mask-image: none;
			-webkit-mask-image: none;
		}
	}
</style>
