import { configureStore } from '@reduxjs/toolkit';

import memberSlice from './slices/memberSlice';

export const store = configureStore({
  reducer: {
    member: memberSlice,
  }
});