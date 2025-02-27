<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import InfoBox from '../../lib/layout/InfoBox.svelte';
	import CurrentSponsors from '$lib/sponsoring/CurrentSponsors';
</script>

<PageLayout>
	<h1>Want to become a sponsor?</h1>
	<h2>Expose your Company to a Group of Highly Motivated Technology Enthusiasts</h2>

	<section>
		<InfoBox title="Sponsor us now">
			<p>
				<a href="https://github.com/orgs/jscraftcamp/projects/10" rel="external"
					>Find all sponsoring items on GitHub: https://github.com/orgs/jscraftcamp/projects/10</a
				>
				💖
			</p>
		</InfoBox>
		<InfoBox title="You will get ...">
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
		</InfoBox>

		<InfoBox title="Why Sponsor?">
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
		</InfoBox>

		<InfoBox title="What to Sponsor?">
			<p>
				All expense will serve the attendees of the JSCraftCamp, all the expenses serve for food,
				drinks, chairs, and all alike things that are needed for spending a couple of days together
				thinking and hacking for the modern world.
			</p>
		</InfoBox>
	</section>
	<section>
		<CurrentSponsors />
	</section>
</PageLayout>

<style>
	h1,
	h2 {
		text-align: center;
	}

	section {
		display: flex;
		flex-flow: column;
		gap: 2em;
	}

	section > p {
		text-align: center;
	}
</style>
