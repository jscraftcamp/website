<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import Sponsors2016 from '$lib/sponsoring/Sponsors2016.svelte';
	import jscc2016logo from './jscc-logo-without-text.svg';
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>JSCraftCamp 2016</h1>
			<a
				href="{base}/archive"
				class="rounded-full border border-gray-600 bg-dark-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
			>
				Back to Archive
			</a>
		</div>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Quick Facts</h2>
			<div class="grid gap-3 text-gray-300">
				<p>
					<span class="font-medium text-white">When:</span>
					October 8th & 9th, 2016
				</p>
				<p>
					<span class="font-medium text-white">Where:</span>
					Virtual Identity
				</p>
				<p>
					<span class="font-medium text-white">Archive:</span>
					<a
						href="https://web.archive.org/web/20161011211857/http://jscraftcamp.org:80/"
						rel="external"
						class="hover:text-primary-400 text-primary-500 underline"
					>
						View old JSCraftCamp 2016 homepage
					</a>
				</p>
			</div>
			<div class="mt-4 flex items-center justify-center rounded-lg bg-white/10 p-6">
				<img
					alt="JSCraftCamp 2016 logo"
					src={jscc2016logo}
					class="h-auto w-60 max-w-full object-contain"
				/>
			</div>
		</Card>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Session Notes</h2>
			<p class="text-gray-300">
				Unfortunately, we did not collect session notes in 2016. If you happen to have some and want
				to contribute, please check our GitHub repositories for session notes!
			</p>
		</Card>

		<Card>
			<a
				href="{base}/archive/2016/photos/"
				class="hover:text-primary-400 text-primary-500 underline"
			>
				View impressions of #jscc16 →
			</a>
		</Card>
	</Content>
	<Content>
		<Sponsors2016 />
	</Content>
</PageLayout>
