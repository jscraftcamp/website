<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '../Logo';
	import background from './background.svg';
</script>

<footer
	class="relative flex min-h-80 flex-col items-center overflow-hidden px-8 pt-8 pb-16 md:min-h-120"
>
	<nav class="z-10 flex items-center gap-3 font-medium text-white">
		<a
			href="{base}/legal"
			class="no-underline opacity-50 transition-opacity duration-200 hover:underline hover:opacity-80"
			>Imprint</a
		>
		<span class="opacity-50">·</span>
		<a
			href="{base}/legal#datenschutz"
			class="opacity-50 transition-opacity duration-200 hover:underline hover:opacity-80"
			>Privacy Policy</a
		>
		<span class="opacity-50">·</span>
		<a
			href="{base}/archive"
			class="opacity-50 transition-opacity duration-200 hover:underline hover:opacity-80">Archive</a
		>
	</nav>
	<div class="z-10 mt-12">
		<Logo style="max-width: 8rem;" />
	</div>
	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 h-full bg-cover bg-bottom bg-no-repeat"
		style="background-image: url({background});"
	></div>
</footer>
