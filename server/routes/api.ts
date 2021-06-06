import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('API home page');
});

router.get('/colors', (req, res) => {
	res.send('GET /colors');
});

router.post('/colors', (req, res) => {
	res.send('POST /colors');
});

router.delete('/colors/:colorId', (req, res) => {
	res.send(`DELETE /colors/${req.params.colorId}`);
});

export default router;
