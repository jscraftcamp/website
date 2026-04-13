export interface AgendaItem {
	title: string;
	time: number;
}

export interface AgendaDay {
	dayLabel: string;
	date: string;
	items: AgendaItem[];
}
