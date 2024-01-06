import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

export const userSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.removeUser = null;
        }
    }
});

export const {setUser,removeUser} = userSlice.actions;

export default userSlice.reducer;