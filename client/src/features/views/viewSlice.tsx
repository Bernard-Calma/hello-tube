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
        changeView: (state, {payload}) => {
            console.log(payload);
            state.view = payload;
        }
    }
})

export const {

} = viewSlice.actions

export default viewSlice.reducer;