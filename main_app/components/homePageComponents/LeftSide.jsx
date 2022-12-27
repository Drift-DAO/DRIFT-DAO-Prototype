import React from 'react';
import ExitButton from '../leftSideComponents/lowerPart/ExitButton';
import MyAccount from '../leftSideComponents/lowerPart/MyAccount';

const LeftBar = () => {
	return (
		<div
			className="bg-gray-500 mx-2 my-2 justify-center justify-items-center"
			style={{ width: '5vw', borderRadius: '15px' }}
		>
			<div className="divide-y  divide-dashed">
				<div style={{ height: '85vh' }}>beta</div>
				<div style={{ height: '10vh' }} className="flex flex-col justify-around justify-items-center">
					<MyAccount />
					<ExitButton />
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
