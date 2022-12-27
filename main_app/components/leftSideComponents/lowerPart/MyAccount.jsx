import React from 'react';
import Image from 'next/image';

const MyAccount = () => {
	return (
		<div>
			<button>
				<Image
					src="/icons/myaccount.png"
					width={40}
					height={40}
					alt="account"
				/>
			</button>
		</div>
	);
};

export default MyAccount;
