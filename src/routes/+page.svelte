<script lang="ts">
	import { writable } from 'svelte/store';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Logo from '$lib/layout/Logo';
	import discord from './discord.svg';
	import github from './github.svg';
	import linkedIn from './linked-in.png';
	import skyline from './skyline.svg';
	import twitter from './twitter.svg';
	import mastodon from './mastodon.svg';
	import WhatToExpect from './WhatYouCanExpect.svelte';
	import {
		getRegistrationState,
		registrationClosessAt,
		registrationOpensAt,
		timeLeft
	} from '$lib/participants/registration';
	import { base } from '$app/paths';
	import Partners from '$lib/sponsoring/Partners.svelte';
	import CurrentSponsors from '$lib/sponsoring/CurrentSponsors';
	import Schedule from './Schedule.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const countdown = writable<string>('');
	const registrationState = writable<'not-yet' | 'closed' | 'open'>(getRegistrationState());
	const updateCountdown = () => {
		const now = +new Date();
		if (registrationOpensAt <= now && now <= registrationClosessAt) {
			$registrationState = 'open';
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
	<h1>Welcome to JSCraftCamp 2025! ✅</h1>

	<p style="display: flex; align-items: center;">
		Our hashtag is&nbsp;<b>#jscc25</b>&nbsp; find us on &nbsp;<a
			href="https://mastodontech.de/tags/jscc25"
			><img src={mastodon} alt="mastodon" style="height: 1.5rem;" /></a
		>
		&nbsp;<a href="https://twitter.com/search?q=%23jscc25"
			><img src={twitter} alt="twitter / X" style="height: 1.5rem;" /></a
		>
	</p>

	<section>
		<InfoBox title="JSCraftCamp is ...">
			<p>
				... a
				<a href="https://en.wikipedia.org/wiki/Unconference#Barcamp" rel="external"
					>BarCamp / OpenSpace / Unconference</a
				> event for JavaScript enthusiasts of all levels. BarCamps and OpenSpaces are participant-driven
				conferences where attendees create the schedule and lead discussions, making it a truly community-driven
				experience.
			</p>
			<p>
				JSCraftCamp provides a platform for JavaScript enthusiasts to network and participate in
				workshops, similar to the <a href="https://www.socrates-conference.de/" rel="external"
					>SoCraTes conference</a
				>.
			</p>
		</InfoBox>
		<InfoBox title="When?">
			<p><strong>27. & 28. June 2025</strong></p>
			{#if $registrationState === 'not-yet'}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>Registration will open on April 30th, 2025. {@html $countdown}</p>
			{:else if $registrationState === 'closed'}
				<p>
					Registration is closed, we're full! <a href="{base}/registration">Join the wait list</a>!
				</p>
			{:else}
				<p><a href="{base}/registration">Registration is open!</a></p>
				<p>Grab your spot!</p>
				<p>Friday: <strong>{100 - data.fridayParticipants}</strong> spots left</p>
				<p>
					Saturday: <strong>{100 - data.saturdayParticipants}</strong> spots left
				</p>
			{/if}
		</InfoBox>
		<InfoBox title="Where?">
			<p>
				Thanks to codecentric AG, this year we'll be at the <a
					href="https://www.codecentric.de/standorte/muenchen"
					rel="external noopener noreferrer">codecentric München office</a
				>! <br />
			</p>
			<p>
				codecentric AG<br />
				August-Everding-Straße 20<br />
				81671 München<br />
				(<a href="https://maps.app.goo.gl/P2V1zn797ffFdjPm9" rel="external noopener noreferrer"
					>Google Maps</a
				>)
			</p>
		</InfoBox>
		<InfoBox title="We're looking for sponsors!">
			<p>
				Do you represent a company looking for talented developers? Want to support the JavaScript
				community? Take a look at <a href="{base}/sponsoring">our sponsoring page</a> and find out
				about what items are still open and how your company can benefit from sponsoring. Or go
				directly to
				<a href="https://github.com/orgs/jscraftcamp/projects/10" rel="external"
					><strong>our GitHub Sponsorship Board</strong></a
				> and pick something.
			</p>
		</InfoBox>
		<Logo animateYears style="max-width: 100%;" />
		<div>
			<a href="https://twitter.com/jscraftcamp" rel="external"
				><img src={twitter} alt="Twitter" /></a
			>
			<a href="https://github.com/jscraftcamp/website" rel="external"
				><img src={github} alt="GitHub" /></a
			>
			<a
				href="https://www.linkedin.com/events/jscraftcamp2023-jscc237033512998556028929/comments/"
				rel="external"><img src={linkedIn} alt="LinkedIn" height="128" width="128" /></a
			>
			<a href="https://discord.gg/3mHhaXVEjP" rel="external"><img src={discord} alt="Discord" /></a>
		</div>
		<img src={skyline} alt="Munich skyline" />
		<Schedule />
		<CurrentSponsors />
		<Partners />
		<WhatToExpect />
	</section>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 2em;
	}
	div {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		gap: 1em;
	}
	div img {
		height: 40px;
		width: 40px;
	}
	img {
		max-width: 100%;
	}
</style>
