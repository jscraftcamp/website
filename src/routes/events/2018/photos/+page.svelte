<script lang="ts">
	import PhotoLayout from '../../../../lib/layout/PhotoLayout.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<PhotoLayout photos={data.photos} year="2018" />
