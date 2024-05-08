<script lang="ts">
	import Box from '$lib/layout/Box.svelte';
	import camp from './camp.svg';
	import code from './code.svg';
	import rocket from './rocket.svg';
</script>

<h2>What you can expect</h2>
<div style="--box-padding-width: 2em;">
	<Box>
		<article>
			<img src={code} alt="abstract code" />
			<h3>JavaScript</h3>
			<p>
				The focus of this BarCamp are JavaScript and related technologies. Possible topics are:
				Popular frameworks like Angular and React, the latest ECMAScript standard, languages like
				Elm or TypeScript which transpile to JavaScript, server-side programming with node.js,
				paradigms like event driven programming or future technologies like WebAssembly.
			</p>
		</article>
	</Box>
	<Box>
		<article>
			<img src={rocket} alt="deploying" />
			<h3>Crafting software</h3>
			<p>
				Have you ever struggled with an huge old JavaScript codebase? Or rolled your eyes about an
				'undefined' is not a function error? We will discuss which tools, practices and architecture
				patterns - from continuous integration to modular components - can help to create and
				maintain long-living, evolvable JavaScript applications.
			</p>
		</article>
	</Box>
	<Box>
		<article>
			<img src={camp} alt="campground" />
			<h3>BarCamp</h3>
			<p>
				A barcamp - also called an unconference - is an event without any previously fixed agenda.
				All the participants meet in the morning and decide about the schedule for the day. Everyone
				can offer a session - from a short hands-on workshop to moderating a discussion. The goal is
				to make everything as participative as possible. Read more about BarCamp on Wikipedia.
			</p>
		</article>
	</Box>
</div>

<style>
	h2,
	h3 {
		margin: 0;
		text-align: center;
	}
	article {
		display: flex;
		flex-flow: column;
		align-items: center;
		max-width: 12em;
	}
	p {
		margin: 0;
	}
	div {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: center;
		gap: 2em;
	}
	img {
		max-width: 100%;
	}
</style>
