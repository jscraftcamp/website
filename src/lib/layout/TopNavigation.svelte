<script lang="ts">
	import { base } from '$app/paths';
	import { isRegistrationOpen } from '$lib/participants/registration';
	import Logo from './Logo.svelte';
</script>

<header>
	<nav>
    <ul>
      <li><strong>
        <a href="/"><Logo style="max-height: 1em;" /> <span>JSCraftCamp</span></a>
      </strong></li>
    </ul>
    
		<ul>
			{#if isRegistrationOpen()}<li><a href="{base}/registration/">Registration</a></li>{/if}
			<li><a href="{base}/participants/">Participants</a></li>
			<li><a href="{base}/sponsoring/">Sponsoring</a></li>
			<li><a href="{base}/values/">Values</a></li>
		</ul>
	</nav>
</header>
