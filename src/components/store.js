import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'useReducer',
    initialState: {
        teams: ['arsenal', 'team01', 'team02', 'team03', 'team04', 'team05', 'team06', 'MU']
    },
    reducers: {
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })