import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from "./features/youtube/youtubeSlice"
import viewReducer from "./features/views/viewSlice"

export const store = configureStore({
  reducer: {
    youtube:  youtubeReducer,
    view: viewReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

