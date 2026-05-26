<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Variant = 'register' | 'muted';

	interface Props {
		href?: string;
		variant?: Variant;
		external?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		variant = 'register',
		external = false,
		class: className = '',
		children
	}: Props = $props();

	const baseClass =
		'inline-block rounded-full px-6 py-2.5 text-sm font-semibold no-underline transition-colors';

	const variantClass: Record<Variant, string> = {
		register: 'bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white',
		muted: 'bg-stone-600/80 text-stone-200'
	};
</script>

{#if href}
	<a
		{href}
		class={cn(baseClass, variantClass[variant], className)}
		rel={external ? 'external' : undefined}
		target={external ? '_blank' : undefined}
	>
		{@render children?.()}
	</a>
{:else}
	<span class={cn(baseClass, variantClass[variant], className)}>
		{@render children?.()}
	</span>
{/if}
