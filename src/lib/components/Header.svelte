<script lang="ts">
	import { onMount } from 'svelte';
	import {
		eventConfig,
		getDaysToGo,
		getShortYear,
		getYear,
		isRegistrationOpen
	} from '$lib/config/event';

	const daysToGo = getDaysToGo();
	const registrationOpen = isRegistrationOpen();

	let displayedDays = $state(0);

	onMount(() => {
		const duration = 1500; // Total animation duration in ms
		const startTime = performance.now();

		// Easing function for smooth deceleration
		const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutQuart(progress);

			displayedDays = Math.round(easedProgress * daysToGo);

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				displayedDays = daysToGo;
			}
		};

		requestAnimationFrame(animate);
	});
</script>

<div class="header-content relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-12">
	<!-- Geometric pattern overlay -->
	<div class="bavarian-diamonds pattern-overlay absolute inset-0 opacity-20"></div>

	<!-- Content wrapper -->
	<div class="relative flex flex-row justify-between">
		<!-- Left side content -->
		<div class="flex flex-col gap-2 md:gap-4">
			<span class="text-sm font-bold tracking-wide text-black sm:text-base">
				The JavaScript Unconference
			</span>
			<h1 class="text-3xl font-bold text-black sm:text-5xl md:text-6xl">JSCraftCamp</h1>
			<div class="flex items-center gap-3">
				<span class="text-3xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl">
					{getYear()}
				</span>
				<div class="flex flex-col leading-tight">
					<span class="text-md font-bold text-black sm:text-xl md:text-2xl">
						{eventConfig.startDate.getDate()} - {eventConfig.endDate.getDate()}
					</span>
					<span class="text-md font-bold text-black sm:text-xl md:text-2xl">
						{eventConfig.startDate.toLocaleString('en-US', { month: 'long' })}
					</span>
				</div>
			</div>

			<!-- Registration button -->
			<div class="mt-4">
				{#if registrationOpen}
					<a
						href="/registration"
						class="inline-block rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
					>
						Register now
					</a>
				{:else}
					<span
						class="inline-block rounded-full bg-stone-600/80 px-6 py-2.5 text-sm font-semibold text-stone-200"
					>
						Registration not open yet
					</span>
				{/if}
			</div>
		</div>

		<!-- Right side content -->
		<div class="flex flex-col justify-between text-right">
			<div class="flex flex-col items-end">
				<span class="text-4xl leading-none font-black text-black sm:text-6xl md:text-7xl">
					{displayedDays}
				</span>
				<span class="text-sm font-bold tracking-wider text-black">DAYS TO GO</span>
			</div>

			<span class="mt-4 text-xl font-black text-black sm:text-2xl">
				#jscc{getShortYear()}
			</span>
		</div>
	</div>
</div>

<style>
	.header-content {
		background: linear-gradient(
			135deg,
			var(--color-primary-500) 0%,
			var(--color-primary-700) 50%,
			var(--color-primary-500) 100%
		);
	}

	.bavarian-diamonds {
		background-color: #f5b942;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpolygon fill='%23d4891a' points='15,0 30,15 15,30 0,15'/%3E%3C/svg%3E");
		background-size: 30px 40px;
	}
</style>
