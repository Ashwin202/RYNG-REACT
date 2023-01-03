import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "1",
	userName: "Nithin",
    registeredState : JSON.parse(localStorage.getItem("registeredState") ?? false)
};

const WebrtcSlice = createSlice({
	name: "webrtc",
	initialState,
	reducers: {
		updateID: (state, action) => {
			state.id = action.payload;
		},
		updateRegisteredState: (state, action) => {
			state.registeredState = action.payload;
            localStorage.registeredState = action.payload;
		},
		
	},
});

export const { updateID, updateRegisteredState } = WebrtcSlice.actions;
export default WebrtcSlice.reducer;
