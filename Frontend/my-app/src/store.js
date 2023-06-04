import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TestSlice from "./features/TestSlice";


const reducer= combineReducers({
    test: TestSlice
})

const store=configureStore({
   reducer
})

export default store;