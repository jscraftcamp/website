<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';
	import PersonLink from '$lib/components/PersonLink.svelte';
	import Logo2024 from '$lib/logos/Logo2024.svelte';
	import Sponsors2024 from '$lib/sponsoring/Sponsors2024.svelte';
</script>

<PageLayout>
	<Content>
		<div class="flex items-center justify-between">
			<h1>JSCraftCamp 2024</h1>
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
					June 7th & 8th, 2024
				</p>
				<p>
					<span class="font-medium text-white">Where:</span>
					Maiborn-Wolff Kraftwerk
				</p>
				<p>
					<span class="font-medium text-white">Archive:</span>
					<a
						href="https://web.archive.org/web/20240915233620/https://jscraftcamp.org/"
						rel="external"
						class="hover:text-primary-400 text-primary-500 underline"
					>
						View old JSCraftCamp 2024 homepage
					</a>
				</p>
			</div>
		</Card>

		<Card>
			<h2 class="text-xl font-semibold text-primary-500">Event Details</h2>
			<p class="text-gray-300">
				This event was facilitated by <PersonLink
					linkedIn="https://www.linkedin.com/in/stefanie-hasler-05458a4/"
					mastodon="">Stefanie Hasler</PersonLink
				>
			</p>
			<p class="text-gray-300">
				Check out the session notes at <a
					href="https://github.com/jscraftcamp/jscc24-sessions"
					rel="external"
					class="hover:text-primary-400 text-primary-500 underline"
				>
					github.com/jscraftcamp/jscc24-sessions
				</a>
			</p>
			<p class="text-gray-300">
				<a
					href="{base}/archive/2024/stats"
					class="hover:text-primary-400 text-primary-500 underline"
				>
					View statistics for JSCC24 →
				</a>
			</p>
		</Card>
	</Content>
	<Content>
		<Sponsors2024 />
	</Content>
	<Content>
		<Logo2024 />
	</Content>
</PageLayout>
