import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { Youtube } from "./types";

type RequestState = "pending" | "fulfilled" | "rejected"

export interface youtubeState {
    videos: Array<Youtube>,
    showVideo?: Youtube | undefined,
    searchQuery?: string | null
    status: RequestState
}

const initialState: youtubeState = {
    videos: [],
    showVideo: undefined,
    searchQuery: null,
    status: "pending"
}

export const getVideo = createAsyncThunk<Array<Youtube>>("youtube/getvideos", async (action, { rejectWithValue}) => {
    try {
        const res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmoen-O_vRoOlDgf4uHMBTipldhNTgSTg&q=react&part=snippet&maxResults=20`,
        })
        // console.log(res.data.items[0])
        return res.data.items
    } catch (err) {
        console.log("Add Account Error: ", err)
        return rejectWithValue("Error getting bills")
    }
})

export const searchVideos = createAsyncThunk("youtube/searchVideos", async (searchInput: string, thunkAPI) => {
    console.log("Search Input", searchInput)
        const res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmoen-O_vRoOlDgf4uHMBTipldhNTgSTg&q=${searchInput}&part=snippet&maxResults=50`,
        })
        // console.log(res.data.items[0])
        return res.data.items

})

export const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {
        setShowVideo: (state, {payload}) => {
            console.log(payload)
            state.showVideo = payload
        },
        setSearchQuery: (state, {payload}) => {
            state.searchQuery = payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getVideo.pending, state=> {
            state.status = "pending";
        })
        .addCase(getVideo.fulfilled, (state, {payload}) => {
            state.status = "fulfilled";
            state.videos = payload
        })
        .addCase(getVideo.rejected, state=> {
            state.status = "rejected";
        })
        .addCase(searchVideos.pending, state=> {
            state.status = "pending";
        })
        .addCase(searchVideos.fulfilled, (state, {payload}) => {
            state.status = "fulfilled";
            state.videos = payload
        })
        .addCase(searchVideos.rejected, state=> {
            state.status = "rejected";
        })
    }
})

export const {
    setShowVideo,
    setSearchQuery
} = youtubeSlice.actions

export default youtubeSlice.reducer;