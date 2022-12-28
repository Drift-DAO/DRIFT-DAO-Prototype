import React from 'react';
import { Modal, Input, Row, Button } from '@nextui-org/react';

const CreateAnnouncementPost = () => {
	const [visible, setVisible] = React.useState(false);
	const [heading, setHeading] = React.useState('');
	const [desc, setDesc] = React.useState('');

	const createAnnouncementButtonClicked = async () => {
		setVisible(true);
	};

	const closeHandler = () => {
		setVisible(false);
	};

	const postBtnClicked = async () => {
		if (heading === '' || desc === '') {
			alert('heading or description is empty.');
			return;
		}
		console.log('post btn clicked');
		console.log('the heading is: ', heading);
		console.log('the description is: ', desc);

		setHeading('');
		setDesc('');
		setVisible(false);
	};
	return (
		<div className="flex justify-center">
			<Button
				auto
				color="gradient"
				shadow
				onPress={createAnnouncementButtonClicked}
				style={{ width: '50vw' }}
			>
            <div className='text-lg'>
				create announcement post
                </div>
			</Button>
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
						<div className="font-bold text-2xl text-pink-600">📢 New announcement</div>
						<hr style={{ width: '40vw' }} />
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className="text-center">
						<div className="mt-3">
							<input
								placeholder="heading..."
								value={heading}
								onChange={(e) => setHeading(e.target.value)}
								className="px-3"
								style={{
									borderWidth: '1px',
									height: '40px',
									borderRadius: '10px',
									width: '40vw',
									borderColor: 'pink',
								}}
							/>
						</div>
						<div className="mt-3">
							<textarea
								placeholder="Description..."
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								className="px-3"
								style={{
									borderWidth: '1px',
									borderRadius: '10px',
									width: '40vw',
									borderColor: 'pink',
								}}
								rows="9"
							/>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button size="md" light color="error" onPress={closeHandler}>
						cancel
					</Button>
					<Button size="md" onPress={postBtnClicked} color="gradient">
						post
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default CreateAnnouncementPost;
