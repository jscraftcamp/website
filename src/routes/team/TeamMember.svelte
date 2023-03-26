<script lang="ts">
	import Box from '$lib/Box.svelte';
	export let email: string = '';
	export let image: string;
	export let name: string;
</script>

<Box>
	<img src={image} alt={name} />
	<div>
		<strong>{name}</strong>
		{#if email}
			<a href="mailto:{email}" title={email}>{email}</a>
		{:else}
			<span>-</span>
		{/if}
	</div>
</Box>

<style>
	div {
		display: flex;
		flex-flow: column;
		padding: 1em;
	}
	a {
		max-width: 13em;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	img {
		max-width: 15em;
	}
</style>
