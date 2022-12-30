import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import { Modal, useModal, Text, Avatar } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReactLoading from 'react-loading';

const DAO_detail = () => {
	const [visible, setVisible] = useState(false);
	const { dao_id } = useSelector((state) => state.leftRight);
	const [loading, setLoading] = useState(false);
	const [DAOData, setDAOData] = useState({});

	const daoDetailsBtn = async () => {
		setVisible(true);
		setLoading(true);
		const result = await axios.get(`http://127.0.0.1:4000/DAO/${dao_id}`);
		console.log('fetched result is:', result.data);
		setDAOData(result.data);
		setLoading(false);
	};

	const closeHandler = () => {
		setVisible(false);
	};

	return (
		<div>
			<Tooltip
				color="secondary"
				content="see the details of the DAO"
				placement="left"
			>
				<Button bordered color="gradient" size="md" onPress={daoDetailsBtn}>
					DAO details
				</Button>
			</Tooltip>
			<Modal
				preventClose
				closeButton
				blur
				open={visible}
				onClose={closeHandler}
				scroll
				width="50vw"
			>
				<Modal.Header>
					<div>
						<div className="font-bold text-2xl text-violet-800">
							DAO details
						</div>
						<hr style={{ width: '40vw' }} />
					</div>
				</Modal.Header>
				<Modal.Body>
					{loading ? (
						<div className="flex justify-center">
							<ReactLoading
								type="spinningBubbles"
								color="purple"
								height={45}
								width={45}
								className="my-auto"
							/>
						</div>
					) : (
						<div>
							<div>
								<Avatar src={DAOData.dao_logo} css={{ size: '$20' }} />
							</div>
							<div>DAO name: {DAOData.dao_name.toUpperCase()}</div>
							<div>
								DAO short description: {DAOData.dao_short_desc.toUpperCase()}
							</div>
							<div>DAO short description: {DAOData.dao_desc}</div>
							<div>DAO chain: {DAOData.dao_chain}</div>
							<div>Group's creator address: {DAOData.dao_creator_address}</div>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<div className="flex justify-end">
						<Button size="md" flat color="error" onPress={closeHandler}>
							<div className="text-xl">close</div>
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DAO_detail;
