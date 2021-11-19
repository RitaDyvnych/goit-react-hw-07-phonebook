import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactSlice, { filterReducer } from './reducers';


const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;