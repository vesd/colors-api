import { Knex, knex } from 'knex';
import { getConfiguration } from './knexfile';

let connection = null;

const createConnection = async (): Promise<void> => {
	const config = await getConfiguration();

	try {
		connection = knex(config);
	
		await connection.raw('SELECT 1');
	} catch (err) {
		console.log('database init failed:', err.message);
	}
};

const migrate = async (): Promise<void> => {
	try {
		await connection.migrate.latest();
		await connection.seed.run();
	} catch (err) {
		console.log('database migrate failed:', err.message);
	}

	console.log('migration completed');
};

export const getConnection = (): Knex => {
	if (!connection) {
		throw new Error('Service DB not initialized');
	}

	return connection;
};

export const init = async (): Promise<void> => {
	await createConnection();
	await migrate();
};
