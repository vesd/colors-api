import { Knex } from 'knex';
import { hashPassword } from '../../helpers/password';

export async function seed(knex: Knex): Promise<void> {
	await knex('users').del();

	return knex('users').insert([
		{
			id: 1,
			username: 'admin',
			password: hashPassword('admin'),
			is_admin: true,
		},
		{
			id: 2,
			username: 'user',
			password: hashPassword('user'),
			is_admin: false,
		},
	]);
}
