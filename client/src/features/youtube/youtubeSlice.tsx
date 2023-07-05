import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface youtubeState {
    videos: Array<{}>
}

const initialState: youtubeState = {
    videos: []
}

export const getVideos = createAsyncThunk("youtube/getvideos", (payload, thunkAPI) => {
    
})

export const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {

    }
})

export default youtubeSlice.reducer;