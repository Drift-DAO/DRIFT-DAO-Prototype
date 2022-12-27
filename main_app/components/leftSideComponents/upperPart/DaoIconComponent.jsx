import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DaoIconComponent = ({ img, name, active }) => {
	active = false;
	return (
		<div
			className={`${
				active ? 'bg-gradient-to-r from-gray-500' : ''
			} flex justify-center justify-items-center py-2`}
		>
			<motion.div
				whileHover={{ scale: 1.2 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<button className="overflow-hidden">
					<Image
						className="rounded-lg bg-white"
						src={img}
						width={45}
						height={45}
						alt={name}
					/>
				</button>
			</motion.div>
		</div>
	);
};

export default DaoIconComponent;
