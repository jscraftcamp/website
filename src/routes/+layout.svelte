<script lang="ts">
	import '@fontsource/poppins';
	import '@fontsource/poppins/600.css';
	import '@fontsource/source-sans-pro';
	import '@fontsource/source-sans-pro/600.css';
	import '@fontsource/source-sans-pro/700.css';
</script>

<svelte:head>
	<title>JSCraftCamp</title>
	<meta
		name="description"
		content="JSCraftCamp is a free open space / barcamp in Munich with focus on JavaScript."
	/>
</svelte:head>

<slot />

<style>
	:root {
		--footer-background-color: #000;
		--footer-text-color: #fff;
		--max-page-width: 66vw;
	}
	@media screen and (max-width: 1280px) {
		:root{
			--max-page-width: 90vw;
		}
	}
	:global(html, body) {
		font-family: 'Source Sans Pro', sans-serif;
		margin: 0;
		height: 100vh;
		padding: 0;
	}
	:global(p,span,li){
		font-size: calc(1.25vw + 0.875rem);
		line-height: clamp(2.25rem, 3.5vw, 4.85rem)
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-size: calc(2.25vw * 0.8475rem);
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
