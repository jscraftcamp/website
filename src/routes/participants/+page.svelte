<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from '../../lib/participants/Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/participants/participant-schema';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import {
		eventConfig,
		getRegistrationState,
		isRegistrationOpen,
		timeLeft
	} from '$lib/config/event';
	import { writable } from 'svelte/store';
	import Content from '$lib/layout/Content.svelte';
	import Card from '$lib/layout/Card.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const participants: ParticipantT[] = data.participants;
	let activeTag: string | null = $state(null);

	const onSelectTag = (e: CustomEvent<string>) => {
		const tag = e.detail;
		activeTag = activeTag === tag ? null : tag;
	};
	const unsetActiveTag = () => {
		activeTag = null;
	};

	const noFilter = () => true;
	const fridayFilter = (p: ParticipantT) => p.when.friday;
	const saturdayFilter = (p: ParticipantT) => p.when.saturday;
	const setFridayOrUnset = () =>
		($participantsFilter = $participantsFilter === fridayFilter ? noFilter : fridayFilter);
	const setSaturdayOrUnset = () =>
		($participantsFilter = $participantsFilter === saturdayFilter ? noFilter : saturdayFilter);
	let participantsFilter = writable<(p: ParticipantT) => boolean>(noFilter);

	const registrationState = writable<'not-yet' | 'open' | 'closed' | 'unknown'>(
		getRegistrationState()
	);
	const countdown = writable<string>(isRegistrationOpen() ? 'NOW' : 'soon');

	const updateCountdown = () => {
		$registrationState = getRegistrationState();

		if ($registrationState !== 'not-yet' || !eventConfig.registrationOpensAt) {
			return;
		}

		const now = +new Date();
		const { days, hours, minutes, seconds } = timeLeft(now, +eventConfig.registrationOpensAt);
		const timeAsStringArray = [
			days > 0 ? `${days} days` : '',
			hours > 0 ? `${hours} hours` : '',
			minutes > 0 ? `${minutes} minutes` : '',
			seconds > 0 ? `${seconds} seconds` : ''
		].filter((s) => s !== '');

		$countdown =
			timeAsStringArray.length > 1
				? `in ${timeAsStringArray.slice(0, -1).join(', ')} and ${
						timeAsStringArray[timeAsStringArray.length - 1]
					}`
				: timeAsStringArray.length === 1
					? `in ${timeAsStringArray[0]}`
					: 'NOW';
		setTimeout(updateCountdown, 1000);
	};
	updateCountdown();
</script>

<PageLayout>
	<Content>
		<h1>Participants</h1>
		{#if $registrationState === 'unknown'}
			<Card>
				<h2>Registration</h2>
				<p>Registration dates will be announced soon. Stay tuned!</p>
			</Card>
		{:else if $registrationState === 'not-yet' && eventConfig.registrationOpensAt}
			<Card>
				<h2>Registration</h2>
				<p>
					Registration will open on {eventConfig.registrationOpensAt.toLocaleDateString()}. Get your
					GitHub account ready and check back <strong>{$countdown}</strong>!
				</p>
			</Card>
		{/if}

		<Card>
			<h2>What is this page about?</h2>
			<p>
				Every year, we let the participants add themselves on this page. We let them decide what
				technologies they are interested in and on what days they register for.
			</p>
			<p>This allows participants to find like-minded people and lets them connect.</p>
		</Card>
	</Content>
	<div class="flex flex-wrap items-center gap-3">
		<span class="text-sm text-gray-400">Filter by day:</span>
		<button
			type="button"
			onclick={setFridayOrUnset}
			class="cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors {$participantsFilter ===
			fridayFilter
				? 'border-primary-500 bg-primary-500 text-black'
				: 'border-gray-500 bg-transparent text-gray-300 hover:border-primary-500 hover:text-primary-500'}"
		>
			Friday <span class="ml-1 opacity-70">({participants.filter(fridayFilter).length}/100)</span>
		</button>
		<button
			type="button"
			onclick={setSaturdayOrUnset}
			class="cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors {$participantsFilter ===
			saturdayFilter
				? 'border-primary-500 bg-primary-500 text-black'
				: 'border-gray-500 bg-transparent text-gray-300 hover:border-primary-500 hover:text-primary-500'}"
		>
			Saturday
			<span class="ml-1 opacity-70">({participants.filter(saturdayFilter).length}/100)</span>
		</button>
		<a
			href="{base}/participants/stats"
			class="ml-auto cursor-pointer rounded-full border border-gray-600 bg-dark-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
		>
			View Stats
		</a>
	</div>

	{#if participants.filter($participantsFilter).length > 0}
		<div class="relative">
			{#if activeTag !== null}
				<div class="sticky top-4">
					<button
						type="button"
						onclick={unsetActiveTag}
						class="absolute origin-top-left -translate-x-full -translate-y-8 -rotate-90 cursor-pointer border-none bg-transparent text-inherit hover:text-primary-500"
					>
						Selected tag: {activeTag}
					</button>
				</div>
			{/if}
			<ul class="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-6 p-0">
				{#each participants.filter($participantsFilter) as participant (participant.githubAccountName)}
					<li class="pl-0">
						<Participant
							{participant}
							on:selectedTag={onSelectTag}
							isActive={(activeTag &&
								participant.tags
									.map((t) => t.toLocaleLowerCase())
									.includes(activeTag.toLocaleLowerCase())) ||
								false}
						/>
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<p>There are no participants registered yet.</p>
	{/if}

	{#if $registrationState === 'open'}
		<Card>
			<h2>Not seeing yourself on the list?</h2>
			If you can't find yourself on the list of participants, but you want to join, check out our<a
				href="{base}/registration">how to register</a
			> page.
		</Card>
	{/if}
</PageLayout>
