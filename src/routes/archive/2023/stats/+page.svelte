<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import { base } from '$app/paths';
	import stats from './stats.json';
	import type { TShirtSize } from '$lib/participants/participant-schema';

	const {
		allergies,
		companies,
		orgaCount,
		orgaShirts,
		participantCount,
		participants,
		participantsShirts
	} = stats;
	type ShirtKind = `${'fitted' | 'regular'}-${TShirtSize}`;
	const shirtKinds: ShirtKind[] = [
		'fitted-S',
		'fitted-M',
		'fitted-L',
		'fitted-XL',
		'fitted-2XL',
		'fitted-3XL',
		'regular-S',
		'regular-M',
		'regular-L',
		'regular-XL',
		'regular-2XL',
		'regular-3XL'
	];
	const amountOfShirts = (shirts: Partial<Record<ShirtKind, number>>, which: ShirtKind): number => {
		return shirts[which] ?? 0;
	};
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>Statistics of JSCC23</h1>
			<a
				href="{base}/archive/2023"
				class="rounded-full border border-gray-600 bg-dark-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
			>
				Back to JSCC23
			</a>
		</div>

		<div class="grid gap-6">
			<!-- Participants Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Participants</h2>
				<p class="text-gray-300">
					There were <span class="font-semibold text-white">{participantCount}</span> participants
					registered (including <span class="font-semibold text-white">{orgaCount}</span> orga members).
				</p>
				<div class="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Participants</th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Attending only on Friday</td>
								<td class="px-3 py-2 text-white">{participants.fridayOnly}</td>
							</tr>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Attending only on Saturday</td>
								<td class="px-3 py-2 text-white">{participants.saturdayOnly}</td>
							</tr>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Attending on both days</td>
								<td class="px-3 py-2 text-white">{participants.bothDays}</td>
							</tr>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Notetakers on Friday</td>
								<td class="px-3 py-2 text-white">{participants.notetakersFriday}</td>
							</tr>
							<tr>
								<td class="px-3 py-2 text-gray-300">Notetakers on Saturday</td>
								<td class="px-3 py-2 text-white">{participants.notetakersSaturday}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			<!-- Shirts Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Shirts</h2>
				<p class="text-gray-300">
					<span class="font-semibold text-white">{participantsShirts.count}</span> participants and
					<span class="font-semibold text-white">{orgaShirts.count}</span> orga members wanted a t-shirt.
				</p>
				<div class="grid gap-4 md:grid-cols-2">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500"
									>Shirt sizes (participants)</th
								>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Fitted (all sizes)</td>
								<td class="px-3 py-2 text-white">{participantsShirts.fitted}</td>
							</tr>
							<tr class="border-b border-gray-600">
								<td class="px-3 py-2 text-gray-300">Regular (all sizes)</td>
								<td class="px-3 py-2 text-white">{participantsShirts.regular}</td>
							</tr>
							{#each shirtKinds as kind (kind)}
								<tr class="border-b border-gray-700/50 last:border-b-0">
									<td class="px-3 py-2 text-gray-300">{kind}</td>
									<td class="px-3 py-2 text-white"
										>{amountOfShirts(participantsShirts.sizes, kind)}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500"
									>Shirt sizes (orga)</th
								>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Fitted (all sizes)</td>
								<td class="px-3 py-2 text-white">{orgaShirts.fitted}</td>
							</tr>
							<tr class="border-b border-gray-600">
								<td class="px-3 py-2 text-gray-300">Regular (all sizes)</td>
								<td class="px-3 py-2 text-white">{orgaShirts.regular}</td>
							</tr>
							{#each shirtKinds as kind (kind)}
								<tr class="border-b border-gray-700/50 last:border-b-0">
									<td class="px-3 py-2 text-gray-300">{kind}</td>
									<td class="px-3 py-2 text-white">{amountOfShirts(orgaShirts.sizes, kind)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</Card>

			<!-- Allergies Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Allergies</h2>
				<p class="text-gray-300">
					There were participants registered with allergies. We tried to find food that worked for
					everybody.
				</p>
				<div class="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Allergy</th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							{#each Object.entries(allergies) as [name, amount] (name)}
								<tr class="border-b border-gray-700/50 last:border-b-0">
									<td class="px-3 py-2 text-gray-300">{name}</td>
									<td class="px-3 py-2 text-white">{amount}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</Card>

			<!-- Companies Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Companies</h2>
				<p class="text-gray-300">
					There were participants from at least <span class="font-semibold text-white"
						>{companies.length}</span
					> different companies.
				</p>
				<div class="overflow-x-auto">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="w-8 px-1 py-2"></th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Company</th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Participants</th>
							</tr>
						</thead>
						<tbody>
							{#each companies as { name, amount, isSponsor } (name)}
								<tr class="border-b border-gray-700/50 last:border-b-0">
									<td class="w-8 px-1 py-2 text-center">
										{#if isSponsor}<span title="Sponsor">👑</span>{/if}
									</td>
									<td class="px-3 py-2 text-gray-300">{name}</td>
									<td class="px-3 py-2 text-white">{amount}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	</Content>
</PageLayout>
