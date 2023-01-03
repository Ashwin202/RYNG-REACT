import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "1",
	userName: "Nithin",
	availability: parseInt(localStorage.getItem("userAvailiabilty") ?? 0),
	callStatus: parseInt(localStorage.getItem("userCallStatus") ?? 0),	
	theme: localStorage.getItem("userMode") != null ? localStorage.getItem("userMode") : `white-content`
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateID: (state, action) => {
			state.id = action.payload;
		},
		updateUserName: (state, action) => {
			state.userName = action.payload;
		},
		updateAvailability: (state, action) => {
			if (action.payload === 1) {
				state.availability = 1;
				localStorage.setItem("userAvailiabilty", 1);
			} 
            else {
				state.availability = 0;
				localStorage.setItem("userAvailiabilty", 0);
			}
		},
		updateCallStatus: (state, action) => {
			if (action.payload === 1) {
				state.callStatus = 1;
				localStorage.setItem("userCallStatus", 1);
			} 
            else {
				state.callStatus = 0;
				localStorage.setItem("userCallStatus", 0);
			}
		},
		updateTheme: (state, action) => {            
			if (action.payload === "white-content") {
				state.theme = "white-content";
				localStorage.setItem("userMode", "white-content");
			} 
            else {
				state.theme = "";
				localStorage.setItem("userMode", "");			
			}
		},
	},
});

export const { updateID, updateUserName, updateAvailability, updateCallStatus, updateTheme } =
	userSlice.actions;
export default userSlice.reducer;
