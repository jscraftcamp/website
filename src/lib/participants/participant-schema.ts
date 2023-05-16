import { z } from 'zod';

export const PARTICIPANTS_DIRECTORY = './participants';

const nonEmptyOptionalUrl = () => z.string().url().nonempty().nullish();

const optionalBoolean = () =>
	z
		.boolean()
		.nullish()
		.transform((v) => v ?? false);

const nonEmptyStringArray = (errorMessage?: string) => z.string().array().nonempty(errorMessage);

/**
 * preprocessing function which replaces empty strings ('') or empty arrays ([]) with null
 */
function emptyToNull(arg: unknown): unknown | null {
	if (arg === '') {
		return null;
	}

	if (Array.isArray(arg) && arg.length === 0) {
		return null;
	}

	return arg;
}

export const ParticipantSchema = z
	.object({
		name: z.string().min(2, { message: 'Must be 2 or more characters long' }).max(200),
		company: z.preprocess(emptyToNull, z.string().min(2).max(200).nullish()),
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
		tags: nonEmptyStringArray('Tags cannot be empty'),
		vegan: optionalBoolean(),
		vegetarian: optionalBoolean(),
		allergies: z.preprocess(emptyToNull, nonEmptyStringArray().nullish()),
		whatIsMyConnectionToJavascript: z.string().min(3).max(400),
		whatCanIContribute: z.string().min(3).max(400),
		tShirt: z
			.object({
				type: z.preprocess((v) => String(v).toLowerCase(), z.enum(['fitted', 'regular'])),
				size: z.preprocess(
					(v) => String(v).toUpperCase(),
					z.enum(['S', 'M', 'L', 'XL', '2XL', '3XL'])
				)
			})
			.nullish(),
		twitter: z.preprocess(
			emptyToNull,
			z
				.string()
				.regex(
					/^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/,
					'Must be a valid twitter handle according to regex: /^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/ (see https://regex101.com/r/B3WOro/1)'
				)
				.nullish()
		),
		mastodon: z.preprocess(emptyToNull, nonEmptyOptionalUrl()),
		website: z.preprocess(emptyToNull, nonEmptyOptionalUrl())
	})
	.strict();

export type Participant = z.infer<typeof ParticipantSchema>;
