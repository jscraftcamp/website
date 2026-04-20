const LEGAL_SUFFIXES =
	/\s+(?:ag|co\s*kg|e\.?\s*k|e\.?\s*v|eg|gbr|gmbh|gmdbh|inc|kg|ltd|llc|ohg|se|ug(?:\s*\(haftungsbeschr[aä]nkt\))?)\s*$/i;

export function normalizeCompanyKey(name: string): string {
	return name
		.replace(LEGAL_SUFFIXES, '')
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.replace(/^alm-engineering$/, 'alm');
}
