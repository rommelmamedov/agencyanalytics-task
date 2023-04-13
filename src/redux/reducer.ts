import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from './store';
import { ActiveTab, AppReducerState } from '../types';

const selectApp = (state: RootState) => state.app;
const setActiveTab = createAction<ActiveTab>('app/setActiveTab');
// NOTE: Using createAsyncThunk to handle async actions with side effects.
const loadImages = createAsyncThunk('image/load', async () => {
  const response = await fetch('https://agencyanalytics-api.vercel.app/images.json');
  const images = await response.json();

  // const sortedAndFilteredData = images
  //   ?.sort((a, b) => {
  //     if (a.createdAt < b.createdAt) return 1;
  //     if (a.createdAt > b.createdAt) return -1;
  //     return 0;
  //   })
  //   .filter(({ favorited }) => (activeTab === 'favorite' ? favorited : true));

  return images;
});

const initialState: AppReducerState = {
  activeTab: 'tab-recent',
  images: [],
  isLoading: false,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(setActiveTab, (state, { payload }) => {
      state.activeTab = payload;
    })
    .addCase(loadImages.pending, state => {
      state.isLoading = true;
    })
    .addCase(loadImages.fulfilled, (state, { payload }) => {
      state.images = payload;
      state.isLoading = false;
    })
    .addCase(loadImages.rejected, state => {
      state.isLoading = false;
    });
});

export { appReducer, setActiveTab, loadImages, selectApp };
