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

		<div class="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-3">
			<span
				class="rounded-full bg-primary-700/20 px-3 py-1 text-xs font-semibold text-primary-500 sm:px-4 sm:py-1.5 sm:text-sm"
			>
				Beginners
			</span>
			<span class="text-xs text-white/40 sm:text-sm">&bull;</span>
			<span
				class="rounded-full bg-primary-700/20 px-3 py-1 text-xs font-semibold text-primary-500 sm:px-4 sm:py-1.5 sm:text-sm"
			>
				Intermediate
			</span>
			<span class="text-xs text-white/40 sm:text-sm">&bull;</span>
			<span
				class="rounded-full bg-primary-700/20 px-3 py-1 text-xs font-semibold text-primary-500 sm:px-4 sm:py-1.5 sm:text-sm"
			>
				Experts
			</span>
		</div>
	</div>
</Card>
