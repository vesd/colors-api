import { dbService } from '../services/database';

export const list = async (req, res): Promise<void> => {
	try {
		const colors = await dbService.getAllColors();

		return res.json({
			success: true,
			data: colors
		});
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to fetch the colors'
		});
	}
};
