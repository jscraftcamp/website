import type { Partner } from './types';
import frontmuc from './logos/munich-frontend-developers.webp';
import germanTechJobs from './logos/german-tech-jobs.png';
import socrates from './logos/socrates.png';
import seneca from './logos/seneca.png';

/**
 * Partners are partner conferences and non-profit organizations only.
 * Not companies, products, or commercial sponsors.
 */

export const partners: Partner[] = [
	{
		image: frontmuc,
		link: 'https://www.meetup.com/de-DE/munich-frontend-developers/',
		name: 'Munich Frontend Developers'
	},
	{
		image: socrates,
		link: 'https://www.socrates-conference.de/',
		name: 'SoCraTes'
	},
	{
		image: seneca,
		link: 'https://seneca.camp/',
		name: 'Seneca'
	},
	{
		image: germanTechJobs,
		link: 'https://germantechjobs.de/en/jobs/JavaScript/all,
		name: 'GermanTechJobs'
	}
];
