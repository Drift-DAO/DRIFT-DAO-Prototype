import mongoose from 'mongoose';

const DAOSchema = mongoose.Schema({
	dao_name: {
		type: String,
		required: true,
	},
	dao_short_desc: {
		type: String,
	},
	dao_desc: {
		type: String,
	},
	dao_logo: {
		type: String,
	},
	dao_chain: {
		type: String,
		required: true,
	},
	dao_creator_address: {
		type: String,
		required: true,
	},
});

const DAOmemberSchema = mongoose.Schema({
	userAddr:{
		type:String,
		required:true
	},
	daoId:{
		type:String,
		required:true
	}
})

const DAOModel = mongoose.model('DAOModel', DAOSchema);
const DAOmemberModel = mongoose.model('DAOmemberModel', DAOmemberSchema);
export { DAOModel, DAOmemberModel };
