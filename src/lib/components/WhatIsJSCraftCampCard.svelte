<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('relative overflow-hidden p-6', className)}>
	<div class="flex h-full flex-col gap-4">
		<div
			class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700/20 text-primary-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>

		<h3 class="text-xl font-bold sm:text-2xl">What is JSCraftCamp?</h3>

		<p class="text-sm leading-relaxed text-white/60 sm:text-base">
			A free, community-driven JavaScript unconference in Munich. For almost 10 years, developers of
			all backgrounds have come together for two days of open sessions, workshops, and discussions.
			No fixed agenda. Participants shape the program on the day.
		</p>
	</div>
</Card>
