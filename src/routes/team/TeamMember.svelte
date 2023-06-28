<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	export let email: string = '';
	export let image: string | undefined = undefined;
	export let name: string;
</script>

<Box>
	<div class="member">
		<div class="image">
			{#if image}
				<img src={image} alt={name} />
			{:else}
				<span>🧑‍💻</span>
			{/if}
		</div>
		<div class="infos">
			<strong>{name}</strong>
			{#if email}
				<a href="mailto:{email}" title={email}>{email}</a>
			{:else}
				<span>-</span>
			{/if}
		</div>
	</div>
</Box>

<style>
	.member {
		display: flex;
		flex-flow: column;
		height: 100%;
	}
	.infos {
		display: flex;
		flex-flow: column;
		padding: 1em;
	}
	a {
		max-width: 13em;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.image {
		flex: 1;
		display: grid;
		place-items: center;
		max-width: 15em;
	}
	img,
	.image > span {
		display: block;
		max-width: 100%;
	}
</style>
