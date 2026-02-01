<script lang="ts">
	import type { AgendaDay } from '$lib/config/agenda';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		agenda: AgendaDay;
		slots: number[];
		class?: string;
	}

	let { agenda, slots, class: className = '' }: Props = $props();

	// Create a map of time -> item for quick lookup
	const itemsByTime = new Map(agenda.items.map((item) => [item.time, item]));

	function formatTime(hour: number): string {
		if (hour === 0 || hour === 12) return hour === 0 ? '12am' : '12pm';
		if (hour < 12) return `${hour}am`;
		if (hour === 24) return '12am';
		return `${hour - 12}pm`;
	}

	function splitTitle(title: string): string[] {
		// Split on spaces but keep "&" with the previous word
		return title
			.replace(/ & /g, ' & \n')
			.replace(/ /g, '\n')
			.split('\n')
			.reduce((acc, word) => {
				if (word === '&' && acc.length > 0) {
					acc[acc.length - 1] += ' &';
				} else if (word) {
					acc.push(word);
				}
				return acc;
			}, [] as string[]);
	}
</script>

<Card class={cn('gap-2 px-2 py-4 sm:px-4 sm:py-4', className)}>
	<div class="flex items-baseline gap-2">
		<span class="font-bold text-yellow-500">{agenda.dayLabel}</span>
		<span class="text-yellow-500">{agenda.date}</span>
	</div>

	<!-- Mobile layout: vertical list -->
	<div class="flex flex-col gap-2 md:hidden">
		{#each agenda.items as item}
			<div class="flex items-center gap-2">
				<span class="w-12 shrink-0 text-sm font-semibold text-yellow-500"
					>{formatTime(item.time)}</span
				>
				<span class="text-sm font-medium tracking-wide text-white/90 uppercase">
					{item.title}
				</span>
			</div>
		{/each}
	</div>

	<!-- Desktop layout: slot-based timeline -->
	<div class="relative hidden h-20 md:block">
		<!-- Timeline line -->
		<div class="absolute right-0 bottom-1 left-0 h-px bg-yellow-500/30"></div>

		{#each slots as slot, index}
			{@const item = itemsByTime.get(slot)}
			{@const isFirst = index === 0}
			{@const isLast = index === slots.length - 1}
			{@const position = (index / (slots.length - 1)) * 100}
			{#if item}
				<div
					class="absolute bottom-0 flex flex-col gap-1"
					style="left: {position}%; transform: translateX({isFirst
						? '0'
						: isLast
							? '-100'
							: '-50'}%);"
				>
					<div
						class={cn(
							'flex flex-col text-xs font-medium tracking-wide text-white/90 uppercase',
							isFirst
								? 'items-start text-left'
								: isLast
									? 'items-end text-right'
									: 'items-center text-center'
						)}
					>
						{#each splitTitle(item.title) as line}
							<span>{line}</span>
						{/each}
					</div>
					<span
						class={cn(
							'text-sm font-semibold text-yellow-500',
							isFirst ? 'text-left' : isLast ? 'text-right' : 'text-center'
						)}>{formatTime(item.time)}</span
					>
					<div
						class={cn(
							'h-2 w-2 rounded-full bg-yellow-500',
							isFirst ? '' : isLast ? 'self-end' : 'self-center'
						)}
					></div>
				</div>
			{/if}
		{/each}
	</div>
</Card>
