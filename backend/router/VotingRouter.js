import express from 'express';
import { VotingModel } from '../database/models/VotingSchema.js';
const VotingRouter = new express.Router();

VotingRouter.get('/:dao_id', async (req, res) => {
	try {
		const dao_id = req.params.dao_id;
		const elections = await VotingModel.find({ dao_id });
		res.send(elections);
	} catch (e) {
		res.send(e);
	}
});

VotingRouter.post('/', async (req, res) => {
	try {
		const { dao_id, electionId } = req.body;
		const newElection = new VotingModel({
			dao_id,
			electionId,
		});

		await newElection.save();
		res.send('success');
	} catch (e) {
		res.send(e);
	}
});

export default VotingRouter;
