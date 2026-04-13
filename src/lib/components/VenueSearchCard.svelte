<script lang="ts">
	import { getYear } from '$lib/config/event';
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={cn('bg-white ', className)}>
	<div class="flex flex-col gap-4">
		<!-- Location icon -->
		<div class="flex h-12 w-12 items-center justify-center rounded bg-stone-200 text-stone-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		</div>

		<!-- Title -->
		<h3 class="font-serif text-xl font-bold text-black sm:text-2xl">404 Venue Not Found</h3>

		<!-- Description -->
		<p class="font-serif text-sm leading-relaxed text-stone-700 sm:text-base">
			We're looking for a venue to host JSCraftCamp {getYear()}! We need a space that can
			accommodate around 100 friendly developers and tech enthusiasts on a Friday and Saturday. If
			your company has a suitable location in or around Munich, we'd love to hear from you!
		</p>

		<!-- Link -->
		<a
			href="mailto:team@jscraftcamp.org?subject=Venue%20for%20JSCraftCamp%20{getYear()}"
			class="font-serif text-sm font-medium text-blue-600 transition-colors hover:text-blue-800 sm:text-base"
		>
			» Get in touch with us
		</a>
	</div>
</Card>
