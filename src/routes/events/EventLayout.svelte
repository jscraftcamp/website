<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		archiveLink?: string | undefined;
		logo?: string | undefined;
		notesLink?: string | undefined;
		when: string;
		where: string;
		year: string;
		children?: Snippet;
	}

	let {
		archiveLink = undefined,
		logo = undefined,
		notesLink = undefined,
		when,
		where,
		year,
		children
	}: Props = $props();
</script>

<PageLayout>
	<div class="content">
		<InfoBox title="Quick facts">
			<p>This event happened on {when} at {where}.</p>
			{#if notesLink !== undefined}
				<p>
					We collected <a href={notesLink} rel="external">session notes for the {year} event</a>.
				</p>
			{/if}
			{#if archiveLink !== undefined}
				<p>
					Have a look at <a href={archiveLink} rel="external"
						>the old JSCraftCamp homepage of {year}</a
					>.
				</p>
			{/if}
			{#if logo !== undefined}
				<p>Logo of {year}:</p>
				<div class="logo">
					<img alt="JSCraftCamp {year} logo" src={logo} height="auto" width="auto" />
				</div>
			{/if}
		</InfoBox>
		{@render children?.()}
	</div>
</PageLayout>

<style>
	.content {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		display: block;
		height: auto;
		width: 15em;
	}
</style>
