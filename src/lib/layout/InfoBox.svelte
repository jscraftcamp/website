<script lang="ts">
	import Box from './Box.svelte';

	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<article>
	<Box style="--box-padding-width: 2em;">
		<div>
			<h2 {id}>
				{#if title !== undefined}{title}{/if}
			</h2>
			<div>
				<slot />
			</div>
		</div>
	</Box>
</article>
