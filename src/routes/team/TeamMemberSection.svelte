<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<section>
	{@render children?.()}
</section>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-evenly;
		gap: 2em;
		margin: 0 auto;
	}
</style>
