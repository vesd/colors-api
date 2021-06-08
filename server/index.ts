import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import * as database from './database';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';
import './passport';

database.init();

const port = process.env.PORT || 3000;
const origin = process.env.ALLOWED_ORIGINS || 'http://localhost:8080';

const app = express();

app.use(cors({ origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => res.send(`Hello from colors-api, port ${port}`));

app.listen(port, () => console.log(`App is listening on port ${port}`));
