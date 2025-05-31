<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from '../../lib/participants/Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/participants/participant-schema';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import {
		getRegistrationState,
		isRegistrationOpen,
		registrationOpensAt,
		timeLeft
	} from '$lib/participants/registration';
	import { writable } from 'svelte/store';

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

	const registrationState = writable<'not-yet' | 'open' | 'closed'>(getRegistrationState());
	const countdown = writable<string>(isRegistrationOpen() ? 'NOW' : 'soon');

	const updateCountdown = () => {
		$registrationState = getRegistrationState();

		if ($registrationState !== 'not-yet') {
			return;
		}

		const now = +new Date();
		const { days, hours, minutes, seconds } = timeLeft(now, registrationOpensAt);
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
	<h1>Participants</h1>
	<section>
		{#if $registrationState === 'not-yet'}
			<p>
				Registration will open on April 30nd, 2025. Get your GitHub account ready and check back <strong
					>{$countdown}</strong
				>!
			</p>
		{/if}

		<InfoBox title="What is this page about?">
			<p>
				Every year, we let the participants add themselves on this page. We let them decide what
				technologies they are interested in and on what days they register for.
			</p>
			<p>This allows participants to find like-minded people and lets them connect.</p>
		</InfoBox>

		<div class="attendance-filter">
			<button
				type="button"
				onclick={setFridayOrUnset}
				class:isActive={$participantsFilter === fridayFilter}
				>Friday ({participants.filter(fridayFilter).length} / 100 participants)</button
			>
			<button
				type="button"
				onclick={setSaturdayOrUnset}
				class:isActive={$participantsFilter === saturdayFilter}
				>Saturday ({participants.filter(saturdayFilter).length} / 100 participants)</button
			>
		</div>

		{#if participants.filter($participantsFilter).length > 0}
			<div class="participants">
				{#if activeTag !== null}
					<div class="selectedTagAnchor">
						<button type="button" class="selectedTag" onclick={unsetActiveTag}
							>Selected tag: {activeTag}</button
						>
					</div>
				{/if}
				<ul>
					{#each participants.filter($participantsFilter) as participant (participant.githubAccountName)}
						<li>
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
			<p>
				Looking for interesting stats? See <a href="{base}/participants/stats"
					>/participants/stats</a
				>
			</p>
		{:else}
			<p>There are no participants registered yet.</p>
		{/if}

		{#if $registrationState === 'open'}
			<InfoBox title="Not seeing yourself on the list?">
				If you can't find yourself on the list of participants, but you want to join, check out our <a
					href="{base}/registration">how to register</a
				> page.
			</InfoBox>
		{/if}
	</section>
</PageLayout>

<style>
	section {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
	ul {
		display: flex;
		flex: 1;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-between;
		gap: 2em;
		margin: 0;
		padding: 0;
	}
	li {
		flex-grow: 1;
		list-style: none;
		width: calc(var(--max-page-width) / 4 - 1.5em);
	}
	li > :global(*) {
		height: 100%;
	}
	.attendance-filter button {
		background: inherit;
		border: inherit;
		cursor: pointer;
		font: inherit;
		text-align: inherit;
	}
	.attendance-filter button.isActive {
		text-decoration: underline;
	}

	.participants {
		position: relative;
	}
	.selectedTagAnchor {
		position: sticky;
		top: 1em;
		bottom: -1em;
	}
	.selectedTag {
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		position: absolute;
		transform-origin: 0 0;
		transform: rotate(-90deg) translate(-100%, -2em);
	}
</style>
