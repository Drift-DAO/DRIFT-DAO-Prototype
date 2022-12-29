import 'dotenv/config';
import './database/conn.js';
import express from 'express';
import cors from 'cors';
import ContactFormRouter from './router/ContactFormRouter.js';
import DAORouter from './router/DAORouter.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

app.get('/', (req, res) => {
	res.send('hello world');
});

app.use('/contactForm', ContactFormRouter);
app.use('/DAO', DAORouter);

app.listen(PORT, () => {
	console.log(`App started on http://localhost:${PORT}`);
});
