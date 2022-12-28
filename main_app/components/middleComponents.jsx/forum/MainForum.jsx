import React from 'react';
import SimpleBar from 'simplebar-react';
import CreateForumPost from './CreateForumPost';
import ForumPostComponent from './ForumPostComponent';

const MainForum = () => {
	return (
		<div>
			<div style={{ height: '80vh' }} className="py-2 overflow-hidden">
				<SimpleBar style={{ maxHeight: '80vh' }}>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                    <ForumPostComponent/>
                </SimpleBar>
			</div>
			<div>
				<hr className="py-3" />
                <CreateForumPost/>
			</div>
		</div>
	);
};

export default MainForum;
