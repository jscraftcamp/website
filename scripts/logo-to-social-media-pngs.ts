import { chromium } from '@playwright/test';

const year = process.argv[2];

const browser = await chromium.launch({ headless: true, slowMo: 50 });
try {
	await takeScreenshot({ name: 'jscc-discord-logo', logo: year, width: 512, height: 512 });
	await takeScreenshot({ name: 'jscc-meetup-event', logo: year, width: 1200, height: 675 });
	await takeScreenshot({ name: 'jscc-meetup-group', logo: year, width: 1200, height: 900 });
	await takeScreenshot({ name: 'jscc-linkedin-profile', logo: year, width: 400, height: 400 });
	await takeScreenshot({
		name: 'jscc-linkedin-banner',
		logo: year,
		width: 1128,
		height: 191,
		withText: `JSCraftCamp ${year}`
	});
} finally {
	await browser.close();
}

async function takeScreenshot(options: {
	name: string;
	logo: string;
	height: number;
	width: number;
	withText?: string;
}) {
	const { name, logo, height, width, withText } = options;
	const page = await browser.newPage({ viewport: { height, width } });
	await page.goto('about:blank');
	const content = withText
		? createHtmlWithText({ logo, text: withText })
		: createHtmlWithoutText({ logo });
	await page.setContent(content);
	await page.screenshot({
		path: `./static/logos/${logo}/${name}.png`,
		clip: { x: 0, y: 0, width, height },
		omitBackground: true
	});
}

function createHtmlWithText({ logo, text }: { logo: string; text: string }): string {
	return `<!doctype html>
	<html lang="en" style="height: 100%; width: 100%">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Logo Screenshot</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
				rel="stylesheet"
			/>
		</head>
		<body style="margin: 0; padding: 0">
			<div
				style="
					font-size: 30vh;
					height: 100vh;
					width: 100vw;
					max-height: 100%;
					max-width: 100%;
					overflow: hidden;
					display: grid;
					place-items: center;
				"
			>
				<div style="display: flex; flex-direction: row; place-items: center; gap: 1em">
					<img
						style="object-fit: contain; width: auto; height: 100%; max-width: 100%; max-height: 1em"
						alt="JSCraftCamp logo"
						src="http://localhost:5173/logos/${logo}/logo.svg"
					/>
					<div
						style="
							flex-grow: 1;
							font-family: Poppins;
							font-weight: 800;
							font-size: 30vh;
							justify-self: flex-start;
						"
					>
						${text}
					</div>
				</div>
			</div>
		</body>
	</html>
	`;
}
function createHtmlWithoutText({ logo }: { logo: string }): string {
	return `<!doctype html>
<html lang="en" style="height: 100%; width: 100%">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Logo Screenshot</title>
</head>
<body style="margin: 0; padding: 0">
	<div style="height: 100vh; width: 100vw; overflow: hidden; display: grid; place-items: center;">
		<img
			style="object-fit: contain; width: 100%; height: 100%; max-height: 100vh; max-width: 100vw"
			alt="JSCraftCamp logo"
			src="http://localhost:5173/logos/${logo}/logo.svg"
		/>
	</div>
</body>
</html>`;
}
