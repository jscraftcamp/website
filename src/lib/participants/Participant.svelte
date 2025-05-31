<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import githubLogo from './github.svg';
	import linkedinLogo from './linkedin.svg';
	import mastodonLogo from './mastodon.svg';
	import websiteLogo from './website.svg';
	import xLogo from './x.svg';
	import type { Participant } from '$lib/participants/participant-schema';
	import { displayName } from '$lib/participants/display-name';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		participant: Participant;
		isActive?: boolean;
	}

	let { participant, isActive = false }: Props = $props();

	let isShowingDetails = $state(false);
	const hasSocialLink =
		participant.X || participant.mastodon || participant.website || participant.linkedin;

	const dispatch = createEventDispatcher<{ selectedTag: string }>();
</script>

<Box style={isActive ? '--box-shadow: 0 0 25px -10px #080f, 0 0 200px rgba(0, 0, 0, 0.1);' : ''}>
	<div class="participant">
		<div class="attendance">
			{#if participant.iCanTakeNotesDuringSessions}<span class="nt" title="offers to take notes"
					>📝</span
				>{/if}
			{#if participant.when.friday}<span class="fr" title="will attend Friday, 27th June">Fr</span
				>{/if}
			{#if participant.when.saturday}<span class="sa" title="will attend Saturday, 28th June"
					>Sa</span
				>{/if}
		</div>
		<h3>
			<button type="button" onclick={() => (isShowingDetails = !isShowingDetails)}
				>{displayName(participant)}</button
			>
		</h3>
		{#if participant.company}<h4>{participant.company}</h4>{/if}
		{#if hasSocialLink}
			<div class="socials">
				<a href="https://github.com/{participant.githubAccountName}" rel="external"
					><img
						src={githubLogo}
						height="32"
						width="32"
						alt="Link to {participant.githubAccountName} on GitHub"
					/></a
				>
				{#if participant.X}
					<a href="https://x.com/{participant.X}" rel="external"
						><img src={xLogo} height="32" width="32" alt="Link to @{participant.X} on X" /></a
					>
				{/if}
				{#if participant.mastodon}
					<a href={participant.mastodon} rel="external"
						><img
							src={mastodonLogo}
							height="32"
							width="32"
							alt="Link to {displayName(participant)} on Mastodon"
						/></a
					>
				{/if}
				{#if participant.linkedin}
					<a href={participant.linkedin} rel="external"
						><img
							src={linkedinLogo}
							height="32"
							width="32"
							alt="Link to {displayName(participant)} on LinkedIn"
						/></a
					>
				{/if}
				{#if participant.website}
					<a href={participant.website} rel="external"
						><img
							class="website"
							src={websiteLogo}
							height="32"
							width="32"
							alt="Link to website of {displayName(participant)}"
						/></a
					>
				{/if}
			</div>
		{/if}
		<div class="details">
			{#if isShowingDetails}
				<h4>Connection</h4>
				<p>{participant.whatIsMyConnectionToJavascript}</p>
				<h4>Contribution</h4>
				<p>{participant.whatCanIContribute}</p>
			{:else}
				<ul class="tags">
					{#each participant.tags as tag (tag)}
						<li>
							<button type="button" onclick={() => dispatch('selectedTag', tag)}>{tag}</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</Box>

<style>
	.participant {
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		justify-content: flex-end;
		padding: 2em;
		position: relative;
	}
	.attendance {
		align-items: stretch;
		display: flex;
		flex-flow: row nowrap;
		height: 2em;
		justify-content: flex-end;
		position: absolute;
		right: 1em;
		text-align: center;
		top: 0;
	}
	.attendance span {
		display: flex;
		height: 100%;
		width: 1.5em;
		align-items: flex-end;
		justify-content: center;
		color: #fff;
	}
	.attendance .nt {
		background: #219e87;
	}
	.attendance .fr {
		background: #4b81b6;
	}
	.attendance .sa {
		background: #e98b23;
	}
	h3,
	h4 {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	h3:hover {
		word-wrap: break-word;
	}
	.details {
		flex: 1;
		word-wrap: break-word;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.details h4 {
		margin-top: 1em;
	}
	.details p {
		margin: 0;
	}
	.socials {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		margin: 0 -0.5em -0.5em;
	}
	.socials img {
		max-height: 2em;
		max-width: 2em;
	}
	.socials a {
		padding: 0.5em;
	}
	.socials a:hover {
		background: #0001;
	}
	ul {
		list-style: none;
		margin: 1em 0 0;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
		gap: 0.5em;
	}
	h3 button {
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		padding: 0;
		margin: 0;
		text-align: inherit;
		text-transform: uppercase;
	}
	li button {
		background: transparent;
		border: 2px solid #000;
		cursor: pointer;
		font: inherit;
		padding: 0.25em 0.5em;
	}
	li button:active {
		background: hsl(120, 100%, 20%);
		color: #fff;
	}

	.fr,
	.sa,
	.nt {
		cursor: help;
	}
</style>
