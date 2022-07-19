import { configureStore } from '@reduxjs/toolkit';
import algoReducer from "./algoSlice"
export default configureStore({
    reducer:{
        algo: algoReducer,
    },
})