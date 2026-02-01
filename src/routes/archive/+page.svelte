<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import { base } from '$app/paths';

	const events = [
		{
			year: 2025,
			date: 'June 27th & 28th',
			location: 'TBD',
			highlights: ['Session notes available', 'Statistics available']
		},
		{
			year: 2024,
			date: 'June 7th & 8th',
			location: 'Maiborn-Wolff Kraftwerk',
			highlights: ['Session notes available', 'Statistics available']
		},
		{
			year: 2023,
			date: 'June 9th & 10th',
			location: 'Munich',
			highlights: ['Session notes available', 'Statistics available']
		},
		{
			year: 2022,
			date: 'July 1st & 2nd',
			location: 'Munich',
			highlights: ['First event after pandemic']
		},
		{
			year: 2019,
			date: 'June 21st & 22nd',
			location: 'Munich',
			highlights: ['Last event before pandemic']
		},
		{
			year: 2018,
			date: 'June 22nd & 23rd',
			location: 'Munich',
			highlights: ['Photos available']
		},
		{
			year: 2017,
			date: 'July 21st & 22nd',
			location: 'Munich',
			highlights: ['Photos available']
		},
		{
			year: 2016,
			date: 'October 8th & 9th',
			location: 'Virtual Identity',
			highlights: ['First JSCraftCamp ever', 'Photos available']
		}
	];
</script>

<PageLayout>
	<Content>
		<h1>Archive</h1>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Past Events</h2>
			<p class="text-gray-300">
				Explore the history of JSCraftCamp. Since 2016, we've been bringing together JavaScript
				enthusiasts for two days of learning, sharing, and community building.
			</p>
		</Card>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each events as event (event.year)}
				<a
					href="{base}/archive/{event.year}"
					class="group flex flex-col rounded-2xl border border-gray-700 bg-dark-500 p-6 transition-all hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10"
				>
					<div class="mb-2 flex items-center justify-between">
						<span class="text-3xl font-bold text-primary-500">{event.year}</span>
						<span class="text-sm text-gray-400 transition-colors group-hover:text-primary-500">
							View →
						</span>
					</div>
					<p class="text-sm text-gray-300">{event.date}</p>
					<p class="mb-3 text-sm text-gray-400">{event.location}</p>
					<div class="mt-auto flex flex-wrap gap-1">
						{#each event.highlights as highlight (highlight)}
							<span class="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
								{highlight}
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</Content>
</PageLayout>
