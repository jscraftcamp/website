export const registrationOpensAt = +new Date('2023-05-01 00:00:00Z');
export const registrationClosessAt = +new Date('2023-07-01 18:00:00Z');
export const isRegistrationOpen = () => {
	const now = +new Date();
	return registrationOpensAt <= now && now <= registrationClosessAt;
};
