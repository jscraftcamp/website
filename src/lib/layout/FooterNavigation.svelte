<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '../logos/CurrentLogo';
</script>

<footer
	class="relative flex min-h-80 flex-col items-center overflow-hidden px-8 pt-8 pb-16 md:min-h-120"
>
	<nav class="z-10 flex items-center gap-3 font-medium text-white/50">
		<a
			href="{base}/legal"
			class="no-underline opacity-50 transition-opacity duration-200 hover:text-white/80 hover:underline"
			>Imprint</a
		>
		<span class="opacity-50">·</span>
		<a
			href="{base}/legal#datenschutz"
			class="opacity-50 transition-opacity duration-200 hover:text-white/80 hover:underline"
			>Privacy Policy</a
		>
		<span class="opacity-50">·</span>
		<a
			href="{base}/archive"
			class="opacity-50 transition-opacity duration-200 hover:text-white/80 hover:underline"
			>Archive</a
		>
	</nav>
	<div class="z-10 mt-12">
		<Logo style="max-width: 8rem;" />
	</div>
</footer>
