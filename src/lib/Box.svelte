<div>
	<slot />
</div>

<style>
	div {
		position: relative;
		background-color: var(--background-color, #fff);
		box-sizing: border-box;
		padding: 2em;
		position: relative;
	}
	div::before {
		position: absolute;
		content: '';
		z-index: -1;
		inset: 0;
		box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
	}
</style>
