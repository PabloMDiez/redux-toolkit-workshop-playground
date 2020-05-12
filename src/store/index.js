import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import ui from './ui'
import user from './user'

const rootReducer = combineReducers({
  [ui.name]: ui.reducer,
  [user.name]: user.reducer,
})

const initializeStore = api =>
  configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        thunk: {
          extraArgument: { API: api },
        },
      }),
    ],
  })

export default initializeStore
