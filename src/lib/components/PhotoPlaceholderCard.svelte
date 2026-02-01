<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('relative overflow-hidden', className)}>
	<!-- Placeholder image background -->
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

	<!-- Bottom label -->
	<div class="relative mt-auto flex items-center gap-3 pt-48">
		<span class="text-sm text-white/80">Random Photo</span>
		<div class="flex gap-1">
			{#each Array(10) as _, i}
				<span
					class={cn('h-2 w-2 rounded-full', i === 0 ? 'bg-white' : 'bg-white/30')}
				></span>
			{/each}
		</div>
	</div>
</Card>
