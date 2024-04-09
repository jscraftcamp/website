<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	export let email: string = '';
	export let image: string | undefined = undefined;
	export let name: string;
</script>

<Box>
	<article>
		<div>
			{#if image}
				<img src={image} alt={name} />
			{:else}
				<span>🧑‍💻</span>
			{/if}
		</div>
		<div>
			<strong>{name}</strong>
			{#if email}
				<a href="mailto:{email}" title={email}>{email}</a>
			{:else}
				<span>-</span>
			{/if}
		</div>
	</article>
</Box>
