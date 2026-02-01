<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		photos: string[];
		class?: string;
	}

	let { photos, class: className = '' }: Props = $props();

	// Shuffle photos on component mount using Fisher-Yates algorithm
	function shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	const shuffledPhotos = $derived(shuffleArray(photos));
	let currentIndex = $state(0);

	// Navigation functions with endless wrap-around
	function goToPrevious() {
		currentIndex = currentIndex === 0 ? shuffledPhotos.length - 1 : currentIndex - 1;
	}

	function goToNext() {
		currentIndex = currentIndex === shuffledPhotos.length - 1 ? 0 : currentIndex + 1;
	}

	function goToIndex(index: number) {
		currentIndex = index;
	}

	// Show max 7 dots, centered around current position
	const visibleDots = $derived.by(() => {
		const maxDots = 7;
		const total = shuffledPhotos.length;
		if (total <= maxDots) {
			return { start: 0, end: total, showLeftEllipsis: false, showRightEllipsis: false };
		}

		const half = Math.floor(maxDots / 2);
		let start = Math.max(0, currentIndex - half);
		let end = Math.min(total, start + maxDots);

		if (end - start < maxDots) {
			start = Math.max(0, end - maxDots);
		}

		return {
			start,
			end,
			showLeftEllipsis: start > 0,
			showRightEllipsis: end < total
		};
	});
</script>

<Card class={cn('relative overflow-hidden', className)}>
	{#if shuffledPhotos.length > 0}
		<!-- Photo display -->
		<div class="absolute inset-0">
			<img
				src={shuffledPhotos[currentIndex]}
				alt="Event photo {currentIndex + 1} of {shuffledPhotos.length}"
				class="h-full w-full object-cover"
			/>
			<!-- Gradient overlay for better text readability -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
			></div>
		</div>

		<!-- Navigation arrows -->
		<button
			onclick={goToPrevious}
			class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/70 hover:text-white"
			aria-label="Previous photo"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			onclick={goToNext}
			class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/70 hover:text-white"
			aria-label="Next photo"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<!-- Bottom navigation -->
		<div class="relative mt-auto flex items-center justify-between gap-3 pt-48">
			<span class="text-sm text-white/80">{currentIndex + 1} / {shuffledPhotos.length}</span>
			<div class="flex items-center gap-1">
				{#if visibleDots.showLeftEllipsis}
					<span class="px-1 text-white/50">...</span>
				{/if}
				{#each { length: visibleDots.end - visibleDots.start } as _, i}
					{@const dotIndex = visibleDots.start + i}
					<button
						onclick={() => goToIndex(dotIndex)}
						class={cn(
							'h-2 w-2 rounded-full transition-colors',
							dotIndex === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
						)}
						aria-label="Go to photo {dotIndex + 1}"
					></button>
				{/each}
				{#if visibleDots.showRightEllipsis}
					<span class="px-1 text-white/50">...</span>
				{/if}
			</div>
		</div>
	{:else}
		<!-- Fallback when no photos -->
		<div
			class="absolute inset-0 flex items-center justify-center bg-linear-to-br from-stone-700 to-stone-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-24 w-24 text-stone-600"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>
		<div class="relative mt-auto pt-48">
			<span class="text-sm text-white/80">No photos available</span>
		</div>
	{/if}
</Card>
