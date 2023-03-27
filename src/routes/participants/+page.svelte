<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from './Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/types';

	const participants: ParticipantT[] = [
		// { name: 'Bernd Kaiser', tags: [] },
		// { name: 'Wolfram', tags: [] },
		// { name: 'Robert', tags: [] },
		// { name: 'Somewhat Longname-Examplepersonified', tags: ['Svelte', 'React', 'TypeScript'] },
		// { name: 'Jörn Bernhardt', tags: ['Svelte', 'React', 'TypeScript'] },
	];
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

		<ul>
			{#each participants as participant}
				<li><Participant {participant} /></li>
			{/each}
		</ul>
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
		flex-flow: row wrap;
		align-items: stretch;
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
