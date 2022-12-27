import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MyAccount = () => {
	const accountBtnClicked = async () => {
		console.log('account btn clicked');
	};
	return (
		<div className="flex justify-center justify-items-center">
			<motion.div
				whileHover={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<button onClick={accountBtnClicked}>
					<Image
						src="/icons/myaccount.png"
						width={45}
						height={45}
						alt="account"
					/>
				</button>
			</motion.div>
		</div>
	);
};

export default MyAccount;
