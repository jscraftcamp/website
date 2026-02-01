<script lang="ts">
	import githubIcon from '$lib/icons/github.svg';
	import mastodonIcon from '$lib/icons/mastodon.svg';
	import twitterIcon from '$lib/icons/x.svg';
	import linkedinIcon from '$lib/icons/linkedin.svg';

	interface Props {
		name: string;
		email?: string;
		image?: string;
		github?: string;
		mastodon?: string;
		twitter?: string;
		linkedin?: string;
	}

	let {
		name,
		email = undefined,
		image = undefined,
		github = undefined,
		mastodon = undefined,
		twitter = undefined,
		linkedin = undefined
	}: Props = $props();

	const socials = $derived(
		[
			{ url: github, icon: githubIcon, label: 'GitHub' },
			{ url: mastodon, icon: mastodonIcon, label: 'Mastodon' },
			{ url: twitter, icon: twitterIcon, label: 'Twitter' },
			{ url: linkedin, icon: linkedinIcon, label: 'LinkedIn' }
		].filter((s) => s.url)
	);
</script>

<article class="flex w-56 flex-col overflow-hidden rounded-2xl bg-dark-500">
	<div class="aspect-square w-56 overflow-hidden bg-dark-500">
		{#if image}
			<img src={image} alt={name} class="h-full w-full object-cover" />
		{:else}
			<div class="flex h-full w-full items-center justify-center text-4xl">🧑‍💻</div>
		{/if}
	</div>

	<div class="flex flex-col gap-2 p-4">
		<strong class="text-lg text-white">{name}</strong>

		{#if email}
			<a
				href="mailto:{email}"
				title={email}
				class="max-w-full truncate text-sm text-gray-300 hover:text-white"
			>
				{email}
			</a>
		{/if}

		{#if !email}
			<span class="max-w-full truncate text-sm text-gray-300">-</span>
		{/if}

		{#if socials.length > 0}
			<div class="mt-1 flex gap-3">
				{#each socials as social}
					<a
						href={social.url}
						rel="external noopener noreferrer"
						target="_blank"
						title="{name} on {social.label}"
						class="opacity-70 transition-opacity hover:opacity-100"
					>
						<img src={social.icon} alt={social.label} class="h-5 w-5 invert" />
					</a>
				{/each}
			</div>
		{/if}
	</div>
</article>
