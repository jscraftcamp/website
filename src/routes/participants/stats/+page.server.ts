import type {
	TShirtSize
} from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { loadAllParticipants } from '$lib/participants/participants';

type Allergies = { [k: string]: number };
type Shirts = {
	count: number, fitted: number, regular: number, sizes: {
		[key in `${"fitted" | "regular"}-${TShirtSize}`]?: number
	}
};

const orgaMembers = [
	"Bernd",
	"Gustaf Graf",
	"Jörn Bernhardt",
	"Marco Emrich",
	"Philip Saa",
	"Robert Hostlowsky",
	"Wolfram Kriesing",
];

export const load: PageServerLoad = async (): Promise<{
	allergies: Allergies, orgaCount: number, orgaShirts: Shirts, participantCount: number, participantsShirts: Shirts, participants: {
		fridayOnly: number,
		saturdayOnly: number,
		bothDays: number,
		notetakersFriday: number,
		notetakersSaturday: number,
	}
}> => {
	try {
		const participants = await loadAllParticipants();

		let allergies: Allergies = {};
		let orgaShirts: Shirts = { count: 0, fitted: 0, regular: 0, sizes: {} };
		let participantsShirts: Shirts = { count: 0, fitted: 0, regular: 0, sizes: {} };
		let stats = {
			fridayOnly: 0,
			saturdayOnly: 0,
			bothDays: 0,
			notetakersFriday: 0,
			notetakersSaturday: 0,
		}

		for (let participant of participants) {
			let shirts = participantsShirts;
			if (orgaMembers.includes(participant.name)) {
				shirts = orgaShirts;
			}
			if (participant.allergies) {
				for (let allergy of participant.allergies) {
					const allergyKey = allergy.toLocaleLowerCase().trim();
					if (!["", "none", "bullshit", "hard work"].includes(allergyKey)) {
						allergies[allergyKey] = (allergies[allergyKey] ?? 0) + 1
					}
				}
			}
			if (participant.tShirt) {
				shirts.count = shirts.count + 1;
				shirts.fitted = shirts.fitted + (participant.tShirt.type === 'fitted' ? 1 : 0);
				shirts.regular = shirts.regular + (participant.tShirt.type === 'regular' ? 1 : 0);
				shirts.sizes[`${participant.tShirt.type}-${participant.tShirt.size}`] = (shirts.sizes[`${participant.tShirt.type}-${participant.tShirt.size}`] ?? 0) + 1;
			}
			stats.bothDays = stats.bothDays + (participant.when.friday && participant.when.saturday ? 1 : 0)
			stats.fridayOnly = stats.fridayOnly + (participant.when.friday && !participant.when.saturday ? 1 : 0)
			stats.saturdayOnly = stats.saturdayOnly + (!participant.when.friday && participant.when.saturday ? 1 : 0)
			stats.notetakersFriday = stats.notetakersFriday + (participant.when.friday && participant.iCanTakeNotesDuringSessions ? 1 : 0)
			stats.notetakersSaturday = stats.notetakersSaturday + (participant.when.saturday && participant.iCanTakeNotesDuringSessions ? 1 : 0)
		}

		return { allergies, orgaCount: orgaMembers.length, orgaShirts, participantCount: participants.length, participantsShirts, participants: stats };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
