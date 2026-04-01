<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';
	import locationBg from '$lib/assets/location-bg.png';
	import { venueConfig } from '$lib/config/venue';
	import trainIcon from '$lib/icons/train.svg?raw';
	import accessibilityIcon from '$lib/icons/accessibility.svg?raw';
	import carIcon from '$lib/icons/car.svg?raw';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('relative overflow-hidden p-0', className)}>
	<div class="flex h-full min-h-64 flex-col">
		<!-- Background image -->
		<div class="relative flex flex-1 items-center justify-center">
			<a href="https://www.tngtech.com" rel="external noopener noreferrer">
				<img
					src={locationBg}
					alt="Munich location"
					class="absolute inset-0 h-full w-full object-cover"
				/>
			</a>
		</div>

		<!-- Location info -->
		{#if venueConfig.address}
			<div class="bg-stone-800 p-4 text-white">
				<p class="font-bold">{venueConfig.address.name}</p>
				<p class="text-sm text-stone-400">{venueConfig.address.street}</p>
				<p class="text-sm text-stone-400">
					{venueConfig.address.city}
					&nbsp;
					<a
						href={venueConfig.address.openStreetMapLink}
						rel="external noopener noreferrer"
						target="_blank">OpenStreetMap</a
					>
					-
					<a
						href={venueConfig.address.googleMapsLink}
						rel="external noopener noreferrer"
						target="_blank">Google Maps</a
					>
				</p>
				<div class="flex items-center justify-between text-sm">
					<p class="flex items-center gap-2">
						<span
							class="inline-flex cursor-help items-center text-stone-300 *:size-4"
							title="Wheelchair accessible.">{@html accessibilityIcon}</span
						>
						<span
							class="inline-flex cursor-help items-center text-stone-300 *:size-4"
							title="Limited parking available. Please use public transport.">{@html carIcon}</span
						>
						<span
							class="inline-flex cursor-help items-center text-stone-300 *:size-4"
							title="Reachable by public transport.">{@html trainIcon}</span
						>
					</p>
					<a href="/venue" class="text-stone-400 hover:text-white">more</a>
				</div>
			</div>
		{/if}
	</div>
</Card>
