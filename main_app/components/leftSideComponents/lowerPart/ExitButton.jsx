import React from 'react';
import Image from 'next/image';

const ExitButton = () => {
	return (
		<div className="">
			<button>
				<Image
					src="/icons/logout.png"
					width={40}
					height={40}
					alt="account"
				/>
			</button>
		</div>
	);
};

export default ExitButton;
