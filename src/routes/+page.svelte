<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import SponsorRequired from '$lib/components/SponsorRequired.svelte';
	import SponsorCard from '$lib/components/SponsorCard.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import UnconferenceDescription from '$lib/components/UnconferenceDescription.svelte';
</script>

<PageLayout>
	<div class="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-[1fr_auto]">
		<Header />
		<SponsorRequired class="lg:w-100" />
		<SponsorCard class="lg:col-span-2" />
		<UnconferenceDescription class="lg:w-100" />
	</div>
	<Partners />
</PageLayout>
