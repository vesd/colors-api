import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from '../services/database/users';

export const hashPassword = (plaintextPassword: string): string => {
	const saltRounds = 10;

	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(plaintextPassword, salt);

	return hash;
};

export const comparePassword = (candidatePassword: string, password: string): boolean => {
	return bcrypt.compareSync(candidatePassword, password);
};

export const generateAccessToken = (user: User): string => {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	const jwtSecret = process.env.JWT_SECRET || 'secret';

	const token = jwt.sign(user, jwtSecret, { expiresIn: ONE_WEEK });

	return token;
};
