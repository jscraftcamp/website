<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div class="rounded-2xl bg-dark-500 px-6 py-8 sm:px-10 sm:py-12 {className}">
	{@render children?.()}
</div>
