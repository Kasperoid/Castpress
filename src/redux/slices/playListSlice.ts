import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentType, Statuses} from "../../types";
import axios from "axios";

export const playListFetch = createAsyncThunk<PlayListType[], undefined, {rejectValue: string}>(
    'playList/fetch',
    async function(_, {rejectWithValue}) {
        try {
            const response = await axios({
                url: 'http://195.133.147.188/public/castpress/playLists',
                method: 'GET'
            })
            const data = await response.data;
            return data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                rejectWithValue(error.message)
            } else {
                error instanceof Error && rejectWithValue(error.message);
            }
        }
    }
)

type PlayListType = {
    id: number;
    new: boolean;
    img: string;
    author: string;
    dateCreated: string;
    category: string;
    epNumber: string;
    title: string;
    someInfo: string;
    themeTitle: string;
    themeText: string;
    podcastMinutes: string;
    podcastTranscr: string;
    tags: string[];
    comments: CommentType[];
}

type PlayListStateType = {
    playListStatus: Statuses,
    playListError: undefined | string;
    playLists: PlayListType[],
    playPage: number,
    visibleEpisode: PlayListType | null,
    transciptOpen: boolean,
}

const initialState: PlayListStateType = {
    playListStatus: Statuses.pending,
    playListError: undefined,
    playLists: [],
    playPage: Number(sessionStorage.getItem('playPage')) || 1,
    visibleEpisode: JSON.parse(sessionStorage.getItem('visibleEpisode') || '{}'),
    transciptOpen: false,
}

const playListSlice = createSlice({
    name: 'playList',
    initialState,
    reducers: {
        changePlayPage(state, action: PayloadAction<number>) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            state.playPage = action.payload;
            sessionStorage.setItem('playPage', String(action.payload));
        },
        changeVisibleEpisode(state, action: PayloadAction<number>) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            state.visibleEpisode = state.playLists.filter(episode => episode.id === action.payload)[0];
            state.playPage = 1;
            sessionStorage.setItem('visibleEpisode', JSON.stringify(state.playLists.filter(episode => episode.id === action.payload)[0]))
        },
        changeTransctiptOpen(state) {
            state.transciptOpen = !state.transciptOpen
        }
    },
    extraReducers: (builder) => {
        builder.addCase(playListFetch.pending, (state) => {
            state.playListStatus = Statuses.pending;
        })
        builder.addCase(playListFetch.fulfilled, (state, action) => {
            state.playListStatus = Statuses.fulfilled;
            state.playLists = action.payload;
        })
        builder.addCase(playListFetch.rejected, (state, action) => {
            state.playListStatus = Statuses.rejected;
            state.playListError = action.payload;
        })
    }
});

export const {changePlayPage, changeVisibleEpisode, changeTransctiptOpen} = playListSlice.actions;

export default playListSlice.reducer