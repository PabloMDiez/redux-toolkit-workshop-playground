import initializeStore from '../index'
import { getCurrentUser, getCurrentUserName, hasLoginError, isLoggedIn, isLoggingIn, login, logout } from './'

describe('store/user', () => {
  beforeEach(jest.clearAllMocks)

  const mockApi = {
    login: jest.fn(),
  }

  describe('user login/logout', () => {
    it('should initially be logged out', () => {
      const { getState } = initializeStore(mockApi)
      expect(isLoggedIn(getState())).toBe(false)
      expect(isLoggingIn(getState())).toBe(false)
      expect(hasLoginError(getState())).toBe(false)
      expect(getCurrentUser(getState())).toBe(null)
    })

    it('should indicate isLoggingIn while doing so', async () => {
      const { dispatch, getState } = initializeStore(mockApi)
      expect(isLoggingIn(getState())).toBe(false)

      dispatch(login.pending())
      expect(isLoggingIn(getState())).toBe(true)
    })

    it('should return current user when login succeeds', async () => {
      const { dispatch, getState } = initializeStore(mockApi)
      const user = {
        name: 'Frank N. Furter',
      }

      mockApi.login.mockResolvedValueOnce(user)

      await dispatch(login({
        username: 'asd',
        password: 'lamba',
      }))

      expect(getCurrentUser(getState())).toBe(user)
      expect(getCurrentUserName(getState())).toBe(user.name)
    })

    it('should remove user state when logging out', () => {
      const { dispatch, getState } = initializeStore(mockApi)
      dispatch(logout())

      expect(isLoggedIn(getState())).toBe(false)
      expect(isLoggingIn(getState())).toBe(false)
      expect(hasLoginError(getState())).toBe(false)
      expect(getCurrentUser(getState())).toBe(null)
    })

    it('should have a error state when login is not fulfilled', () => {
      const { dispatch, getState } = initializeStore(mockApi)
      dispatch(login.rejected())

      expect(isLoggedIn(getState())).toBe(false)
      expect(isLoggingIn(getState())).toBe(false)
      expect(hasLoginError(getState())).toBe(true)
      expect(getCurrentUser(getState())).toBe(null)
    })
  })
})
