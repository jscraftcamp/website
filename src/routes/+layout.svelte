<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>JSCraftCamp</title>
	<meta
		name="description"
		content="JSCraftCamp is a free open space / barcamp in Munich with focus on JavaScript."
	/>
</svelte:head>

{@render children?.()}
