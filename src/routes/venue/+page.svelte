<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import VenueSearchCard from '$lib/components/VenueSearchCard.svelte';
	import { venueConfig } from '$lib/config/venue';
	import Content from '$lib/layout/Content.svelte';
</script>

<PageLayout>
	<Content>
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
						<a href={venueConfig.address.openStreetMapLink} rel="external noopener noreferrer"
							>OpenStreetMap</a
						>
						-
						<a href={venueConfig.address.googleMapsLink} rel="external noopener noreferrer"
							>Google Maps</a
						>
					</p>
				{/if}
				{#if venueConfig.impressionsLink}
					<p>
						See some impressions of the venue
						<a href={venueConfig.impressionsLink} rel="external noopener noreferrer">here</a>.
					</p>
				{/if}
			</Card>

			{#if venueConfig.entryInfo}
				<Card>
					<h3>Entry</h3>
					<p>{venueConfig.entryInfo}</p>
				</Card>
			{/if}

			<Card>
				<h3>Parking</h3>
				<p>
					There are only limited parking slots available at the venue. Please consider arriving by
					public transport.
				</p>
			</Card>

			<Card>
				<h3>Public Transport</h3>
				<p>
					You can take the <strong>S8</strong> and walk approximately 1.3 km from the station to the
					venue, or take the bus line directly.
				</p>
			</Card>

			{#if venueConfig.accessibility}
				<Card>
					<h3>Accessibility</h3>
					<p>{venueConfig.accessibility.description}</p>
				</Card>
			{/if}
		{/if}
	</Content>
</PageLayout>
