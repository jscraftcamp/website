<script lang="ts">
	import { sponsors, thankYouTranslations } from '$lib/config/sponsoring';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	// Shuffle sponsor order on every page load so no sponsor is always first/last.
	// Must happen after mount to avoid SSR/hydration mismatch (server and client
	// would produce different random orders, desyncing logos from names).
	let baseSponsors = $state([...sponsors]);
	let ready = $state(false);

	onMount(() => {
		baseSponsors = [...sponsors].sort(() => Math.random() - 0.5);
		ready = true;
	});

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
	const scrollDuration = $derived(isSmallCount ? '12s' : '25s');

	/**
	 * Svelte action that adds drag-to-scroll to an infinite-scrolling element.
	 * Works alongside CSS animations — freezes during drag, then resumes from the new position.
	 */
	function dragScroll(node: HTMLElement) {
		let isDragging = false;
		let hasMoved = false;
		let startX = 0;
		let dragStartTranslateX = 0;
		let resumeTimer: ReturnType<typeof setTimeout> | null = null;

		function getCurrentTranslateX(): number {
			const matrix = new DOMMatrix(getComputedStyle(node).transform);
			return matrix.m41;
		}

		function cancelPendingResume() {
			if (resumeTimer !== null) {
				clearTimeout(resumeTimer);
				resumeTimer = null;
			}
		}

		/** Restore the CSS animation, seeking to the position the element is currently frozen at. */
		function resumeAnimation() {
			resumeTimer = null;

			const currentX = getCurrentTranslateX();
			const halfWidth = node.offsetWidth / 2;
			const isLeft = node.classList.contains('animate-scroll-left');

			let progress: number;
			if (isLeft) {
				progress = -currentX / halfWidth;
			} else {
				progress = 1 + currentX / halfWidth;
			}
			progress = ((progress % 1) + 1) % 1;

			const duration = parseFloat(node.dataset.duration || '25');

			node.style.removeProperty('animation');
			node.style.removeProperty('transform');
			void node.offsetHeight; // force reflow so the browser picks up the restored animation
			node.style.animationDelay = `${-(progress * duration)}s`;

			// On desktop the CSS hover-pause rule would immediately freeze the
			// animation again because the cursor is still over the element.
			// Override it inline until the pointer leaves.
			node.style.animationPlayState = 'running';
			function clearPlayStateOverride() {
				node.style.removeProperty('animation-play-state');
				node.removeEventListener('pointerleave', clearPlayStateOverride);
			}
			node.addEventListener('pointerleave', clearPlayStateOverride);
		}

		function onPointerDown(e: PointerEvent) {
			if (e.button !== 0) return;
			cancelPendingResume();
			isDragging = true;
			hasMoved = false;
			startX = e.clientX;
			dragStartTranslateX = getCurrentTranslateX();
			node.setPointerCapture(e.pointerId);
		}

		function onPointerMove(e: PointerEvent) {
			if (!isDragging) return;
			const delta = e.clientX - startX;

			// Only start dragging after a small threshold to avoid interfering with clicks
			if (!hasMoved && Math.abs(delta) < 4) return;

			if (!hasMoved) {
				hasMoved = true;
				// Take over from CSS animation
				node.style.animation = 'none';
				node.style.transform = `translateX(${dragStartTranslateX}px)`;
				document.body.style.userSelect = 'none';
				node.style.cursor = 'grabbing';
			}

			const halfWidth = node.offsetWidth / 2;
			let newX = dragStartTranslateX + delta;

			// Wrap into [-halfWidth, 0) for seamless infinite feel
			if (halfWidth > 0) {
				newX = ((newX % halfWidth) - halfWidth) % halfWidth;
			}

			node.style.transform = `translateX(${newX}px)`;
		}

		function onPointerUp() {
			if (!isDragging) return;
			isDragging = false;
			document.body.style.removeProperty('user-select');
			node.style.removeProperty('cursor');

			if (!hasMoved) return;

			// Stay frozen at the current position; resume auto-scroll after 1 s
			resumeTimer = setTimeout(resumeAnimation, 1000);
		}

		// Prevent link navigation when the user was dragging (not clicking)
		function onClick(e: MouseEvent) {
			if (hasMoved) {
				e.preventDefault();
				e.stopPropagation();
				hasMoved = false;
			}
		}

		// Prevent native browser drag on links/images so pointer events keep firing
		function onDragStart(e: DragEvent) {
			e.preventDefault();
		}

		node.addEventListener('pointerdown', onPointerDown);
		node.addEventListener('pointermove', onPointerMove);
		node.addEventListener('pointerup', onPointerUp);
		node.addEventListener('pointercancel', onPointerUp);
		node.addEventListener('click', onClick, true);
		node.addEventListener('dragstart', onDragStart);

		return {
			destroy() {
				cancelPendingResume();
				node.removeEventListener('pointerdown', onPointerDown);
				node.removeEventListener('pointermove', onPointerMove);
				node.removeEventListener('pointerup', onPointerUp);
				node.removeEventListener('pointercancel', onPointerUp);
				node.removeEventListener('click', onClick, true);
				node.removeEventListener('dragstart', onDragStart);
			}
		};
	}
</script>

<Card
	class={cn(
		'flex flex-col gap-3 overflow-hidden px-0 pt-2 pb-2 sm:px-0 sm:pt-2 sm:pb-2',
		className
	)}
>
	<div class="scroll-container w-full overflow-hidden py-1">
		<div
			class="flex w-max animate-scroll-left cursor-grab touch-pan-y select-none items-center gap-8"
			data-duration="120"
			use:dragScroll
		>
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
		<div
			class="scroll-container w-full overflow-hidden py-3 transition-opacity duration-500 {ready
				? 'opacity-100'
				: 'opacity-0'}"
			style="container-type: inline-size"
		>
			<div
				class="flex w-max animate-scroll-right cursor-grab touch-pan-y select-none items-center"
				style="animation-duration: {scrollDuration}; animation-timing-function: linear;"
				data-duration={scrollDuration.replace('s', '')}
				use:dragScroll
			>
				{#if isSmallCount}
					{#each [0, 1] as i (i)}
						<div class="flex w-[100cqw] shrink-0 items-start gap-3 px-4 sm:gap-6 sm:px-8">
							{#each baseSponsors as sponsor, j (sponsor.name + j)}
								<a
									href={sponsor.link}
									title={sponsor.name}
									target="_blank"
									rel="noopener noreferrer"
									class="group flex min-w-0 flex-1 basis-0 flex-col items-center justify-center gap-1 text-center text-stone-400 hover:text-primary-700"
								>
									<div
										class="flex h-16 w-full max-w-[10rem] items-center justify-center sm:max-w-48"
									>
										<img
											src={sponsor.image}
											alt={sponsor.name}
											class="h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-80"
										/>
									</div>
									<span
										class="w-full text-[11px] leading-tight font-medium text-balance sm:text-xs"
									>
										{sponsor.name}
									</span>
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
							class="flex shrink-0 flex-col items-center justify-center gap-4 px-8 transition-opacity duration-200 hover:opacity-80"
						>
							<img
								src={sponsor.image}
								alt={sponsor.name}
								class="h-16 w-auto max-w-48 object-contain"
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
