<script lang="ts">
	import { base } from '$app/paths';
	import { team } from '$lib/config/team';
	import TeamMember from '$lib/components/TeamMember.svelte';
	import Card from '$lib/layout/Card.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<PageLayout>
	<h1>The Team</h1>
	<Card>
		<h3>Who are we?</h3>
		<p>
			We are simple developers organizing this event in our spare time. If you have any questions or
			problems before or during the conference, don't hesitate to contact one of us!
		</p>
		<p>
			Throughout the years, there were lots of people involved in organizing the past events. You
			can find out more about our alumnis <a href="{base}/team/alumni">here</a>.
		</p>

		<p>
			You can always reach us by e-mail: <a href="mailto:team@jscraftcamp.org"
				>team@jscraftcamp.org</a
			>
		</p>
	</Card>

	<section class="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each team as member}
			<TeamMember {...member} />
		{/each}
	</section>

	<Card>
		<h3>Join the Crew</h3>
		<p>
			Ready to level up from attendee to organizer? We're always looking for passionate folks to
			join the team. No secret handshake required — just hop into our
			<a href="https://discord.gg/3mHhaXVEjP">Discord</a>, say hi, and join our regular orga
			meetings. Your future self (and face on this page) will thank you.
		</p>
	</Card>
</PageLayout>
