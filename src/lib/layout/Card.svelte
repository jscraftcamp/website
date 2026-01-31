<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<section
	class={cn(
		'flex flex-col gap-4 rounded-2xl bg-dark-500 px-6 py-8 text-white sm:px-10 sm:py-12',
		className
	)}
>
	{@render children?.()}
</section>
