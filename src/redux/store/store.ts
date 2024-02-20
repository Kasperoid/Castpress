import {configureStore} from "@reduxjs/toolkit";
import navigationSlice from "../slices/navigationSlice";
import playListSlice from "../slices/playListSlice";
import blogPostSlice from "../slices/blogPostSlice";
import teamSlice from "../slices/teamSlice";

const store = configureStore({
    reducer: {
        nav: navigationSlice,
        playList: playListSlice,
        blog: blogPostSlice,
        team: teamSlice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch