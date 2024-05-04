<script lang="ts">
	import { base } from '$app/paths';
	import { isRegistrationOpen } from '$lib/participants/registration';
	import Logo from './Logo.svelte';
</script>

<header>
	<input id="navbar-open" type="checkbox" />
	<label for="navbar-open"
		><Logo style="max-height: 1em;" /> <span>JSCraftCamp</span>
		<div class="menu-icon">+</div></label
	>
	<nav>
		<ul>
			<li class="home">
				<a href="{base}/"><Logo style="max-height: 1em;" /> JSCraftCamp</a>
			</li>
			<li class="mobile-home"><a href="{base}/">Home</a></li>
			{#if isRegistrationOpen()}<li><a href="{base}/registration/">Registration</a></li>{/if}
			<li><a href="{base}/participants/">Participants</a></li>
			<li><a href="{base}/sponsoring/">Sponsoring</a></li>
			<li><a href="{base}/venue">Venue</a></li>
			<li><a href="{base}/values/">Values</a></li>
		</ul>
	</nav>
</header>

<style>
	header :global(a) {
		text-decoration: none;
	}
	header :global(a:hover) {
		text-decoration: underline;
	}

	header {
		padding: 2rem 2rem 0 2rem;
		min-width: 100%;
		max-width: var(--max-page-width);
	}
	nav {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 2em;
		margin: 0 auto;
		max-width: var(--max-page-width);
	}
	nav > ul {
		display: contents;
	}
	input {
		display: none;
	}
	li {
		list-style: none;
	}
	li.home,
	label {
		flex: 1;
		font-size: 26px;
		font-weight: 600;
		font-family: 'Poppins';
	}
	li.home a,
	label {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		gap: 0.3em;
	}
	li.mobile-home {
		display: none;
	}
	label {
		display: none;
		cursor: pointer;
	}
	label span {
		flex: 1;
	}

	.menu-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1em;
		width: 1em;
		transition: rotate 500ms;
	}

	@media screen and (max-width: 44em) {
		label {
			display: flex;
		}
		input[type='checkbox'] + label + nav {
			display: none;
		}
		input[type='checkbox']:checked + label + nav {
			display: flex;
		}
		input[type='checkbox']:checked + label .menu-icon {
			rotate: calc(3 * 45deg);
		}
		nav {
			align-items: stretch;
			flex-flow: column;
			font-size: 1em;
			gap: 0;
			margin: 1em 0;
		}
		nav li {
			background: #fff;
			flex: 1;
		}
		nav li a {
			display: block;
			padding: 1em;
			text-align: center;
		}
		li.home {
			display: none;
		}
		li.mobile-home {
			display: block;
		}
	}
</style>
