<script lang="ts">
	import { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
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
