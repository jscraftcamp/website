<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('relative overflow-hidden p-0', className)}>
	<!-- Placeholder map background -->
	<div class="flex h-full min-h-64 flex-col bg-stone-200">
		<!-- Map placeholder area -->
		<div class="relative flex flex-1 items-center justify-center bg-stone-300">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-16 w-16 text-stone-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>

			<!-- Location pin -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
				<div class="h-8 w-6 rounded-full bg-red-400 opacity-50"></div>
			</div>
		</div>

		<!-- Location info -->
		<div class="bg-stone-800 p-4 text-white">
			<p class="font-bold">Location TBD</p>
			<p class="text-sm text-stone-400">Address coming soon</p>
			<p class="text-sm text-stone-400">München</p>
		</div>
	</div>
</Card>
