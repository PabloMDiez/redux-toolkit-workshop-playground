import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import ui from './ui'
import user from './user'

const rootReducer = combineReducers({
  ui,
  user,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
