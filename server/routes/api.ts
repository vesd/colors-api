import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('API home page');
});

router.get('/about', (req, res) => {
	res.send('About API');
});

export default router;
