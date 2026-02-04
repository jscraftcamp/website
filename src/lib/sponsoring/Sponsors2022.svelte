<script lang="ts">
	import { sponsors } from '$lib/config/sponsoring/archive/2022/sponsors';
	import Sponsors from './Sponsors.svelte';
</script>

<Sponsors title="The 2022 event happened thanks to these great sponsors" {sponsors} />
