import * as express from 'express';
import * as database from './database';
import * as dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

database.init();

const port = process.env.PORT || 3000;
const app = express();

app.use('/api', apiRoutes);
app.get('/', (req, res) => res.send(`Hello from colors-api, port ${port}`));

app.listen(port, () => console.log(`App is listening on port ${port}`));
