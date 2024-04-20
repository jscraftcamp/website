import { type Participant, PARTICIPANTS_DIRECTORY } from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { loadParticipantJsonFilePaths, loadParticipants } from '$lib/participants/participants';

export const load: PageServerLoad = async (): Promise<{ participants: Participant[] }> => {
	try {
		const participantsFilePaths = await loadParticipantJsonFilePaths(PARTICIPANTS_DIRECTORY);

		const participants = await loadParticipants(participantsFilePaths);
		participants.sort((a, b) =>
			a.realName.givenName < b.realName.givenName
				? -1
				: a.realName.givenName === b.realName.givenName
				? 0
				: 1
		);

		return { participants };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
