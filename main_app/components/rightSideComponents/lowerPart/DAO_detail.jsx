import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import { Modal, useModal, Text } from '@nextui-org/react';

const DAO_detail = () => {
	const [visible, setVisible] = useState(false);

	const daoDetailsBtn = () => {
		setVisible(true);
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
					{/* <div className="text-center">hello world</div> */}
					<Text id="modal-description">
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Cras mattis consectetur purus sit amet
						fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
						quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
						purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et.
					</Text>
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
