import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from './authSlice'

const store = configureStore({
    reducer:{
        authentication:LoginReducer
    }
})

export default store