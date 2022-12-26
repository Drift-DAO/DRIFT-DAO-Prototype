import { configureStore } from '@reduxjs/toolkit';
import signerReducer from './slices/signerSlice';

export default configureStore({
	reducer: {
		signer: signerReducer,
	},
});
