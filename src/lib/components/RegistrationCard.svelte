<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import { cn } from '$lib/utils/cn';
	import RegisterNow from '$lib/assets/register-now.svg';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<Card class={className}>
	<h3>Registration</h3>

	<img src={RegisterNow} alt="Register now" class="h-full w-auto" />
</Card>
