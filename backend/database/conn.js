import 'dotenv/config';
import mongoose from 'mongoose';

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
mongoose.set('strictQuery', true);

mongoose
	.connect(
		`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wys8pfj.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		// console.log(`connected to mongodb`);
	})
	.catch((err) => {
		console.log(err);
	});
