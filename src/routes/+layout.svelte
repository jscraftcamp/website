<script lang="ts">
	import './layout.css';
	import type { Snippet } from 'svelte';
	import '@fontsource/rubik';
	import '@fontsource/rubik/500.css';
	import '@fontsource/rubik/600.css';
	import '@fontsource/rubik/700.css';
	import '@fontsource/poppins';
	import '@fontsource/poppins/600.css';

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

<style>
	:root {
		--footer-background-color: #000;
		--footer-text-color: #fff;
		--max-page-width: 66rem;
	}

	:global(html, body) {
		font-family: 'Rubik', sans-serif;
		margin: 0;
		height: 100vh;
		padding: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		text-transform: uppercase;
	}

	:global(a) {
		color: inherit;
		text-decoration: underline;
	}

	:global(a:hover) {
		color: inherit;
		text-decoration: none;
	}

	:global(code) {
		background: #0001;
		border: 1px solid #0003;
		padding: 2px;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
