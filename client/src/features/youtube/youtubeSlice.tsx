import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Youtube } from "./types";

type RequestState = "pending" | "fulfilled" | "rejected"


export interface youtubeState {
    videos: Array<{}>,
    status: RequestState
}


const initialState: youtubeState = {
    videos: [],
    status: "pending"
}

export const getVideo = createAsyncThunk<Array<Youtube>>("youtube/getvideos", async (action, { rejectWithValue}) => {
    try {
        const res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmoen-O_vRoOlDgf4uHMBTipldhNTgSTg&q=react&part=snippet&maxResults=5`,
        })
        console.log(res.data.items[0])
        return res.data.items
    } catch (err) {
        console.log("Add Account Error: ", err)
        return rejectWithValue("Error getting bills")
    }
})

export const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getVideo.pending, (state, action) => {
            state.status = "pending";
        })
        .addCase(getVideo.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.videos = action.payload
        })
        .addCase(getVideo.rejected, (state, action) => {
            state.status = "rejected";
        })
    }
})



export default youtubeSlice.reducer;