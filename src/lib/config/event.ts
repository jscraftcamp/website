/**
 * JSCraftCamp Event Configuration
 *
 * Update this file to configure the event details displayed on the website.
 */

export interface EventConfig {
	/** Start date of the event (first day) */
	startDate: Date;

	/** End date of the event (last day) */
	endDate: Date;

	/** When registration opens */
	registrationOpensAt: Date;

	/** When registration closes */
	registrationClosesAt: Date;

	/** Whether registration is open for Friday */
	fridayRegistrationOpen: boolean;

	/** Whether registration is open for Saturday */
	saturdayRegistrationOpen: boolean;
}

export const eventConfig: EventConfig = {
	startDate: new Date('2025-06-27T07:30:00Z'),
	endDate: new Date('2025-06-28'),
	registrationOpensAt: new Date('2025-02-20T07:00:00Z'),
	registrationClosesAt: new Date('2025-02-26T17:00:00Z'),
	fridayRegistrationOpen: false,
	saturdayRegistrationOpen: false
};

export function getDaysToGo(): number {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const eventStart = new Date(eventConfig.startDate);
	eventStart.setHours(0, 0, 0, 0);

	const diffTime = eventStart.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return Math.max(0, diffDays);
}

export function getYear(): number {
	return eventConfig.startDate.getFullYear();
}

export function getShortYear(): string {
	return String(eventConfig.startDate.getFullYear()).slice(-2);
}

export function isRegistrationOpen(): boolean {
	const now = +new Date();
	return +eventConfig.registrationOpensAt <= now && now <= +eventConfig.registrationClosesAt;
}

export function getRegistrationState(): 'not-yet' | 'open' | 'closed' {
	const now = +new Date();
	if (now <= +eventConfig.registrationOpensAt) {
		return 'not-yet';
	}
	if (+eventConfig.registrationClosesAt <= now) {
		return 'closed';
	}
	return 'open';
}

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
