<script lang="ts">
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';
	import netlify from './netlify.svg';
</script>

<footer>
  <article data-theme="dark">
    <nav>
      <aside>
        <ul>
          <li><Logo style="max-width: 6em;" /></li>
        </ul>
      </aside>
      <aside>
      <ul>
        <li><strong>Sitemap</strong></li>
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/sponsoring">Sponsoring</a></li>
        <li><a href="{base}/values">Values</a></li>
        <li><a href="{base}/imprint">Imprint</a></li>
        <li><a href="{base}/imprint#datenschutz">Privacy Policy</a></li>
      </ul>
      </aside>
      <aside>
      <ul>
        <li><strong>Get in touch</strong></li>
        <li><a href="{base}/team">Team</a></li>
        <li><a href="https://twitter.com/jscraftcamp" rel="external">Twitter</a></li>
        <li><a href="https://github.com/jscraftcamp/website" rel="external">GitHub</a></li>
        <li><a href="https://discord.gg/3mHhaXVEjP" rel="external">Discord</a></li>
      </ul>
      </aside>
      <aside>
				<ul>
          <li><strong>Archive</strong></li>
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
      </aside>
      <aside> 			
				<ul>
			    <li><strong>Hosted on</strong></li>
					<li>
						<a href="https://www.netlify.com/" rel="external"
							><img src={netlify} alt="Netlify logo" /><span>Netlify</span></a
						>
					</li>
				</ul>
      </aside>
		</nav>
  </article>
</footer>
