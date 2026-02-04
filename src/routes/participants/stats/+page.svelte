<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import type { TShirtSize } from '$lib/participants/participant-schema';
	import type { Company } from '$lib/participants/statistics';
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import { cn } from '$lib/utils/cn';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const {
		allergies,
		companies,
		orgaCount,
		orgaShirts,
		participantCount,
		participants,
		participantsShirts,
		vegan,
		vegetarian,
		noFoodPreference
	} = data;
	const shirtKinds: TShirtSize[] = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
	const byName = (a: Company, b: Company) =>
		a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
			? -1
			: a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase()
				? 0
				: 1;
	const byAmount = (a: Company, b: Company) => a.amount - b.amount;
	let ascending = $state(true);
	let sorter: (a: Company, b: Company) => number = $state(byName);
	let actualSorter: (a: Company, b: Company) => number = $derived((a, b) => {
		if (ascending) {
			return sorter(a, b);
		}
		return invert(sorter)(a, b);
	});
	function invert(sortFn: (a: Company, b: Company) => number): (a: Company, b: Company) => number {
		return (a, b) => sortFn(a, b) * -1;
	}
	function setSort(sortFn: (a: Company, b: Company) => number) {
		const wasSortFn = sorter === sortFn;
		sorter = sortFn;
		ascending = wasSortFn ? !ascending : true;
	}
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>Stats</h1>
			<a
				href="{base}/participants"
				class="rounded-full border border-gray-600 bg-dark-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
			>
				Back to Participants
			</a>
		</div>

		<div class="grid gap-6">
			<!-- Participants Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Participants</h2>
				<p class="text-gray-300">
					There are currently <span class="font-semibold text-white">{participantCount}</span>
					participants registered (including
					<span class="font-semibold text-white">{orgaCount}</span> orga members).
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
					<span class="font-semibold text-white">{orgaShirts.count}</span> orga members would like to
					have a t-shirt.
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
							{#each shirtKinds as kind (kind)}
								<tr class="border-b border-gray-700/50 last:border-b-0">
									<td class="px-3 py-2 text-gray-300">{kind}</td>
									<td class="px-3 py-2 text-white">{participantsShirts.sizes[kind] ?? 0}</td>
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
									<td class="px-3 py-2 text-white">{orgaShirts.sizes[kind] ?? 0}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</Card>

			<!-- Food Card -->
			<Card>
				<h2 class="text-xl font-semibold text-primary-500">Food</h2>
				<p class="text-gray-300">
					There are a couple of participants registered with allergies. Let's try to find food that
					works for everybody.
				</p>
				<div class="grid gap-4 md:grid-cols-2">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Preference</th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Vegan</td>
								<td class="px-3 py-2 text-white">{vegan}</td>
							</tr>
							<tr class="border-b border-gray-700/50">
								<td class="px-3 py-2 text-gray-300">Vegetarian</td>
								<td class="px-3 py-2 text-white">{vegetarian}</td>
							</tr>
							<tr>
								<td class="px-3 py-2 text-gray-300">No preference</td>
								<td class="px-3 py-2 text-white">{noFoodPreference}</td>
							</tr>
						</tbody>
					</table>
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Allergy</th>
								<th class="px-3 py-2 text-left font-semibold text-primary-500">Amount</th>
							</tr>
						</thead>
						<tbody>
							{#each Object.entries(allergies).toSorted(([_a, amountA], [_b, amountB]) => {
								const sorted = amountB - amountA;
								if (sorted === 0) {
									return _a > _b ? 1 : _a === _b ? 0 : -1;
								}
								return sorted;
							}) as [name, amount] (name)}
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
					There are participants from at least <span class="font-semibold text-white"
						>{companies.length}</span
					> different companies.
				</p>
				<div class="overflow-x-auto">
					<table class="w-full border-collapse text-sm">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="w-8 px-1 py-2"></th>
								<th
									class="hover:text-primary-400 cursor-pointer px-3 py-2 text-left font-semibold text-primary-500 transition-colors select-none"
									role="columnheader"
									onclick={() => setSort(byName)}
								>
									<span class="flex items-center gap-2">
										Company
										{#if sorter === byName}
											<span
												class={cn(
													'text-xs transition-transform',
													ascending ? 'rotate-0' : 'rotate-180'
												)}>▼</span
											>
										{/if}
									</span>
								</th>
								<th
									class="hover:text-primary-400 cursor-pointer px-3 py-2 text-left font-semibold text-primary-500 transition-colors select-none"
									role="columnheader"
									onclick={() => setSort(byAmount)}
								>
									<span class="flex items-center gap-2">
										Participants
										{#if sorter === byAmount}
											<span
												class={cn(
													'text-xs transition-transform',
													ascending ? 'rotate-0' : 'rotate-180'
												)}>▼</span
											>
										{/if}
									</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{#each companies.toSorted(actualSorter) as { name, amount, isSponsor } (name)}
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
