<script lang="ts">
	import codecentric from './sponsors-2023/codecentric.png';
	import inovex from './sponsors-2023/inovex-logo.svg';
	import jambit from './sponsors-2023/jambit.svg';
	import projectLary from './sponsors-2023/project-lary.svg';
	import seppMed from './sponsors-2023/sepp-med.svg';
	import typedigital from './sponsors-2023/typedigital.svg';
	const sponsors = [
		{
			image: codecentric,
			link: 'https://www.codecentric.de',
			name: 'codecentric AG',
			sponsoring: 'Location'
		},
		{
			image: inovex,
			link: 'https://inovex.de',
			name: 'inovex',
			sponsoring: 'Coffee / Barista'
		},
		{
			image: jambit,
			link: 'https://jambit.com',
			name: 'jambit',
			sponsoring: 'Friday Lunch'
		},
		{
			image: projectLary,
			link: 'https://project-lary.com',
			name: 'project lary',
			sponsoring: 'Beverages'
		},
		{
			image: seppMed,
			link: 'https://www.seppmed.de',
			name: 'sepp.med',
			sponsoring: 'Stickers'
		},
		{
			image: typedigital,
			link: 'https://typedigital.de',
			name: 'typedigital',
			sponsoring: 'Saturday Snacks'
		}
	];
</script>

<h2>A big thanks to our great sponsors</h2>
<section>
	{#each sponsors as sponsor}
		<a href={sponsor.link} rel="external">
			<div class="box">
				<div class="image"><img src={sponsor.image} alt={sponsor.name} /></div>
				<div class="name"><span>{sponsor.name}</span></div>
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
	img {
		display: block;
		min-width: 100%;
		max-width: min(100%, 10em);
	}
	span {
		align-self: flex-end;
	}
</style>
