<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import type { TShirtSize } from '$lib/participants/participant-schema';
	import type { Company } from '$lib/participants/statistics';
	import type { PageData } from './$types';

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
		participantsShirts
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
	let actualSorter: (a: Company, b: Company) => number = $state(sorter);
	function invert(sortFn: (a: Company, b: Company) => number): (a: Company, b: Company) => number {
		return (a, b) => sortFn(a, b) * -1;
	}
	function setSort(sortFn: (a: Company, b: Company) => number) {
		const wasSortFn = sorter === sortFn;
		sorter = sortFn;
		if (wasSortFn) {
			if (ascending) {
				ascending = false;
				actualSorter = invert(sortFn);
			} else {
				ascending = true;
				actualSorter = sortFn;
			}
		} else {
			ascending = true;
			actualSorter = sortFn;
		}
	}
</script>

<PageLayout>
	<h1>Stats</h1>

	<div>
		<InfoBox title="Participants">
			<p>
				There are currently {participantCount} participants registered (including {orgaCount} orga members).
			</p>
			<section class="tables">
				<table>
					<thead>
						<tr>
							<th>Participants</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Attending only on Friday</td>
							<td>{participants.fridayOnly}</td>
						</tr>
						<tr>
							<td>Attending only on Saturday</td>
							<td>{participants.saturdayOnly}</td>
						</tr>
						<tr>
							<td>Attending on both days</td>
							<td>{participants.bothDays}</td>
						</tr>
						<tr>
							<td>Notetakers on Friday</td>
							<td>{participants.notetakersFriday}</td>
						</tr>
						<tr>
							<td>Notetakers on Saturday</td>
							<td>{participants.notetakersSaturday}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</InfoBox>
		<InfoBox title="Shirts">
			<p>
				{participantsShirts.count} participants and {orgaShirts.count} orga members would like to have
				a t-shirt.
			</p>
			<section class="tables">
				<table>
					<thead>
						<tr>
							<th>Shirt sizes (participants)</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{#each shirtKinds as kind (kind)}
							<tr>
								<td>{kind}</td>
								<td>{participantsShirts.sizes[kind] ?? 0}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<table>
					<thead>
						<tr>
							<th>Shirt sizes (orga)</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Fitted (all sizes)</td>
							<td>{orgaShirts.fitted}</td>
						</tr>
						<tr class="bottom-divider">
							<td>Regular (all sizes)</td>
							<td>{orgaShirts.regular}</td>
						</tr>
						{#each shirtKinds as kind (kind)}
							<tr>
								<td>{kind}</td>
								<td>{orgaShirts.sizes[kind] ?? 0}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>
		</InfoBox>

		<InfoBox title="Allergies">
			<p>
				There are a couple of participants registered with allergies. Let's try to find food that
				works for everybody.
			</p>
			<section class="tables">
				<table>
					<thead>
						<tr>
							<th>What</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{#each Object.entries(allergies) as [name, amount] (name)}
							<tr>
								<td>{name}</td>
								<td>{amount}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>
		</InfoBox>

		<InfoBox title="Companies">
			<p>There are participants from at least {companies.length} different companies.</p>
			<section class="tables">
				<table>
					<thead>
						<tr>
							<th
								style="{ascending ? '--invert:0deg' : '--invert:180deg'}; {sorter === byAmount
									? '--sort-color:#0000;'
									: ''}"
								class="sortable"
								role="columnheader"
								onclick={() => setSort(byName)}>Company</th
							>
							<th
								style="{ascending ? '--invert:0deg' : '--invert:180deg'}; {sorter === byName
									? '--sort-color:#0000;'
									: ''}"
								class="sortable"
								role="columnheader"
								onclick={() => setSort(byAmount)}>Participants</th
							>
						</tr>
					</thead>
					<tbody>
						{#each companies.toSorted(actualSorter) as { name, amount, isSponsor } (name)}
							<tr class:isSponsor>
								<td>{name}</td>
								<td>{amount}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>
		</InfoBox>
	</div>
</PageLayout>

<style>
	.sortable {
		cursor: pointer;
		position: relative;
		padding-right: 1.5em;
		--sort-color: #000;
		--invert: 0deg;
	}
	.sortable:after {
		content: '';
		position: absolute;
		right: 0;
		top: calc(50% - 0.25em);
		transition: rotate 300ms;
		rotate: var(--invert);
		border: 0.4em solid var(--sort-color);
		border-bottom-width: 0.5em;
		border-top-width: 0;
		border-left-color: #0000;
		border-right-color: #0000;
	}
	div {
		display: grid;
		gap: 2em;
		width: 100%;
	}

	.tables {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(auto-fit, minmax(min-content, min(100%, 300px)));
		justify-content: space-between;
	}
	th {
		text-align: start;
		word-wrap: break-word;
	}
	table {
		border-collapse: collapse;
	}
	td,
	th {
		padding: 0.25em 0.5em;
	}
	thead > tr,
	.bottom-divider {
		border-bottom: 1px solid #000;
	}
	tr:nth-child(even) {
		background: #eee;
	}
	tr.isSponsor > td:first-child::before {
		content: '👑 ';
	}
</style>
