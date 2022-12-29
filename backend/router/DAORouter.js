import 'dotenv/config';
import { DAOModel, DAOmemberModel } from '../database/models/DAOSchema.js';
import express from 'express';
import nodemailer from 'nodemailer';

const DAORouter = new express.Router();

DAORouter.get('/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const result = await DAOModel.findOne({ _id });
		res.send(result);
	} catch (e) {
		res.send(e);
	}
});

DAORouter.get('/memberOf/:userAddr', async (req, res) => {
	try {
		const userAddr = req.params.userAddr;
		const daoList = await DAOmemberModel.find({ userAddr });
		let result = [];
		for (let i = 0; i < daoList.length; i++) {
			try {
				const daoDetails = await DAOModel.findOne({ _id: daoList[i].daoId });
				result.push(daoDetails);
			} catch (e) {}
		}
		res.send(result);
	} catch (e) {
		res.send(e);
	}
});

DAORouter.post('/', async (req, res) => {
	try {
		const {
			dao_name,
			dao_short_desc,
			dao_desc,
			dao_logo,
			dao_chain,
			dao_creator_address,
		} = req.body;

		const newDao = new DAOModel({
			dao_name,
			dao_short_desc,
			dao_desc,
			dao_logo,
			dao_chain,
			dao_creator_address,
		});

		const savedDAO = await newDao.save();
		res.send(savedDAO);
	} catch (e) {
		res.send(e);
	}
});

DAORouter.post('/join', async (req, res) => {
	try {
		const { userAddr, daoId } = req.body;
		const ifAlreadyMember = await DAOmemberModel.findOne({ userAddr, daoId });
		if (ifAlreadyMember) {
			res.send('you already are member of the dao');
			return;
		}
		const result = new DAOmemberModel({
			userAddr,
			daoId,
		});

		await result.save();
		res.send('success');
	} catch (e) {
		res.send(e);
	}
});

DAORouter.post('/leave', async (req, res) => {
	try {
		const { userAddr, daoId } = req.body;
		const result = await DAOmemberModel.findOneAndDelete({ userAddr, daoId });
		res.send('success');
	} catch (e) {
		res.send(e);
	}
});

export default DAORouter;
