<script lang="ts">
	import { alumni } from '$lib/config/team';
	import TeamMember from '$lib/components/TeamMember.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import Card from '$lib/layout/Card.svelte';
</script>

<PageLayout>
	<h1>The Alumni of JSCraftCamp Organizers</h1>

	<Card>
		<h3>Thank you all for the support!</h3>
		<p>
			Throughout the years, there were lots of helping hands and people who organized previous
			events.
		</p>
	</Card>

	<section class="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each alumni as member}
			<TeamMember {...member} />
		{/each}
	</section>
</PageLayout>
