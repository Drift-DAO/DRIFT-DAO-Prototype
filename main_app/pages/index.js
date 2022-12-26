import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

const index = () => {
	const myrouter = useRouter();
	const { address } = useAccount();

	useEffect(() => {
		if (!address) {
			myrouter.replace('/login');
		}
	}, [address]);

	return (
		<div>
			<div>Hello world</div>
			<div>my signer is : {address}</div>
		</div>
	);
};

export default index;
