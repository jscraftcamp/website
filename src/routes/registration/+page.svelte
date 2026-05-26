<script lang="ts">
	import { base } from '$app/paths';
	import { socialLinks } from '$lib/config/social';
	import { eventConfig, getRegistrationState } from '$lib/config/event';
	import CtaLink from '$lib/components/CtaLink.svelte';
	import Card from '$lib/layout/Card.svelte';
	import Content from '$lib/layout/Content.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import RegistrationTemplate from '../../../participants/_template.json?raw';

	const registrationState = getRegistrationState();
	const githubNewParticipantFilename = 'your_name.json';
	const githubNewParticipantUrl = `https://github.com/jscraftcamp/website/new/main/participants?filename=${encodeURIComponent(githubNewParticipantFilename)}&value=${encodeURIComponent(RegistrationTemplate)}`;
	const templateUrl =
		'https://github.com/jscraftcamp/website/blob/main/participants/_template.json';
</script>

<PageLayout>
	<Content>
		<h1>Registration</h1>

		<Card>
			{#if registrationState === 'open'}
				<h2>Registration is open</h2>
				<p>
					Welcome and thank you for your interest in joining our event as a participant! To register
					for JSCraftCamp, open a pull request on GitHub that adds your
					<code>participants/yourname.json</code> file. After your PR is merged, you will appear on
					the
					<a href="{base}/participants/">participants page</a>.
				</p>
				<p>
					<CtaLink href={githubNewParticipantUrl} external>Register on GitHub</CtaLink>
				</p>
				<p>
					Already registered? To update your details, open another pull request with changes to your
					JSON file. To cancel, see <strong>Cancel your registration</strong> below.
				</p>
			{:else if registrationState === 'not-yet' && eventConfig.registrationOpensAt}
				<h2>Registration opens soon</h2>
				<p>
					Registration opens on
					<strong>{eventConfig.registrationOpensAt.toLocaleDateString()}</strong>. Get your GitHub
					account ready and check back then.
				</p>
				<p>
					When registration opens, you will register by opening a pull request that adds your
					<code>participants/yourname.json</code> file. The public
					<a href="{base}/participants/">participants list</a> is built from those files.
				</p>
			{:else}
				<h2>Registration is closed</h2>
				<p>
					Registration closed on
					<strong>{eventConfig.registrationClosesAt?.toLocaleDateString() ?? 'the deadline'}</strong
					>. See who is coming on the
					<a href="{base}/participants/">participants page</a>.
				</p>
				<p>
					Already registered and need to change or cancel? See
					<strong>Cancel your registration</strong> below.
				</p>
			{/if}
		</Card>

		<Card>
			<h2>Why are you making us do this?</h2>
			<p>
				JSCraftCamp is free and open to developers of any skill level. Registration via pull request
				is intentional: we want people who register to put in a little effort up front, so we keep
				no-show rates low — a common challenge at free events.
			</p>
			<p>
				In practice, you “pay” with your time instead of money. Opening a PR shows us your
				commitment and helps us plan food, space, and the participant list with more confidence.
			</p>
		</Card>

		<Card>
			<h2>Before you register</h2>
			<ul>
				<li>
					<strong>Real name:</strong> Use your real name in the JSON file. The location host will check
					it at the entrance.
				</li>
				<li>
					<strong>Public data:</strong> Your pull request and participant data are public on GitHub.
					After merge, you will be listed on the
					<a href="{base}/participants/">participants page</a>.
				</li>
				<li>
					<strong>Dietary requirements:</strong> We try our best to fulfil your needs, but we cannot
					guarantee everything. We post ordered food in GitHub issues so you can check whether you need
					to bring something yourself.
				</li>
				<li>
					<strong>Allergies and sensitive info:</strong> You do not have to put allergies in your
					JSON file. If you prefer not to, message us on
					<a href={socialLinks.discord} rel="external">Discord</a>
					or
					<a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a>.
				</li>
				<li>
					<strong>Need help?</strong>
					<a href={socialLinks.discord} rel="external">Reach out on Discord</a> — we are happy to help
					with Git and pull requests.
				</li>
				<li>
					<strong>JSON fields:</strong> Read the comments in the
					<a href={templateUrl} rel="external">registration template</a>. They should explain every
					field. If something is unclear, please tell us! Questions?
					<a href="mailto:team@jscraftcamp.org">Contact the team</a>.
				</li>
				<li>
					<strong>Suggestions?</strong>
					<a href="mailto:team@jscraftcamp.org">Let us know</a> if you have ideas to improve registration.
				</li>
			</ul>
		</Card>

		<Card>
			<h2>Photography and red dots</h2>
			<p>
				Photographers may take photos and videos during the event for documentation and social
				media. See
				<a href="{base}/archive/2025/photos/">photos from past events</a> for examples.
			</p>
			<p>
				If you do <strong>not</strong> want to appear in <strong>published or released</strong>
				event photos, we provide <span class="red-dot" aria-hidden="true"></span>
				<strong>red dots at check-in</strong>. Wear one
				<strong>clearly visible next to your nametag</strong> so photographers and others can see your
				preference.
			</p>
			<p>
				A red dot signals that you do not consent to being in published event photos. Photographers
				and the team are asked to respect this.
			</p>
			<p>
				If you want to avoid being in photos, when you notice a photographer aiming in your
				direction, try to
				<strong>look away</strong>, <strong>step out of the frame</strong>, or
				<strong>turn aside</strong>. Red dots help communicate your preference, but we cannot
				guarantee that every incidental photo is avoided.
			</p>
			<p>
				Using a red dot for published photos does <strong>not</strong> prevent you from registering for
				the event.
			</p>
		</Card>

		<Card>
			<h2>How to register</h2>
			<ol class="steps">
				<li>
					Read <strong>Why are you making us do this?</strong>,
					<strong>Before you register</strong>, and <strong>Photography and red dots</strong> on this
					page.
				</li>
				<li>Log in to <a href="https://github.com" rel="external">GitHub</a>.</li>
				<li>
					<a href={githubNewParticipantUrl} rel="external">Create a new file</a> in the
					<code>participants/</code> folder (opens with the registration template pre-filled).
					Rename
					<code>your_name.json</code> to <code>yourgithubusername.json</code> (with your actual
					GitHub username) or <code>firstname_lastname.json</code>
				</li>
				<li>
					Copy the <a href={templateUrl} rel="external">registration template</a>, fill in the
					required fields, and adjust optional fields. The file may include comments (
					<a href="https://www.npmjs.com/package/jsonc-parser" rel="external">JSONC</a>).
				</li>
				<li>Open a pull request and complete the PR checklist.</li>
				<li>
					After your PR is merged, you appear on the
					<a href="{base}/participants/">participants page</a>.
				</li>
			</ol>
		</Card>

		<Card>
			<h2>JSON format</h2>
			<p>Your registration JSON file must match this format to pass validation:</p>
			<pre class="template">{RegistrationTemplate}</pre>
		</Card>

		<Card>
			<h2>Validation</h2>
			<p>
				To check your JSON locally, run <code>pnpm run test</code> (see the
				<a href="https://github.com/jscraftcamp/website/tree/main/README.md" rel="external"
					><code>README.md</code></a
				>
				for details). Invalid registrations are rejected by our automated checks. If you need help, contact
				the team at <a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a>.
			</p>
		</Card>

		<Card>
			<h2>Cancel your registration</h2>
			<p>
				If you registered but can no longer attend, please let us know. You can cancel by opening
				another pull request that removes your JSON file, by opening a GitHub issue, or by emailing
				<a href="mailto:team@jscraftcamp.org">team@jscraftcamp.org</a> with the subject
				<code>UNREGISTER</code>.
			</p>
		</Card>
	</Content>
</PageLayout>

<style>
	.template {
		overflow-x: auto;
		max-width: 100%;
	}

	.steps {
		list-style: decimal;
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.steps li {
		padding-left: 0.5rem;
	}

	.steps li::marker {
		color: var(--color-primary-500);
	}

	.red-dot {
		display: inline-block;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
		background-color: #dc2626;
		vertical-align: middle;
		margin: 0 0.15rem;
	}
</style>
