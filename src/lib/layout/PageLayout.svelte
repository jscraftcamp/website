<script lang="ts">
	import FooterNavigation from './FooterNavigation.svelte';
	import TopNavigation from './TopNavigation.svelte';
	import background from '../assets/background.svg';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="relative flex min-h-screen flex-col">
	<TopNavigation />
	<main class="z-10 flex-1 px-4">
		<div class="mx-auto flex max-w-7xl flex-col gap-4">
			{@render children?.()}
		</div>
	</main>
	<FooterNavigation />
	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 w-full bg-contain bg-bottom bg-no-repeat"
		style="background-image: url({background}); aspect-ratio: 1512/473;"
	></div>
</div>
