import type { PageServerLoad } from './$types';
import { loadAllParticipants, orgaMembers } from '$lib/participants/participants';
import { createStatsFromParticipants, type Statistics } from '$lib/participants/statistics';

export const load: PageServerLoad = async (): Promise<Statistics> => {
	try {
		const participants = await loadAllParticipants();
		return createStatsFromParticipants(participants, orgaMembers);
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
