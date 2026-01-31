<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<section class={cn('rounded-2xl bg-dark-500 px-6 py-8 sm:px-10 sm:py-12', className)}>
	{@render children?.()}
</section>
