import { z } from 'zod';

export const PARTICIPANTS_DIRECTORY = './participants';

export const ParticipantSchema = z
	.object({
		name: z.string().min(2, { message: 'Must be 2 or more characters long' }),
		company: z.string().min(2).nullish(),
		when: z
			.object({
				friday: z.boolean(),
				saturday: z.boolean()
			})
			.refine(
				({ friday, saturday }) => friday || saturday,
				'Either Friday or Saturday must be set to true'
			),
		iCanTakeNotesDuringSessions: z.boolean(),
		tags: z.string().array().nonempty('Tags cannot be empty'),
		vegan: z
			.boolean()
			.nullish()
			.transform((v) => v ?? false),
		vegetarian: z
			.boolean()
			.nullish()
			.transform((v) => v ?? false),
		allergies: z.string().array().nonempty().nullish(),
		whatIsMyConnectionToJavascript: z.string().min(3).max(200),
		whatCanIContribute: z.string().min(3).max(200),
		tShirt: z
			.object({
				type: z.preprocess((v) => String(v).toLowerCase(), z.enum(['fitted', 'regular'])),
				size: z.preprocess((v) => String(v).toUpperCase(), z.enum(['S', 'M', 'L', 'XL', 'XXL']))
			})
			.nullish(),
		twitter: z
			.string()
			.regex(
				/^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/,
				'Must be a valid twitter handle according to regex: /^[a-z_]{1}[a-z0-9_]{0,14}$/i (see https://regex101.com/r/B3WOro/1)'
			)
			.nullish(),
		mastodon: z.string().url().nonempty().nullish(),
		website: z.string().url().nonempty().nullish()
	})
	.strict();

export type Participant = z.infer<typeof ParticipantSchema>;
