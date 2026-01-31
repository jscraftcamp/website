<script lang="ts">
	import { getYear } from '$lib/config/event';
	import Card from '$lib/layout/Card.svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class="bg-white p-6 {className}">
	<div class="flex flex-col gap-4">
		<!-- Placeholder image -->
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
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>

		<!-- Title -->
		<h3 class="font-serif text-xl font-bold text-black sm:text-2xl">402 Sponsors Required</h3>

		<!-- Description -->
		<p class="font-serif text-sm leading-relaxed text-stone-700 sm:text-base">
			For almost 10 years, our event has brought developers together – free and run by volunteers.
			Help us make {getYear()} a success and connect with passionate tech enthusiasts. Interested?
		</p>

		<!-- Link -->
		<a
			href="/sponsoring"
			class="font-serif text-sm font-medium text-blue-600 transition-colors hover:text-blue-800 sm:text-base"
		>
			» Checkout Sponsor Cards
		</a>
	</div>
</Card>
