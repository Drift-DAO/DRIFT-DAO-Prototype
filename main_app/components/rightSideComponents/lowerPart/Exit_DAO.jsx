import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { Modal, Input, Row, Button, Loading } from '@nextui-org/react';
import { useSelector, useDispatch } from 'react-redux';

const Exit_DAO = () => {
	const { leftSide, rightSide } = useSelector((state) => state.leftRight);
	const [visible, setVisible] = React.useState(false);
	const [leaving, setLeaving] = React.useState(false);

	const closeHandler = () => {
		setVisible(false);
	};

	const leaveBtnClicked = () => {
		setVisible(true);
	};

	const leaveDAO = async () => {
		setLeaving(true);
		setTimeout(() => {
			setLeaving(false);
		}, 2000);
		console.log('left DAO', leftSide);
	};

	return (
		<div>
			<Tooltip color="error" content="leave DAO" placement="left">
				<Button color="error" size="md" onPress={leaveBtnClicked}>
					leave DAO
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
						<div className="font-bold text-2xl text-red-500">
							leave {leftSide} DAO?
						</div>
						<hr style={{ width: '40vw' }} />
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className="text-center">
						Are you sure, you want to leave {leftSide} DAO?
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button size="md" flat color="primary" onPress={closeHandler}>
						<div className="text-xl">cancel</div>
					</Button>
					<Button size="md" onPress={leaveDAO} color="error">
						{leaving ? (
							<div className="text-xl">
								<span className="mx-2">leaving</span>
								<Loading color="white" type="points-opacity" />
							</div>
						) : (
							<div className="text-xl">yes</div>
						)}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Exit_DAO;
