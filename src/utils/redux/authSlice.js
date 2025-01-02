import { createSlice} from "@reduxjs/toolkit";

const initialState={
    isAuthenticate:false,
    userToken:''
}

const loginSlice = createSlice({
    name:'Authentication',
    initialState,
    reducers:{
        storeToken:(state)=>{
            state.isAuthenticate=true,
            state.userToken=state.payload

        },
        clearToken:(state)=>{
            state.isAuthenticate=false,
            state.userToken=''
        }
    }

})

export const {storeToken,clearToken} = loginSlice.actions;
export default loginSlice.reducer