import { getConnection } from '../../database';

const COLORS_TABLE = 'colors';

export const getAllColors = async (): Promise<any[]> => {
	try {
		const knex = getConnection();

		const colors = await knex.raw(`SELECT name, HEX(hex) as hex FROM ${COLORS_TABLE}`);

		return colors;
	} catch (err) {
		console.log('Failed to retrieve colors', err.message);

		return [];
	}
};
