<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import type { Participant } from '$lib/types';

	export let participant: Participant;
</script>

<Box>
	<div class="participant">
		<h3>{participant.name}</h3>
		<ul class="tags">
			{#each participant.tags as tag}
				<li><button type="button">{tag}</button></li>
			{/each}
		</ul>
	</div>
</Box>

<style>
	.participant {
		padding: 2em;
	}
	h3 {
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
