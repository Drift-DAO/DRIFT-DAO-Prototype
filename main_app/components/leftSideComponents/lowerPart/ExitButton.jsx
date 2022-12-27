import React from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useDisconnect } from 'wagmi';
import { motion } from 'framer-motion';

const ExitButton = () => {
	const { disconnect } = useDisconnect();

	const logoutBtnClicked = async () => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Do you want to logout?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#023020',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, logout!',
		}).then((result) => {
			if (result.isConfirmed) {
				disconnect();
			}
		});
	};

	return (
		<div className="flex justify-center justify-items-center">
			<motion.div
				whileHover={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<button onClick={logoutBtnClicked}>
					<Image src="/icons/logout.png" width={45} height={45} alt="account" />
				</button>
			</motion.div>
		</div>
	);
};

export default ExitButton;
