import React from 'react';
import { Card } from '@nextui-org/react';
import { Button, Progress } from '@nextui-org/react';
import { axios } from 'axios';
import { ethers } from 'ethers';
import swal from 'sweetalert2';

import {
	Election,
	EnvOptions,
	PlainCensus,
	PublishedElection,
	VocdoniSDKClient,
	Vote,
} from '@vocdoni/sdk';

const ProposalComponent = ({ prp }) => {
	const voteOnProposal = async (i) => {
		try {
			let provider = new ethers.providers.Web3Provider(window.ethereum);
			await provider.send('eth_requestAccounts', []);
			let signer = provider.getSigner();
			const client = new VocdoniSDKClient({
				env: EnvOptions.STG, // mandatory, can be 'dev' or 'prod'
				wallet: signer, // optional, the signer used (Metamask, Walletconnect)
			});
			await client.createAccount();

			await client.setElectionId(prp._id);
			const vote = new Vote([i]);
			const voteId = await client.submitVote(vote);
			axios
				.post(`http://127.0.0.1:4000/voting/deependu/${prp._id}`)
				.then((res) => {
					swal.fire('Voted🥳', 'Voted successfully in the proposal', 'success');
				})
				.catch((e) => {
					swal.fire('Error😵‍💫', 'An unexpected error occurred', 'error');
				});
		} catch (err) {
			swal.fire('Error😵‍💫', 'An unexpected error occurred', 'error');
		}
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
							>
								{prp._questions[0].choices[i].title.default}
							</Button>
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
