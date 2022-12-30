import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../components/loginComponents/LoginPage';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { useAccount } from 'wagmi';
import { useSelector, useDispatch } from 'react-redux';
import { changeAddr } from '../redux/slices/addrSlice'; 

const login = () => {
	const myAddr = useSelector((state)=>state.addr.myAddress)
	const router = useRouter();
	// const { address } = useAccount();

	useEffect(() => {
		if (myAddr!=="") {
			router.push('/');
		}
	}, [myAddr]);

	return (
		<div>
			<LoginPage />
		</div>
	);
};

export default login;
