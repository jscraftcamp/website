<script lang="ts">
	import wikipediaLogo from '$lib/assets/wikipedia-logo.svg';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('rounded-2xl border border-gray-200 bg-white p-6 text-black shadow-sm', className)}>
	<div class="flex items-start justify-between gap-4">
		<div>
			<a href="https://en.wikipedia.org/wiki/Unconference" rel="external" class="hover:underline">
				<h2 class="text-black">Unconference</h2>
			</a>
			<p class="text-sm text-black/50">/ˌʌn.kon.fər.əns/</p>
		</div>
		<a href="https://en.wikipedia.org" rel="external" class="shrink-0">
			<img src={wikipediaLogo} alt="Wikipedia" class="h-16 w-16" />
		</a>
	</div>

	<p class="mt-4 leading-relaxed">
		An <strong>unconference</strong> is a participant-driven meeting. The term "unconference" has
		been applied to a wide range of gatherings that try to avoid hierarchical aspects of a
		conventional
		<a href="https://en.wikipedia.org/wiki/Conference" class="text-blue-600 hover:underline"
			>conference</a
		>, such as sponsored presentations and
		<a href="https://en.wiktionary.org/wiki/top-down" class="text-blue-600 hover:underline"
			>top-down</a
		>
		organization.<a
			href="https://en.wikipedia.org/wiki/Unconference#cite_note-Atk-1"
			class="text-blue-600 hover:underline">[1]</a
		><a
			href="https://en.wikipedia.org/wiki/Unconference#cite_note-2"
			class="text-blue-600 hover:underline">[2]</a
		>
	</p>
</Card>
