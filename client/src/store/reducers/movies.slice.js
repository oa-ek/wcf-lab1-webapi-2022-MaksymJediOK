import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadMovieData = createAsyncThunk(
  '@@Movies/loading',
  async (_, { extra: { client, api } }) => {
    return client.get(api.getAllGenres)
  }
)

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const moviesSlice = createSlice({
  name: '@@Movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovieData.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadMovieData.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || 'error '
      })
      .addCase(loadMovieData.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
  },
})

export const moviesReducer = moviesSlice.reducer
