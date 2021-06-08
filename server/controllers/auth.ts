import { Request, Response } from 'express';
import { comparePassword, generateAccessToken } from '../helpers/password';
import { dbService } from '../services/database';

export const login = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = await dbService.getUser(req.body);

		if (!user) {
			res.status(403).send({
				error: 'The login information was incorrect'
			});
		}

		const isPasswordValid = comparePassword(req.body.password, user.password);

		if (!isPasswordValid) {
			res.status(403).send({
				error: 'The login information was incorrect'
			});
		}
		
		delete user.password;

		const token = generateAccessToken(JSON.parse(JSON.stringify(user)));

		res.status(200).send({
			user,
			token,
		});
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to create the color'
		});
	}
};
