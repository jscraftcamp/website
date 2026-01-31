<script lang="ts">
	import InfoBox from '$lib/layout/InfoBox.svelte';
</script>

<InfoBox title="Friday schedule">
	<p>JSCraftCamp 2025 will be facilitated by ... to be announced!</p>
	<ol>
		<li>09:00 - 10:00 Doors open, breakfast</li>
		<li>10:00 - 11:00 Opening and Marketplace</li>
		<li>11:00 - 13:00 Two session slots</li>
		<li>13:00 - 14:00 Lunch</li>
		<li>14:00 - 17:00 Three session slots</li>
		<li>17:00 - 18:00 Review and Learnings</li>
		<li>18:00 - 22:00 Pizza, board games, networking, party</li>
	</ol>
</InfoBox>
<InfoBox title="Saturday schedule">
	<p>
		If you did not attend the JSCraftCamp before and are only able to come on Saturday, please try
		to be there as early as possible. The orga team, facilitator and participants will help you
		understand the format better if you missed the Opening on Friday.
	</p>
	<ol>
		<li>09:00 - 10:00 Doors open, breakfast</li>
		<li>10:00 - 11:00 Marketplace</li>
		<li>11:00 - 13:00 Two session slots</li>
		<li>13:00 - 14:00 Lunch</li>
		<li>14:00 - 17:00 Three session slots</li>
		<li>17:00 - 18:00 Review, Learnings and closing</li>
	</ol>
</InfoBox>

<style>
	ol {
		display: grid;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
