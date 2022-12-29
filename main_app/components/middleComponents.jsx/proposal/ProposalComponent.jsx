import React from 'react';
import { Card } from '@nextui-org/react';
import { Button, Progress } from '@nextui-org/react';

const ProposalComponent = ({prp}) => {
	const voteOnProposal = async (i) => {
        
    };

	return (
		<div className="flex justify-center justify-items-center my-4">
			<Card variant="bordered" style={{ width: '60vw' }}>
				<Card.Body>
					<div className="pb-3">
						<div className="text-xl text-red-600">
							{`> ${prp._questions[0].title.default}`}
						</div>
						<div className="text-md text-orange-400">
							{prp._questions[0].description.default}
						</div>
					</div>
					<hr className="py-3" />
					{[...Array(prp._questions[0].choices.length)].map((e, i) => (
						<div className="my-1 flex justify-center" key={i}>
							<Button
								style={{ width: '50vw' }}
								onPress={() => {
									voteOnProposal(i);
								}}
								color="secondary"
							>{prp._questions[0].choices[i].title.default}</Button>
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
