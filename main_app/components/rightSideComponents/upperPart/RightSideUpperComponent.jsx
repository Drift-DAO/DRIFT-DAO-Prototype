import React from 'react';
import SimpleBar from 'simplebar-react';

const RightSideUpperComponent = () => {
	return (
		<div className="mx-6 my-5">
			<SimpleBar style={{ maxHeight: '83vh' }}>
				<div className="font-bold text-xl">
					<button>{`# Announcement 📢`}</button>
				</div>
				<hr className="mt-3" />

				<div className="pt-6">
					<div className="font-bold text-xl">{`> Chat room 💬`}</div>
					<div className="">
						<div className="">
							<div>
								<button># General</button>
							</div>
							<div>
								<button># Technical</button>
							</div>
							<div>
								<button># Important</button>
							</div>
							<div>
								<button># Doubt</button>
							</div>
						</div>
					</div>
				</div>
				<hr className="mt-3" />

				<div className="pt-6">
					<div className="font-bold text-xl">{`> Forum ✉️`}</div>
					<div>
						<button># General Discussion</button>
					</div>
					<div>
						<button># Improvement Proposal</button>
					</div>
					<div>
						<button># Grant Program</button>
					</div>
					<div>
						<button># Important Discussion</button>
					</div>
				</div>
				<hr className="mt-3" />

				<div className="pt-6">
					<div className="font-bold text-xl">{`> Proposal 🗳️`}</div>
					<div>
						<button># RFP</button>
					</div>
					<div>
						<button># On-chain voting</button>
					</div>
				</div>
				<hr className="mt-3" />
				<div className="pt-6">
					<div className="font-bold text-xl">
						<button>{`# Analytics 📊`}</button>
					</div>
				</div>
			</SimpleBar>
		</div>
	);
};

export default RightSideUpperComponent;
