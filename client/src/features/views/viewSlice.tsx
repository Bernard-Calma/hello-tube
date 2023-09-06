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
        },
        changeViewSearch: (state) => {
            state.view = "Search"
        }
    }
})

export const {
    changeViewMain,
    changeViewSettings,
    changeViewSearch
} = viewSlice.actions

export default viewSlice.reducer;