import { emptyToNull } from '$lib/participants/participant-schema';

const tShirtSizeVariants: Record<string, string> = {
	XXL: '2XL',
	XXXL: '3XL'
};

export function optionalTShirtSize(v: unknown) {
	const maybeV = emptyToNull(v);
	if (!maybeV) return undefined;
	const size = String(maybeV).toUpperCase();
	return tShirtSizeVariants[size] || size;
}
