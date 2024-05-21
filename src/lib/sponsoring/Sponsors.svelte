<script lang="ts">
	import type { Sponsor } from './is-sponsor';

	export let title: string;
	export let sponsors: Sponsor[] = [];
</script>

<h2>{title}</h2>
<section>
	{#each sponsors as sponsor}
		<a href={sponsor.link} rel="external">
			<div class="box">
				<div class="image"><img src={sponsor.image} alt={sponsor.name} /></div>
				<div class="name"><span>{sponsor.name}</span></div>
				{#if sponsor.sponsoring}<div class="sponsoring">{sponsor.sponsoring}</div>{/if}
			</div>
		</a>
	{/each}
</section>

<style>
	h2 {
		margin: 0;
		text-align: center;
	}
	section {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: center;
		gap: 2em;
		z-index: 0;
	}
	a {
		background-color: #fff;
		box-sizing: border-box;
		display: flex;
		flex: 1 0 auto;
		align-items: center;
		justify-content: center;
		max-width: 14em;
		position: relative;
		padding: 2em;
		text-align: center;
	}
	a::before {
		position: absolute;
		box-shadow: rgba(0, 0, 0, 0.1) 0 0 200px 25px;
		box-sizing: border-box;
		content: '';
		inset: 0;
		z-index: -1;
	}
	.box {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.image {
		display: flex;
		flex: 1 0 auto;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.sponsoring {
		display: none;
		position: absolute;
		inset: 0;
	}
	a:hover .sponsoring {
		background: linear-gradient(82deg, #000c 2em, #0006 calc(100% - 2em), #0000);
		color: #fff;
		display: flex;
		align-items: flex-end;
		text-align: start;
		padding: 2em;
	}
	img {
		display: block;
		min-width: 100%;
		max-width: min(100%, 10em);
	}
	.name {
		min-width: 8em;
	}
	span {
		align-self: flex-end;
	}
</style>
