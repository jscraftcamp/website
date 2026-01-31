<script lang="ts">
	import FooterNavigation from './footer/FooterNavigation.svelte';
	import TopNavigation from './TopNavigation.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="page">
	<TopNavigation />
	<div class="content">
		<div>
			{@render children?.()}
		</div>
	</div>
	<FooterNavigation />
</div>

<style>
	.page {
		display: flex;
		flex-flow: column;
		gap: 2em;
		min-height: 100vh;
	}

	.content {
		flex: 1;
		padding: 0 2rem;
		z-index: 0;
	}

	.content > div {
		align-items: center;
		display: flex;
		flex-flow: column;
		margin: 0 auto;
		max-width: var(--max-page-width);
	}
</style>
