<script lang="ts">
	import Box from '../lib/Box.svelte';

	export let title: String;
</script>

<section>
	<Box>
		<h2>{title}</h2>
		<div>
			<slot />
		</div>
	</Box>
</section>

<style>
	section {
		width: 100%;
	}

	h2 {
		font-size: 1em;
		margin: 0;
	}
</style>
