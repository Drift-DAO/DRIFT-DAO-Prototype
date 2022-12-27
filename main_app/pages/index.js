import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import LeftSide from '../components/homePageComponents/LeftSide';
import MiddleComponent from '../components/homePageComponents/MiddleComponent';
import RightSide from '../components/homePageComponents/RightSide';

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
			<MiddleComponent/>
			<RightSide/>
		</div>
	);
};

export default index;
