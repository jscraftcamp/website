<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import SponsorRequired from '$lib/components/SponsorRequired.svelte';
	import SponsorCard from '$lib/components/SponsorCard.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import UnconferenceDescription from '$lib/components/UnconferenceDescription.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import PhotoPlaceholder from '$lib/components/PhotoPlaceholder.svelte';
	import LocationPlaceholder from '$lib/components/LocationPlaceholder.svelte';
	import RegistrationCard from '$lib/components/RegistrationCard.svelte';
	import { fridayAgenda, saturdayAgenda, allTimeSlots } from '$lib/config/agenda';
</script>

<PageLayout>
	<div class="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-3">
		<!-- Row 1: Header + SponsorRequired -->
		<Header class="lg:col-span-2" />
		<SponsorRequired />

		<!-- Row 2: SponsorCard (full width) -->
		<SponsorCard class="lg:col-span-3" />

		<!-- Row 3: Photo + Location + Unconference -->
		<PhotoPlaceholder />
		<LocationPlaceholder />
		<UnconferenceDescription />

		<!-- Row 4: Registration + Timelines -->
		<RegistrationCard />
		<div class="flex h-full flex-col justify-between gap-4 lg:col-span-2">
			<Timeline agenda={fridayAgenda} slots={allTimeSlots} />
			<Timeline agenda={saturdayAgenda} slots={allTimeSlots} />
		</div>
	</div>
	<Partners />
</PageLayout>
