import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'
import * as api from '../config'
import { moviesReducer } from './reducers/movies.slice'
import { genreReducer } from './reducers/genre.slice'
import { filterReducer } from './reducers/filter.slice'

export const store = configureStore({
  reducer: {
    movie: moviesReducer,
    genre: genreReducer,
    filter: filterReducer,
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
