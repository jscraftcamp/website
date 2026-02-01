<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<section class={cn('flex flex-col gap-4', className)}>
	{@render children?.()}
</section>
