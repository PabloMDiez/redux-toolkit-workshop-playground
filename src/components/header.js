import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Block from './layout/block'

const HeaderBlock = styled(Block)`
  display: flex;
  gap: 8px;
`

const AppTitle = styled.h1`
  flex-grow: 1;
`

const Header = ({ darkMode, isLoggedIn, logout, toggleDarkMode }) => {
  return (
    <HeaderBlock darkMode={darkMode} gridArea='header'>
      <AppTitle>Header here</AppTitle>
      <button onClick={toggleDarkMode}>
        Switch to {darkMode ? 'light' : 'dark'} mode
      </button>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </HeaderBlock>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}

export default Header
