import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';
import { ActiveTab, AppReducerState, Image } from '@/types';

const selectApp = (state: RootState) => state.app;
const selectActiveImage = (state: RootState) => state.app.activeImage;
const setActiveTab = createAction<ActiveTab>('app/setActiveTab');
const setImageAsFavorited = createAction<string>('app/setImageAsFavorited');
// NOTE: Using createAsyncThunk to handle async actions with side effects.
const loadImages = createAsyncThunk('image/load', async () => {
  const response = await fetch('https://agencyanalytics-api.vercel.app/images.json');
  const images: Image[] = await response.json();
  const sortedImages = images.sort(
    (first, second) => new Date(first.createdAt).getTime() - new Date(second.createdAt).getTime(),
  );
  return sortedImages;
});

const initialState: AppReducerState = {
  activeTab: 'tab-recent',
  activeImage: null,
  images: [],
  isLoading: false,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(setActiveTab, (state, { payload }) => {
      state.activeTab = payload;
    })
    .addCase(setImageAsFavorited, (state, { payload }) => {
      state.images = state.images.map(image =>
        image.id === payload ? { ...image, favorited: !image.favorited } : image,
      );
    })
    .addCase(loadImages.pending, state => {
      state.isLoading = true;
    })
    .addCase(loadImages.fulfilled, (state, { payload }) => {
      state.images = payload;
      state.activeImage = payload[0];
      state.isLoading = false;
    })
    .addCase(loadImages.rejected, state => {
      state.isLoading = false;
    });
});

export { appReducer, setActiveTab, loadImages, selectApp, selectActiveImage, setImageAsFavorited };
