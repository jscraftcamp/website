<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('px-6 py-6', className)}>
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h3 class="text-primary-500">All Skill Levels Welcome</h3>
			<p class="mt-1 text-sm text-white/60">
				Share what you know, learn what you don't. At JSCraftCamp, juniors teach seniors and seniors
				learn from juniors. Everyone has something to contribute.
			</p>
		</div>

		<div class="flex items-center gap-3">
			<span
				class="rounded-full bg-primary-700/20 px-4 py-1.5 text-sm font-semibold text-primary-500"
			>
				Beginners
			</span>
			<span class="text-sm text-white/40">&bull;</span>
			<span
				class="rounded-full bg-primary-700/20 px-4 py-1.5 text-sm font-semibold text-primary-500"
			>
				Intermediate
			</span>
			<span class="text-sm text-white/40">&bull;</span>
			<span
				class="rounded-full bg-primary-700/20 px-4 py-1.5 text-sm font-semibold text-primary-500"
			>
				Experts
			</span>
		</div>
	</div>
</Card>
