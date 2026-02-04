<script lang="ts">
	import { sponsors, thankYouTranslations } from '$lib/config/sponsoring';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	// Duplicate items for seamless infinite scroll
	const duplicatedTranslations = [...thankYouTranslations, ...thankYouTranslations];
	const duplicatedSponsors = [...sponsors, ...sponsors];
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

	<div class="scroll-container w-full overflow-hidden py-3">
		<div class="flex w-max animate-scroll-right items-center gap-8">
			{#each duplicatedSponsors as sponsor (sponsor.name + Math.random())}
				<a
					href={sponsor.link}
					rel="external"
					class="flex h-10 shrink-0 items-center justify-center px-2 transition-opacity duration-200 hover:opacity-80"
				>
					<img
						src={sponsor.image}
						alt={sponsor.name}
						class="h-full w-auto max-w-32 object-contain"
					/>
				</a>
			{/each}
		</div>
	</div>
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

	/* Pause animation on hover for accessibility */
	.scroll-container:hover :global(.animate-scroll-left),
	.scroll-container:hover :global(.animate-scroll-right) {
		animation-play-state: paused;
	}
</style>
