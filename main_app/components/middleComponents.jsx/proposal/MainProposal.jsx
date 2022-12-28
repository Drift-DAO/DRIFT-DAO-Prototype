import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import ReactLoading from 'react-loading';
import CreateProposal from './CreateProposal';

const MainProposal = () => {
	const loading = false;
	return (
		<div>
			<div style={{ height: '80vh' }} className="py-2 overflow-hidden">
				{loading ? (
					<div className="flex justify-center" style={{ height: '80vh' }}>
						<ReactLoading
							type="spinningBubbles"
							color="white"
							height={75}
							width={75}
							className="my-auto"
						/>
					</div>
				) : (
					<SimpleBar style={{ maxHeight: '80vh' }}>all my proposals </SimpleBar>
				)}
			</div>
			<div>
				<hr className="py-3" />
				<CreateProposal />
			</div>
		</div>
	);
};

export default MainProposal;
