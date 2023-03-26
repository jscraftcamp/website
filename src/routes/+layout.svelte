<script lang="ts">
	import '@fontsource/poppins';
	import '@fontsource/poppins/600.css';
	import '@fontsource/source-sans-pro';
	import '@fontsource/source-sans-pro/700.css';
</script>

<slot />

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
		text-decoration: none;
	}
	:global(a:hover) {
		color: inherit;
		text-decoration: underline;
	}
    :global(*) {
        box-sizing: border-box;
    }
</style>
