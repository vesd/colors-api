import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createTable('colors', function (table) {
			table.increments('id');
			table.string('name', 255).notNullable();
			table.binary('hex', 3).notNullable();
		});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTable('colors');
}

export const config = { transaction: false };
