import { createSelector, createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
    },
  },
})

export const toggleDarkMode = () => uiSlice.actions.toggleDarkMode()

const getUiDomain = state => state.ui

export const getDarkMode = createSelector(getUiDomain, state => state.darkMode)

export default uiSlice.reducer
