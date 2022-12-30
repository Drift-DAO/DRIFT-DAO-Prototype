import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Loading } from '@nextui-org/react';
import { ethers } from 'ethers';
import { PassportScorer } from '@gitcoinco/passport-sdk-scorer';
import { Modal, Text, Input } from '@nextui-org/react';
import { Orbis } from '@orbisclub/orbis-sdk';
import { useSelector, useDispatch } from 'react-redux';
import { changeAddr } from '../../redux/slices/addrSlice';
import Swal from 'sweetalert2';
import {
	Election,
	EnvOptions,
	PlainCensus,
	PublishedElection,
	VocdoniSDKClient,
	Vote,
} from '@vocdoni/sdk';

let orbis = new Orbis();
const Home = () => {
	const myDispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);

	const closeHandler = () => {
		setVisible(false);
		console.log('closed');
	};
	const connectWithWallet = async () => {
		setLoading(true);
		try {
			let provider = new ethers.providers.Web3Provider(window.ethereum);
			await provider.send('eth_requestAccounts', []);
			let signer = provider.getSigner();
			const userAddress = await signer.getAddress();

			// gitcoin passport score
			const scorer = new PassportScorer([
				{
					provider: 'Google',
					issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
					score: 1,
				},
				{
					provider: 'Github',
					issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
					score: 1,
				},
				{
					provider: 'Discord',
					issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
					score: 1,
				},
				{
					provider: 'Twitter',
					issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
					score: 1,
				},
				{
					provider: 'Lens',
					issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
					score: 1,
				},
			]);
			const score = await scorer.getScore(userAddress);
			console.log('score is: ', score);
			if (score >= 2) {
				let res = await orbis.isConnected();
				if (!res) {
					await orbis.connect_v2({
						provider: window.ethereum,
						lit: false,
					});
				}
				const client = new VocdoniSDKClient({
					env: EnvOptions.STG, // mandatory, can be 'dev' or 'prod'
					wallet: signer, // optional, the signer used (Metamask, Walletconnect)
				});
				const info = await client.createAccount();
				if (info.balance === 0) {
					await client.collectFaucetTokens();
				}
				myDispatch(changeAddr(userAddress));
			} else {
				setVisible(true);
			}
		} catch (err) {
			console.log('an error occurred: ', err);
			Swal('Error', 'an unexpected error occurred', 'error');
		}
		setLoading(false);
	};
	return (
		<div className="bg-[url('/landingPageImg/landingbg.jpg')] bg-fixed">
			<div className="grid sm:grid-cols-2 gap-4">
				<div className="sm:flex items-center justify-center sm:h-screen">
					<div>
						<div>
							<div className="my-10">
								<Image
									src="/landingPageLogo/logo-white.png"
									height="200"
									width="450"
									alt="load.."
								/>
							</div>
							<span className="text-white text-3xl">
								A unified platform for all your DAOs
							</span>
						</div>
					</div>
				</div>
				<div>
					<div className="sm:flex items-center justify-center sm:h-screen">
						<div>
							<div className="text-white text-3xl italic font-bold">
								Connect with your wallet to continue
							</div>
							<div className="my-4"></div>
							<div className="flex justify-center justify-items-center">
								<Button
									onPress={connectWithWallet}
									shadow
									color="gradient"
									size="lg"
									style={{ width: '25vw' }}
								>
									{loading ? (
										<div>
											Connecting... <Loading color="currentColor" size="sm" />
										</div>
									) : (
										<div>Connect your wallet</div>
									)}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				preventClose
				width="40vw"
				blur
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<div className="text-2xl font-bold text-red-500">Sorry! 😞</div>
				</Modal.Header>
				<Modal.Body>
					<div className="text-sm font-bold text-gray-700 font-mono">
						In order to prevent bots from abusing the platform, we are using
						gitcoin passport's decentralized identity feature to 'restrict' or
						'permit access' to users.
					</div>
					<div className="text-xl font-bold text-blue-600">
						Seems like you don't have enough identity stamps on your gitcoin
						passport.
					</div>
					<div className="text-lg">
						Please visit{' '}
						<a
							className="text-red-500"
							href="https://passport.gitcoin.co/"
							target={'_blank'}
						>
							https://passport.gitcoin.co/
						</a>{' '}
						and get some stamps, and then comeback.😀🚀
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onClick={closeHandler}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Home;
