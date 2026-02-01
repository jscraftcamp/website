import type { AgendaDay } from './types';

export const fridayAgenda: AgendaDay = {
	dayLabel: 'FRIDAY',
	date: '11.07.2025',
	items: [
		{ title: 'DOORS OPENING', time: 9 },
		{ title: 'OPENING & MARKETPLACE', time: 10 },
		{ title: 'TWO SESSIONS', time: 11 },
		{ title: 'LUNCH', time: 13 },
		{ title: 'THREE SESSIONS', time: 14 },
		{ title: 'REVIEW & LEARNINGS', time: 17 },
		{ title: 'PIZZA & NETWORKING', time: 18 },
		{ title: 'DOORS CLOSING', time: 22 }
	]
};

export const saturdayAgenda: AgendaDay = {
	dayLabel: 'SATURDAY',
	date: '12.07.2025',
	items: [
		{ title: 'DOORS OPENING', time: 9 },
		{ title: 'MARKETPLACE', time: 10 },
		{ title: 'TWO SESSIONS', time: 11 },
		{ title: 'LUNCH', time: 13 },
		{ title: 'THREE SESSIONS', time: 14 },
		{ title: 'REVIEW & LEARNINGS', time: 17 },
		{ title: 'DOORS CLOSING', time: 18 }
	]
};

// Compute all unique time slots from all agendas, sorted
export const allTimeSlots: number[] = [
	...new Set([...fridayAgenda.items, ...saturdayAgenda.items].map((item) => item.time))
].sort((a, b) => a - b);
