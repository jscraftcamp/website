<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import RegistrationTemplate from '../../../participants/_template.json?raw';
</script>

<PageLayout>
	<h1>Registration</h1>
	<section>
		<InfoBox title="Registration process">
			<p>
				To register for the JSCraftCamp you have to add a JSONC file<sup>1</sup> with your name and
				some other information to our
				<a href="https://github.com/jscraftcamp/website">github repository</a>
				via a pull request<sup>2</sup>. Registration is free of charge. Your json file should follow
				the naming scheme
				<code>$name_or_nickname.json</code> and must be placed in the folder
				<code>participants</code>. The structure of the file is described below. We are using JSONC
				to parse the files, so it's okay to keep the comments from the
				<code>_template.json</code>.
			</p>
			<p>
				Out of these JSON files, the <a href="{base}/participants/">/participants</a> page will be generated.
			</p>

			<p>
				<sup>1</sup>
				<a href="https://www.npmjs.com/package/jsonc-parser"
					>JSONC is JSON with JavaScript style comments</a
				>.
				<br />
				<sup>2</sup> Click
				<a href="https://github.com/jscraftcamp/website/new/main/participants"
					>this link to start the process on the github page</a
				>
				to create the JSONC file in the repo. Make sure you are logged in to github.
			</p>
		</InfoBox>

		<InfoBox title="The important stuff">
			<ul>
				<li>
					Please put in your <strong>real name</strong>; Location host will check it at the entrance
				</li>
				<li>
					If you don't want to put in allergies or anything else, drop us a message at <a
						href="https://discord.gg/3mHhaXVEjP"
						rel="external">Discord</a
					>
					or <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a>.
				</li>
				<li>
					We will try our best to fulfil your dietary requirements, but we cannot guarantee
					anything. We will post the ordered food in the issues, so you can check if you need to
					bring something for yourself.
				</li>
				<li>
					If you need help <a href="https://discord.gg/3mHhaXVEjP" rel="external">reach out</a>! You
					will learn some git for free.
				</li>
				<li>
					Please read the JSON comments, they should explain every field, and if you have questions <a
						href="mailto:team@jscraftcamp.org">reach out</a
					>.
				</li>
				<li>
					If you have any improvement suggestions, please <a href="mailto:team@jscraftcamp.org"
						>let us know</a
					>.
				</li>
			</ul>
		</InfoBox>

		<InfoBox title="The JSON format">
			<p>Your registration as JSON file should be in the following format to pass the tests:</p>
			<pre>{RegistrationTemplate}</pre>
		</InfoBox>

		<InfoBox title="Validation for your JSON file">
			<p>
				To test if your JSON file is a valid registration you can run <code>pnpm run test</code>
				(more details about this are in the
				<a href="https://github.com/jscraftcamp/website/tree/main/README.md" rel="external"
					><code>README.md</code></a
				> file). Invalid registrations will be rejected. If you need any help with registration, don't
				hesitate to contact one of the team.
			</p>
		</InfoBox>

		<InfoBox title="Process to unregister">
			<p>
				If you registered previously and at some point find out you can't make it to the
				JSCraftCamp, please let us know. Either unregister by writing another pull request, write an
				issue or contact us at <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a>.
			</p>
		</InfoBox>
	</section>
</PageLayout>

<style>
	section {
		display: flex;
		flex-flow: column;
		gap: 2em;
		max-width: 100%;
	}

	pre {
		max-width: 100%;
		overflow: auto;
	}

	sup {
		line-height: 0; /* Remove the change in line height for lines with <sup> in them, makes these lines with <sup>s be higher, which renders ugly. */
	}
</style>
