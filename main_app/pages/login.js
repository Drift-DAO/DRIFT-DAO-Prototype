import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../components/loginComponents/LoginPage';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const login = () => {
	const router = useRouter();
	const { address } = useAccount();

	useEffect(() => {
		if (address) {
			router.push('/');
		}
	}, [address]);

	return (
		<div>
			<LoginPage />
		</div>
	);
};

export default login;
