<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import SponsorRequired from '$lib/components/SponsorRequired.svelte';
	import SponsorCard from '$lib/components/SponsorCard.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import UnconferenceDescription from '$lib/components/UnconferenceDescription.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import { fridayAgenda, saturdayAgenda, allTimeSlots } from '$lib/config/agenda';
</script>

<PageLayout>
	<div class="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-[1fr_auto]">
		<Header />
		<SponsorRequired class="lg:w-100" />
		<SponsorCard class="lg:col-span-2" />
		<UnconferenceDescription class="lg:w-100" />
	</div>
	<div class="flex flex-col gap-4">
		<Timeline agenda={fridayAgenda} slots={allTimeSlots} />
		<Timeline agenda={saturdayAgenda} slots={allTimeSlots} />
	</div>
	<Partners />
</PageLayout>
