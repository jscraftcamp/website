<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from '../../lib/participants/Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/participants/types';
	import { base } from '$app/paths';
	// TODO enable next few lines on May 1st
	// import type { PageData } from './$types';

	// export let data: PageData;
	// const participants: ParticipantT[] = data.participants;
	// TODO remove next line on May 1st
	const participants: ParticipantT[] = [];
</script>

<PageLayout>
	<h1>Participants</h1>
	<section>
		<p>Registration will open on May 1st. Check back soon and get your GitHub account ready!</p>

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

		<InfoBox title="Not seeing yourself on the list?">
			If you can't find yourself on the list of participants, but you want to join, check out our <a
				href="{base}/registration">how to register</a
			> page.
		</InfoBox>
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
