<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import Sponsors2018 from '$lib/sponsoring/Sponsors2018.svelte';
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>JSCraftCamp 2018</h1>
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
					August 10th & 11th, 2018
				</p>
				<p>
					<span class="font-medium text-white">Where:</span>
					Virtual Identity
				</p>
				<p>
					<span class="font-medium text-white">Archive:</span>
					<a
						href="https://web.archive.org/web/20180809182443/http://jscraftcamp.org/"
						rel="external"
						class="hover:text-primary-400 text-primary-500 underline"
					>
						View old JSCraftCamp 2018 homepage
					</a>
				</p>
			</div>
		</Card>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Event Details</h2>
			<p class="text-gray-300">This event was facilitated by Cecilia Maria Zannini.</p>
			<p class="text-gray-300">
				Check out the session notes at <a
					href="https://notes2018.jscraftcamp.org/"
					rel="external"
					class="hover:text-primary-400 text-primary-500 underline"
				>
					notes2018.jscraftcamp.org
				</a>
			</p>
			<p>
				<a
					href="{base}/archive/2018/photos/"
					class="hover:text-primary-400 text-primary-500 underline"
				>
					View impressions of #jscc18 →
				</a>
			</p>
		</Card>
	</Content>
	<Content>
		<Sponsors2018 />
	</Content>
</PageLayout>
