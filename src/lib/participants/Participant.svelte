<script lang="ts">
	import codebergLogo from '$lib/icons/codeberg.svg?raw';
	import githubLogo from '$lib/icons/github.svg?raw';
	import linkedinLogo from '$lib/icons/linkedin.svg?raw';
	import mastodonLogo from '$lib/icons/mastodon.svg?raw';
	import xLogo from '$lib/icons/x.svg?raw';
	import globeIcon from '$lib/icons/globe.svg?raw';
	import pencilSquareIcon from '$lib/icons/pencil-square.svg?raw';
	import type { Participant } from '$lib/participants/participant-schema';
	import { displayName } from '$lib/participants/display-name';
	import { createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils/cn';

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

<article
	class={cn(
		'relative flex h-full w-full flex-col rounded-2xl bg-dark-500 p-6 pb-10 text-white',
		isActive && 'shadow-lg ring-2 shadow-primary-500/20 ring-primary-500'
	)}
>
	<!-- Name -->
	<h3 class="m-0 overflow-hidden text-ellipsis hover:wrap-break-word">
		<button
			type="button"
			onclick={() => (isShowingDetails = !isShowingDetails)}
			class="font-inherit cursor-pointer border-none bg-transparent p-0 text-left text-primary-700 uppercase"
		>
			{displayName(participant)}
		</button>
	</h3>

	<!-- Company -->
	{#if participant.company}
		<h4 class="m-0 overflow-hidden text-sm font-normal text-ellipsis text-gray-300">
			{participant.company}
		</h4>
	{/if}

	<!-- Social links -->
	{#if hasSocialLink}
		<div class="mt-2 flex flex-wrap items-center gap-1">
			<a
				href="https://github.com/{participant.githubAccountName}"
				rel="external noopener noreferrer"
				target="_blank"
				class="p-1 text-white/50 transition-opacity hover:text-primary-500"
				title="Link to {participant.githubAccountName} on GitHub"
			>
				<span class="block h-5 w-5 *:size-full">{@html githubLogo}</span>
			</a>
			{#if participant.codebergAccountName}
				<a
					href="https://codeberg.org/{participant.codebergAccountName}"
					rel="external noopener noreferrer"
					target="_blank"
					class="p-1 text-white/50 transition-opacity hover:text-primary-500"
					title="Link to {participant.codebergAccountName} on Codeberg"
				>
					<span class="block h-5 w-5 *:size-full">{@html codebergLogo}</span>
				</a>
			{/if}
			{#if participant.X}
				<a
					href="https://x.com/{participant.X}"
					rel="external noopener noreferrer"
					target="_blank"
					class="p-1 text-white/50 transition-opacity hover:text-primary-500"
					title="Link to @{participant.X} on X"
				>
					<span class="block h-5 w-5 *:size-full">{@html xLogo}</span>
				</a>
			{/if}
			{#if participant.mastodon}
				<a
					href={participant.mastodon}
					rel="external noopener noreferrer"
					target="_blank"
					class="p-1 text-white/50 transition-opacity hover:text-primary-500"
					title="Link to {displayName(participant)} on Mastodon"
				>
					<span class="block h-5 w-5 *:size-full">{@html mastodonLogo}</span>
				</a>
			{/if}
			{#if participant.linkedin}
				<a
					href={participant.linkedin}
					rel="external noopener noreferrer"
					target="_blank"
					class="p-1 text-white/50 transition-opacity hover:text-primary-500"
					title="Link to {displayName(participant)} on LinkedIn"
				>
					<span class="block h-5 w-5 *:size-full">{@html linkedinLogo}</span>
				</a>
			{/if}
			{#if participant.website}
				<a
					href={participant.website}
					rel="external noopener noreferrer"
					target="_blank"
					class="p-1 text-white/50 transition-opacity hover:text-primary-500"
					title="Link to website of {displayName(participant)}"
				>
					<span class="block h-5 w-5 *:size-full">{@html globeIcon}</span>
				</a>
			{/if}
		</div>
	{/if}

	<!-- Details / Tags -->
	<div class="mt-4 flex-1 wrap-break-word whitespace-pre-wrap">
		{#if isShowingDetails}
			<h4 class="mt-4 mb-1 text-sm font-semibold text-primary-500 first:mt-0">Connection</h4>
			<p class="m-0 text-sm text-gray-300">{participant.whatIsMyConnectionToJavascript}</p>
			<h4 class="mt-4 mb-1 text-sm font-semibold text-primary-500">Contribution</h4>
			<p class="m-0 text-sm text-gray-300">{participant.whatCanIContribute}</p>
		{:else}
			<ul class="m-0 mt-2 flex list-none flex-wrap gap-2 p-0">
				{#each participant.tags as tag (tag)}
					<li class="p-0">
						<button
							type="button"
							onclick={() => dispatch('selectedTag', tag)}
							class="cursor-pointer rounded border border-gray-500 bg-transparent px-2 py-1 text-xs text-gray-300 transition-colors hover:border-primary-500 hover:text-primary-500 active:bg-primary-500 active:text-black"
						>
							{tag}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<!-- Attendance badges (bottom right) -->
	<div class="absolute right-4 bottom-3 flex items-center gap-2 text-xs font-semibold">
		<span
			class={cn('cursor-help', participant.when.friday ? 'text-primary-500' : 'text-gray-600')}
			title="Friday, 27th June"
		>
			FR
		</span>
		<span
			class={cn('cursor-help', participant.when.saturday ? 'text-primary-500' : 'text-gray-600')}
			title="Saturday, 28th June"
		>
			SA
		</span>
		<span
			class={cn(
				'h-4 w-4 cursor-help *:size-full',
				participant.iCanTakeNotesDuringSessions ? 'text-primary-500' : 'text-gray-600'
			)}
			title="Can take notes during sessions"
		>
			{@html pencilSquareIcon}
		</span>
	</div>
</article>
