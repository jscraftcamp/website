<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
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
	<h1>Statistics of JSCC23</h1>

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
						<tr>
							<td>Fitted (all sizes)</td>
							<td>{participantsShirts.fitted}</td>
						</tr>
						<tr class="bottom-divider">
							<td>Regular (all sizes)</td>
							<td>{participantsShirts.regular}</td>
						</tr>
						{#each shirtKinds as kind (kind)}
							<tr>
								<td>{kind}</td>
								<td>{amountOfShirts(participantsShirts.sizes, kind)}</td>
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
								<td>{amountOfShirts(orgaShirts.sizes, kind)}</td>
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
							<th>Company</th>
							<th>Participants</th>
						</tr>
					</thead>
					<tbody>
						{#each companies as { name, amount, isSponsor } (name)}
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
