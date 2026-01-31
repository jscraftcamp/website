<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import SponsorRequired from '$lib/components/SponsorRequired.svelte';
</script>

<PageLayout>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto]">
		<Header />
		<SponsorRequired class="lg:w-100" />
	</div>
</PageLayout>
