import { z } from 'zod';

export const PARTICIPANTS_DIRECTORY = './participants';

const nonEmptyOptionalUrl = () => z.string().url().nonempty().nullish();

const optionalBoolean = (defaultValue = false) =>
	z
		.boolean()
		.nullish()
		.transform((v) => v ?? defaultValue);

const nonEmptyStringArray = (errorMessage?: string) =>
	z.string().nonempty().array().nonempty(errorMessage);

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
		realName: z.object({
			givenName: z.string().min(2, { message: 'Must be 2 or more characters long' }).max(100),
			familyName: z.string().min(2, { message: 'Must be 2 or more characters long' }).max(100),
			placeFamilyNameFirst: optionalBoolean(),
			hideFamilyNameOnWebsite: optionalBoolean()
		}),
		githubAccountName: z.string().regex(/^(?!-)(?!.*--)[A-Za-z0-9-]{1,39}$/),
		codebergAccountName: z.preprocess(
			emptyToNull,
			z
				.string()
				.regex(/^[a-zA-Z0-9_.-]{1,40}$/)
				.nullish()
		),
		company: z.preprocess(emptyToNull, z.string().min(2).max(200).nullish()),
		when: z
			.object({
				friday: z.boolean(),
				saturday: z.boolean()
			})
			.refine(
				({ friday, saturday }: { friday: boolean; saturday: boolean }) => friday || saturday,
				'Either Friday or Saturday must be set to true'
			),
		iCanTakeNotesDuringSessions: z.boolean(),
		tags: nonEmptyStringArray('Tags cannot be empty'),
		vegan: optionalBoolean(),
		vegetarian: optionalBoolean(),
		allergies: z.preprocess(emptyToNull, nonEmptyStringArray().nullish()),
		whatIsMyConnectionToJavascript: z.string().min(3).max(200),
		whatCanIContribute: z.string().min(3).max(200),
		tShirtSize: z.preprocess(
			(v) => {
				const maybeV = emptyToNull(v);

				if (!maybeV) {
					return null;
				}

				const size = String(maybeV).toUpperCase();

				switch (size) {
					case 'XXL':
						return '2XL';
					case 'XXXL':
						return '3XL';
					default:
						return size;
				}
			},
			z.enum(['S', 'M', 'L', 'XL', '2XL', '3XL']).nullish()
		),
		X: z.preprocess(
			emptyToNull,
			z
				.string()
				.regex(
					/^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/,
					'Must be a valid X handle according to regex: /^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/ (see https://regex101.com/r/B3WOro/1)'
				)
				.nullish()
		),
		mastodon: z.preprocess(emptyToNull, nonEmptyOptionalUrl()),
		linkedin: z.preprocess(emptyToNull, nonEmptyOptionalUrl()),
		website: z.preprocess(emptyToNull, nonEmptyOptionalUrl())
	})
	.strict();

export type Participant = z.infer<typeof ParticipantSchema>;
export type TShirtSize = NonNullable<Participant['tShirtSize']>;
