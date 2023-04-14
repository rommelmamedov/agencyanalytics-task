import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';
import { ActiveTab, AppReducerState, AsideProps, Image } from '@/types';

//* Selectors
const selectApp = (state: RootState) => state.app;
const selectActiveTab = (state: RootState) => state.app.activeTab;
const selectActiveImage = (state: RootState) => state.app.asideProps.activeImage;
const selectIsAsideOpen = (state: RootState) => state.app.asideProps.isAsideOpen;
//* Actions
const setActiveTab = createAction<ActiveTab>('app/setActiveTab');
const setDeleteImage = createAction<string>('app/setDeleteImage');
const setAsideProps = createAction<AsideProps>('app/setAsideProps');
const setImageAsFavorited = createAction<string>('app/setImageAsFavorited');
//* Thunks
// NOTE: Using createAsyncThunk to handle async actions with side effects.
const loadImages = createAsyncThunk('image/load', async () => {
  const response = await fetch('https://agencyanalytics-api.vercel.app/images.json');
  const images: Image[] = await response.json();
  const sortedImages = images.sort(
    (first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime(),
  );
  return sortedImages;
});

const initialState: AppReducerState = {
  asideProps: {
    activeImage: null,
    isAsideOpen: false,
  },
  activeTab: 'tab-recent',
  images: [],
  isLoading: false,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(setActiveTab, (state, { payload }) => {
      state.activeTab = payload;
    })
    .addCase(setAsideProps, (state, { payload }) => {
      state.asideProps = payload;
    })
    .addCase(setDeleteImage, (state, { payload }) => {
      state.images = state.images.filter(image => image.id !== payload);
      state.asideProps.activeImage = null;
      state.asideProps.isAsideOpen = false;
    })
    .addCase(setImageAsFavorited, (state, { payload }) => {
      if (state.asideProps.activeImage) {
        state.asideProps.activeImage.favorited = !state.asideProps.activeImage.favorited;
      }

      state.images = state.images.map(image =>
        image.id === payload ? { ...image, favorited: !image.favorited } : image,
      );
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

export {
  appReducer,
  loadImages,
  selectActiveImage,
  selectApp,
  selectActiveTab,
  selectIsAsideOpen,
  setActiveTab,
  setAsideProps,
  setDeleteImage,
  setImageAsFavorited,
};
