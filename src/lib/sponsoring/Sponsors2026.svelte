<script lang="ts">
	import { sponsors } from '$lib/config/sponsoring/sponsoring';
	import Sponsors from './Sponsors.svelte';
</script>

<Sponsors title="A big thanks to our 2026 sponsors" {sponsors} />
