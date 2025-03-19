<script lang="ts">
	import type { Snippet } from 'svelte';
	import FooterNavigation from './footer-navigation/FooterNavigation.svelte';
	import TopNavigation from './top-navigation/TopNavigation.svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="container mx-auto">
	<TopNavigation />
	<main>
		{@render children?.()}
	</main>
</div>

<FooterNavigation />
