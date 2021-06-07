import { Request, Response } from 'express';
import { dbService } from '../services/database';

export const list = async (req: Request, res: Response): Promise<void> => {
	try {
		const colors = await dbService.getAllColors();

		res.status(200).json({
			success: true,
			data: colors,
		});
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to fetch the colors'
		});
	}
};

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		const color = await dbService.addColor(req.body);

		res.status(201).json({
			success: true,
			data: color,
		});
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to create the color'
		});
	}
};

export const remove = async (req: Request, res: Response): Promise<void> => {
	try {
		const result = await dbService.removeColor(req.params.colorId);

		res.status(204).json({
			success: true,
			data: result,
		});
	} catch (err) {
		res.status(500).send({
			error: 'An error has occurred trying to delete the color'
		});
	}
};
