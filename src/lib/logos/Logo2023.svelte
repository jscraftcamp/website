<script lang="ts">
	interface Props {
		style?: string;
	}

	let { style = '' }: Props = $props();
</script>

<img src="/logos/2023/logo.svg" alt="JSCraftCamp Logo" style="height: 8em; {style}" />
