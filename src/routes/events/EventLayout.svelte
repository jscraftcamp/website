<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';

	export let archiveLink: string | undefined = undefined;
	export let logo: string | undefined = undefined;
	export let notesLink: string | undefined = undefined;
	export let when: string;
	export let where: string;
	export let year: string;
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
		<slot />
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
