import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as useUntypedDispatch, useSelector as useUntypedSelector } from 'react-redux';

import { appReducer } from '@/redux/reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useDispatch = () => useUntypedDispatch<typeof store.dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;
