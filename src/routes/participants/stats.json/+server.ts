import { loadAllParticipants, orgaMembers } from '$lib/participants/participants';
import { createStatsFromParticipants } from '$lib/participants/statistics';
import { json, type RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
	try {
		const participants = await loadAllParticipants();
		const stats = createStatsFromParticipants(participants, orgaMembers);
		return json(stats);
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
