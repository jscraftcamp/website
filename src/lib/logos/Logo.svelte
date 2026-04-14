<script lang="ts">
	import Logo from './Logo2026.svelte';

	interface Props {
		style?: string;
	}

	let { style = '' }: Props = $props();
</script>

<Logo {style} />
