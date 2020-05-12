import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk('users/login',
  async ({ username, password }, { extra: { API } }) => API.login({ username, password }))

const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: false,
    loading: false,
    currentUser: null,
  },
  reducers: {
    logout: state => {
      state.loading = false
      state.error = false
      state.currentUser = null
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.loading = true
    },
    [login.rejected]: state => {
      state.loading = false
      state.error = true
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.error = false
      state.currentUser = payload
    },
  }
})

const getUserDomain = state => state[userSlice.name]

export const getCurrentUser = createSelector(getUserDomain, state => state.currentUser)
export const isLoggingIn = createSelector(getUserDomain, ({ loading }) => loading)
export const hasLoginError = createSelector(getUserDomain, ({ error }) => error)

export const getCurrentUserName = createSelector(getCurrentUser, user => user.name)
export const isLoggedIn = createSelector(getCurrentUser, user => !!user)

export const logout = () => userSlice.actions.logout()

export default userSlice
