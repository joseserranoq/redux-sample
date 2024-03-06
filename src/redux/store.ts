import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice/counterSlice'

export const store = configureStore({
    reducer: { 
        counter: counterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//permite realizar las llamadas asincronas
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
