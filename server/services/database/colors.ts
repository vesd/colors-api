import { getConnection } from '../../database';

interface PostBody {
	name: string;
	hex: string;
}

interface Color {
	id: number;
	name: string;
	hex: string;
}

const COLORS_TABLE = 'colors';

export const getAllColors = async (): Promise<Color[]> => {
	try {
		const knex = getConnection();

		const colors = await knex.raw(`SELECT id, name, HEX(hex) as hex FROM ${COLORS_TABLE}`);

		return colors[0];
	} catch (err) {
		console.log('Failed to retrieve colors', err.message);

		return [];
	}
};

export const addColor = async (reqBody: PostBody): Promise<Color[]> => {
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

export const removeColor = async (colorId: string): Promise<boolean> => {
	try {
		const knex = getConnection();

		await knex(COLORS_TABLE)
			.where({ id: colorId })
			.del();

		return true;
	} catch (err) {
		console.log('Failed to delete a color', err.message);

		return false;
	}
};
