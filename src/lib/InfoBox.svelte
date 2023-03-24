<script lang="ts">
	export let title: String;
</script>

<section>
	<h2>{title}</h2>
	<div>
		<slot />
	</div>
</section>
