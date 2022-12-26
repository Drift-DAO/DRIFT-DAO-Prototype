'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import LoginPage from '../components/loginComponents/LoginPage';

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
			<LoginPage />
		</div>
	);
};

export default login;
