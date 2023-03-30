<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Logo from './Logo.svelte';
	import discord from './discord.svg';
	import github from './github.svg';
	import skyline from './skyline.svg';
	import twitter from './twitter.svg';
	import Sponsors from './sponsoring/Sponsors.svelte';
	import WhatToExpect from './WhatYouCanExpect.svelte';
</script>

<PageLayout>
	<h1>Welcome to JSCraftCamp 2023! 🎉</h1>

	<section>
		<InfoBox title="When?">June 30th & July 1st 2023</InfoBox>
		<InfoBox title="Where?">
			codecentric offices Munich, <a
				href="https://www.ecosia.org/search?method=index&q=August-Everding-Str+20+81671+M%C3%BCnchen"
				rel="external">August-Everding-Str 20, 81671 München</a
			>
		</InfoBox>
		<Logo />
		<div>
			<a href="https://twitter.com/jscraftcamp" rel="external"
				><img src={twitter} alt="Twitter" /></a
			>
			<a href="https://github.com/jscraftcamp/website" rel="external"
				><img src={github} alt="GitHub" /></a
			>
			<a href="https://discord.gg/3mHhaXVEjP" rel="external"><img src={discord} alt="Discord" /></a>
		</div>
		<img src={skyline} alt="Munich skyline" />
		<Sponsors />
		<WhatToExpect />
	</section>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 2em;
	}
	div {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}
	div img {
		height: 40px;
		width: 40px;
	}
	img {
		max-width: 100%;
	}
</style>
