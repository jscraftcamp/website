import { describe, expect, it } from 'vitest';
import { optionalTShirtSize } from '$lib/participants/optional-t-shirt-size';

describe('Optional T-Shirt Size', () => {
	it('returns a 3XL when given a XXXL value', () => {
		const result = optionalTShirtSize('XXXL');
		expect(result).toBe('3XL');
	});
	it('returns a 2XL when given a XXL value', () => {
		const result = optionalTShirtSize('XXL');
		expect(result).toBe('2XL');
	});
	it('returns the given value when no variant is matched', () => {
		const result = optionalTShirtSize('L');
		expect(result).toBe('L');
	});
	it('returns the given value when no variant is matched, even when invalid', () => {
		const result = optionalTShirtSize('Foo');
		expect(result).toBe('FOO');
	});
});
