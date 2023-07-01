import { createSlice } from '@reduxjs/toolkit'


const slice =createSlice({
    name: 'useData',
    initialState: {},
    reducers: {
        setUserData: (state, action) => {
            state = action.payload
            return state;
        },
    },
})

export const { setUserData } = slice.actions;

export default slice.reducer;