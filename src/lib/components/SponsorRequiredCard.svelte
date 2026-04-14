<script lang="ts">
	import { base } from '$app/paths';
	import { getYear } from '$lib/config/event';
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
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
				/>
			</svg>
		</div>

		<h3 class="text-xl font-bold sm:text-2xl">Become a Sponsor</h3>

		<p class="text-sm leading-relaxed text-white/60 sm:text-base">
			For almost 10 years, JSCraftCamp has brought developers together — free and run by volunteers.
			Help us make {getYear()} happen and connect with passionate tech enthusiasts.
		</p>

		<div class="mt-auto flex flex-col gap-3 pt-2">
			<a
				href="mailto:team@jscraftcamp.org?subject=Sponsoring%20JSCraftCamp%20{getYear()}"
				class="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500 hover:text-black"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				Get in Touch
			</a>
			<a
				href="{base}/sponsoring"
				class="text-center text-sm text-white/50 transition-colors hover:text-primary-500"
			>
				Learn more about sponsoring &rarr;
			</a>
		</div>
	</div>
</Card>
