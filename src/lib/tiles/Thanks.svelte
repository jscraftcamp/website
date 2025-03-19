<script lang="ts">
	// Add any future interactivity here

	// Array of "Thanks" in different languages for the header
	const thanksArray = [
		'THANK YOU',
		'MERCI',
		'GRACIAS',
		'GRAZIE',
		'DANKE JE',
		'TAK',
		'TAKK',
		'TAK',
		'KIITOS',
		'DŌJINĪYE',
		'DĚKUJI',
		'DZIĘKUJĘ',
		'EÚCHARISTŌ',
		'MULTUMESC',
		'GAKU',
		'SALAMAT',
		'THANK YOU',
		'MERCI',
		'GRACIAS',
		'GRAZIE',
		'DANKE JE',
		'TAK',
		'TAKK',
		'TAK',
		'KIITOS',
		'DŌJINĪYE',
		'DĚKUJI',
		'DZIĘKUJĘ',
		'EÚCHARISTŌ',
		'MULTUMESC'
	];
</script>

<div class="@container w-full rounded-[19px] bg-neutral-800 p-8 text-white shadow-sm">
	<div class="flex flex-col">
		<!-- Thanks header with different languages -->
		<div class="relative mb-6 h-8 w-full overflow-hidden">
			<div
				class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
			>
				{#each thanksArray as thanks, i}
					<span class="mx-1 font-medium" style="opacity: {i % 2 === 0 ? 0.15 : 0.55}">{thanks}</span
					>
				{/each}
			</div>
		</div>

		<!-- Sponsors Grid -->
		<div
			class="grid grid-cols-2 gap-6 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-8"
		>
			<!-- Sponsor: peerigon -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/peerigon.svg" alt="peerigon" class="h-8 w-auto object-contain" />
			</div>

			<!-- Sponsor: ABS -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/abs.svg" alt="ABS" class="h-8 w-auto object-contain" />
			</div>

			<!-- Sponsor: codecentric -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/codecentric.svg" alt="codecentric" class="h-8 w-auto object-contain" />
			</div>

			<!-- Sponsor: Satellytes -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/satellytes.svg" alt="Satellytes" class="h-8 w-auto object-contain" />
			</div>

			<!-- Placeholder for unknown logo (mountain) -->
			<div class="flex items-center justify-center">
				<svg
					class="h-8 w-auto text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						d="M16.5,5c1.5,0,2.5,1.5,2.5,1.5s1-1.5,2.5-1.5c1.5,0,2.5,1.5,2.5,3c0,2.5-5,6-5,6s-5-3.5-5-6C14,6.5,15,5,16.5,5z"
					></path>
					<path d="M8.2,10.8l3.3,3.3L9,16.5l-3-4.5L1,18h16.5l-5.8-8.7L8.2,10.8z"></path>
				</svg>
			</div>

			<!-- Placeholder for unknown logo (circle) -->
			<div class="flex items-center justify-center">
				<svg
					class="h-8 w-auto text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<circle cx="12" cy="12" r="10"></circle>
				</svg>
			</div>

			<!-- Sponsor: jambit -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/jambit.svg" alt="jambit" class="h-8 w-auto object-contain" />
			</div>

			<!-- Sponsor: HipSquare -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/hipsquare.svg" alt="HipSquare" class="h-8 w-auto object-contain" />
			</div>

			<!-- Sponsor: twilio -->
			<div class="flex items-center justify-center">
				<img src="/sponsors/twilio.svg" alt="twilio" class="h-8 w-auto object-contain" />
			</div>
		</div>
	</div>
</div>
