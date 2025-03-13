<script lang="ts">
	import { base } from '$app/paths';
	import discord from './discord.svg';
	import github from './github.svg';
	import twitterX from './twitter-x.svg';
	import mastodon from './mastodon.svg';
</script>

<header>
	<nav class="grid grid-cols-[1fr_max-content] gap-8 p-6">
		<ul class="flex items-center gap-9">
			<li class="text-primary text-2xl font-bold">JSCraftCamp</li>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/participants/">Participants</a></li>
			<li><a href="{base}/sponsoring/">Sponsoring</a></li>
			<li><a href="{base}/venue">Venue</a></li>
			<li><a href="{base}/values/">Values</a></li>
			<li><a href="{base}/team/">Team</a></li>
		</ul>
		<ul class="flex items-center gap-6">
			<li class="opacity-50">Socials</li>
			<li><a href="{base}/"><img src={discord} alt="Discord" /></a></li>
			<li><a href="{base}/"><img src={github} alt="GitHub" /></a></li>
			<li><a href="{base}/"><img src={twitterX} alt="Twitter / X" /></a></li>
			<li><a href="{base}/"><img src={mastodon} alt="Mastodon" /></a></li>
		</ul>
	</nav>
</header>
