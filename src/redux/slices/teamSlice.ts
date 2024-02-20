import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Statuses} from "../../types";
import axios from "axios";

export const teamSliceFetch = createAsyncThunk<TeamType[], undefined, {rejectValue: string}>(
    'teamSlice/fetch',
    async function (_, {rejectWithValue}) {
        try {
            const resolve = await axios({
                url: 'http://195.133.147.188/public/castpress/teamMembers',
                method: 'GET'
            })
            const data = await resolve.data;
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


type TeamType = {
    id: number;
    img: string;
    desc: string;
    name: string;
    position: string;
}

type TeamStateType = {
    teamError: undefined | string;
    teamStatus: Statuses;
    team: TeamType[];
}

const initialState: TeamStateType = {
    teamError: undefined,
    teamStatus: Statuses.pending,
    team: [],
}

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(teamSliceFetch.pending, (state) => {
            state.teamStatus = Statuses.pending;
        })
        builder.addCase(teamSliceFetch.fulfilled, (state, action) => {
            state.teamStatus = Statuses.fulfilled;
            state.team = action.payload;
        })
        builder.addCase(teamSliceFetch.rejected, (state, action) => {
            state.teamStatus = Statuses.rejected;
            state.teamError = action.payload;
        })
    }
})

export default teamSlice.reducer