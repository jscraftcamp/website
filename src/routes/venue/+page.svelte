<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import VenueSearchCard from '$lib/components/VenueSearchCard.svelte';
	import { venueConfig } from '$lib/config/venue';
</script>

<PageLayout>
	<h1>Location Information</h1>

	{#if venueConfig.noVenueAvailable}
		<VenueSearchCard />
	{:else}
		<Card>
			{#if venueConfig.description}
				<p>{venueConfig.description}</p>
			{/if}
			{#if venueConfig.address}
				<p>
					{venueConfig.address.name}<br />
					{venueConfig.address.street}<br />
					{venueConfig.address.city}<br />
					(<a href={venueConfig.address.mapsLink} rel="external noopener noreferrer">Google Maps</a
					>)
				</p>
			{/if}
			{#if venueConfig.impressionsLink}
				<p>
					See some impressions of the venue
					<a href={venueConfig.impressionsLink} rel="external noopener noreferrer">here</a>.
				</p>
			{/if}
		</Card>

		{#if venueConfig.accessibility}
			<Card>
				<h3>Accessibility</h3>
				<p>{venueConfig.accessibility.description}</p>
			</Card>
		{/if}
	{/if}
</PageLayout>
