<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';
	import locationBg from '$lib/assets/location-bg.jpeg';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('relative overflow-hidden p-0', className)}>
	<div class="flex h-full min-h-64 flex-col">
		<!-- Background image -->
		<div class="relative flex flex-1 items-center justify-center">
			<img
				src={locationBg}
				alt="Munich location"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>

		<!-- Location info -->
		<div class="bg-stone-800 p-4 text-white">
			<p class="font-bold">Location TBD</p>
			<p class="text-sm text-stone-400">Address coming soon</p>
			<p class="text-sm text-stone-400">Somewhere in Munich</p>
		</div>
	</div>
</Card>
