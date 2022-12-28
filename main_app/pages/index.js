import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import LeftSide from '../components/homePageComponents/LeftSide';
import RightSide from '../components/homePageComponents/RightSide';
import { MainMiddleComponent } from '../components/homePageComponents/MainMiddleComponent';

const index = () => {
	const myrouter = useRouter();
	const { address } = useAccount();

	useEffect(() => {
		if (!address) {
			// myrouter.replace('/login');
		}
	}, [address]);

	return (
		<div className='bg-black min-h-screen text-white flex justify-between'>
			<LeftSide />
			<MainMiddleComponent/>
			<RightSide/>
		</div>
	);
};

export default index;
