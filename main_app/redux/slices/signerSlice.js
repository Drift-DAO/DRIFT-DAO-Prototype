import { createSlice } from '@reduxjs/toolkit';

const signerSlice = createSlice({
	name: 'mySigner',

	initialState: {
		mySigner: '',
	},

	reducers: {
		changeSigner: (state, action) => {
			state.mySigner = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeSigner } = signerSlice.actions;
// this reducer will be passed in store's 'reducer' key
export default signerSlice.reducer;
