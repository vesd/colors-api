import * as passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { getConnection } from './database';

passport.use(
	new JwtStrategy({
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.JWT_SECRET,
	}, async function (jwtPayload, done) {
		try {
			const knex = getConnection();
			const USERS_TABLE = 'users';
			const user = (await knex(USERS_TABLE).where({
				id: jwtPayload.id,
			}).limit(1))[0];
			
			if (!user) {
				return done(new Error(), false);
			}
			return done(null, user);
		} catch (err) {
			return done(new Error(), false);
		}
	})
);

module.exports = null;
