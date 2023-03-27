export type Participant = {
	name: string;
	company?: string;
	when: {
		friday: boolean;
		saturday: boolean;
	};
	tags: [string, ...string[]];
	vegan: boolean;
	vegetarian: boolean;
	allergies?: string;
	what_is_my_connection_to_javascript: string;
	what_can_i_contribute: string;
	tshirt?: `${'W' | 'M'}-${'S' | 'M' | 'L' | 'XL' | 'XXL'}`;
	twitter?: string;
};
