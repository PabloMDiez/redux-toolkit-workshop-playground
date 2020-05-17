import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { getDarkMode, toggleDarkMode } from '../store/ui'
import { isLoggedIn, logout } from '../store/user'

import Header from './header'

jest.mock('../store/ui')
jest.mock('../store/user')

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: selector => selector(),
  useDispatch: () => mockDispatch,
}))

describe('Header', () => {
  beforeEach(() => jest.resetAllMocks())

  describe('logout button', () => {
    getDarkMode.mockResolvedValue(false)

    it('should not render the logout button when not logged in', async () => {
      render(<Header />)
      const logoutButton = screen.queryByRole('button', { name: 'Logout' })
      expect(logoutButton).not.toBeInTheDocument()
    })

    it('should render the logout button when logged in', async () => {
      isLoggedIn.mockResolvedValue(true)
      render(<Header />)
      const logoutButton = screen.queryByRole('button', { name: 'Logout' })
      expect(logoutButton).toBeInTheDocument()
    })

    it('clicking the logout button triggers logout action', async () => {
      isLoggedIn.mockResolvedValue(true)
      render(<Header />)
      const logoutButton = screen.queryByRole('button', { name: 'Logout' })

      fireEvent.click(logoutButton)

      expect(mockDispatch).toHaveBeenCalledWith(logout())
    })
  })

  describe('dark mode', function () {
    it.each([
      ['Switch to light mode', true],
      ['Switch to dark mode', false],
    ])(
      'shows the "%s" toggle when darkMode=%s and fires the toggle action',
      (name, darkMode) => {
        getDarkMode.mockResolvedValue(darkMode)

        render(<Header />)
        const toggleDarkModeButton = screen.queryByRole('button')

        expect(toggleDarkModeButton).toBeInTheDocument()

        fireEvent.click(toggleDarkModeButton)

        expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode())
      },
    )
  })
})
