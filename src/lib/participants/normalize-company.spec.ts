import { describe, it, expect } from 'vitest';
import { normalizeCompanyKey } from './normalize-company';

describe('normalizeCompanyKey', () => {
	it('lowercases and replaces non-alphanumeric characters with hyphens', () => {
		expect(normalizeCompanyKey('TNG Technology Consulting')).toBe('tng-technology-consulting');
	});

	it('keeps digits', () => {
		expect(normalizeCompanyKey('Company123')).toBe('company123');
	});

	it('collapses multiple hyphens', () => {
		expect(normalizeCompanyKey('foo - - bar')).toBe('foo-bar');
	});

	it('trims leading and trailing hyphens', () => {
		expect(normalizeCompanyKey(' Trimmed ')).toBe('trimmed');
	});

	describe('German legal entity suffixes', () => {
		it('strips GmbH', () => {
			expect(normalizeCompanyKey('compose.us GmbH')).toBe('compose-us');
		});

		it('strips AG', () => {
			expect(normalizeCompanyKey('codecentric AG')).toBe('codecentric');
		});

		it('strips UG', () => {
			expect(normalizeCompanyKey('StackForge UG')).toBe('stackforge');
		});

		it('strips UG (haftungsbeschränkt)', () => {
			expect(normalizeCompanyKey('StackForge UG (haftungsbeschränkt)')).toBe('stackforge');
		});

		it('strips UG (haftungsbeschraenkt)', () => {
			expect(normalizeCompanyKey('StackForge UG (haftungsbeschraenkt)')).toBe('stackforge');
		});

		it('strips gGmbH', () => {
			expect(normalizeCompanyKey('Sozialwerk gGmbH')).toBe('sozialwerk');
		});

		it('strips gem. GmbH', () => {
			expect(normalizeCompanyKey('Hilfsverein gem. GmbH')).toBe('hilfsverein');
		});

		it('strips gem GmbH', () => {
			expect(normalizeCompanyKey('Hilfsverein gem GmbH')).toBe('hilfsverein');
		});

		it('strips Beteiligungsgesellschaft mbH', () => {
			expect(normalizeCompanyKey('Bernhardt Beteiligungsgesellschaft mbH')).toBe('bernhardt');
		});

		it('strips Handelsgesellschaft mbH', () => {
			expect(normalizeCompanyKey('Müller Handelsgesellschaft mbH')).toBe('m-ller');
		});

		it('strips any *gesellschaft mbH compound', () => {
			expect(normalizeCompanyKey('Acme Verwaltungsgesellschaft mbH')).toBe('acme');
		});

		it('strips plain mbH', () => {
			expect(normalizeCompanyKey('Sozialwerk mbH')).toBe('sozialwerk');
		});

		it('strips GbR', () => {
			expect(normalizeCompanyKey('Müller GbR')).toBe('m-ller');
		});

		it('strips eG', () => {
			expect(normalizeCompanyKey('Wohnungsbau eG')).toBe('wohnungsbau');
		});

		it('strips e.V.', () => {
			expect(normalizeCompanyKey('Sportverein e.V.')).toBe('sportverein');
		});

		it('strips e.K.', () => {
			expect(normalizeCompanyKey('Handel e.K.')).toBe('handel');
		});

		it('strips eV without dots', () => {
			expect(normalizeCompanyKey('Verein eV')).toBe('verein');
		});

		it('strips KG', () => {
			expect(normalizeCompanyKey('Firma KG')).toBe('firma');
		});

		it('strips Co KG', () => {
			expect(normalizeCompanyKey('Firma Co KG')).toBe('firma');
		});

		it('strips GmbH & Co. KG', () => {
			expect(normalizeCompanyKey('Firma GmbH & Co. KG')).toBe('firma');
		});

		it('strips GmbH & Co KG', () => {
			expect(normalizeCompanyKey('Firma GmbH & Co KG')).toBe('firma');
		});

		it('strips OHG', () => {
			expect(normalizeCompanyKey('Partners OHG')).toBe('partners');
		});

		it('strips SE', () => {
			expect(normalizeCompanyKey('BigCorp SE')).toBe('bigcorp');
		});
	});

	describe('international legal entity suffixes', () => {
		it('strips Ltd', () => {
			expect(normalizeCompanyKey('Acme Ltd')).toBe('acme');
		});

		it('strips LLC', () => {
			expect(normalizeCompanyKey('Acme LLC')).toBe('acme');
		});

		it('strips Inc', () => {
			expect(normalizeCompanyKey('Acme Inc')).toBe('acme');
		});
	});

	it('is case-insensitive for suffixes', () => {
		expect(normalizeCompanyKey('Foo gmbh')).toBe('foo');
		expect(normalizeCompanyKey('Foo GMBH')).toBe('foo');
		expect(normalizeCompanyKey('Foo GmbH')).toBe('foo');
	});

	it('does not strip suffixes that appear mid-name', () => {
		expect(normalizeCompanyKey('SEAgency')).toBe('seagency');
	});

	describe('sponsor matching', () => {
		it.each([
			['StackForge UG', 'StackForge', 'stackforge'],
			['StackForge UG (haftungsbeschränkt)', 'StackForge', 'stackforge'],
			['compose.us GmbH', 'compose.us', 'compose-us'],
			['seorank.tech', 'SEORank.tech', 'seorank-tech'],
			['inovex', 'inovex', 'inovex'],
			['Inspired Consulting', 'Inspired Consulting', 'inspired-consulting'],
			['Scalable Capital', 'Scalable Capital', 'scalable-capital'],
			['codecentric AG', 'codecentric AG', 'codecentric'],
			['Tiffinger & Thiel GmbH', 'Tiffinger & Thiel GmbH', 'tiffinger-thiel']
		])(
			'participant "%s" matches sponsor "%s" (both normalize to "%s")',
			(participant, sponsor, expected) => {
				expect(normalizeCompanyKey(participant)).toBe(expected);
				expect(normalizeCompanyKey(sponsor)).toBe(expected);
			}
		);
	});

	describe('special cases', () => {
		it('maps alm-engineering to alm', () => {
			expect(normalizeCompanyKey('Alm Engineering')).toBe('alm');
		});
	});
});
