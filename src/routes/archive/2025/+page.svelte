<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import PersonLink from '$lib/components/PersonLink.svelte';
	import Logo2025 from '$lib/logos/Logo2025.svelte';
	import Sponsors2025 from '$lib/sponsoring/Sponsors2025.svelte';
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>JSCraftCamp 2025</h1>
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
					June 27th & 28th, 2025
				</p>
				<p>
					<span class="font-medium text-white">Where:</span>
					codecentric AG
				</p>
				<p>
					<span class="font-medium text-white">Archive:</span>
					<a
						href="https://web.archive.org/web/20250628212649/https://jscraftcamp.org/"
						rel="external"
						class="hover:text-primary-400 text-primary-500 underline"
					>
						View old JSCraftCamp 2025 homepage
					</a>
				</p>
			</div>
		</Card>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Event Details</h2>
			<p class="text-gray-300">
				This event was facilitated by <PersonLink linkedIn="" mastodon="">PLACEHOLDER</PersonLink>
			</p>
			<p class="text-gray-300">
				Check out the session notes at <a
					href="https://github.com/jscraftcamp/jscc2025"
					rel="external"
					class="hover:text-primary-400 text-primary-500 underline"
				>
					github.com/jscraftcamp/jscc2025
				</a>
			</p>
			<div class="flex flex-wrap gap-3">
				<a
					href="{base}/archive/2025/stats"
					class="rounded-full border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-primary-500 hover:text-primary-500"
				>
					View Statistics →
				</a>
				<a
					href="{base}/archive/2025/photos/"
					class="rounded-full border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-primary-500 hover:text-primary-500"
				>
					View Photos →
				</a>
			</div>
		</Card>

		<Sponsors2025 />
		<Logo2025 />
	</Content>
</PageLayout>
