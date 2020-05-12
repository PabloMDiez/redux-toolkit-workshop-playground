import initializeStore from '../'

import { getDarkMode, toggleDarkMode } from './'

describe('store/ui', () => {
  describe('darkMode', () => {
    it(`getDarkMode should initially return false`, () => {
      const { getState } = initializeStore()
      expect(getDarkMode(getState())).toBe(false)
    })

    it(`toggleDarkMode should switch the current status`, () => {
      const { dispatch, getState } = initializeStore()
      dispatch(toggleDarkMode())
      expect(getDarkMode(getState())).toBe(true)
    })
  })
})
