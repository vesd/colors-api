import { getConnection } from '../../database';

interface PostBody {
	name: string;
	hex: string;
}

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

export const addColor = async (reqBody: PostBody): Promise<any[]> => {
	try {
		const { name, hex } = reqBody;
		const knex = getConnection();
		const color = await knex.raw(`INSERT INTO ${COLORS_TABLE} (name, hex) VALUES ('${name}', UNHEX('${hex}'))`);

		return color;
	} catch (err) {
		console.log('Failed to create a color', err.message);

		return [];
	}
};

