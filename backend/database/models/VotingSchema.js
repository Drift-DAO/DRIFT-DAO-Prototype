import mongoose from 'mongoose';

const votingSchema = new mongoose.Schema({
	dao_id: {
		type: String,
		required: true,
	},
	electionId: {
		type: String,
		require: true,
	},
});

const VotingModel = mongoose.model('VotingModel', votingSchema);
export { VotingModel };
