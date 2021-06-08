import * as passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate('jwt', (err, user) => {
		if (err || !user) {
			res.status(403).send({
				error: 'You do not have access to this resource'
			});
		} else {
			next();
		}
	})(req, res, next);
};
