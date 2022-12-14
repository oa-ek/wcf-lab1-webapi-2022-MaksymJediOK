import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import * as api from '../config'
import { moviesReducer } from './reducers/movies.slice'

export const store = configureStore({
  reducer: {
    moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
  devTools: true,
})
