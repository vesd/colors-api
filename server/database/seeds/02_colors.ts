import { Knex } from 'knex';
import { COLORS_TABLE } from '../../services/database/colors';

const colors = {
	limegreen: '50D37E',
	skyblue: '6A9EF0',
	pinkish: 'F094D7',
	beige: 'F0AF94',
	yellow: 'EFF96C',
};

const values = Object.keys(colors)
	.map(key => `('${key}', UNHEX('${colors[key]}'))`)
	.join(',');

export async function seed(knex: Knex): Promise<void> {
	await knex('colors').del();

	return knex.raw(`INSERT INTO ${COLORS_TABLE} (name, hex) VALUES ${values}`);
}
