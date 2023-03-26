<script lang="ts">
	import { base } from '$app/paths';
	import logo from './logo.svg';
	import netlify from './netlify.svg';
</script>

<footer>
	<div>
		<img src={logo} alt="JSCraftCamp 2023 logo" />
		<section>
			<h3>Sitemap</h3>
			<nav>
				<li><a href={base}>Home</a></li>
				<li><a href="{base}/sponsoring">Sponsoring</a></li>
				<li><a href="{base}/values">Values</a></li>
				<li><a href="{base}/imprint">Privacy Policy</a></li>
			</nav>
		</section>
		<section>
			<h3>Get in touch</h3>
			<nav>
				<li><a href="{base}/team">Team</a></li>
				<li><a href="https://twitter.com/jscraftcamp" rel="external">Twitter</a></li>
				<li><a href="https://github.com/jscraftcamp/website" rel="external">GitHub</a></li>
				<li><a href="{base}/imprint">Imprint</a></li>
			</nav>
		</section>
		<section>
			<h3>Archive</h3>
			<nav>
				<li>
					<a
						href="https://web.archive.org/web/20221028190502/https://jscraftcamp.org/"
						rel="external">2022</a
					>
				</li>
				<li>
					<a
						href="https://web.archive.org/web/20190706093953/http://jscraftcamp.org/"
						rel="external">2019</a
					>
				</li>
				<li>
					<a
						href="https://web.archive.org/web/20180809182443/http://jscraftcamp.org/"
						rel="external">2018</a
					>
				</li>
				<li>
					<a
						href="https://web.archive.org/web/20170715150754/http://jscraftcamp.org:80/"
						rel="external">2017</a
					>
				</li>
				<li>
					<a
						href="https://web.archive.org/web/20161011211857/http://jscraftcamp.org:80/"
						rel="external">2016</a
					>
				</li>
			</nav>
		</section>
		<section>
			<h3>Hosted on</h3>
			<nav>
				<li>
					<a href="https://www.netlify.com/" rel="external"
						><img src={netlify} alt="Netlify logo" /><span>Netlify</span></a
					>
				</li>
			</nav>
		</section>
	</div>
</footer>

<style>
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
	li {
		list-style: none;
	}
	a {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	img {
		max-width: 6em;
	}
</style>
