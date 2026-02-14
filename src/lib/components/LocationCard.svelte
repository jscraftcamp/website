<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';
	import locationBg from '$lib/assets/location-bg.png';
	import { venueConfig } from '$lib/config/venue';

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
			</div>
		{/if}
	</div>
</Card>
