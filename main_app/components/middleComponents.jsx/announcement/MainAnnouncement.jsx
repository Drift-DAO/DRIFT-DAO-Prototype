import React from 'react';
import CreateAnnouncementPost from './CreateAnnouncementPost';
import AnnouncementCard from './AnnouncementCard';
import SimpleBar from 'simplebar-react';

const MainAnnouncement = () => {
	return (
		<div>
			<div style={{ height: '80vh' }} className="py-2 overflow-hidden">
				<SimpleBar style={{ maxHeight: '80vh' }}>
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
					<AnnouncementCard />
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
