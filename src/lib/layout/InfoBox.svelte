<script lang="ts">
	import Box from './Box.svelte';

	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<section>
	<Box style="--box-padding-width: 2em;">
		<div class="inner">
			<h2 {id}>{title}</h2>
			<div class="content">
				<slot />
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
