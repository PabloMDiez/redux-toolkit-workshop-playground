import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Header from './header'

jest.mock('../store/ui')
jest.mock('../store/user')

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: selector => selector(),
  useDispatch: () => mockDispatch,
}))

const mockSelectors = ({
  darkMode,
  loggedIn,
}) => ({
  getDarkMode: () => darkMode || false,
  isLoggedIn: () => loggedIn || false,
})

describe('Header', () => {
  beforeEach(() => jest.resetAllMocks())

  describe('logout button', () => {
    it('should not render the logout button when not logged in', async () => {
      render(<Header {...mockSelectors({ loggedIn: false })}/>)
      const logoutButton = screen.queryByRole('button', { name: 'Logout' })
      expect(logoutButton).not.toBeInTheDocument()
    })

    it('should render the logout button when logged in', async () => {
      render(<Header {...mockSelectors({ loggedIn: true })}/>)
      const logoutButton = screen.queryByRole('button', { name: 'Logout' })
      expect(logoutButton).toBeInTheDocument()
    })

    it('clicking the logout button triggers logout action', async () => {
      const logout = jest.fn()
      render(<Header {...mockSelectors({ loggedIn: true })} logout={logout} />)
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
        const toggleDarkMode = jest.fn()
        render(<Header {...mockSelectors({ darkMode })} toggleDarkMode={toggleDarkMode} />)
        const toggleDarkModeButton = screen.queryByRole('button')

        expect(toggleDarkModeButton).toBeInTheDocument()

        fireEvent.click(toggleDarkModeButton)

        expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode())
      },
    )
  })
})
