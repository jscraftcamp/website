<script lang="ts">
	import Box from './Box.svelte';

	interface Props {
		id?: string | undefined;
		title?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { id = undefined, title = undefined, children }: Props = $props();
</script>

<section>
	<Box style="--box-padding-width: 2em;">
		<div class="inner">
			<h2 {id}>
				{#if title !== undefined}{title}{/if}
			</h2>
			<div class="content">
				{@render children?.()}
			</div>
		</div>
	</Box>
</section>

<style>
	section {
		width: 100%;
	}
	.content > :global(:first-child) {
		margin-top: 0;
	}
	.content > :global(:last-child) {
		margin-bottom: 0;
	}

	h2 {
		font-size: 1em;
		margin: 0;
	}
</style>
