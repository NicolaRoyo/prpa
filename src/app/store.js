import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { boardReducer } from '../features/boardMembers/boardSlice';
import { partnershipsReducer } from '../features/partnerships/partnershipsSlice';
import { eventOutreachReducer } from '../features/events/eventOutreachSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    partnerships: partnershipsReducer,
    eventOutreach: eventOutreachReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
