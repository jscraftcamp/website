<script lang="ts">
	import socrates from './partners/socrates.png';
	import frontmuc from './partners/munich-frontend-developers.webp';
	const partners = [
		{
			image: frontmuc,
			link: 'https://www.meetup.com/de-DE/munich-frontend-developers/',
			name: 'Munich Frontend Developers'
		},
		{
			image: socrates,
			link: 'https://www.socrates-conference.de/',
			name: 'SoCraTes'
		}
	];
</script>

<h2>Our partner conferences</h2>
<section>
	{#each partners as partner}
		<a href={partner.link} rel="external">
			<div class="box">
				<div class="image"><img src={partner.image} alt={partner.name} /></div>
				<div class="name"><span>{partner.name}</span></div>
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
	img {
		display: block;
		min-width: 100%;
		max-width: min(100%, 10em);
	}
	span {
		align-self: flex-end;
	}
</style>
