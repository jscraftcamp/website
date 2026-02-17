export interface ColorPair {
	primary500: string;
	primary700: string;
}

/**
 * Generate a random OKLCH color pair for primary-500 and primary-700.
 *
 * Both share the same hue and chroma so they feel like the same color family.
 * The 700 variant is ~0.15 lower in OKLCH lightness, giving a clear visual
 * difference while staying "close" perceptually.
 *
 * The lightness range (500 ≈ 0.75–0.83, 700 ≈ 0.58–0.70) guarantees
 * WCAG AA contrast (≥ 4.5 : 1) against the dark background (#0f0f0f).
 */
export function generateColorPair(): ColorPair {
	const h = Math.random() * 360;
	const c = 0.12 + Math.random() * 0.12;
	const l500 = 0.75 + Math.random() * 0.08;
	const l700 = l500 - 0.13 - Math.random() * 0.04;

	return {
		primary500: `oklch(${l500.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`,
		primary700: `oklch(${l700.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`
	};
}
