import * as express from 'express';
import * as colors from '../controllers/colors';
import { isAuthenticated } from '../middlewares/auth';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('API home page');
});

router.get('/colors', colors.list);
router.post('/colors', isAuthenticated, colors.create);
router.delete('/colors/:colorId', isAuthenticated, colors.remove);

export default router;
