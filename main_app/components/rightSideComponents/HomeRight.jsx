import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {
	Modal,
	Button,
	Text,
	Input,
	Row,
	Checkbox,
	Avatar,
} from '@nextui-org/react';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../redux/slices/refreshPageSlice';

const HomeRight = () => {
	const myDispatch = useDispatch();

	const userAddr = useSelector((state) => state.addr.myAddress);
	const [DAOName, setDAOName] = useState('');
	const [visibleError, setVisibleError] = useState(false);
	const [visibleDAO, setVisibleDAO] = useState(false);
	const [DAOData, setDAOData] = useState({});

	const closeHandler = () => {
		setVisibleError(false);
	};

	const closeHandlerDAO = () => {
		setVisibleDAO(false);
	};

	const joinDAO = async () => {
		if (DAOData.isMember) {
			return;
		}
		axios
			.post(`https://www.backend.drift-dao.com/DAO/join`, {
				userAddr: userAddr,
				daoId: DAOData._id,
			})
			.then((res) => {
				myDispatch(changeValue());
				setVisibleDAO(false);
				swal.fire('Joined', 'You have successfully joined the DAO.', 'success');
			})
			.catch((err) => {
				setVisibleDAO(false);
				console.log('error occurred: ', err);
				swal.fire('Error', 'Sorry, an unexpected error occurred', 'error');
			});
	};

	const searchDAO = async () => {
		axios
			.get(
				`https://www.backend.drift-dao.com/DAO?name=${DAOName}&userAddr=${userAddr}`
			)
			.then((res) => {
				if (res.data === 'no dao found') {
					setVisibleError(true);
				} else {
					// console.log("result is: ", res.data);
					setDAOData(res.data);
					setVisibleDAO(true);
					// console.log("data fetched is:", res.data);
				}
			})
			.catch((err) => {
				console.log('an error occurred while fetching: ', err);
				setVisibleError(true);
			});
	};
	return (
		<div className=" justify-around mx-1">
			<div className="flex justify-around mt-10 text-black">
				<div>
					<input
						onChange={(e) => setDAOName(e.target.value)}
						value={DAOName}
						className="pl-2"
						placeholder="DAO name"
						style={{
							borderRadius: '15px',
							height: '35px',
							borderColor: '#dd0dad',
							borderWidth: '2px',
						}}
					/>
				</div>
				<div className="pt-1">
					<button onClick={searchDAO} style={{ width: '25px', height: '25px' }}>
						<Image
							src="/icons/searchIcon.png"
							height={25}
							width={25}
							alt="search"
						/>
					</button>
				</div>
			</div>
			<div className="text-center text-pink-500 text-lg mt-5">
				Search DAOs by their name
			</div>
			<Modal
				blur
				closeButton
				aria-labelledby="modal-title"
				open={visibleError}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" size={28} b color="error">
						Sorry! 😥
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Text id="modal-title" size={18} color="secondary">
						Sorry, no DAO exists with this name.
					</Text>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={closeHandler}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				preventClose
				width="40vw"
				blur
				closeButton
				aria-labelledby="modal-title"
				open={visibleDAO}
				onClose={closeHandlerDAO}
			>
				<Modal.Header>
					<Text id="modal-title" size={28} b color="secondary">
						<span className="underline">DAO found </span>😀
					</Text>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="flex justify-center mb-2">
							<Avatar
								size="xl"
								src={DAOData.dao_logo}
								color="primary"
								bordered
								squared
							/>
						</div>
						<div className="my-4">
							<div className="font-bold">DAO name:</div>
							<div className="text-blue-500"> {DAOData.dao_name}</div>
						</div>
						<div className="font-bold">DAO description:</div>{' '}
						<div className="text-blue-500">{DAOData.dao_short_desc}</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="flex">
						<span className="mx-5">
							<Button auto flat color="error" onClick={closeHandlerDAO}>
								Close
							</Button>
						</span>
						<span>
							<Button
								auto
								shadow
								color={`${DAOData.isMember ? 'secondary' : 'success'}`}
								onClick={joinDAO}
							>
								{DAOData.isMember ? <div>Already joined</div> : <div>Join</div>}
							</Button>
						</span>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default HomeRight;
