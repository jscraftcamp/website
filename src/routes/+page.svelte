<script lang="ts">
	import { writable } from 'svelte/store';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import MainBanner from '$lib/tiles/MainBanner.svelte';
	import Sponsor from '$lib/tiles/Sponsor.svelte';
	import Thanks from '$lib/tiles/Thanks.svelte';
	import {
		getRegistrationState,
		registrationClosessAt,
		registrationOpensAt,
		timeLeft
	} from '$lib/participants/registration';

	const countdown = writable<string>('');
	const registrationState = writable<'not-yet' | 'closed' | 'open'>(getRegistrationState());
	const updateCountdown = () => {
		const now = +new Date();
		if (registrationOpensAt <= now && now <= registrationClosessAt) {
			$registrationState = 'closed';
			return;
		}
		const { days, hours, minutes, seconds } = timeLeft(now, registrationOpensAt);
		const timeAsStringArray = [
			days > 0 ? `${days} days` : '',
			hours > 0 ? `${hours} hours` : '',
			minutes > 0 ? `${minutes} minutes` : '',
			seconds > 0 ? `${seconds} seconds` : ''
		].filter((s) => s !== '');

		$countdown =
			timeAsStringArray.length > 1
				? `That's in <strong>${timeAsStringArray.slice(0, -1).join(', ')} and ${
						timeAsStringArray[timeAsStringArray.length - 1]
					}</strong>.`
				: timeAsStringArray.length === 1
					? `Only <strong>${timeAsStringArray[0]}</strong> left!`
					: '';

		setTimeout(updateCountdown, 1000);
	};
	updateCountdown();
</script>

<PageLayout>
	<div class="@container p-4">
		<div class="grid grid-cols-1 gap-6 @md:grid-cols-3 @md:grid-rows-[auto_1fr]">
			<div class="@md:col-span-2 @md:h-full">
				<MainBanner class="h-full" />
			</div>
			<div class="@md:col-span-1 @md:h-full">
				<Sponsor class="h-full" />
			</div>
			<div class="@md:col-span-3">
				<Thanks />
			</div>
		</div>
	</div>
</PageLayout>
