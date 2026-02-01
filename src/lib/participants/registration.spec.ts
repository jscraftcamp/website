import { describe, expect, it } from 'vitest';
import { timeLeft } from '$lib/config/event';

describe('timeLeft', () => {
	const nowInMs = +new Date('2023-01-01 00:00:00Z');

	it('shows 0 for all numbers if same time', () => {
		const thenInMs = +new Date('2023-01-01 00:00:00Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	});

	it('shows 1 day if same time of day', () => {
		const thenInMs = +new Date('2023-01-02 00:00:00Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
	});

	it('shows only hours if everything else same', () => {
		const thenInMs = +new Date('2023-01-01 12:00:00Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
	});

	it('shows days and hours if everything else same', () => {
		const thenInMs = +new Date('2023-02-01 12:00:00Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 31, hours: 12, minutes: 0, seconds: 0 });
	});

	it('shows minutes if everything else same', () => {
		const thenInMs = +new Date('2023-01-01 00:35:00Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 0, hours: 0, minutes: 35, seconds: 0 });
	});

	it('shows seconds if everything else same', () => {
		const thenInMs = +new Date('2023-01-01 00:00:59Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 59 });
	});

	it('shows everything correctly', () => {
		const thenInMs = +new Date('2023-02-05 04:48:37Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 35, hours: 4, minutes: 48, seconds: 37 });
	});

	it('everything is 0 when "then" is earlier than now', () => {
		const thenInMs = +new Date('2022-12-31 23:59:59Z');
		expect(timeLeft(nowInMs, thenInMs)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	});
});
