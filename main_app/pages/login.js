'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const login = () => {
	const router = useRouter();
	const mySigner = useSelector((state) => state.signer.mySigner);

	useEffect(() => {
		if (mySigner !== '') {
			router.push('/');
		}
	}, []);

	return (
		<div>
			<div>login</div>
			<div>my signer: {mySigner}</div>
		</div>
	);
};

export default login;
