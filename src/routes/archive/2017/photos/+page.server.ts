import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const photos: string[] = Object.values(
		import.meta.glob(`../../../../photos/events/2017/*.{jpg,jpeg,png}`, {
			eager: true,
			import: 'default'
		})
	);
	return { photos };
};
