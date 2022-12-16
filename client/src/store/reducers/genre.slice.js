import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const genreSlice = createSlice({
  name: '@genre',
  initialState,
  reducers: {
    setGenrePack: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const { setGenrePack } = genreSlice.actions
export const genreReducer = genreSlice.reducer
