import * as path from 'path';

const fetchConfiguration = () => {
	return {
		client: 'mysql',
		connection: {
			host: process.env.MYSQL_HOST,
			port: process.env.MYSQL_PORT,
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
		},
	};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getConfiguration = (): any => {
	const configuration = fetchConfiguration();

	return {
		...configuration,
		migrations: {
			directory: path.resolve(__dirname, './migrations'),
			tableName: 'db_migrations',
		},
		seeds: {
			directory: path.resolve(__dirname, './seeds'),
		},
	};
};
