<script>
	import Session from '../Session.svelte';
</script>

<table>
	<thead>
		<tr>
			<th />
			<th>Codecentric</th>
			<th>alm engineering</th>
			<th>compose.us</th>
			<th>Hetzner</th>
			<th>inovex</th>
			<th>jambit</th>
			<th>peerigon</th>
			<th>project lary</th>
			<th>scalable capital</th>
			<th>sepp.med</th>
			<th>TNG</th>
			<th>typedigital</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>11:00</td>
			<td><Session title="Ensemble Programming" owner="Marc" /></td>
			<td
				><Session
					title="Why Components ar not reusable and ideas to fix it"
					owner="Thomas Tränkler"
				/></td
			>
			<td><Session title="Visual regression testing with Storybook and cypress" owner="Pavlo" /></td
			>
			<td><Session title="How to write Fullstack JS app conveniently" owner="Max" /></td>
			<td><Session title="Web accessibility" owner="Jonas" /></td>
			<td />
			<td />
			<td><Session title="React alternatives, Svelte, Remix" owner="Andi" /></td>
			<td />
			<td />
			<td />
			<td />
		</tr>
		<tr>
			<td>12:00</td>
			<td><Session title="Web components SSR" owner="Thomas Tränkler" /></td>
			<td><Session title="Bot Detection" owner="Florian L" /></td>
			<td><Session title="How to migrate from Vue2 to Vue3 successfully" owner="Celestine" /></td>
			<td />
			<td><Session title="Juice Shop" owner="Michael" /></td>
			<td />
			<td><Session title="Frontend Friday fighting CSSBattle.dev" owner="Jörn" /></td>
			<td />
			<td><Session title="Tales from Postmortems" owner="Jakob" /></td>
			<td
				><Session
					title="Maintaining large Apps / Software for long time; Presentation + Discussion"
					owner="Christian"
				/></td
			>
			<td><Session title="Hexagonal Architecture in Frontend Apps" owner="Sophia" /></td>
			<td />
		</tr>
		<tr>
			<td>13:00</td>
			<td><Session title="Traefik, OAuth2, Hasura, Docker-Compose - HELP!!!" owner="Jörn" /></td>
			<td colspan="11">LUNCH</td>
		</tr>
		<tr>
			<td>14:00</td>
			<td />
			<td><Session title="Testing without Mocks" owner="Martin Grand" /></td>
			<td><Session title="Getting 'more' agile" owner="Matthias Schmid" /></td>
			<td />
			<td><Session title="Discord Bot Development with Node or Deno" owner="Gustaf" /></td>
			<td><Session title="(Micro) Animations" owner="Andi" /></td>
			<td><Session title="Dates, Timestamps, Timezones WTF?" owner="Johannes" /></td>
			<td><Session title="Rust for JS devs" owner="Faisal" /></td>
			<td><Session title="LLMs in practice" owner="Mario, Korbinian, Chris" /></td>
			<td
				><Session
					title="Refactoring on a large code base (with Schematics); Presentation + Discussion"
					owner="Christian"
				/></td
			>
			<td />
			<td />
		</tr>
		<tr>
			<td>15:00</td>
			<td><Session title="Deno and the Web" owner="Leo" /></td>
			<td><Session title="Security Headers" owner="Bernd" /></td>
			<td
				><Session
					title="What makes a good code review process? Discussion"
					owner="Lisi Linhart"
				/></td
			>
			<td />
			<td><Session title="Full Stack and Type Safe Rust Web Apps" owner="Max" /></td>
			<td />
			<td><Session title="Keeping the Performance of my Web App up!" owner="Sophia" /></td>
			<td />
			<td><Session title="State Management Zustand" owner="Holger" /></td>
			<td><Session title="AI-enhanced Rich Text Editor" owner="Vanessa" /></td>
			<td><Session title="SVG" owner="Ariadne Engelbrecht" /></td>
			<td />
		</tr>
		<tr>
			<td>16:00</td>
			<td />
			<td />
			<td />
			<td><Session title="Microfrontends Sharing Experiences" owner="David" /></td>
			<td />
			<td />
			<td
				><Session
					title="How to get a webapp online EASY? DB + Image conversion backend + frontend all in docker"
					owner="Wolfram"
				/></td
			>
			<td><Session title="Folder Structure Philosophy" owner="Patrick" /></td>
			<td><Session title="WebAuthn and Passkeys" owner="Clemens" /></td>
			<td><Session title="Golang?!" owner="Florian L" /></td>
			<td><Session title="Making React Native apps with Expo" owner="Faisal" /></td>
			<td />
		</tr>
	</tbody>
</table>

<style>
	tr:nth-child(even) {
		background-color: #eee;
	}
	tr:nth-child(odd) {
		background-color: #fff;
	}
</style>
