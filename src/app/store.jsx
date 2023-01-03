import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice';
import counter from '../features/counter/CounterSlice';
import webrtc from '../features/webrtcState/WebrtcSlice';


export const store = configureStore ({
 reducer :{
    user : userReducer,
    counter : counter,
    webrtc : webrtc
 }  
})

export default store