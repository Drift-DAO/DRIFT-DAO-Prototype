import React, { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import axios from 'axios';
import Image from 'next/image';

const ForumPostComponent = ({ currLeft }) => {
	return (
		<div className="flex justify-center justify-items-center my-3">
			<Card variant="bordered" style={{ width: '60vw' }}>
				<div className="text-xl font-bold my-4 mx-3">This is heading</div>
				<Card.Divider></Card.Divider>
				<Card.Body>
					<div>
						A hoverable card A hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable card. hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable cardA hoverable cardA hoverable cardA
						hoverable cardA hoverable card.
					</div>
				</Card.Body>
				<Card.Divider></Card.Divider>
				<div className="my-3 mx-3">
					<div className="flex justify-between justify-items-center">
						<div>
							<div>
								<span className="font-bold text-pink-700">Date & time:</span>{' '}
								07:43pm, 22aug 2022
							</div>
							<div className="justify-end">
								<span className="font-bold text-pink-700">by:</span>{' '}
								0x4e76d6B2404d59D01bD50e159A775044d37debdA
							</div>
						</div>
						<div className="flex my-1">
							<div className="mx-2 flex">
								<div className="mx-1 my-1">10</div>
								<button className="">
									<Image
										src="/forum_icons/support.png"
										height={35}
										width={35}
										alt="support"
									/>
								</button>
							</div>

							<div className="flex mx-2">
								<div className="mx-1 my-1">3</div>
								<button className="">
									<Image
										src="/forum_icons/dislike.png"
										height={35}
										width={35}
										alt="dislike"
									/>
								</button>
							</div>
							{/* <div className="flex mx-2">
								<div className="mx-1 my-1">5</div>
								<button className="">
									<Image
										src="/forum_icons/comment.png"
										height={35}
										width={35}
										alt="comment"
									/>
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ForumPostComponent;
