import { createSelector, createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, payload) => state.darkMode = !!payload,
  },
})

export const { setDarkMode } = uiSlice.actions

const getUiDomain = state => state.ui

export const getDarkMode = createSelector(getUiDomain, state => state.darkMode)

export default uiSlice.reducer
