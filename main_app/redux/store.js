import { configureStore } from '@reduxjs/toolkit';
import signerReducer from './slices/signerSlice';
import leftRightReducer from './slices/leftRightSlice';
import chatRoomReducer from './slices/chatRoomSlice';
import refreshPageReducer from './slices/refreshPageSlice';

export default configureStore({
	reducer: {
		signer: signerReducer,
		leftRight: leftRightReducer,
		inputValue: chatRoomReducer,
		refreshPage: refreshPageReducer,
	},
});
