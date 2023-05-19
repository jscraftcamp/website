export const registrationOpensAt = +new Date('2023-05-01 00:00:00Z');
export const eventStartsAt = +new Date('2023-06-30 09:30:00Z');
export const registrationClosessAt = +new Date('2023-07-01 18:00:00Z');
export const isRegistrationOpen = () => {
	const now = +new Date();
	return registrationOpensAt <= now && now <= registrationClosessAt;
};
export function timeLeft(
	nowInMs: number,
	timeInMs: number
): { days: number; hours: number; minutes: number; seconds: number } {
	if (timeInMs < nowInMs) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
	const delta = timeInMs - nowInMs;
	return {
		days: Math.floor(delta / 1000 / 60 / 60 / 24),
		hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60),
		minutes: Math.floor((delta % (1000 * 60 * 60)) / 1000 / 60),
		seconds: Math.floor((delta % (1000 * 60)) / 1000)
	};
}
