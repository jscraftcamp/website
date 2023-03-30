import { readdir, readFile } from 'node:fs/promises';
import type { Participant } from '$lib/participants/types';
import type { PageServerLoad } from './$types';

const PARTICIPANTS_DIRECTORY = './participants';

export const load: PageServerLoad = async (): Promise<{ participants: Participant[] }> => {
	try {
		const participantsDirectory = await readdir(PARTICIPANTS_DIRECTORY);
		const participantsFiles = participantsDirectory
			.filter((fileName) => !fileName.startsWith('_'))
			.map((fileName) => `${PARTICIPANTS_DIRECTORY}/${fileName}`);
		const participantsAsPromises = participantsFiles.map(async (file) => {
			const content = await readFile(file, 'utf-8');
			return JSON.parse(content) as Participant;
		});
		const participants = await Promise.all(participantsAsPromises);
		return {
			participants
		};
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};
