<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import type { Participant } from '$lib/participants/ParticipantSchema';

	export let participant: Participant;
</script>

<Box>
	<div class="participant">
		<div class="attendance">
			{#if participant.when.friday}<span class="fr">Fr</span>{/if}
			{#if participant.when.saturday}<span class="sa">Sa</span>{/if}
		</div>
		<h3>{participant.name}</h3>
		{#if participant.company}<h4>{participant.company}</h4>{/if}
		<ul class="tags">
			{#each participant.tags as tag}
				<li><button type="button">{tag}</button></li>
			{/each}
		</ul>
	</div>
</Box>

<style>
	.participant {
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		justify-content: flex-end;
		padding: 2em;
		position: relative;
	}
	.attendance {
		align-items: stretch;
		position: absolute;
		display: flex;
		flex-flow: row nowrap;
		top: 0;
		right: 0.5em;
		height: 2em;
		text-align: center;
		width: 3em;
	}
	.attendance span {
		display: flex;
		height: 100%;
		width: 1.5em;
		align-items: flex-end;
		justify-content: center;
		color: #fff;
	}
	.attendance .fr {
		background: #4b81b6;
	}
	.attendance .sa {
		background: #e98b23;
	}
	h3 {
		flex: 1;
	}
	h3,
	h4 {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	h3:hover {
		word-wrap: break-word;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
		gap: 0.5em;
	}
	li button {
		background: transparent;
		border: 2px solid #000;
		cursor: pointer;
		font: inherit;
		padding: 0.25em 0.5em;
	}
	li button:active {
		background: hsl(120, 100%, 20%);
		color: #fff;
	}
</style>
