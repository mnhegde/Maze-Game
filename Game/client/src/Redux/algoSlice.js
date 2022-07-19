import { createSlice } from "@reduxjs/toolkit";

export const algoSlice = createSlice({
    name: "algo",
    initialState: {
        value: 0
    },
    reducers:{
        setAlgo: (state,val)=>{
            state.value = val
        }
    }
})

export const {setAlgo} = algoSlice.actions

export default algoSlice.reducer