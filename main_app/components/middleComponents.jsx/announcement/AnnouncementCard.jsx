import React from 'react';
import { Card, Grid, Text, Button, Row, Spacer } from '@nextui-org/react';

const AnnouncementCard = () => {
	return (
		<div className="flex justify-center">
			<Card css={{ mw: '60vw' }}>
				<div className="flex justify-between my-3 mx-3">
					<div className="font-bold text-xl text-red-600">📢 Make the Web</div>
					<div>
						<span className="font-bold text-pink-700">by:</span>{' '}
						0x4e76d6B2404d59D01bD50e159A775044d37debdA
					</div>
				</div>
				<Card.Divider />
				<Card.Body css={{ py: '$10    ' }}>
					<div>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default AnnouncementCard;
