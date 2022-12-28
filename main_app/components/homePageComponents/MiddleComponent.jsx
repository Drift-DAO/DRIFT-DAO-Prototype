import React from 'react';
import { useSelector } from 'react-redux';
import AnnouncementCard from '../middleComponents.jsx/announcement/AnnouncementCard';
import CreateAnnouncementPost from '../middleComponents.jsx/announcement/CreateAnnouncementPost';
import MainAnnouncement from '../middleComponents.jsx/announcement/MainAnnouncement';
import CreateForumPost from '../middleComponents.jsx/forum/CreateForumPost';
import ForumPostComponent from '../middleComponents.jsx/forum/ForumPostComponent';
import MainForum from '../middleComponents.jsx/forum/MainForum';

const MiddleComponent = () => {
	const { leftSide, rightSide } = useSelector((state) => state.leftRight);

	if (rightSide === 'announcement') {
		return (
			<div>
				<MainAnnouncement />
			</div>
		);
	}

	if (rightSide.substring(0, 4) === 'chat') {
		return <div>chat</div>;
	}

	if (rightSide.substring(0, 5) === 'forum') {
		return (
			<div>
				<MainForum />
			</div>
		);
	}

	if (rightSide.substring(0, 8) === 'proposal') {
		return <div>proposal</div>;
	}

	if (rightSide === 'analytics') {
		return <div>analytics</div>;
	}
};

export default MiddleComponent;
