import * as express from 'express';
import * as colors from '../controllers/colors';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('API home page');
});

router.get('/colors', colors.list);
router.post('/colors', colors.create);
router.delete('/colors/:colorId', colors.remove);

export default router;
