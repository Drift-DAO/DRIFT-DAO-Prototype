import React from 'react';
import { useSelector } from 'react-redux';
import CreateForumPost from '../middleComponents.jsx/forum/CreateForumPost';
import ForumPostComponent from '../middleComponents.jsx/forum/ForumPostComponent';

const MiddleComponent = () => {
	const { leftSide, rightSide } = useSelector((state) => state.leftRight);
	return (
		<div
			className="mx-2 my-2 rounded-2xl"
			style={{
				width: '71vw',
				backgroundColor: '#260033',
				borderColor: '#4d0066',
				borderWidth: '2px',
			}}
		>
			<div className="text-center my-4">
				<div>leftside: {leftSide} </div>
				<div>rightside: {rightSide} </div>
			</div>

			<ForumPostComponent />
			<CreateForumPost />
		</div>
	);
};

export default MiddleComponent;
