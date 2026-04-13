<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import CurrentSponsors from '$lib/sponsoring/CurrentSponsors';
	import Card from '$lib/layout/Card.svelte';
	import Content from '$lib/layout/Content.svelte';
</script>

<PageLayout>
	<Content>
		<h1>Want to become a sponsor?</h1>
		<h2>Expose your Company to a Group of Highly Motivated Technology Enthusiasts</h2>

		<Card>
			<h3>You will get ...</h3>
			<ul>
				<li>Up to <strong>5 preregistered participant spots</strong> for your representatives</li>
				<li>
					We place your <strong>logo</strong> and <strong>link</strong> on the JSCraftCamp website
				</li>
				<li>
					Your <strong>exhibitor</strong> will be visible for the whole time during the event.
				</li>
				<li>You can bring a <strong>stand-up display</strong> to be permanently visible.</li>
				<li>
					You can make your <strong>job ads</strong> visible for all attendees for the whole time during
					the conference.
				</li>
				<li>
					Your <strong>company name</strong> will be mentioned several times during the conference.
				</li>
				<li>
					It's an OpenSpace — contribute the <strong>talks that are important to you</strong> to the
					community!
				</li>
				<li>Sponsors will be announced via the official <strong>social media</strong> account.</li>
			</ul>
		</Card>
		<Card>
			<h3>Why Sponsor?</h3>
			<p>
				The JSCraftCamp is an Open Space conference that attracts diverse people from the JavaScript
				community who really care about their craft.
			</p>
			<p>
				The crowd is self selected by investing time for their own application (pull request).
				Besides developers, you will find all kind of people with different job roles that really
				care about technology and improvement.
			</p>
			<p>
				You will get the chance to present your brand to these 80 to 120 highly skilled individuals
				and show them how much you care! We'll all thank you for that!
			</p>

			<p>
				Show how much you care about improving the state of Crafting Software and Clean Code in the
				JS-Community!
			</p>

			<p>
				We believe in people and our guests - so we ask nothing more of everybody than to be
				respectful and friendly with one another.
			</p>
		</Card>

		<Card>
			<h3>What to Sponsor?</h3>
			<p>
				All expense will serve the attendees of the JSCraftCamp, all the expenses serve for food,
				drinks, chairs, and all alike things that are needed for spending a couple of days together
				thinking and hacking for the modern world.
			</p>
			<a href="https://github.com/orgs/jscraftcamp/projects/16" rel="external" target="_blank"
				>Find all sponsoring items on GitHub</a
			>
		</Card>
	</Content>
	<CurrentSponsors />
</PageLayout>
