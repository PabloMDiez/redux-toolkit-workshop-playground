import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// Tasks:
// - Import our reducers here
// - Bonus: configure API as thunk's extraArguments

const rootReducer = combineReducers({})

const initializeStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export default initializeStore
