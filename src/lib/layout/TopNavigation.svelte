<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { isRegistrationOpen } from '$lib/config/event';
	import { socialLinks as socialConfig } from '$lib/config/social';

	// Import icons as raw SVG strings
	import discordIcon from '$lib/icons/discord.svg?raw';
	import githubIcon from '$lib/icons/github.svg?raw';
	import xIcon from '$lib/icons/x.svg?raw';
	import mastodonIcon from '$lib/icons/mastodon.svg?raw';

	type NavItem = {
		label: string;
		href: string;
		showWhen?: () => boolean;
	};

	const navItems: NavItem[] = [
		{ label: 'Home', href: `${base}/` },
		{ label: 'Registration', href: `${base}/registration`, showWhen: isRegistrationOpen },
		{ label: 'Participants', href: `${base}/participants` },
		{ label: 'Sponsoring', href: `${base}/sponsoring` },
		{ label: 'Venue', href: `${base}/venue` },
		{ label: 'Values', href: `${base}/values` },
		{ label: 'Team', href: `${base}/team` }
	];

	const socialLinks = [
		{ icon: discordIcon, href: socialConfig.discord, label: 'Discord' },
		{ icon: githubIcon, href: 'https://github.com/jscraftcamp', label: 'GitHub' },
		{ icon: xIcon, href: 'https://x.com/jscraftcamp', label: 'X' },
		{ icon: mastodonIcon, href: 'https://mastodon.social/@jscraftcamp', label: 'Mastodon' }
	];

	function isActive(href: string, currentPath: string): boolean {
		const normalize = (p: string) => (p === '/' ? p : p.replace(/\/$/, ''));
		const normalizedHref = normalize(href);
		const normalizedPath = normalize(currentPath);

		const isHomeLink = href === '/' || href === `${base}/` || href === base;
		const isHomePage = currentPath === '/' || currentPath === `${base}/` || currentPath === base;

		if (isHomeLink) {
			return isHomePage;
		}

		return normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + '/');
	}
</script>

<header class="relative z-50 min-w-full px-8 py-4">
	<input id="navbar-open" type="checkbox" class="peer hidden" />

	<!-- Mobile Header (< lg) -->
	<div class="flex items-center justify-between lg:hidden">
		<a href="{base}/" class="text-2xl font-bold text-primary-500">JSCraftCamp</a>
		<label
			for="navbar-open"
			class="relative z-50 flex size-8 cursor-pointer flex-col items-center justify-center gap-1.5"
		>
			<span class="hamburger-line h-0.5 w-6 bg-white transition-all duration-300"></span>
			<span class="hamburger-line h-0.5 w-6 bg-white transition-all duration-300"></span>
			<span class="hamburger-line h-0.5 w-6 bg-white transition-all duration-300"></span>
		</label>
	</div>

	<!-- Mobile Overlay Menu -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-background/95 opacity-0 backdrop-blur-sm transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 lg:hidden"
	>
		<nav class="flex h-full flex-col items-center justify-center gap-8 p-8">
			<ul class="flex list-none flex-col items-center gap-6">
				{#each navItems as item (item.href)}
					{#if !item.showWhen || item.showWhen()}
						<li>
							<a
								href={item.href}
								class="text-2xl font-medium transition-colors duration-200 hover:text-primary-500 {isActive(
									item.href,
									$page.url.pathname
								)
									? 'text-primary-500'
									: 'text-white'}"
							>
								{item.label}
							</a>
						</li>
					{/if}
				{/each}
			</ul>

			<!-- Socials in Mobile Menu -->
			<div class="flex flex-col items-center gap-4">
				<span class="text-sm font-medium text-white/50">Socials</span>
				<div class="flex items-center gap-4">
					{#each socialLinks as social (social.label)}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							class="flex size-6 items-center justify-center text-white transition-colors duration-200 hover:text-primary-500"
						>
							<span class="h-6 w-6 *:size-full">
								{@html social.icon}
							</span>
						</a>
					{/each}
				</div>
			</div>
		</nav>
	</div>

	<!-- Desktop Navigation (>= lg) -->
	<nav class="mx-auto hidden max-w-7xl flex-row flex-nowrap items-center gap-8 lg:flex">
		<a href="{base}/" class="text-2xl font-bold text-primary-500">JSCraftCamp </a>

		<ul class="m-0 flex flex-1 list-none flex-row flex-nowrap items-center gap-6 p-0">
			{#each navItems as item (item.href)}
				{#if !item.showWhen || item.showWhen()}
					<li>
						<a
							href={item.href}
							class="relative py-2 font-medium transition-colors duration-200 hover:text-primary-500 {isActive(
								item.href,
								$page.url.pathname
							)
								? 'text-primary-500'
								: 'text-white'}"
						>
							{item.label}
							{#if isActive(item.href, $page.url.pathname)}
								<span
									class="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary-500"
								></span>
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>

		<div class="flex flex-row flex-nowrap items-center gap-4">
			<span class="font-medium text-white/50">Socials</span>
			<div class="flex flex-row flex-nowrap items-center gap-3">
				{#each socialLinks as social (social.label)}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
						class="flex size-5 items-center justify-center text-white transition-colors duration-200 hover:text-primary-500"
					>
						<span class="h-6 w-6 *:size-full">
							{@html social.icon}
						</span>
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>

<style>
	/* Hamburger to X transformation */
	input:checked ~ div label .hamburger-line:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	input:checked ~ div label .hamburger-line:nth-child(2) {
		opacity: 0;
	}
	input:checked ~ div label .hamburger-line:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
</style>
