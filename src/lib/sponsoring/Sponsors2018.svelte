<script lang="ts">
	import { sponsors } from '$lib/config/sponsoring/archive/2018/sponsors';
	import Sponsors from './Sponsors.svelte';
</script>

<Sponsors title="The 2018 event happened thanks to these great sponsors" {sponsors} />
