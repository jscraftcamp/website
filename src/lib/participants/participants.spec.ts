import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';

const PARTICIPANTS_DIRECTORY = './participants';

describe('Participants', () => {
	const folderContent = readdirSync(PARTICIPANTS_DIRECTORY);

	describe('directory structure', () => {
		it('contains only JSON files', () => {
			for (const file of folderContent) {
				const stats = statSync(`${PARTICIPANTS_DIRECTORY}/${file}`);
				expect(stats.isSymbolicLink()).toBe(false);
				expect(stats.isFile()).toBe(true);
				expect(file.endsWith('.json')).toBe(true);
			}
		});

		it('contains a _template.json', () => {
			expect(folderContent).toContain('_template.json');
		});
	});

	const participantJsons = folderContent.filter(
		(file) => file.endsWith('.json') && file !== '_template.json'
	);
	for (const participantFile of participantJsons) {
		describe(participantFile, () => {
			const content = readFileSync(`${PARTICIPANTS_DIRECTORY}/${participantFile}`, 'utf-8');
			const person = JSON.parse(content);

			it('must contain a name', () => {
				expect(person.name, "'name' is a mandatory field").toBeDefined();
				expect(person.name, "'name' must be of type string").toBeTypeOf('string');
				expect(person.name.trim().length, "'name' must not be empty").toBeGreaterThan(0);
			});

			it('may contain a company name', () => {
				if (typeof person.company === 'undefined') {
					return;
				}

				expect(person.company, "'company' must be of type string").toBeTypeOf('string');
				expect(person.company.trim().length, "'company' must not be empty").toBeGreaterThan(0);
			});

			it('may contain tshirt information', () => {
				if (typeof person.tshirt === 'undefined') {
					return;
				}

				expect(person.tshirt, "'tshirt' must be of type string").toBeTypeOf('string');
				expect(person.tshirt, "'tshirt' must match pattern /^(W|M)-(S|M|L|XL|XXL)$/").toMatch(
					/^(W|M)-(S|M|L|XL|XXL)$/
				);
			});

			it('must contain participation time', () => {
				expect(person.when, "'when' is mandatory").toBeDefined();
				expect(
					person.when,
					"'when' must be an object containing boolean fields 'friday' and 'saturday'"
				).toBeTypeOf('object');
				expect(person.when.friday, "'when.friday' is mandatory").toBeDefined();
				expect(person.when.friday, "'when.friday' must be of type boolean").toBeTypeOf('boolean');
				expect(person.when.saturday, "'when.saturday' is mandatory").toBeDefined();
				expect(person.when.saturday, "'when.saturday' must be of type boolean").toBeTypeOf(
					'boolean'
				);
			});

			it('must contain a connection to JS statement', () => {
				expect(
					person.what_is_my_connection_to_javascript,
					"'what_is_my_connection_to_javascript' is mandatory"
				).toBeDefined();
				expect(
					person.what_is_my_connection_to_javascript,
					"'what_is_my_connection_to_javascript' must be of type string"
				).toBeTypeOf('string');
				expect(
					person.what_is_my_connection_to_javascript.trim().length,
					"'what_is_my_connection_to_javascript' must not be empty"
				).toBeGreaterThan(0);
			});

			it('may contain a what_can_i_contribute statement', () => {
				if (typeof person.what_can_i_contribute === 'undefined') {
					return;
				}
				expect(
					person.what_can_i_contribute,
					"'what_can_i_contribute' must be of type string"
				).toBeTypeOf('string');
				expect(person.what_can_i_contribute.trim().length).toBeGreaterThan(0);
			});

			it('must contain tags', () => {
				expect(person.tags, "'tags' must be included").toBeDefined();
				expect(Array.isArray(person.tags), "'tags' must be an array of strings").toBe(true);
				expect(person.tags.length, "'tags' should at least contain one item").toBeGreaterThan(0);
				(person.tags as string[]).forEach((element, index) => {
					expect(element, `'person.tags[${index}]' must be a string`).toBeTypeOf('string');
					expect(element.trim().length, `'person.tags[${index}]' must not be empty`).toBeTruthy();
				});
			});

			it('may contain `allergies`', () => {
				if (typeof person.allergies === 'undefined') {
					return;
				}
				expect(person.allergies, "'allergies' must be of type string").toBeTypeOf('string');
			});

			it('vegan must be boolean', () => {
				expect(person.vegan, "'vegan' must be of type boolean").toBeTypeOf('boolean');
			});

			it('vegetarian must be boolean', () => {
				expect(person.vegetarian, "'vegetarian' must be of type boolean").toBeTypeOf('boolean');
			});

			it('may contain a twitter handle', () => {
				if (typeof person.twitter === 'undefined') {
					return;
				}
				expect(person.twitter, "'twitter' must be of type string").toBeTypeOf('string');
				expect(person.twitter, "'twitter' must be a valid twitter handle").toMatch(
					/^[a-z_]{1}[a-z0-9_]{0,14}$/i
				);
			});
		});
	}
});
