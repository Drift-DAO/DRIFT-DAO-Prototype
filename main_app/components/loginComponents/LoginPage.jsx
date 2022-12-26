import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const Home = () => {
	const metamaskBtn = async () => {
		console.log('clicked on metamask button');
	};
	const coinbaseBtn = async () => {
		console.log('clicked on coinbase button');
	};
	const walletConnectBtn = async () => {
		console.log('clicked on walletconnect button');
	};
	const getAWalletBtn = async () => {
		const url = 'https://metamask.io/';
		window.open(url, '_blank');
	};
	const lensBtn = async () => {
		console.log('clicked on lens button');
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
								sign in with your wallet to continue
							</div>
							<div className="grid sm:grid-cols-2 gap-4 pt-10 ">
								<div>
									<Button
										color="gradient"
										size="lg"
										className="w-56"
										onClick={metamaskBtn}
									>
										<Image
											className="mr-3"
											src="/landingPageLogo/MetaMask_logo.png"
											height="30"
											width="30"
											alt="load.."
										/>
										metamask
									</Button>
								</div>
								<div>
									<Button
										color="gradient"
										size="lg"
										className="w-56 ml-3"
										onClick={coinbaseBtn}
									>
										<Image
											className="mr-3"
											src="/landingPageLogo/coinbase_logo.png"
											height="30"
											width="28"
											alt="load.."
										/>
										coinbase
									</Button>
								</div>
								<div>
									<Button
										size="lg"
										className="w-56 mt-2"
										color="gradient"
										onClick={walletConnectBtn}
									>
										<Image
											className="mr-3"
											src="/landingPageLogo/walletconnect-logo.png"
											height="30"
											width="28"
											alt="load.."
										/>
										wallet connect
									</Button>
								</div>
								<div>
									<Button
										size="lg"
										className="w-56 mt-2 ml-3"
										color="gradient"
										onClick={getAWalletBtn}
									>
										<Image
											className="mr-3"
											src="/landingPageLogo/wallet_logo.png"
											height="30"
											width="28"
											alt="load.."
										/>
										Get a wallet
									</Button>
								</div>
							</div>
							<div className="text-white flex justify-center font-bold mt-7">
								<div className="mx-3">Or</div>
							</div>
							<div className="flex justify-center mt-6">
								<Button
									size="lg"
									className="w-72"
									color="gradient"
									onClick={lensBtn}
								>
									<Image
										className="mr-1"
										src="/landingPageLogo/lens_logo.png"
										height="32"
										width="32"
										alt="load.."
									/>
									<span className="ml-3">sign in with lens</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
