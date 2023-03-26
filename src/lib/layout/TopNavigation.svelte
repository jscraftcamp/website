<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<li><a href="{base}/">JSCraftCamp</a></li>
		<li><a href="{base}/participants/">Participants</a></li>
		<li><a href="{base}/sponsoring/">Sponsoring</a></li>
		<li><a href="{base}/values/">Values</a></li>
	</nav>
</header>

<style>
	header {
		padding: 2rem 2rem 0 2rem;
		min-width: 100%;
		max-width: var(--max-page-width);
	}

	header > nav {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 2em;
        margin: 0 auto;
		max-width: var(--max-page-width);
	}
	li {
		list-style: none;
	}
	li:first-of-type {
		flex: 1;
		font-size: 26px;
		font-weight: 600;
		font-family: 'Poppins';
	}
</style>
