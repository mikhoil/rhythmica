import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createPlayListReducer from './slices/createPlayListSlice';

const rootReducer = combineReducers({ createPlayListReducer });

export const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
