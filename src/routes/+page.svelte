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
	import SkillLevelsCard from '$lib/components/SkillLevelsCard.svelte';
	import WhatIsJSCraftCamp from '$lib/components/WhatIsJSCraftCampCard.svelte';
	import { fridayAgenda, saturdayAgenda, allTimeSlots } from '$lib/config/agenda';
	import { eventConfig } from '$lib/config/event';
	import type { PageData } from './$types';
	import Content from '$lib/layout/Content.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const spotsLeft =
		eventConfig.maxParticipantsPerDay -
		Math.min(data.fridayParticipants, data.saturdayParticipants);
</script>

<PageLayout>
	<Content>
		<div class="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-3">
			<!-- Row 1: Header + What is JSCraftCamp -->
			<Header class="lg:col-span-2" {spotsLeft} />
			<WhatIsJSCraftCamp />

			<!-- Row 2: Skill Levels (full width) -->
			<SkillLevelsCard class="lg:col-span-3" />

			<!-- Row 3: Sponsors (full width) -->
			<SponsorCard class="lg:col-span-3" />

			<!-- Row 4: Become a Sponsor + Location + Unconference -->
			<SponsorRequired />
			<LocationCard />
			<UnconferenceDescription />

			<!-- Row 5: Registration + Photos (2 cols) -->
			<RegistrationCard />
			<EventPhotos class="lg:col-span-2" photos={data.eventPhotos} />

			<!-- Row 6: Timelines (full width, taller) -->
			<Timeline
				class="min-h-48 lg:col-span-3"
				agenda={fridayAgenda}
				slots={allTimeSlots}
				registered={data.fridayParticipants}
			/>
			<Timeline
				class="min-h-48 lg:col-span-3"
				agenda={saturdayAgenda}
				slots={allTimeSlots}
				registered={data.saturdayParticipants}
			/>
		</div>
	</Content>
	<Content>
		<Partners />
	</Content>
</PageLayout>
