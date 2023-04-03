<script lang="ts">
	import { base } from '$app/paths';
	import InfoBox from '$lib/layout/InfoBox.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<PageLayout>
	<h1>Registration</h1>
	<h2>Registration will open on May 1st, 2023.</h2>
	<section>
		<InfoBox title="Registration process">
			<p>
				To register for JSCraftCamp you have to add a json file with your name and some other
				information to our GitHub Repository via a Pull Request. Registration is free of charge.
				Your json file should follow the naming scheme <code>$name_or_nickname.json</code> and must
				be placed in the folder <code>participants</code>. The structure of the file is described
				below.
			</p>

			<p>
				Out of these JSON files, the <a href="{base}/participants/">/participants</a> page will be generated.
			</p>
		</InfoBox>

		<InfoBox title="The JSON format">
			<p>Your registration as JSON file should be in the following format to pass the tests:</p>
			<pre>{`{
    "name": "Your real name (OR a nickname)",
    "company": "your company name (optional)",
    "when": {
        "friday": true/false,
        "saturday": true/false
    },
    "tags": ["any", "tag", "you like"],
    "vegan": true/false,
    "vegetarian": true/false,
    "allergies": "... (optional)",
    "what_is_my_connection_to_javascript": "Say something about you and JS ...",
    "what_can_i_contribute": "How can you contribute to the event? If you don't know yet, feel free to give it some thought ...",
    "tshirt": "W-S",
    "twitter": "handle (optional)"
}`}</pre>
			<br />

			<h3>Fields in the registration JSON</h3>
			<dl>
				<dt class="mandatory">name</dt>
				<dd>First name and last name or a nick name.</dd>

				<dt class="optional">company</dt>
				<dd>A company name</dd>

				<dt class="mandatory">when.friday</dt>
				<dd>If you are attending on Friday (Boolean value)</dd>

				<dt class="mandatory">when.saturday</dt>
				<dd>If you are attending on Saturday (Boolean value)</dd>

				<dt class="mandatory">tags</dt>
				<dd>Share what you think is important, use at least one tag. (Array of strings)</dd>
				<dt class="mandatory">vegan</dt>
				<dd>Just for planning: Let us know if you are a vegan (Boolean value)<sup>2</sup></dd>
				<dt class="mandatory">vegetarian</dt>
				<dd>
					Just for planning: Let us know if you are a vegetarian (Boolean value)<sup>2</sup>
				</dd>
				<dt class="optional">allergies</dt>
				<dd>Tell us if you have any special dietary requirements<sup>2</sup></dd>
				<dt class="mandatory">what_is_my_connection_to_javascript</dt>
				<dd>2-5 sentences about your experience with JavaScript or related technologies.</dd>
				<dt class="optional">what_can_i_contribute</dt>
				<dd>1-3 sentences about what you would like to contribute to the BarCamp.</dd>
				<dt class="optional">tshirt</dt>
				<dd>
					We will have a limited number of t-shirts with the event and sponsor logos. If you want
					one: fit (W=women, M=Man) and size (S,M,L,XL,XXL), e.g. W-S or M-XL. If your registration
					is shortly before the event there might be no time to have a t-shirt produced for you,
					please be aware.
				</dd>
				<dt class="optional">twitter</dt>
				<dd>Your Twitter handle without the leading @.</dd>
			</dl>
			<ol>
				<li>Mandatory field</li>
				<li>
					This is a free and completely sponsored event. Even though we want to try, we can not
					guarantee to be able to respect every dietary requirement
				</li>
			</ol>
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

	h3,
	dl {
		font-size: 1em;
		margin: 0;
	}
	dt {
		font-weight: 700;
		opacity: 0.5;
	}
	dt.mandatory {
		opacity: 1;
	}
	dt.mandatory::after {
		content: '1';
		vertical-align: super;
		font-size: smaller;
	}
</style>
