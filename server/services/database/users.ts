import { getConnection } from '../../database';

interface PostBody {
	username: string;
	password: string;
}

export interface User {
	id: number;
	name: string;
	password?: string;
	is_admin: boolean;
}

const USERS_TABLE = 'users';

export const getUser = async (reqBody: PostBody): Promise<User> => {
	try {
		const { username } = reqBody;
		const knex = getConnection();
		const user = await knex(USERS_TABLE).where({
			username,
		}).limit(1);

		return user[0];
	} catch (err) {
		throw new Error(err.message);
	}
};
