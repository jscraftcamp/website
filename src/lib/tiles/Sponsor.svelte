<script lang="ts">
	// Add any future interactivity here
	
	// Using runes and $props destructuring
	const { class: className } = $props();
</script>

<div class="@container w-full rounded-[19px] bg-white p-8 font-serif text-black shadow-sm {className}">
	<div class="flex flex-col">
		<!-- Placeholder for broken image icon -->
		<div class="mb-4 h-16 w-16">
			<svg
				class="h-full w-full text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
				<circle cx="8.5" cy="8.5" r="1.5"></circle>
				<path d="M21 15l-5-5L5 21"></path>
				<path d="M21 14v7h-7"></path>
			</svg>
		</div>

		<!-- Title -->
		<h2 class="mb-4 font-bold @xs:text-3xl @sm:text-4xl">402 Sponsors Required</h2>

		<!-- Description -->
		<p class="mb-8 text-lg leading-relaxed">
			For almost 10 years, our event has brought developers together – free and run by volunteers.
			Help us make 2025 a success and connect with passionate tech enthusiasts. Interested?
		</p>

		<!-- Link -->
		<a
			href="/sponsors"
			class="flex items-center space-x-1 font-serif text-lg font-medium text-blue-600 transition-colors hover:text-blue-800"
		>
			<span class="text-xl">»</span>
			<span>Checkout Sponsor Cards</span>
		</a>
	</div>
</div>
