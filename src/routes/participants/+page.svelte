<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from '../../lib/participants/Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/participants/types';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import { isRegistrationOpen } from '$lib/participants/registration';

	export let data: PageData;

	const participants: ParticipantT[] = isRegistrationOpen() ? data.participants : [];
</script>

<PageLayout>
	<h1>Participants</h1>
	<section>
		{#if !isRegistrationOpen()}
			<p>
				Registration will open on May 1st, 2023. Get your GitHub account ready and check back soon!
			</p>
		{/if}

		<InfoBox title="What is this page about?">
			<p>
				Every year, we let the participants add themselves on this page. We let them decide what
				technologies they are interested in and on what days they register for.
			</p>
			<p>This allows participants to find like-minded people and lets them connect.</p>
		</InfoBox>

		{#if participants.length > 0}
			<ul>
				{#each participants as participant}
					<li><Participant {participant} /></li>
				{/each}
			</ul>
		{:else}
			<p>There are no participants registered yet.</p>
		{/if}

		{#if isRegistrationOpen()}
			<InfoBox title="Not seeing yourself on the list?">
				If you can't find yourself on the list of participants, but you want to join, check out our <a
					href="{base}/registration">how to register</a
				> page.
			</InfoBox>
		{/if}
	</section>
</PageLayout>

<style>
	section {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
	ul {
		display: flex;
		flex: 1;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 2em;
		margin: 0;
		padding: 0;
	}
	li {
		flex-grow: 1;
		list-style: none;
		width: calc(var(--max-page-width) / 4 - 1.5em);
	}
</style>
