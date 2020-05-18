import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getDarkMode, toggleDarkMode } from '../store/ui'
import { isLoggedIn, logout } from '../store/user'

import Block from './layout/block'

const HeaderBlock = styled(Block)`
  display: flex;
  gap: 8px;
`

const AppTitle = styled.h1`
  flex-grow: 1;
`

const Header = () => {
  const darkMode = useSelector(getDarkMode)
  const loggedIn = useSelector(isLoggedIn)

  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  const handleToggleDarkMode = () => dispatch(toggleDarkMode())

  return (
    <HeaderBlock darkMode={darkMode} gridArea='header'>
      <AppTitle>Header here</AppTitle>
      <button onClick={handleToggleDarkMode}>
        Switch to {darkMode ? 'light' : 'dark'} mode
      </button>
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </HeaderBlock>
  )
}

export default Header
