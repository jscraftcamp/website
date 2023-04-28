import { zodToJsonSchema } from 'zod-to-json-schema';
import { ParticipantSchema } from './src/lib/participants/ParticipantSchema';

console.log(
	JSON.stringify(
		zodToJsonSchema(ParticipantSchema, {
			name: 'participantSchema'
		})
	)
);
