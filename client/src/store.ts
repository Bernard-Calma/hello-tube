import { configureStore } from '@reduxjs/toolkit'
import youtubeRducer from "./features/youtube/youtubeSlice"

export const store = configureStore({
  reducer: {
    youtube:  youtubeRducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

