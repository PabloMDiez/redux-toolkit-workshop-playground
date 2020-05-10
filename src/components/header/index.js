import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Block from '../layout/block'

const HeaderBlock = styled(Block)`
  display: flex;
`

const AppTitle = styled.h1`
  flex-grow: 1;
`

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <HeaderBlock
      darkMode={darkMode}
      gridArea='header'
    >
      <AppTitle>Header here</AppTitle>
      <button onClick={toggleDarkMode}>Switch to {darkMode ? 'light' : 'dark'} mode</button>
    </HeaderBlock>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}

export default Header
