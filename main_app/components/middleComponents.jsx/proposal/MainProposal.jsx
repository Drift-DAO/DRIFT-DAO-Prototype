import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import ReactLoading from 'react-loading';
import CreateProposal from './CreateProposal';
import ProposalComponent from './ProposalComponent';
import { useSelector } from 'react-redux';

const MainProposal = () => {
	const leftSide = useSelector((state) => state.leftRight.leftSide);
	const value = useSelector((state) => state.refreshPage.value);
	const [allProposals, setAllProposals] = useState([]);
	
	useEffect(() => {}, [leftSide, value]);

	const fetchAllProposals = async () => {};
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
					<SimpleBar style={{ maxHeight: '80vh' }}>
						<ProposalComponent />
					</SimpleBar>
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
