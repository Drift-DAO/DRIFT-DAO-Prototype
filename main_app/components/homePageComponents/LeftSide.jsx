import React, { useState, useEffect } from 'react';
import ExitButton from '../leftSideComponents/lowerPart/ExitButton';
import MyAccount from '../leftSideComponents/lowerPart/MyAccount';
import DaoIconComponent from '../leftSideComponents/upperPart/DaoIconComponent';
import SimpleBar from 'simplebar-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LeftBar = () => {
	const userAddr = useSelector((state) => state.addr.myAddress);
	const { value } = useSelector((state) => state.refreshPage);

	const [allDAOs, setAllDAOs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://www.backend.drift-dao.com/DAO/memberOf/${userAddr}`)
			.then((res) => {
				setAllDAOs(res.data);
				// console.log('res.data', res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log('error occurred', err);
			});
	}, [value]);

	return (
		<div
			className="bg-gradient-to-r from-purple-900  mx-2 my-2 rounded-2xl"
			style={{ width: '6vw', borderWidth: '2px', borderColor: '#240338' }}
		>
			<div className="divide-y  divide-dashed">
				<div style={{ height: '85vh' }} className="py-2 overflow-hidden">
					<SimpleBar style={{ maxHeight: '83vh' }}>
						<DaoIconComponent name="home" img="/icons/home.png" active={true} />
						{loading ? (
							<div></div>
						) : (
							<div>
								{allDAOs.map((dao, idx) => (
									<div key={idx}>
										<DaoIconComponent
											name={dao.dao_name}
											img={dao.dao_logo}
											dao_id={dao._id}
										/>
									</div>
								))}
							</div>
						)}
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
