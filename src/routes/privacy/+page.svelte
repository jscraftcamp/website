<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import Content from '$lib/layout/Content.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<PageLayout>
	<Content>
		<h1>Datenschutzinformationen</h1>

		<Card>
			<h2>Verantwortlicher</h2>
			<p>Jörn Bernhardt<br />Goethestr. 46<br />84032 Landshut</p>

			<h3>Konakt:</h3>
			<a href="mailto:joern.bernhardt+jscc@compose.us">joern.bernhardt+jscc@compose.us</a>
		</Card>

		<Card>
			<h2>Allgemeine Hinweise zur Datenverarbeitung</h2>
			<p>
				Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden
				vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
				Datenschutzerklärung behandelt.
			</p>
		</Card>

		<Card>
			<h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
			<h3>1. Beim Besuch der Website</h3>
			<p>Beim Aufruf unserer Website erheben wir automatisch folgende Protokolldaten:</p>
			<ul>
				<li>IP-Adresse</li>
				<li>Datum und Uhrzeit des Zugriffs</li>
				<li>aufgerufene Seite/Datei</li>
				<li>User-Agent (Browsertyp und Browserversion sowie verwendetes Betriebssystem)</li>
				<li>Referrer URL</li>
			</ul>
			<p>
				Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und werden nicht zur
				Identifizierung von Personen verwendet und nach 14 Tagen gelöscht. Rechtsgrundlage ist Art.
				6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Sicherheit der Website).
			</p>
		</Card>
	</Content>
</PageLayout>
