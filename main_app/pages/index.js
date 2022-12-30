import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useAccount } from 'wagmi';
import LeftSide from '../components/homePageComponents/LeftSide';
import RightSide from '../components/homePageComponents/RightSide';
import { MainMiddleComponent } from '../components/homePageComponents/MainMiddleComponent';
import { useSelector } from 'react-redux';

const index = () => {
	const myAddr = useSelector((state)=>state.addr.myAddress)
	const myrouter = useRouter();
	// const { address } = useAccount();

	useEffect(() => {
		if (myAddr==="") {
			myrouter.replace('/login');
		}
	}, [myAddr]);

	return (
		<div className='bg-black min-h-screen text-white flex justify-between'>
			<LeftSide />
			<MainMiddleComponent/>
			<RightSide/>
		</div>
	);
};

export default index;
