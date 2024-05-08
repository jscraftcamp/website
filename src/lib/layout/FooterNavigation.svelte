<script lang="ts">
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';
	import netlify from './netlify.svg';
</script>

<footer>
	<div>
		<Logo style="max-width: 6em;" />
		<section>
			<h3>Sitemap</h3>
			<nav>
				<ul>
					<li><a href="{base}/">Home</a></li>
					<li><a href="{base}/sponsoring">Sponsoring</a></li>
					<li><a href="{base}/values">Values</a></li>
					<li><a href="{base}/imprint">Imprint</a></li>
					<li><a href="{base}/imprint#datenschutz">Privacy Policy</a></li>
				</ul>
			</nav>
		</section>
		<section>
			<h3>Get in touch</h3>
			<nav>
				<ul>
					<li><a href="{base}/team">Team</a></li>
					<li><a href="https://twitter.com/jscraftcamp" rel="external">Twitter</a></li>
					<li><a href="https://github.com/jscraftcamp/website" rel="external">GitHub</a></li>
					<li><a href="https://discord.gg/3mHhaXVEjP" rel="external">Discord</a></li>
				</ul>
			</nav>
		</section>
		<section>
			<h3>Archive</h3>
			<nav>
				<ul>
					<li>
						<a href="{base}/events/2023">2023</a>
					</li>
					<li>
						<a href="{base}/events/2022">2022</a>
					</li>
					<li>
						<a href="{base}/events/2019">2019</a>
					</li>
					<li>
						<a href="{base}/events/2018">2018</a>
					</li>
					<li>
						<a href="{base}/events/2017">2017</a>
					</li>
					<li>
						<a href="{base}/events/2016">2016</a>
					</li>
				</ul>
			</nav>
		</section>
		<section>
			<h3>Hosted on</h3>
			<nav>
				<ul>
					<li>
						<a href="https://www.netlify.com/" rel="external"
							><img src={netlify} alt="Netlify logo" /><span>Netlify</span></a
						>
					</li>
				</ul>
			</nav>
		</section>
	</div>
</footer>

<style>
	footer :global(a) {
		color: inherit;
		text-decoration: none;
	}
	footer :global(a:hover) {
		color: inherit;
		text-decoration: underline;
	}
	footer {
		background: var(--footer-background-color);
		color: var(--footer-text-color);
		font-size: 14px;
		padding: 2rem;
	}

	footer > div {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 2em;
		margin: 0 auto;
		max-width: var(--max-page-width);
		width: 100%;
	}
	section {
		display: flex;
		flex-flow: column;
		max-width: 6em;
	}
	h3 {
		margin: 0 0 1em;
	}
	nav {
		display: flex;
		flex-flow: column;
		gap: 1em;
	}
	nav > ul {
		display: contents;
	}
	li {
		list-style: none;
	}
	a {
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
