import { createSlice } from "@reduxjs/toolkit";

interface viewState {
    view: String
}

const initialState: viewState = {
    view: "Main"
}

export const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        changeViewMain: (state) => {
            state.view = "Main";
        },
        changeViewSettings: (state) => {
            state.view = "Settings";
        }
    }
})

export const {
    changeViewMain,
    changeViewSettings
} = viewSlice.actions

export default viewSlice.reducer;