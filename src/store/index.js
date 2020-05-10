import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import ui from './ui'

const rootReducer = combineReducers({
  ui,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
