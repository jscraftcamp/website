import { zodToJsonSchema } from 'zod-to-json-schema';
import { ParticipantSchema } from './src/lib/participants/participant-schema';

console.log(
	JSON.stringify(
		zodToJsonSchema(ParticipantSchema, {
			name: 'participantSchema'
		})
	)
);
