import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Youtube } from "./types";

export interface youtubeState {
    videos: Array<{}>
}

type RequestState = "pending" | "fulfilled" | "rejected"

export const getVideo = createAsyncThunk<Youtube, string>("youtube/getvideos", async (action, { rejectWithValue}) => {
    try {
        const res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmoen-O_vRoOlDgf4uHMBTipldhNTgSTg&q=react&part=snippet&maxResults=5`,
        })
        console.log(res.data.items[0])
        return res.data.items[0]
    } catch (err) {
        console.log("Add Account Error: ", err)
        return rejectWithValue("Error getting bills")
    }
})

export const youtubeSlice = createSlice({
    name: "youtube",
    initialState: {
        data: {} as Youtube,
        statusByName: {} as Record<string, RequestState | undefined>
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getVideo.pending, (state, action) => {
            state.statusByName[action.meta.arg] = "pending";
        })
        .addCase(getVideo.fulfilled, (state, action) => {
            state.statusByName[action.meta.arg] = "fulfilled";
            state.data = action.payload
        })
        .addCase(getVideo.rejected, (state, action) => {
            state.statusByName[action.meta.arg] = "rejected";
        })
    }
})



export default youtubeSlice.reducer;