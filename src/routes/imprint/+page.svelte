<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import Content from '$lib/layout/Content.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
</script>

<PageLayout>
	<Content>
		<h1>Impressum</h1>

		<Card>
			<p>Jörn Bernhardt<br />Goethestr. 46<br />84032 Landshut</p>

			<h3>Konakt:</h3>
			<a href="mailto:joern.bernhardt+jscc@compose.us">joern.bernhardt+jscc@compose.us</a>
		</Card>

		<Card>
			<h2>Links auf der Website</h2>
			<p>
				Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen
				Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
				Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
				Seiten verantwortlich.
			</p>
			<p>
				Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
				überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
				permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
				Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
				Rechtsverletzungen werden wir derartige Links umgehend entfernen.
			</p>
		</Card>

		<Card>
			<h2>Urheberrecht</h2>
			<p>
				Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
				deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
				Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
				des jeweiligen Autors bzw. Erstellers.
			</p>
			<p>
				Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
				Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
				aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
				Rechtsverletzungen werden wir derartige Inhalte umgehend entferne
			</p>
		</Card>
	</Content>
</PageLayout>
