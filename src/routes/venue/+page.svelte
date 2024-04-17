<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import location from './location.jpg';
</script>

<PageLayout>
	<h1>Location Information</h1>

	<section>
		<InfoBox>
			<p>This year's location will be in the upper two floors of the Kraftwerk.</p>
			<p>
				MaibornWolff GmbH<br />
				Drygalski-Allee 25<br />
				81477 München <br />
				(<a href="https://maps.app.goo.gl/hUhbheFci2sSJ7SZ6">Google Maps</a>)
			</p>
			<p>
				<img
					src={location}
					alt={'a comfortable-looking, modern seating area with windows in the background, showing a view over the city'}
				/>
			</p>
			<p>
				See some more impressions
				<a
					href="https://www.maibornwolff.de/location/muenchen-kraftwerk/"
					rel="external noopener noreferrer"
				>
					here
				</a>.
			</p>
		</InfoBox>

		<InfoBox title="Accessibility">
			<p>
				There are two elevators you can use: One connecting the ground level with the event area and
				a second one connecting the two event floors (this one will be reserved for people with
				walking disabilities). The front door does not open automatically.
			</p>
			<p>
				The carpet (where there is carpet) is short enough to drive on using a wheelchair. There is
				a wheelchair-accessible toilet on the fourth floor of the building; if you plan to come and
				use it, please contact us in advance so we can make sure it's open.
			</p>
			<p>The elevator has buttons with raised print numbers, no Braille.</p>
			<p>Unfortunately, none of the Orga team speak sign language with any fluency.</p>
			<p>
				If you want to bring someone to help you translate or navigate the space, they do not have
				to register.
			</p>
		</InfoBox>
		<InfoBox title="Getting fresh air">
			There is at least one balcony you can get to for a breath of fresh air (or smoke) if you need
			one.
		</InfoBox>
	</section>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 2em;
	}

	img {
		max-width: 100%;
	}
</style>
