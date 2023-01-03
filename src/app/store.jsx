import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice';
import counter from '../features/counter/CounterSlice';


export const store = configureStore ({
 reducer :{
    user : userReducer,
    counter : counter,
 }  
})

export default store