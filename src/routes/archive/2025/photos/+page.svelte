<script lang="ts">
	import PhotoLayout from '../../../../lib/layout/PhotoLayout.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

{#snippet credit()}
	<p>
		Photos by
		<a href="https://github.com/weiliddat" target="_blank">Chiawei</a>
		is licensed under
		<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> for JSCraftCamp
		2025.
	</p>
{/snippet}

<PhotoLayout photos={data.photos} year="2025" {credit} />
