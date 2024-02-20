import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentType, Statuses} from "../../types";
import axios from "axios";

export const blogPostFetch = createAsyncThunk<PostType[], undefined, {rejectValue: string}>(
    'blogPost/fetch',
    async function(_, {rejectWithValue}) {
        try {
            const response = await axios({
                url: 'http://195.133.147.188/public/castpress/posts',
                method: 'GET',
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

type PostType = {
    id: number;
    img: string;
    name: string;
    dateCreated: string;
    author: string;
    someInfo: string;
    title: string;
    mainText: string;
    tags: string[];
    comments: CommentType[];
}

type BlogPostStateType = {
    posts: PostType[];
    postsError: string | undefined;
    postsStatus: Statuses;
    pageSelected: number;
    selectedPost: PostType | null;
}

const initialState: BlogPostStateType = {
    posts: [],
    postsError: '',
    postsStatus: Statuses.pending,
    pageSelected: Number(sessionStorage.getItem('postPageSelect')) || 1,
    selectedPost: JSON.parse(sessionStorage.getItem('selectedPost') || '{}'),
}

const blogPostSlice = createSlice({
    name: 'blogPost',
    initialState,
    reducers: {
        changePageSelected(state, action:PayloadAction<number>) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            state.pageSelected = action.payload;
            sessionStorage.setItem('postPageSelect', String(action.payload));
        },
        selectPost(state, action:PayloadAction<number>){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            state.selectedPost = state.posts.filter(post => post.id === action.payload)[0];
            state.pageSelected = 1;
            sessionStorage.setItem('selectedPost', JSON.stringify(state.posts.filter(post => post.id === action.payload)[0]));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(blogPostFetch.pending, (state) => {
            state.postsStatus = Statuses.pending;
        })
        builder.addCase(blogPostFetch.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.postsStatus = Statuses.fulfilled;
        })
        builder.addCase(blogPostFetch.rejected, (state, action) => {
            state.postsStatus = Statuses.rejected;
            state.postsError = action.payload;
        })
    }
})

export const {changePageSelected, selectPost} = blogPostSlice.actions;
export default blogPostSlice.reducer