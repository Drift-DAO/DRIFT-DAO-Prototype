'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const index = () => {
  const myrouter = useRouter();
  const mySigner = useSelector((state) => state.signer.mySigner);

  useEffect(() => {
    if (mySigner === '') {
      myrouter.replace('/login');
    }
  }, []);

  return (
    <div>
      <div>Hello world</div>
      <div>my signer is : {mySigner}</div>
    </div>
  );
};

export default index;
