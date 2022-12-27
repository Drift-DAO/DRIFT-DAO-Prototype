import React from 'react';
import ExitButton from '../leftSideComponents/lowerPart/ExitButton';
import MyAccount from '../leftSideComponents/lowerPart/MyAccount';
import DaoIconComponent from '../leftSideComponents/upperPart/DaoIconComponent';
import SimpleBar from 'simplebar-react';

const LeftBar = () => {
	return (
		<div
			className="bg-gradient-to-r from-purple-500 to-pink-900 mx-2 my-2"
			style={{ width: '6vw', borderRadius: '15px' }}
		>
			<div className="divide-y  divide-dashed">
				<div style={{ height: '85vh' }} className="py-2 overflow-hidden">
					<SimpleBar style={{ maxHeight: '83vh' }}>
						<div className="">
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/polygon.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/ens.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
							<DaoIconComponent
								name="biconomy"
								img="/mainPageLogo/bico.png"
								active={true}
							/>
						</div>
					</SimpleBar>
				</div>
				<div
					style={{ height: '12vh' }}
					className="flex flex-col justify-around pt-4"
				>
					<MyAccount />
					<ExitButton />
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
