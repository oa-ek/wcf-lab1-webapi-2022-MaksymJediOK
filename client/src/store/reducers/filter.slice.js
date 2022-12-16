import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search : ''
}

const filterSlice = createSlice({
  name: '@filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const filterReducer = filterSlice.reducer
export const { setSearch } = filterSlice.actions
