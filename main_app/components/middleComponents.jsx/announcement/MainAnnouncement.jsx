import React, { useEffect, useState } from 'react';
import { Orbis } from '@orbisclub/orbis-sdk';
import CreateAnnouncementPost from './CreateAnnouncementPost';
import AnnouncementCard from './AnnouncementCard';
import SimpleBar from 'simplebar-react';
import { useSelector } from 'react-redux';

let orbis = new Orbis();
const MainAnnouncement = () => {
	const { leftSide, rightSide } = useSelector((state) => state.leftRight);
	const { value } = useSelector((state) => state.refreshPage);

	const [allAnnouncements, setAllAnnouncements] = useState([]);

	useEffect(() => {
		fetchData();
	}, [value]);

	const fetchData = async () => {
		let res = await orbis.isConnected();
		if (!res) {
			await orbis.connect_v2({
				provider: window.ethereum,
				lit: true,
			});
		}

		let { data, error } = await orbis.getPosts({
			context: `${leftSide}-${rightSide}`,
		});

		setAllAnnouncements(data);

		console.log('fetched data is:', data);
	};
	return (
		<div>
			<div style={{ height: '80vh' }} className="py-2 overflow-hidden">
				<SimpleBar style={{ maxHeight: '80vh' }}>
					{allAnnouncements.map((announcement, index) => (
						<AnnouncementCard
							key={index}
							title={announcement.content.title}
							desc={announcement.content.body}
							by={announcement.creator}
						/>
					))}
				</SimpleBar>
			</div>
			<div>
				<hr className="py-3" />
				<CreateAnnouncementPost />
			</div>
		</div>
	);
};

export default MainAnnouncement;
