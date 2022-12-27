import { createSlice } from '@reduxjs/toolkit';

const leftRightSlice = createSlice({
	name: 'leftRightSlice',

	initialState: {
		leftSide: 'home',
        rightSide:'announcement'
	},

	reducers: {
		changeLeftSide: (state, action) => {
			state.leftSide = action.payload;
		},

		changeRightSide: (state, action) => {
			state.rightSide = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeLeftSide, changeRightSide } = leftRightSlice.actions;
// this reducer will be passed in store's 'reducer' key
export default leftRightSlice.reducer;
