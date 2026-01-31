<script lang="ts">
	import FooterNavigation from './footer/FooterNavigation.svelte';
	import TopNavigation from './TopNavigation.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex min-h-screen flex-col">
	<TopNavigation />
	<main class="flex-1">
		<div class="mx-auto max-w-6xl">
			{@render children?.()}
		</div>
	</main>
	<FooterNavigation />
</div>
