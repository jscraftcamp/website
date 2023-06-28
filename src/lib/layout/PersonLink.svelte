<script lang="ts">
	import linkedInLogo from './linked-in.png';
	import mastodonLogo from './mastodon.svg';

	export let mastodon: string | undefined = undefined;
	export let linkedIn: string | undefined = undefined;
</script>

<div>
	<slot />{#if mastodon}<a href={mastodon}><img src={mastodonLogo} alt="Mastodon" /></a
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
