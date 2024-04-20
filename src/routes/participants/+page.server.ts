import { type Participant, PARTICIPANTS_DIRECTORY } from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { loadParticipantJsonFilePaths, loadParticipants } from '$lib/participants/participants';
import { displayName } from '$lib/participants/display-name';

export const load: PageServerLoad = async (): Promise<{ participants: Participant[] }> => {
	try {
		const participantsFilePaths = await loadParticipantJsonFilePaths(PARTICIPANTS_DIRECTORY);

		const participants = await loadParticipants(participantsFilePaths);

		participants.sort((a, b) => {
			const aName = displayName(a);
			const bName = displayName(b);
			if (aName < bName) {
				return -1;
			}
			if (bName < aName) {
				return 1;
			}
			return 0;
		});

		return { participants };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
