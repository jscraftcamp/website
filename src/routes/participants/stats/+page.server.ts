import type { PageServerLoad } from './$types';
import { loadAllParticipants } from '$lib/participants/participants';
import { createStatsFromParticipants, type Statistics } from '$lib/participants/statistics';
import { orgaUsernames } from '$lib/config/team/team';

export const load: PageServerLoad = async (): Promise<Statistics> => {
	try {
		const participants = await loadAllParticipants();
		return createStatsFromParticipants(participants, orgaUsernames);
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
