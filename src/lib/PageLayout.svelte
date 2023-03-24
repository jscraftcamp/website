<script>
	import { base } from '$app/paths';
</script>

<div class="page">
	<header>
		<nav>
			<li><a href="{base}/">JSCraftCamp</a></li>
			<li><a href="{base}/participants/">Participants</a></li>
			<li><a href="{base}/sponsoring/">Sponsoring</a></li>
			<li><a href="{base}/values/">Values</a></li>
		</nav>
	</header>
	<div class="content">
		<slot />
	</div>
	<footer>
		<div>
			<a href="{base}/imprint/">Imprint</a>
		</div>
	</footer>
</div>

<style>
	.page {
		display: flex;
		flex-flow: column;
		gap: 2em;
		min-height: 100vh;
	}

	header {
		padding: 2rem 2rem 0 2rem;
	}

	header > nav {
		display: flex;
		flex-flow: row wrap;
		gap: 2em;
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

	.content {
		flex: 1;
		max-width: var(--max-page-width);
		padding: 0 2rem;
	}

	footer {
		background: var(--footer-background-color);
		color: var(--footer-text-color);
		font-size: 14px;
		padding: 2rem;
	}

	footer > div {
		max-width: var(--max-page-width);
	}
</style>
