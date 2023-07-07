import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface youtubeState {
    videos: Array<{}>
}

const initialState: youtubeState = {
    videos: []
}

export const getVideos = createAsyncThunk<youtubeState, string>("youtube/getvideos", async (name, { rejectWithValue}) => {
    try {
        const res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmoen-O_vRoOlDgf4uHMBTipldhNTgSTg&q=react&part=snippet`,
        })
        console.log(res.data.items[0])
        return res.data
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
})



export default youtubeSlice.reducer;