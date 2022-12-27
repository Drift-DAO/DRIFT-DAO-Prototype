import { configureStore } from '@reduxjs/toolkit';
import signerReducer from './slices/signerSlice';
import leftRightReducer from './slices/leftRightSlice';

export default configureStore({
	reducer: {
		signer: signerReducer,
		leftRight: leftRightReducer,
	},
});
