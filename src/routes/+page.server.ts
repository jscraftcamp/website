import { PARTICIPANTS_DIRECTORY } from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { loadParticipantJsonFilePaths, loadParticipants } from '$lib/participants/participants';

// Import all event photos from all years
const allEventPhotos: string[] = Object.values(
	import.meta.glob('../photos/events/**/*.{jpg,jpeg,png}', {
		eager: true,
		import: 'default'
	})
);

export const load: PageServerLoad = async (): Promise<{
	fridayParticipants: number;
	saturdayParticipants: number;
	eventPhotos: string[];
}> => {
	try {
		const participantsFilePaths = await loadParticipantJsonFilePaths(PARTICIPANTS_DIRECTORY);

		const participants = await loadParticipants(participantsFilePaths);

		const fridayParticipants = participants.filter((p) => p.when.friday).length;
		const saturdayParticipants = participants.filter((p) => p.when.saturday).length;

		return { fridayParticipants, saturdayParticipants, eventPhotos: allEventPhotos };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
