<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Header from '$lib/components/HeaderCard.svelte';
	import SponsorRequired from '$lib/components/SponsorRequiredCard.svelte';
	import SponsorCard from '$lib/components/CurrentSponsorsCard.svelte';
	import Partners from '$lib/components/PartnersArea.svelte';
	import UnconferenceDescription from '$lib/components/UnconferenceDescriptionCard.svelte';
	import Timeline from '$lib/components/TimelineCard.svelte';
	import EventPhotos from '$lib/components/EventPhotosCard.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import RegistrationCard from '$lib/components/RegistrationCard.svelte';
	import { fridayAgenda, saturdayAgenda, allTimeSlots } from '$lib/config/agenda';
	import type { PageData } from './$types';
	import Content from '$lib/layout/Content.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<PageLayout>
	<Content>
		<div class="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-3">
			<!-- Row 1: Header + SponsorRequired -->
			<Header class="lg:col-span-2" />
			<SponsorRequired />

			<!-- Row 2: SponsorCard (full width) -->
			<SponsorCard class="lg:col-span-3" />

			<!-- Row 3: Photo + Location + Unconference -->
			<EventPhotos photos={data.eventPhotos} />
			<LocationCard />
			<UnconferenceDescription />

			<!-- Row 4: Registration + Timelines -->
			<RegistrationCard />
			<div class="flex h-full flex-col justify-between gap-4 lg:col-span-2">
				<Timeline agenda={fridayAgenda} slots={allTimeSlots} />
				<Timeline agenda={saturdayAgenda} slots={allTimeSlots} />
			</div>
		</div>
	</Content>
	<Content>
		<Partners />
	</Content>
</PageLayout>
