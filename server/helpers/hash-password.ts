import * as bcrypt from 'bcryptjs';

export const hashPassword = (plaintextPassword: string): string => {
	const saltRounds = 10;

	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(plaintextPassword, salt);

	return hash;
};
