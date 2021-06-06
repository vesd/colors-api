import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('colors').del();

	return knex.raw('INSERT INTO `colors` (name, hex) VALUES (\'Green\', UNHEX(\'f2a709\'))');
}
