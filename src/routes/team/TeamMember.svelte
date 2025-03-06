<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import linkedinLogo from '$lib/participants/linkedin.svg';

	interface Props {
		email?: string;
		linkedin?: string | undefined;
		image?: string | undefined;
		name: string;
	}

	let { email = '', linkedin = undefined, image = undefined, name }: Props = $props();
</script>

<Box>
	<div class="member">
		<div class="image">
			{#if image}
				<img src={image} alt={name} />
			{:else}
				<span>🧑‍💻</span>
			{/if}
		</div>
		<div class="infos">
			<strong class="name-with-logo">
				{name}
				{#if linkedin}
					<a
						href={linkedin}
						rel="external"
						class="linkedin-link"
						title="Link to {name} on LinkedIn"
					>
						<img src={linkedinLogo} height="32" width="32" alt="Link to {name} on LinkedIn" />
					</a>
				{/if}
			</strong>
			{#if email}
				<a href="mailto:{email}" title={email}>{email}</a>
			{:else}
				<span>-</span>
			{/if}
		</div>
	</div>
</Box>

<style>
	.member {
		display: flex;
		flex-flow: column;
		height: 100%;
	}
	.infos {
		display: flex;
		flex-flow: column;
		padding: 1em;
	}
	.name-with-logo {
		display: flex;
		align-items: center;
	}
	.linkedin-link {
		margin-left: 0.5em;
	}
	a {
		max-width: 13em;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.image {
		flex: 1;
		display: grid;
		place-items: center;
		max-width: 15em;
	}
	img,
	.image > span {
		display: block;
		max-width: 100%;
	}
</style>
