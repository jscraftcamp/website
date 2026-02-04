<script lang="ts">
	import linkedInLogo from '../icons/linkedin.svg';
	import mastodonLogo from '../icons/mastodon.svg';

	interface Props {
		mastodon?: string | undefined;
		linkedIn?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { mastodon = undefined, linkedIn = undefined, children }: Props = $props();
</script>

<div class="inline-flex items-center gap-[0.25em] leading-[inherit]">
	{@render children?.()}{#if mastodon}<a href={mastodon}
			><img class="block h-[1.5em]" src={mastodonLogo} alt="Mastodon" /></a
		>{/if}{#if linkedIn}<a href={linkedIn} rel="external"
			><img class="block h-[1.5em]" src={linkedInLogo} alt="LinkedIn" /></a
		>{/if}
</div>
