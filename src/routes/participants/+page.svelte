<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Participant from '../../lib/participants/Participant.svelte';
	import type { Participant as ParticipantT } from '$lib/participants/participant-schema';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import {
		isRegistrationOpen,
		registrationOpensAt,
		timeLeft
	} from '$lib/participants/registration';
	import { writable } from 'svelte/store';

	export let data: PageData;

	let activeTag: string | null = null;

	const onSelectTag = (e: CustomEvent<string>) => {
		const tag = e.detail;
		activeTag = activeTag === tag ? null : tag;
	};

	const participants: ParticipantT[] = isRegistrationOpen() ? data.participants : [];

	const canRegister = writable<boolean>(isRegistrationOpen());
	const countdown = writable<string>(isRegistrationOpen() ? 'NOW' : 'soon');

	const updateCountdown = () => {
		$canRegister = isRegistrationOpen();

		if ($canRegister) {
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
		{#if !$canRegister}
			<p>
				Registration will open on May 1st, 2023. Get your GitHub account ready and check back <strong
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

		{#if activeTag !== null}
			<div class="selectedTagAnchor">
				<div class="selectedTag">Selected tag: {activeTag}</div>
			</div>
		{/if}
		{#if participants.length > 0}
			<ul>
				{#each participants as participant}
					<li>
						<Participant
							{participant}
							on:selectedTag={onSelectTag}
							isActive={(activeTag && participant.tags.includes(activeTag)) || false}
						/>
					</li>
				{/each}
			</ul>
		{:else}
			<p>There are no participants registered yet.</p>
		{/if}

		{#if $canRegister}
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
	div.selectedTagAnchor {
		position: relative;
		margin-top: -2em;
		height: 0;
	}
	div.selectedTag {
		position: absolute;
	}
</style>
