<script lang="ts">
	import InfoBox from '../lib/layout/InfoBox.svelte';
	import Logo from '$lib/Logo.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
    import skyline from './skyline.svg';
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
    img {
        max-width: 100%;
    }
</style>
