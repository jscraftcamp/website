<script lang="ts">
	import { onMount } from 'svelte';

	// Using runes and $props destructuring
	const { class: className } = $props();

	// Initialize with a placeholder value using $state for reactivity
	let daysToGo = $state(0);

	// Calculate days to go when component mounts
	onMount(() => {
		const eventDate = new Date('2025-06-27T00:00:00');
		const today = new Date();
		daysToGo = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
	});
</script>

<div
	class="@container w-full rounded-[19px] bg-amber-400 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:30px_30px] p-8 text-black {className}"
>
	<div class="flex items-stretch justify-between @xs:flex-col @xs:gap-6 @sm:flex-row">
		<div class="flex flex-col justify-center">
			<div class="mb-2 text-base font-semibold">The JavaScript Unconference</div>
			<div class="mb-4 flex flex-col leading-tight">
				<div class="font-black @xs:text-4xl @sm:text-5xl">JSCraftCamp</div>
				<div class="font-black @xs:text-5xl @sm:text-6xl">2025</div>
			</div>
			<div class="mb-4 text-lg leading-tight font-bold">27 - 28<br />June</div>
			<button
				class="mt-auto w-fit cursor-not-allowed rounded border-none bg-black/20 px-4 py-2 font-semibold text-inherit"
				disabled
			>
				Registration not open yet
			</button>
		</div>
		<div class="flex flex-col justify-between @xs:items-start @sm:items-end">
			<div class="leading-none font-black @xs:text-6xl @sm:text-7xl">{daysToGo}</div>
			<div class="text-sm font-bold @xs:text-left @sm:text-right">DAYS TO GO</div>
			<div class="mt-auto text-2xl font-bold">#jscc25</div>
		</div>
	</div>
</div>
