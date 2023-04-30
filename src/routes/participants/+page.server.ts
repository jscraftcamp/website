import { readdir, readFile } from 'node:fs/promises';
import {
	ParticipantSchema,
	type Participant,
	PARTICIPANTS_DIRECTORY
} from '$lib/participants/participant-schema';
import type { PageServerLoad } from './$types';
import { parse } from 'jsonc-parser';
import { join } from 'path';

export const load: PageServerLoad = async (): Promise<{ participants: Participant[] }> => {
	try {
		const participantsFilePaths = await _loadParticipantJsonFilePaths(PARTICIPANTS_DIRECTORY);

		const participants = await _loadParticipants(participantsFilePaths);

		return { participants };
	} catch (err) {
		console.error('Loading of participants failed:', err);
		throw err;
	}
};

export async function _loadParticipantJsonFilePaths(directory: string): Promise<string[]> {
	const participantsDirectory = await readdir(directory, {
		withFileTypes: true,
		encoding: 'utf8'
	});

	const participantsFilePaths = participantsDirectory
		.filter(
			(dirent) => dirent.isFile() && dirent.name.endsWith('.json') && !dirent.name.startsWith('_')
		)
		.map(({ name }) => join(PARTICIPANTS_DIRECTORY, name));

	return participantsFilePaths;
}

/**
 * parses all participants JSONs according to ParticipantSchema
 * and ignores all files which fail the validation
 */
export async function _loadParticipants(filePaths: string[]): Promise<Participant[]> {
	const participantResults = await Promise.allSettled(filePaths.map(_parseParticipantJson));

	const participants: Participant[] = participantResults.flatMap((r) => {
		if (r.status === 'rejected') {
			console.error(`Skipping ${r.reason.message}`);
			return [];
		}
		return r.value;
	});

	return participants;
}

export async function _parseParticipantJson(filePath: string): Promise<Participant> {
	const text = await readFile(filePath, 'utf-8');
	const json = parse(text) as unknown;
	const result = ParticipantSchema.safeParse(json);

	if (!result.success) {
		const errorMessages = result.error.errors
			.map((m) => {
				const pathPrefix = m.path.length > 0 ? `'${m.path.join(',')}': ` : '';
				return `\t${pathPrefix}${m.message}`;
			})
			.join('\n');
		throw Error(`Invalid participant json '${filePath}':\n${errorMessages}`);
	}

	return result.data;
}
