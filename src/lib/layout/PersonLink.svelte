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

<div>
	{@render children?.()}{#if mastodon}<a href={mastodon}
			><img src={mastodonLogo} alt="Mastodon" /></a
		>{/if}{#if linkedIn}<a href={linkedIn} rel="external"
			><img src={linkedInLogo} alt="LinkedIn" /></a
		>{/if}
</div>

<style>
	div {
		align-items: center;
		display: inline-flex;
		gap: 0.25em;
		line-height: inherit;
	}
	img {
		display: block;
		height: 1.5em;
	}
</style>
