import { PARTICIPANTS_DIRECTORY } from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { loadParticipantJsonFilePaths, loadParticipants } from '$lib/participants/participants';

export const load: PageServerLoad = async (): Promise<{
	fridayParticipants: number;
	saturdayParticipants: number;
}> => {
	try {
		const participantsFilePaths = await loadParticipantJsonFilePaths(PARTICIPANTS_DIRECTORY);

		const participants = await loadParticipants(participantsFilePaths);

		const fridayParticipants = participants.filter((p) => p.when.friday).length;
		const saturdayParticipants = participants.filter((p) => p.when.saturday).length;

		return { fridayParticipants, saturdayParticipants };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
