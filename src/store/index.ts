import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '../apis/baseApi';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
