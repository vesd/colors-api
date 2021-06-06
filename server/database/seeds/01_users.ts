import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('users').del();

	return knex('users').insert([
		{
			id: 1,
			username: 'admin',
			password: 'admin',
			is_admin: true,
		},
		{
			id: 2,
			username: 'user',
			password: 'user',
			is_admin: false,
		},
	]);
}
