import {createSlice} from "@reduxjs/toolkit";

type NavigationStateType = {
    menuOpen: boolean;
}

const initialState: NavigationStateType = {
    menuOpen: false,
}

const navigationSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        changeMenuOpen(state) {
            state.menuOpen = !state.menuOpen;
        },
    },
});

export const {changeMenuOpen} = navigationSlice.actions;
export default navigationSlice.reducer;