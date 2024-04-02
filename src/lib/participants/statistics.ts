import type { Participant, TShirtSize } from './participant-schema';

type Allergies = { [k: string]: number };
type Company = { name: string; amount: number; isSponsor: boolean };
type Companies = { [k: string]: Company };
type Shirts = {
	count: number;
	fitted: number;
	regular: number;
	sizes: {
		[key in `${'fitted' | 'regular'}-${TShirtSize}`]?: number;
	};
};
export type Statistics = {
	allergies: Allergies;
	companies: Company[];
	orgaCount: number;
	orgaShirts: Shirts;
	participantCount: number;
	participantsShirts: Shirts;
	participants: {
		fridayOnly: number;
		saturdayOnly: number;
		bothDays: number;
		notetakersFriday: number;
		notetakersSaturday: number;
	};
};

const isOrgaMember = (name: string, orgaMembers: string[]) => orgaMembers.includes(name);

const isSponsor = (key: string) =>
	[
		'codecentric',
		'compose-us',
		'hetzner-cloud',
		'inovex',
		'jambit',
		'peerigon',
		'project-lary',
		'scalable-capital',
		'sepp-med',
		'tng-technology-consulting',
		'typedigital'
	].includes(key);

const isNonFoodAllergy = (allergyKey: string) =>
	['', 'none', 'bullshit', 'hard work'].includes(allergyKey);

export const createStatsFromParticipants = (
	participants: Participant[],
	orgaMembers: string[]
): Statistics => {
	const allergies: Allergies = {};
	const orgaShirts: Shirts = { count: 0, fitted: 0, regular: 0, sizes: {} };
	const participantsShirts: Shirts = { count: 0, fitted: 0, regular: 0, sizes: {} };
	const stats = {
		fridayOnly: 0,
		saturdayOnly: 0,
		bothDays: 0,
		notetakersFriday: 0,
		notetakersSaturday: 0
	};
	const companies: Companies = { __empty: { name: '(no company)', amount: 0, isSponsor: false } };

	for (const participant of participants) {
		let shirts = participantsShirts;
		if (isOrgaMember(participant.name, orgaMembers)) {
			shirts = orgaShirts;
		}
		if (participant.company) {
			const name = participant.company;
			const companyAsKey = name
				.toLocaleLowerCase()
				.replace(/\s+(?:ag|gbr|gmbh|gmdbh)/, '')
				.replace(/[^a-z]/g, '-');
			companies[companyAsKey] = companies[companyAsKey] ?? {
				name,
				amount: 0,
				isSponsor: isSponsor(companyAsKey)
			};
			companies[companyAsKey].amount = companies[companyAsKey].amount + 1;
		} else {
			companies['__empty'].amount = companies['__empty'].amount + 1;
		}
		if (participant.allergies) {
			for (const allergy of participant.allergies) {
				const allergyKey = allergy.toLocaleLowerCase().trim();
				if (!isNonFoodAllergy(allergyKey)) {
					allergies[allergyKey] = (allergies[allergyKey] ?? 0) + 1;
				}
			}
		}
		if (participant.tShirt) {
			shirts.count = shirts.count + 1;
			shirts.fitted = shirts.fitted + (participant.tShirt.type === 'fitted' ? 1 : 0);
			shirts.regular = shirts.regular + (participant.tShirt.type === 'regular' ? 1 : 0);
			shirts.sizes[`${participant.tShirt.type}-${participant.tShirt.size}`] =
				(shirts.sizes[`${participant.tShirt.type}-${participant.tShirt.size}`] ?? 0) + 1;
		}
		stats.bothDays =
			stats.bothDays + (participant.when.friday && participant.when.saturday ? 1 : 0);
		stats.fridayOnly =
			stats.fridayOnly + (participant.when.friday && !participant.when.saturday ? 1 : 0);
		stats.saturdayOnly =
			stats.saturdayOnly + (!participant.when.friday && participant.when.saturday ? 1 : 0);
		stats.notetakersFriday =
			stats.notetakersFriday +
			(participant.when.friday && participant.iCanTakeNotesDuringSessions ? 1 : 0);
		stats.notetakersSaturday =
			stats.notetakersSaturday +
			(participant.when.saturday && participant.iCanTakeNotesDuringSessions ? 1 : 0);
	}

	const sortedCompanyEntries = Object.entries(companies);
	sortedCompanyEntries.sort(([aName], [bName]) => {
		if (aName < bName) {
			return -1;
		}
		if (aName === bName) {
			return 0;
		}
		return 1;
	});
	const sortedCompanies = sortedCompanyEntries.map(([, company]) => company);

	return {
		allergies,
		companies: sortedCompanies,
		orgaCount: orgaMembers.length,
		orgaShirts,
		participantCount: participants.length,
		participantsShirts,
		participants: stats
	};
};
