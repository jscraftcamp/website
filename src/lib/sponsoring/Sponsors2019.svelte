<script lang="ts">
	import { sponsors } from '$lib/config/sponsoring/archive/2019/sponsors';
	import Sponsors from './Sponsors.svelte';
</script>

<Sponsors title="The 2019 event happened thanks to these great sponsors" {sponsors} />
