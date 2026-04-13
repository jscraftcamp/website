const LEGAL_SUFFIXES =
	/\s+(?:ag|(?:gem\.?\s*)?gmbh\s*&\s*co\.?\s*kg|co\s*kg|e\.?\s*k\.?|e\.?\s*v\.?|eg|gbr|(?:g|gem\.?\s*)?gmbh|gmdbh|inc|kg|ltd|llc|\S*gesellschaft\s*mbh|mbh|ohg|se|ug(?:\s*\(haftungsbeschr(?:ae|[aä])nkt\))?)\s*$/i;

export function normalizeCompanyKey(name: string): string {
	return name
		.replace(LEGAL_SUFFIXES, '')
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.replace(/^alm-engineering$/, 'alm');
}
