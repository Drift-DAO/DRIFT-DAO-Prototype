import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home = () => {
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
							<div className='my-2'></div>
							<div className='flex justify-center justify-items-center'>

								<ConnectButton label="Connect your wallet"  />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
