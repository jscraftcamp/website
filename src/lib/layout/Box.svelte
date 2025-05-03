<script lang="ts">
	interface Props {
		style?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { style = undefined, children }: Props = $props();
</script>

<div {style}>
	{@render children?.()}
</div>

<style>
	div {
		position: relative;
		background-color: var(--background-color, #fff);
		box-sizing: border-box;
		padding: var(--box-padding-width, 0);
		position: relative;
	}
	div::before {
		position: absolute;
		content: '';
		z-index: -1;
		inset: 0;
		box-shadow: var(--box-shadow, 0 0 200px rgba(0, 0, 0, 0.1));
	}
</style>
