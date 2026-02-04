<script lang="ts">
	import './layout.css';
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
	<meta property="og:title" content="JSCraftCamp" />
	<meta property="article:tag" content="JavaScript" />
	<meta property="article:tag" content="software craftership" />
	<meta property="article:tag" content="unconference" />
	<meta
		property="og:description"
		content="JSCraftCamp is a community-driven unconference focused on JavaScript and software craftership."
	/>
	<meta
		property="article:description"
		content="JSCraftCamp is a community-driven unconference focused on JavaScript and software craftership."
	/>
	<meta
		name="twitter:description"
		content="JSCraftCamp is a community-driven unconference focused on JavaScript and software craftership."
	/>
	<meta property="og:image" content="https://jscraftcamp.org/logos/2025/jscc-og-image.png" />
	<meta property="og:image:url" content="https://jscraftcamp.org/logos/2025/jscc-og-image.png" />
	<meta name="twitter:image" content="https://jscraftcamp.org/logos/2025/jscc-twitter-image.png" />
</svelte:head>
{@render children?.()}
