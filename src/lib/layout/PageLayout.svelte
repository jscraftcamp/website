<script lang="ts">
	import FooterNavigation from './FooterNavigation.svelte';
	import TopNavigation from './TopNavigation.svelte';
	import background from '../assets/background.svg';

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
	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 h-auto w-full bg-contain bg-bottom bg-no-repeat lg:-bottom-16 xl:-bottom-32"
		style="background-image: url({background}); aspect-ratio: 1512/473;"
	></div>
</div>
