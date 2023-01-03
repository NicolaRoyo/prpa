import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { boardReducer } from '../features/boardMembers/boardSlice';
import { partnershipsReducer } from '../features/partnerships/partnershipsSlice';
import { outreachReducer } from '../features/events/outreachSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    partnerships: partnershipsReducer,
    outreach: outreachReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
