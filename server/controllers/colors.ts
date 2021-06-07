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

export const create = async (req, res): Promise<void> => {
	try {
		const color = await dbService.addColor(req.body);

		res.send(color);
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to create the color'
		});
	}
};

export const remove = async (req, res): Promise<void> => {
	try {
		const result = await dbService.removeColor(req.params.colorId);

		res.send(result);
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to delete the color'
		});
	}
};
