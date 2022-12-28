import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changeLeftSide } from '../../../redux/slices/leftRightSlice';

const DaoIconComponent = ({ img, name}) => {
	const myDispatch = useDispatch();
	const currLeft = useSelector((state)=>state.leftRight.leftSide)
	const active = currLeft===name;
	const changeLeftSideBtnClick = async () => {
		myDispatch(changeLeftSide(name));
	};
	return (
		<div
			className={`${
				active ? 'bg-gradient-to-r from-pink-500' : ''
			} flex justify-center justify-items-center py-2`}
		>
			<motion.div
				whileHover={{ scale: 1.2 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<button className="overflow-hidden" onClick={changeLeftSideBtnClick}>
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
