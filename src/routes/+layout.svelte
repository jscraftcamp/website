<script lang="ts">
	import type { Snippet } from 'svelte';
	import '@fontsource/poppins';
	import '@fontsource/poppins/600.css';
	import '@fontsource/source-sans-pro';
	import '@fontsource/source-sans-pro/600.css';
	import '@fontsource/source-sans-pro/700.css';
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

<style>
	:root {
		--footer-background-color: #000;
		--footer-text-color: #fff;
		--max-page-width: 66rem;
	}
	:global(html, body) {
		font-family: 'Source Sans Pro', sans-serif;
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
