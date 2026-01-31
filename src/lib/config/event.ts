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

	/** Whether registration is open for Friday */
	fridayRegistrationOpen: boolean;

	/** Whether registration is open for Saturday */
	saturdayRegistrationOpen: boolean;
}

export const eventConfig: EventConfig = {
	startDate: new Date('2026-12-24'),
	endDate: new Date('2026-12-25'),
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
	return eventConfig.fridayRegistrationOpen || eventConfig.saturdayRegistrationOpen;
}
