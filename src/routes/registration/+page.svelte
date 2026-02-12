<script lang="ts">
	import { base } from '$app/paths';
	import { socialLinks } from '$lib/config/social';
	import Card from '$lib/layout/Card.svelte';
	import Content from '$lib/layout/Content.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import RegistrationTemplate from '../../../participants/_template.json?raw';
</script>

<PageLayout>
	<Content>
		<h1>Registration</h1>
		<Card>
			<h2>Registration process</h2>
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
		</Card>

		<Card>
			<h2>The important stuff</h2>
			<ul>
				<li>
					Please put in your <strong>real name</strong>; Location host will check it at the entrance
				</li>
				<li>
					If you don't want to put in allergies or anything else, drop us a message at <a
						href={socialLinks.discord}
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
					If you need help <a href={socialLinks.discord} rel="external">reach out</a>! You
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
		</Card>

		<Card>
			<h2>The JSON format</h2>
			<p>Your registration as JSON file should be in the following format to pass the tests:</p>
			<pre>{RegistrationTemplate}</pre>
		</Card>

		<Card>
			<h2>Validation for your JSON file</h2>
			<p>
				To test if your JSON file is a valid registration you can run <code>pnpm run test</code>
				(more details about this are in the
				<a href="https://github.com/jscraftcamp/website/tree/main/README.md" rel="external"
					><code>README.md</code></a
				> file). Invalid registrations will be rejected. If you need any help with registration, don't
				hesitate to contact one of the team.
			</p>
		</Card>

		<Card>
			<h2>Process to unregister</h2>
			<p>
				If you registered previously and at some point find out you can't make it to the
				JSCraftCamp, please let us know. Either unregister by writing another pull request, write an
				issue or contact us at <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a>.
			</p>
		</Card>
	</Content>
</PageLayout>
