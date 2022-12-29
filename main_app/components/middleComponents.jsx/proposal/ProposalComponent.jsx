import React from 'react';
import { Card } from '@nextui-org/react';
import { Button, Progress } from '@nextui-org/react';

const ProposalComponent = () => {
	const voteOnProposal = async (i) => {
        
    };

	return (
		<div className="flex justify-center justify-items-center my-4">
			<Card variant="bordered" style={{ width: '60vw' }}>
				<Card.Body>
					<div className="pb-3">
						<div className="text-xl text-red-600">
							{`> Ye melodi itni chocolaty kyu hai?`}
						</div>
						<div className="text-md text-orange-400">
							Welcome to the NextUI documentation! NextUI allows you to make
							beautiful, modern, and fast websites/applications regardless of
							your design experience, created with React.js and Stitches, based
							on React Aria and inspired by Vuesax.
						</div>
					</div>
					<hr className="py-3" />
					{[...Array(3)].map((e, i) => (
						<div className="my-1 flex justify-center" key={i}>
							<Button
								style={{ width: '50vw' }}
								onPress={() => {
									voteOnProposal(i);
								}}
								color="secondary"
							>{`option: ${i + 1}`}</Button>
						</div>
					))}
				</Card.Body>
				{/* <Progress
					value={90}
					shadow
					color="warning"
					status="warning"
					style={{ height: '8vh' }}
				>
					<div className="py-3" style={{ height: '8vh' }}>
						hello world
					</div>
				</Progress> */}
			</Card>
		</div>
	);
};

export default ProposalComponent;
